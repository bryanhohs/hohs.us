---
layout: post
title: How To Configure Openssh Client On Linux
date: 2022-02-20T00:32:42.170Z
author: bryan
category: blog
tags:
  - openssh
  - ubuntu
  - linux
---
This tutorial shows you how to configure your ssh client. The default configuration uses bogus ciphers and needs to be updated. You can update these settings on a per user basis via ~/.ssh/config. We are going to update the global configuration.

```
bryan ~ ₿ sudo vi /etc/ssh/ssh_config

Host *
   AddressFamily inet
   CheckHostIP yes
   Ciphers aes256-ctr,aes192-ctr,aes128-ctr
   Compression no
   ConnectionAttempts 3
   ConnectTimeout 10
   ForwardAgent no
   ForwardX11 no
   ForwardX11Trusted no
   HashKnownHosts yes
   HostbasedKeyTypes rsa-sha2-512,rsa-sha2-256,ssh-rsa
   HostKeyAlgorithms rsa-sha2-512,rsa-sha2-256,ssh-rsa
   IdentityFile ~/.ssh/id_rsa
   IdentityFile ~/.ssh/id_dsa
   IdentityFile ~/.ssh/id_ecdsa
   IdentityFile ~/.ssh/id_ed25519
   IdentitiesOnly yes
   KexAlgorithms diffie-hellman-group16-sha512,diffie-hellman-group18-sha512,diffie-hellman-group14-sha256
   MACs hmac-sha2-512,hmac-sha2-256,hmac-sha1
   PermitLocalCommand no
   Protocol 2
   RekeyLimit 1G 1h
   
```

Save and exit.

Enjoy!