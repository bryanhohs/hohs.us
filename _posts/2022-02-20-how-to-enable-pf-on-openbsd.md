---
layout: post
title: How To Enable PF On OpenBSD
date: 2022-02-20T02:59:57.335Z
author: bryan
category: blog
tags:
  - pf
  - firewall
  - openbsd
---
PF is a very advanced firewall for OpenBSD. It filters, normalizes, and conditions TCP/IP traffic. It was implemented in OpenBSD 3.0 and is available on other BSD variants. Log into your server and we will get started.

First we enable the firewall.

```
bryan ~ ₿ doas rcctl enable pf
```

If you want to use my configuration do so with caution.

```
bryan ~ ₿ doas vi /etc/pf.conf
#########################################################################

lo_if   =       "lo"
ext_if  =       "bse0"
ext_ip  =       "10.0.0.108"

#########################################################################

mi      =       "match in"
mo      =       "match out"
bi      =       "block in"
bo      =       "block out"
po      =       "pass out"
poq     =       "pass out quick"
pi      =       "pass in"
piq     =       "pass in quick"
fata    =       "from any to any"

#########################################################################

set timeout { interval 10, frag 10, src.track 0 }

set timeout { tcp.first 10, tcp.opening 10, tcp.established 14400 }
set timeout { tcp.closing 300, tcp.finwait 10, tcp.closed 10 }
set timeout { tcp.tsdiff 10 }

set timeout { udp.first 10, udp.single 10, udp.multiple 10 }
set timeout { icmp.first 10, icmp.error 10 }
set timeout { other.first 10, other.single 10, other.multiple 10 }

set timeout { adaptive.start 1000, adaptive.end 10000 }

#########################################################################

set limit { states 10000, frags 1000, src-nodes 2500 }
set limit { table-entries 100000 }

#########################################################################

set block-policy return
set loginterface $ext_if
set ruleset-optimization none
set fingerprints "/etc/pf.os"
set skip on $lo_if

#########################################################################

table <badhosts> persist

table <banned> const file "/etc/pf.banned"

table <private> const {                                                 \
                                0.0.0.0/8,                              \
                                127.0.0.0/8,                            \
                                172.16.0.0/12,                          \
                                192.168.0.0/16,                         \
                                169.254.0.0/16,                         \
                                192.0.2.0/24,                           \
                                224.0.0.0/4,                            \
                                240.0.0.0/4,                            \
                                255.255.255.255/32
}

#########################################################################

$mi                                                                     \
        on $ext_if                                                      \
        inet                                                            \
        $fata                                                           \
        scrub (no-df max-mss 1440)

$mo                                                                     \
        on $ext_if                                                      \
        inet                                                            \
        $fata                                                           \
        scrub (random-id)

#########################################################################

antispoof for { $lo_if, $ext_if }

#########################################################################

block return

#########################################################################

$bi                                                                     \
        on $ext_if                                                      \
        inet                                                            \
        from no-route to any

$bi                                                                     \
        on $ext_if                                                      \
        inet                                                            \
        from urpf-failed to any

$bi                                                                     \
        on $ext_if                                                      \
        inet                                                            \
        from { <badhosts>, <banned>, <private> } to any

$bi                                                                     \
        on $ext_if                                                      \
        inet                                                            \
        from any to { <badhosts>, <banned>, <private> }

$bi                                                                     \
        on $ext_if                                                      \
        inet                                                            \
        proto tcp                                                       \
        from any os "NMAP"

$bo                                                                     \
        on $ext_if                                                      \
        inet                                                            \
        from ! $ext_if to any

#########################################################################

$poq                                                                    \
        inet                                                            \
        proto icmp                                                      \
        $fata                                                           \
        icmp-type 8 code 0                                              \
        keep state

$poq                                                                    \
        inet                                                            \
        proto udp                                                       \
        $fata                                                           \
        keep state

$poq                                                                    \
        inet                                                            \
        proto tcp                                                       \
        $fata                                                           \
        flags S/SFRA                                                    \
        modulate state

#########################################################################

$pi                                                                     \
        inet                                                            \
        proto tcp                                                       \
        $fata                                                           \
        port 22                                                         \
        flags S/SFRA                                                    \
        synproxy state

#########################################################################
```

Save and exit. 

Don't forget to flush the default rules. Again, do so with caution!

```
bryan ~ ₿ doas pfctl -Fa -f /etc/pf.conf
```

You can monitor traffic via pftop. It's available in ports and in packages.

Enjoy!