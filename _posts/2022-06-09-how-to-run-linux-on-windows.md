---
layout: post
title: How To Run Linux On Windows
date: 2022-06-09T16:42:40.703Z
author: bryan
category: blog
tags:
  - microsoft
  - windows
  - linux
---
This tutorial will show you how to install Linux on Windows. First open up a elevated Command Prompt or PowerShell and run the install command. I'm using PowerShell in my example.

```
PS C:\> wsl --install
```

This will install all the required components and Ubuntu Linux by default. To list available  distros such as Ubuntu, OpenSUSE, Kali, Debian, Arch Linux; run this command.

```
PS C:\> wsl --list --online
```

To change distro and set it default:

```
PS C:\> wsl --install -d "distro"
```

After you set your username and password you can access WSL from the Command Prompt, PowerShell, or OpenSSH. I'm accessing my machine over the network on Linux via OpenSSH. To install OpenSSH on Windows, check out my tutorial [here](https://hohs.us/post/how-to-enable-ssh-on-windows/).

```
bryan@linux:~$ ssh -t bryan@DESKTOP-53F8BQX wsl
```

The "-t" flag forces pseudo-terminal allocation so we can launch the Linux session automatically via OpenSSH.

Enjoy!