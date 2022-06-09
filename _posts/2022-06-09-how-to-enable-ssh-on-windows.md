---
layout: post
title: How To Enable SSH On Windows
date: 2022-06-09T00:49:10.436Z
author: bryan
category: blog
tags:
  - microsoft
  - windows
  - openssh
---
This tutorial will show you how to install and enable OpenSSH on Windows. First, open PowerShell with Administrator privileges.

Once you have PowerShell launched, verify OpenSSH is available.

```
PS C:\> Get-WindowsCapability -Online | Where-Object Name -like 'OpenSSH*'

Name  : OpenSSH.Client~~~~0.0.1.0
State : NotPresent

Name  : OpenSSH.Server~~~~0.0.1.0
State : NotPresent
```

I already had the client installed on my machine. If you need to install the client, substitute Server with Client in PowerShell. I'm only installing the server.

```
PS C:\> Add-WindowsCapability -Online -Name OpenSSH.Server~~~~0.0.1.0

Path          :
Online        : True
RestartNeeded : False
```

To enable the Server, execute the following in PowerShell.

```
PS C:\> Start-Service sshd
```

Enable OpenSSH at startup.

```
PS C:\> Set-Service -Name sshd -StartupType 'Automatic'
```

Verify Windows Defender Firewall allows OpenSSH.

```
PS C:\> if (!(Get-NetFirewallRule -Name "OpenSSH-Server-In-TCP" -ErrorAction SilentlyContinue | Select-Object Name, Enabled)) {
            Write-Output "Firewall Rule 'OpenSSH-Server-In-TCP' does not exist, creating it..."
            New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22
        } else {
            Write-Output "Firewall rule 'OpenSSH-Server-In-TCP' has been created and exists."
        }
```

You have now installed OpenSSH and enabled it on startup.

Enjoy!