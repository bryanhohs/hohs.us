---
layout: post
title: How To Enable Linux On Your Chromebook
date: 2022-02-21T04:45:06.815Z
author: bryan
category: blog
tags:
  - chromebook
  - debian
  - linux
---
This tutorial is easy compared to [How To Deploy Linux On Your Chromebook](https://hohs.us/post/how-to-deploy-linux-on-your-chromebook/). We simply enable the developer setting for the Linux Development Environment.

1. Go to the settings control panel by clicking on the time and then click Settings.
2. Scroll down to the Advanced section.
3. Click Developers.
4. Turn on the Linux Development Environment.

Follow the on screen instructions, it might take a couple minutes. I think I managed to leave the default settings without any issues. You can always remove and redeploy the container.

Once the install is complete, a terminal window should open. You're now running Debian Linux on your Chromebook! The first thing you should do is update the container. You can do so by running these commands from the terminal.

```
hohsus86@penguin:~$ sudo apt update && sudo apt upgrade -y
```

This will upgrade Debian Linux automatically. You can now install Linux applications on your Chromebook!  You can type exit to quit the terminal session. If you wish to return to the shell, type terminal in the program menu. Your Linux applications will also be installed into the menu as well. This very useful since Chrome isn't very application friendly.

Enjoy!