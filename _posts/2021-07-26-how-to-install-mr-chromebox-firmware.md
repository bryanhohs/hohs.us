---
layout: post
title: How To Install Mr Chromebox Firmware
category: blog
author: bryan
tags:
  - chrome
  - developer
  - firmware
date: '2021-07-26'
---
This tutorial requires chrome os in developer mode. You can enable it in a previous tutorial [here](https://hohs.us/posts/how-to-enable-chromebook-developer-mode). This tutorial assumes it is enabled and the system has been reset to factory defaults. A list of supported devices can be found [here](https://mrchromebox.tech/#devices).

1. Boot into Chrome OS.
2. Enable Wifi.
3. Select "Browse As Guest" option.
4. Hold down Ctrl + Alt and press T to load the crosh terminal.
5. Type shell and press enter.
6. Type cd; curl -LO https://mrchromebox.tech/firmware-util.sh && sudo bash firmware-util.sh and press enter.
7. If your system supports the full rom press 2, otherwise press 1, then enter.
8. Follow the prompts to install the rom then press q.
9. Reboot

Your system has been flashed and it's ready to run Linux!
