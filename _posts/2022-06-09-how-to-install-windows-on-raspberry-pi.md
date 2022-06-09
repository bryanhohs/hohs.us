---
layout: post
title: How To Install Windows On Raspberry Pi
date: 2022-06-09T18:39:15.655Z
author: bryan
category: blog
tags:
  - windows
  - raspberrypi
  - wor-flasher
---
This tutorial makes installing Windows 10/11 on Raspberry Pi easy. The script does all the work. This is a linux tutorial. Make sure you have a decent size external hard disk and git installed.

First fetch the script from the WoR-flasher repo.

```
bryan@linux:~/ git clone https://github.com/Botspot/wor-flasher.git
```

Run the script, it will install all required dependencies.

```
bryan@linux:~/ wor-flasher/install-wor-gui.sh
```

Follow the prompts and the script does the rest.

Enjoy!