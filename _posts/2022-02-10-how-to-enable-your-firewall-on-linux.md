---
layout: post
title: How To Enable Your Firewall On Linux
category: blog
author: bryan
tags:
  - linux
  - firewall
  - ubuntu
date: '2022-02-10'
---
This tutorial is for Ubuntu based distributions. I'll include some custom scripts that can be used on other distros also. The first example is pretty novice.

Fire up a terminal and execute these commands.

```
bryan ~ ₿ sudo ufw enable
Firewall is active and enabled on system startup
bryan ~ ₿ sudo ufw status verbose
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip
```

We have enabled the built in Uncomplicated Firewall. This is all you really need in most environments. If you want to open ports that's another subject.

This example enables iptables manually. Its more advanced and not for noobs. I have my configuration set up to use openvpn. If you do a little bit of hacking you can easily adjust it to your liking. This section involves 3 files.

1. /etc/rc.local
2. /etc/iptables/iptables.rules
3. ~/iptables.sh

I'll upload the files demonstrated here to my vps for downloading later on in the tutorial.

If you don't already have the rc.local file you'll have to create it yourself. The iptables directory might need to be manually created as well. The iptables.sh is where we'll initially create the firewall. You can create it anywhere you like. I just used the home directory as example. Lets start with the firewall script first and we'll enable it afterwards.

First fire up your terminal and use your favorite editor to create iptables.sh. I use vi while most will probably want to use nano. 

```
bryan ~ ₿ vi ~/iptables.sh
```

Add the below script to the iptables.sh file we just created.

