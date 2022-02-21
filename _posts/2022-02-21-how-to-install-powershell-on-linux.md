---
layout: post
title: How To Install PowerShell On Linux
date: 2022-02-21T00:13:35.617Z
author: bryan
category: blog
tags:
  - microsoft
  - powershell
  - linux
---
PowerShell for Linux is published to package repositories for easy installation and updates. The URL to the package varies by OS version. Use the following shell commands to install PowerShell on the target OS. Change the URL to match the version of the target OS.

```
# Update the list of packages
bryan ~ ₿ sudo apt-get update
# Install pre-requisite packages.
bryan ~ ₿ sudo apt-get install -y wget apt-transport-https software-properties-common
# Download the Microsoft repository GPG keys
bryan ~ ₿ wget -q https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb
# Register the Microsoft repository GPG keys
bryan ~ ₿ sudo dpkg -i packages-microsoft-prod.deb
# Update the list of packages after we added packages.microsoft.com
bryan ~ ₿ sudo apt-get update
# Install PowerShell
bryan ~ ₿ sudo apt-get install -y powershell
# Start PowerShell
pwsh
```

Enjoy!