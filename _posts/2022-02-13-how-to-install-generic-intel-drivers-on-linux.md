---
layout: post
title: How To Install Generic Intel Drivers On Linux
category: blog
tags:
  - intel
  - drivers
  - linux
date: '2022-02-13'
---
This tutorial is for Ubuntu 20.04 variants. It installs the basic generic Intel drivers from Intel's repository. Fire up your terminals.

Import the keyring and add the repository.

```
bryan ~ ₿ sudo apt-get install -y gpg-agent wget
bryan ~ ₿ wget -qO - https://repositories.intel.com/graphics/intel-graphics.key > /tmp/intel.key
bryan ~ ₿ sudo apt-key add /tmp/intel.key
bryan ~ ₿ sudo apt-add-repository 'deb [arch=amd64] https://repositories.intel.com/graphics/ubuntu focal main'
bryan ~ ₿ rm /tmp/intel.key
```

Update apt and install the drivers.

```
bryan ~ ₿ sudo apt-get update
bryan ~ ₿ sudo apt-get install \
  intel-opencl-icd \
  intel-level-zero-gpu level-zero \
  intel-media-va-driver-non-free libmfx1 \
  libigc-dev intel-igc-cm libigdfcl-dev \
  libigfxcmrt-dev level-zero-dev
```

Add yourself to the render group

```
bryan ~ ₿ sudo gpasswd -a ${USER} render
bryan ~ ₿ newgrp render
```

You now have the basic Intel drivers installed.

Enjoy!
