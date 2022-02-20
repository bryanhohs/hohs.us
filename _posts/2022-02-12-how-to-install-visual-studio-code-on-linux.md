---
layout: post
title: How To Install Visual Studio Code On Linux
category: blog
author: bryan
tags:
  - visual
  - studio
  - code
date: '2022-02-12'
---
Visual Studio Code is great for coding just about anything. Support from Microsoft on a Linux distribution is a major plus as well. I use it for my node projects where syntax highlighting is a big help.

The easiest way is to download the package from Microsoft and install it from the command line.

```
# Assuming the deb is in the current directory run:
sudo dpkg -i code-*.deb

# If the installer acts up about dependencies run:
sudo apt-get install -f

# apt will install the required dependencies
```

The other option is to add the repository manually.

```
# Fetch the keyring
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg

# Install the keyring
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/

# Add the repo
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'

# Delete the keyring it's already imported.
rm -f packages.microsoft.gpg

# Install Code!
sudo apt install apt-transport-https && sudo apt update && sudo apt install -y code

```

Enjoy!