```
#!/usr/bin/env bash
#
# iptables for dxv.network
#

# iptables command (iptables --verbose)
IPT=iptables

# local interface
LOCAL_IF=lo
LOCAL_IP=127.0.0.1
LOCAL_NET=127.0.0.0/8

# external interface
EXT_IF=eth0
EXT_IP=10.0.0.100
EXT_NET=10.0.0.0/24
EXT_PORTS="22"

# vpn interface
VPN_IF=tun0
VPN_IP=10.8.0.100
VPN_NET=10.8.0.0/24
VPN_PORTS="22"

# local network
LAN_NET=10.0.0.0/8

# flush
$IPT -F -t mangle
$IPT -F -t nat
$IPT -F

# drop policy
$IPT -P INPUT DROP
$IPT -P FORWARD DROP
$IPT -P OUTPUT DROP

# clear chains
$IPT -X LOCAL_IN
$IPT -X LOCAL_FLAGS
$IPT -X BROADCAST_FLAGS
$IPT -X ICMP_FLAGS
$IPT -X TCP_FLAGS
$IPT -X SYN_FLOODS
$IPT -X UDP_FLAGS
$IPT -X INVALID_FLAGS
$IPT -X ESTABLISHED_FLAGS
$IPT -X VPN_IN
$IPT -X NEW_FLAGS
$IPT -X FORWARD_FLAGS
$IPT -X LOCAL_OUT
$IPT -X OUT_FLAGS
$IPT -X VPN_OUT
$IPT -X LOG_FLAGS
$IPT -X DROP_FLAGS

$IPT -t mangle -X MANGLE_FLAGS
$IPT -t nat -X NAT_FLAGS

# new chains
$IPT -N LOCAL_IN
$IPT -N LOCAL_FLAGS
$IPT -N BROADCAST_FLAGS
$IPT -N ICMP_FLAGS
$IPT -N TCP_FLAGS
$IPT -N SYN_FLOODS
$IPT -N UDP_FLAGS
$IPT -N INVALID_FLAGS
$IPT -N ESTABLISHED_FLAGS
$IPT -N VPN_IN
$IPT -N NEW_FLAGS
$IPT -N FORWARD_FLAGS
$IPT -N LOCAL_OUT
$IPT -N OUT_FLAGS
$IPT -N VPN_OUT
$IPT -N LOG_FLAGS
$IPT -N DROP_FLAGS

$IPT -t mangle -N MANGLE_FLAGS
$IPT -t nat -N NAT_FLAGS

# lo in chain
$IPT -A LOCAL_IN -i $LOCAL_IF -j ACCEPT

# lo out chain
$IPT -A LOCAL_OUT -o $LOCAL_IF -j ACCEPT

# local chain
$IPT -A LOCAL_FLAGS -s 0.0.0.0/8 -j DROP
$IPT -A LOCAL_FLAGS -s 100.64.0.0/10 -j DROP
$IPT -A LOCAL_FLAGS -s 127.0.0.0/8 -j DROP
$IPT -A LOCAL_FLAGS -s 169.254.0.0/16 -j DROP
$IPT -A LOCAL_FLAGS -s 172.16.0.0/12 -j DROP
$IPT -A LOCAL_FLAGS -s 192.0.0.0/24 -j DROP
$IPT -A LOCAL_FLAGS -s 192.88.99.0/24 -j DROP
$IPT -A LOCAL_FLAGS -s 192.168.0.0/16 -j DROP
$IPT -A LOCAL_FLAGS -s 198.18.0.0/15 -j DROP
$IPT -A LOCAL_FLAGS -s 224.0.0.0/4 -j DROP
$IPT -A LOCAL_FLAGS -s 240.0.0.0/4 -j DROP
$IPT -A LOCAL_FLAGS -s 255.255.255.255/32 -j DROP

$IPT -A LOCAL_FLAGS -d 0.0.0.0/8 -j DROP
$IPT -A LOCAL_FLAGS -d 100.64.0.0/10 -j DROP
$IPT -A LOCAL_FLAGS -d 127.0.0.0/8 -j DROP
$IPT -A LOCAL_FLAGS -d 169.254.0.0/16 -j DROP
$IPT -A LOCAL_FLAGS -d 172.16.0.0/12 -j DROP
$IPT -A LOCAL_FLAGS -d 192.0.0.0/24 -j DROP
$IPT -A LOCAL_FLAGS -d 192.88.99.0/24 -j DROP
$IPT -A LOCAL_FLAGS -d 192.168.0.0/16 -j DROP
$IPT -A LOCAL_FLAGS -d 198.18.0.0/15 -j DROP
$IPT -A LOCAL_FLAGS -d 224.0.0.0/4 -j DROP
$IPT -A LOCAL_FLAGS -d 240.0.0.0/4 -j DROP
$IPT -A LOCAL_FLAGS -d 255.255.255.255/32 -j DROP 

# broadcast chain
$IPT -A BROADCAST_FLAGS -m addrtype --dst-type MULTICAST -j RETURN
$IPT -A BROADCAST_FLAGS -m addrtype --dst-type BROADCAST -j RETURN

# icmp chain
$IPT -A ICMP_FLAGS -p icmp --icmp-type address-mask-request -j DROP
$IPT -A ICMP_FLAGS -p icmp --icmp-type address-mask-reply -j DROP
$IPT -A ICMP_FLAGS -p icmp --icmp-type destination-unreachable -j DROP
$IPT -A ICMP_FLAGS -p icmp --icmp-type router-advertisement -j DROP
$IPT -A ICMP_FLAGS -p icmp --icmp-type router-solicitation -j DROP
$IPT -A ICMP_FLAGS -p icmp --icmp-type source-quench -j DROP
$IPT -A ICMP_FLAGS -p icmp --icmp-type timestamp-request -j DROP
$IPT -A ICMP_FLAGS -p icmp --icmp-type timestamp-reply -j DROP

# udp chain
$IPT -A UDP_FLAGS -p udp --sport 0:21 -j DROP
$IPT -A UDP_FLAGS -p udp --dport 0:21 -j DROP

# tcp chain
$IPT -A TCP_FLAGS -p tcp --sport 0:19 -j DROP
$IPT -A TCP_FLAGS -p tcp --dport 0:19 -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags SYN,ACK NONE -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags SYN,FIN SYN,FIN -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags SYN,RST SYN,RST -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags RST,FIN RST,FIN -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags SYN,URG SYN,URG -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags ALL NONE -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags ALL ALL -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags ALL SYN,PSH -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags ALL SYN,ACK,PSH -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags ACK,FIN FIN -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags ACK,PSH PSH -j DROP
$IPT -A TCP_FLAGS -p tcp --tcp-flags ACK,URG URG -j DROP

# syn flood chain
$IPT -A SYN_FLOODS -i $EXT_IF -d $EXT_IP -p tcp -m tcp -m state --state INVALID,UNTRACKED -j SYNPROXY --sack-perm --timestamp --wscale 7 --mss 1460
$IPT -A SYN_FLOODS -i $VPN_IF -d $VPN_IP -p tcp -m tcp -m state --state INVALID,UNTRACKED -j SYNPROXY --sack-perm --timestamp --wscale 7 --mss 1460

# invalid chain
$IPT -A INVALID_FLAGS -i $EXT_IF -d $EXT_IP -m state --state INVALID -j DROP
$IPT -A INVALID_FLAGS -i $VPN_IF -d $VPN_IP -m state --state INVALID -j DROP

# established chain
$IPT -A ESTABLISHED_FLAGS -i $EXT_IF -d $EXT_IP -m state --state RELATED,ESTABLISHED -j ACCEPT
$IPT -A ESTABLISHED_FLAGS -i $VPN_IF -d $VPN_IP -m state --state RELATED,ESTABLISHED -j ACCEPT

# vpn inbound chain
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j LOCAL_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j BROADCAST_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j ICMP_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j UDP_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j TCP_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j SYN_FLOODS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j INVALID_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j ESTABLISHED_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j NEW_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j LOG_FLAGS
$IPT -A VPN_IN -i $VPN_IF -d $VPN_IP -j DROP_FLAGS

# new chain
$IPT -A NEW_FLAGS -i $EXT_IF -p tcp -m multiport -s $EXT_NET -d $EXT_IP --dports $EXT_PORTS -m state --state NEW -j ACCEPT 
$IPT -A NEW_FLAGS -i $VPN_IF -p tcp -m multiport -s $VPN_NET -d $VPN_IP --dports $VPN_PORTS -m state --state NEW -j ACCEPT 

# mangle chain
$IPT -t mangle -A MANGLE_FLAGS -f -j DROP
$IPT -t mangle -A MANGLE_FLAGS -p icmp -j DROP
$IPT -t mangle -A MANGLE_FLAGS -m state --state INVALID -j DROP
$IPT -t mangle -A MANGLE_FLAGS -p tcp ! --syn -m state --state NEW -j DROP
$IPT -t mangle -A MANGLE_FLAGS -p tcp -m state --state NEW -m tcpmss ! --mss 536:65535 -j DROP

# nat chain
$IPT -t nat -A NAT_FLAGS -o $EXT_IF -s $EXT_NET -j MASQUERADE
$IPT -t nat -A NAT_FLAGS -o $VPN_IF -s $VPN_NET -j MASQUERADE

# log chain
$IPT -A LOG_FLAGS -i $EXT_IF -d $EXT_IP -j LOG
$IPT -A LOG_FLAGS -i $VPN_IF -d $VPN_IP -j LOG

# drop flags
$IPT -A DROP_FLAGS -i $EXT_IF -d $EXT_IP -j DROP
$IPT -A DROP_FLAGS -i $VPN_IF -d $VPN_IP -j DROP

# forward chain
$IPT -A FORWARD_FLAGS -j DROP

# out chain
$IPT -A OUT_FLAGS -o $EXT_IF -s $EXT_IP -j ACCEPT
$IPT -A OUT_FLAGS -o $VPN_IF -s $VPN_IP -j ACCEPT

# vpn outbound chain
$IPT -A VPN_OUT -o $VPN_IF -s $VPN_IP -j LOCAL_FLAGS
$IPT -A VPN_OUT -o $VPN_IF -s $VPN_IP -j BROADCAST_FLAGS
$IPT -A VPN_OUT -o $VPN_IF -s $VPN_IP -j ICMP_FLAGS
$IPT -A VPN_OUT -o $VPN_IF -s $VPN_IP -j UDP_FLAGS
$IPT -A VPN_OUT -o $VPN_IF -s $VPN_IP -j TCP_FLAGS
$IPT -A VPN_OUT -o $VPN_IF -s $VPN_IP -j OUT_FLAGS
$IPT -A VPN_OUT -o $VPN_IF -s $VPN_IP -j LOG_FLAGS
$IPT -A VPN_OUT -o $VPN_IF -s $VPN_IP -j DROP_FLAGS

# input chain
$IPT -A INPUT -i $LOCAL_IF -j LOCAL_IN
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j LOCAL_FLAGS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j BROADCAST_FLAGS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j ICMP_FLAGS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j UDP_FLAGS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j TCP_FLAGS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j SYN_FLOODS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j INVALID_FLAGS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j ESTABLISHED_FLAGS
$IPT -A INPUT -i $VPN_IF -d $VPN_IP -j VPN_IN
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j NEW_FLAGS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j LOG_FLAGS
$IPT -A INPUT -i $EXT_IF -d $EXT_IP -j DROP_FLAGS

# forward chain
$IPT -A FORWARD -i $EXT_IF -j FORWARD_FLAGS
$IPT -A FORWARD -o $EXT_IF -j FORWARD_FLAGS

# output chain
$IPT -A OUTPUT -o $LOCAL_IF -j LOCAL_OUT
$IPT -A OUTPUT -o $EXT_IF -s $EXT_IP -j LOCAL_FLAGS
$IPT -A OUTPUT -o $EXT_IF -s $EXT_IP -j BROADCAST_FLAGS
$IPT -A OUTPUT -o $EXT_IF -s $EXT_IP -j ICMP_FLAGS
$IPT -A OUTPUT -o $EXT_IF -s $EXT_IP -j UDP_FLAGS
$IPT -A OUTPUT -o $EXT_IF -s $EXT_IP -j TCP_FLAGS
$IPT -A OUTPUT -o $EXT_IF -s $EXT_IP -j OUT_FLAGS 
$IPT -A OUTPUT -o $VPN_IF -s $VPN_IP -j VPN_OUT
$IPT -A OUTPUT -o $EXT_IF -s $EXT_IP -j LOG_FLAGS
$IPT -A OUTPUT -o $EXT_IF -s $EXT_IP -j DROP_FLAGS

# mangle table
$IPT -t mangle -A PREROUTING -j MANGLE_FLAGS 

# masquerade ip addresses
$IPT -t nat -A POSTROUTING -j NAT_FLAGS 
```

Like I said, it might require some hacking but that's another story. The ports are only set up for ssh. If you need other ports you'll have to add them to the ports chain manually. I'm running a newer kernel. If you run into issues it might be the new SYNPROXY chain. I forget what version it was implemented. Save the file and exit your editor.

Run the script as root.

```
bryan ~ ₿ sudo ./iptables.sh
```

Double check that you have the iptables directory in /etc. If not, create it manually as root. Next we save the firewall manually to the iptables directory so it can be enabled at startup.

```
bryan ~ ₿ sudo -i
root:/home/bryan ₿ iptables-save > /etc/iptables/iptables.rules
root:/home/bryan ₿ exit
```

Next we need to enable it on startup. Fire up your editor and either modify or create /etc/rc.local. Add the restore command to enable the firewall on boot.

```
#!/usr/bin/env bash

iptables-restore /etc/iptables/iptables.rules

exit 0
```

Save and exit your editor. Make sure this file is owned by root and permissions are 755.

That is it! You have enabled a firewall on your computer. Here are the files used in this tutorial.

<https://vps.dxv.network/files/firewall.txz>

Enjoy!
