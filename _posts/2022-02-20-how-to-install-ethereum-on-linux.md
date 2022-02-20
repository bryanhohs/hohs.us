---
layout: post
title: How To Install Ethereum On Linux
date: 2022-02-20T19:27:19.505Z
author: bryan
category: blog
tags:
  - ethereum
  - ubuntu
  - linux
---
In this tutorial we will add the Ethereum PPA, install geth, and run a light node. I'm sticking with a light node because of CPU usage and disk space. We only need local RPC for sending transactions via MyCrypto and/or MEW. Open up your terminals please.

```
bryan ~ ₿ sudo add-apt-repository ppa:ethereum/ethereum
You are about to add the following PPA:
 More info: https://launchpad.net/~ethereum/+archive/ubuntu/ethereum
Press Enter to continue or Ctrl+C to cancel

Executing: /tmp/apt-key-gpghome.Fyg42BUc99/gpg.1.sh --keyserver hkps://keyserver.ubuntu.com:443 --recv-keys 2A518C819BE37D2C2031944D1C52189C923F6CA9
gpg: key 1C52189C923F6CA9: "Launchpad PPA for Ethereum" not changed
gpg: Total number processed: 1
gpg:              unchanged: 1
bryan ~ ₿
```

Next, we update our repo's and install geth. I'm using screen for my setup. If you do some googling you might find a systemd script somewhere online.

```
bryan ~ ₿ sudo apt update && sudo apt install geth
```

Next, we write a shell script to start our light node.

```
bryan ~ ₿ vi ~/bin/geth.sh
#!/usr/bin/env bash

nice -50 geth                                           \
                --mainnet                               \
		--syncmode "light"                      \
		--identity "node1.vps.dxv.network"      \
		--cache "1024"                          \
		--http                                  \
		--http.addr "127.0.0.1"                 \
		--http.port "8545"                      \
		--http.api "eth,net,web3,personal"      \
		--http.corsdomain "*"                   \
		--http.vhosts "*"                       \
		--nat "none"
exit 0
```

Save and exit.

Now we launch the process in a screen session so we can easily monitor it. If you don't have screen installed, "sudo apt install screen".

```
bryan ~ ₿ screen -S geth -dm geth.sh
```

Light nodes sync quickly, you can monitor it via "screen -x geth" command.

Enjoy!
