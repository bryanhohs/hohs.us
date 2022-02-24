---
layout: post
title: How To Install Flatpak On Linux
date: 2022-02-24T21:18:36.754Z
author: bryan
category: blog
tags:
  - ubuntu
  - linux
  - flatpak
---
This tutorial shows you how to install Flatpak and setup the Flathub repository. Flatpak is a next-generation technology for building and distributing desktop applications on Linux. 

First, install flatpak.

```
bryan ~ ₿ sudo apt install flatpak
```

Next, add the flathub repository.

```
bryan ~ ₿ flatpak --user remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Restart and you're ready to install apps.

Enjoy!