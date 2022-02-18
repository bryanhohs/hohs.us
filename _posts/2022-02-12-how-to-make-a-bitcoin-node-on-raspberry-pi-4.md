---
layout: post
title: How To Make A Bitcoin Node On Raspberry Pi 4
category: blog
tags:
  - bitcoin
  - node
  - rpi
date: '2022-02-12'
---
I've tried several different systems for my Bitcoin node and they all lead to issues with being hacked. In this tutorial we will be installing Bitcoin on OpenBSD 7.0. If you're not a Unix savvy person Docker might do the trick, but that's another story. This is a more advanced tutorial. It's not recommended for beginners. I'm not walking through the entire install. If you get lost throughout the tutorial, openbsd.org has plenty of documentation on their faq.

The shopping list!

1. Raspberry Pi 4 [link](https://www.adafruit.com/product/4295)
2. Raspberry Pi 4 Shell [link](https://www.adafruit.com/product/4340)
3. Raspberry Pi 4 USB-C AC Adapter [link](https://www.adafruit.com/product/4298)
4. External SSD Enclosure [link](https://www.newegg.com/sabrent-ec-uasp-others/p/2WA-001J-00010)
5. 1TB SSD [link](https://www.newegg.com/crucial-bx500-1tb/p/N82E16820156231)
6. 4GB SD Card [link](https://www.newegg.com/sandisk-4gb-microsdhc/p/0DF-0005-016B8)

This part requires the installation of the Raspberry Pi 4 UEFI firmware. You can reference my previous tutorial for the basic [instructions](https://hohs.us/posts/how-to-install-raspberry-pi-4-uefi-firmware). Install the firmware to the 4GB SD card and boot into the UEFI setup. 

First disable the 3GB limit\
Device Manager -> Raspberry Pi Configuration -> Advanced Configuration ->\
Limit RAM to 3 GB: Disabled\
Make sure your system table is set for Devicetree\
System Table Selection: Devicetree

Verify your uSD/eMMC is set to *eMMC2 SDHCI*\
Device Manager -> Raspberry Pi Configuration -> SD/MMC Configuration ->\
uSD/eMMC Routing: eMMC2 SDHCI

Save the above with F10 and Reset.

Next you need to flash the miniroot install to a USB stick or flash directly to your SSD. I used my 4GB USB stick. Boot into the miniroot disk and install OpenBSD. Make sure you dedicate at least 90% of your disk to Bitcoin. If I remember correctly you'll have to either add an additional partition or relabel your /home directory with the remainder of your disk space. You can download the miniroot70.img [here](https://mirrors.ocf.berkeley.edu/pub/OpenBSD/7.0/arm64/miniroot70.img).

This part will assume you created a user named "Pi" and the Bitcoin directory is located at "/home/pi/bitcoin". Make sure your disk is partitioned properly. If you plan to install elsewhere ad lib the instructions to fit your install.

Save yourself the hassle of working on the console and enable sshd. Boot up OpenBSD and log into your shell.

```
bryan ~ ₿ _ln 
bryan@10.8.0.108's password: 
Last login: Fri Feb 11 02:50:23 2022 from 10.8.0.100
OpenBSD 7.0 (GENERIC.MP) #3: Wed Dec 15 13:14:20 MST 2021

                                 WELCOME

                                    2 
    .___    .___ ._____  .___.__  _____._.______  .___ .______  ._____         
    |   |   : __|:_ ___\ :   |  \ \__ _:|:      \ : __|:      \ :_ ___\ 
    |   |   | : ||   |___|   :   |  |  :||       || : ||       ||   |___
    |   |/\ |   ||   /  ||   .   |  |   ||   |   ||   ||   |   ||   /  |
    |   /  \|   ||. __  ||___|   |  |   ||___|   ||   ||___|   ||. __  |
    |______/|___| :/ |. |    |___|  |___|    |___||___|    |___| :/ |. |
              :   :/                                         :   :/ 
                  :                                              :  
                               ln.dxv.network


ln$ su
ln# export PKG_PATH=https://ftp.usa.openbsd.org/pub/OpenBSD/7.0/packages/aarch64/
ln# pkg_add bitcoin-0.21.1p0-no_x11
ln# rcctl enable bitcoind
ln#
```

This will install the daemon without X11 support and enable Bitcoin to start at boot. We wont be needing the Qt client. If you want to get creative and install Xenocara be my guest. It will just address another security issue.

Next we need to modify /etc/rc.d/bitcoind to reflect our Bitcoin directory. Assuming you are still root edit the file as followed.

```
ln# vi /etc/rc.d/bitcoind
#!/bin/ksh
#
# $OpenBSD: bitcoind.rc,v 1.2 2018/07/15 22:03:50 bentley Exp $

daemon="/usr/local/bin/bitcoind"
daemon_timeout="300"
daemon_user="_bitcoind"
data_dir="/home/pi/bitcoin"
daemon_flags="-daemon -conf=/etc/bitcoin.conf -datadir=${data_dir}"

. /etc/rc.d/rc.subr

rc_reload=NO


rc_cmd $1
```

Save and exit. Next we need to create our rpc credentials. Make sure you have python installed as well. If not, "pkg_add python3" and continue on to the next step.

```
ln# cd /usr/local/share/bitcoin
ln# python3 rpcauth.py pi CHANGETHISORYOUWILLBEHACKED
String to be appended to bitcoin.conf:
rpcauth=pi:3f944b594755c3f31a1982a9361dab13$0f00999352dbbdc6f8209614d7d89878f506e17014b569f4a68c39c903069470
Your password:
CHANGETHISORYOUWILLBEHACKED
ln#
```

Save these credentials you will need them in the next step.

```
ln# vi /etc/bitcoin.conf
# bitcoind
chain=main
listen=1
onlynet=ipv4
bind=127.0.0.1

# rpc
rpcbind=127.0.0.1
rpcallowip=127.0.0.1
rpcauth=pi:3f944b594755c3f31a1982a9361dab13$0f00999352dbbdc6f8209614d7d89878f506e17014b569f4a68c39c903069470
rpcworkqueue=64

# zmq
zmqpubrawblock=tcp://127.0.0.1:28332
zmqpubrawtx=tcp://127.0.0.1:28333

# network
upnp=0
maxconnections=50
maxuploadtarget=1024

# database
txindex=1
dbcache=1024
debuglogfile=/var/log/bitcoind.log
```

Save and exit.

We are pretty much ready to go. You might want to create the bitcoin directory manually and create the log file just in case. The daemon might change the owner to the _bitcoind user. Don't panic, you can always su to root if needed.

```
ln# cd /home/pi
ln# mkdir bitcoin
ln# touch /var/log/bitcoind.log && chmod 600 /var/log/bitcoind.log
ln# rcctl start bitcoind
bitcoind(ok)
ln#
```

The initial sync of the blockchain can take days, sometimes weeks. If everything went well you should see activity in your logs.

```
ln# tail /var/log/bitcoind.log
2022-02-12T18:32:47Z Pre-allocating up to position 0xc00000 in rev02921.dat
2022-02-12T18:32:48Z UpdateTip: new best=000000000000000000037e74b67bab7d8bdf80d981477556a3df0df0356a738d height=722973 version=0x37ffe004 log2_work=93.343040 tx=710153451 date='2022-02-12T18:32:22Z' progress=1.000000 cache=166.2MiB(1252367txo)
2022-02-12T18:37:37Z UpdateTip: new best=00000000000000000007ce5061c1dd0a748e23a29df331fbcb157356e889bfbb height=722974 version=0x20000000 log2_work=93.343053 tx=710155962 date='2022-02-12T18:37:13Z' progress=1.000000 cache=166.7MiB(1256510txo)
2022-02-12T18:37:52Z UpdateTip: new best=000000000000000000071d9a1f8cdb45295358bba54c842e6c4487c6c7fd5a12 height=722975 version=0x20000004 log2_work=93.343066 tx=710156262 date='2022-02-12T18:37:36Z' progress=1.000000 cache=167.2MiB(1259965txo)
2022-02-12T18:40:06Z Pre-allocating up to position 0x6000000 in blk02921.dat
2022-02-12T18:40:10Z UpdateTip: new best=00000000000000000002a465669522ab86b5eae4090744a2c8495145fcc88b8f height=722976 version=0x20004004 log2_work=93.343080 tx=710156505 date='2022-02-12T18:38:02Z' progress=1.000000 cache=168.2MiB(1268563txo)
2022-02-12T18:42:55Z Pre-allocating up to position 0xd00000 in rev02921.dat
2022-02-12T18:42:55Z UpdateTip: new best=000000000000000000038b18586ac1f41871c3e9aa74479a02c1534cb8773068 height=722977 version=0x20c00004 log2_work=93.343093 tx=710157453 date='2022-02-12T18:42:36Z' progress=1.000000 cache=168.6MiB(1271424txo)
2022-02-12T18:54:34Z UpdateTip: new best=000000000000000000008247706babc85ccbc98fb19eb3478f2211c9b7fb99b2 height=722978 version=0x20008000 log2_work=93.343106 tx=710159573 date='2022-02-12T18:53:45Z' progress=1.000000 cache=169.3MiB(1277201txo)
2022-02-12T19:13:24Z UpdateTip: new best=00000000000000000006cbdf1a5d55d6c81add8068c66e09e39d4205563eba80 height=722979 version=0x20004000 log2_work=93.343119 tx=710162012 date='2022-02-12T19:12:31Z' progress=1.000000 cache=170.1MiB(1283961txo)
ln# 
```

That's it, the Bitcoin node is complete. Keep your eyes peeled for a lightning tutorial! It will take a couple days to sync like I previously stated above.

Enjoy!
