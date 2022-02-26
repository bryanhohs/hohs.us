---
layout: post
title: How To Install VirtualBox On Linux
date: 2022-02-26T22:27:30.422Z
author: bryan
category: blog
tags:
  - ubuntu
  - linux
  - virtualbox
---
VirtualBox is my favorite host for virtualization. It's free and fairly simple to use. It gives us the ability to run other operating systems like Windows, Linux, and BSD without altering the underlying OS. We can pass hardware, shares, and the clipboard to and from the guest operating system. It's pretty easy to install. I also included the guest edition iso and extension pack in the tutorial.

Open up a terminal and install from apt.

```
bryan ~ ₿ sudo apt install virtualbox-qt virtualbox-guest-additions-iso
```

This will install the base stuff.

Next go to [VirtualBox's website](https://www.virtualbox.org/wiki/Download_Old_Builds_6_1) and download the correct extension pack. I'm currently running version 6.1.26. These can be installed in the preferences section from VirtualBox. You're ready to install your first virtual machine. Once you have your machine installed, mount the guest additions iso from the host and install them from the guest. Now you can mount shares and pass hardware!

Enjoy!