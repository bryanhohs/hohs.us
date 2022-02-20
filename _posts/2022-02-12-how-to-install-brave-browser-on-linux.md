---
layout: post
title: How To Install Brave Browser On Linux
category: blog
author: bryan
tags:
  - brave
  - browser
  - linux
date: '2022-02-12'
---
Brave is basically a fork of Chrome built by Mozilla, the creators of Firefox. It's main focus is privacy, security, and anonymity. It has built in features that Chrome doesn't. You can earn rewards for opting in on relevant ads. It's pretty cool. I'm a Verified Brave Content Creator on all my sites. Send me a tip if you like!

The easiest way to install Brave is by installing the binary package. It can be built from source but that's another subject.

```
# Open up your terminal and add the repository
sudo apt install apt-transport-https curl

# Fetch the Brave keyring via curl
sudo curl -fsSLo /usr/share/keyrings/brave-browser-archive-keyring.gpg https://brave-browser-apt-release.s3.brave.com/brave-browser-archive-keyring.gpg

# Add the Brave repo
echo "deb [signed-by=/usr/share/keyrings/brave-browser-archive-keyring.gpg arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | sudo tee /etc/apt/sources.list.d/brave-browser-release.list

# Update and install Brave
sudo apt update && sudo apt install -y brave-browser
```

Enjoy!
