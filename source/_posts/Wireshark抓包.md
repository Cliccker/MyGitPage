---
title: Wireshark抓包与包内容分析
author: Hank
tags:
  - Wireshark
  - 抓包工具
date: 2022-08-16 16:39
categories: 学习
summary: 这篇文章总结了如何使用Wireshark进行抓包，以及如何理解各类数据包内容。
---

### TCP报文

[[TCP IP参考模型]]中解释了TCP的作用机制

#### 封包信息分析

![TCP报文](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202208161644693.png)

+ 第一行：Frame 2 指要发送的数据块。其中，所抓帧的序号为2，捕获字节数等于传送字节数：70 字节；

+ 第二行：以太网，属于数据链路层，源mac地址为`00:0e:c6:28:d4:3c`目的mac地址为`00:74:9c:58:d9:be`

  > 可以试着百度一下两个mac地址的归属：
  >
  > 第一个mac地址属于ASIX ELECTRONICS CORP，台湾亚信电子

+ 第三行：IPV4 协议，属于网络层；源 IP 地址为 `192.168.119.104`；目标 IP 地址为 `123.57.3.111`

  > 试着百度一下目的ip，属于阿里云

+ 第四行：TCP 协议，也称传输控制协议，属于传输层；源端口 (58569)；目标端口 (443)；序列号 (1445)；ACK 是 TCP 数据包首部中的确认标志，对已接收到的 TCP 报文进行确认，值为 1 表示确认号有效；长度为 604；

#### Frame信息分析

![image-20220816170335345](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202208161703466.png)

```python
Frame 2: 670 bytes on wire (5360 bits), 670 bytes captured (5360 bits) on interface en5, id 0
    Interface id: 0 (en5)
    Encapsulation type: Ethernet (1)
    Arrival Time: Aug 16, 2022 16:43:08.087606000 CST #到达时间
    [Time shift for this packet: 0.000000000 seconds] 
    Epoch Time: 1660639388.087606000 seconds #新纪元时间（指自 1970 年 1 月 1 日（00:00:00 GMT）以来的秒数）
    [Time delta from previous captured frame: 0.000007000 seconds] #与前一捕获数据帧之间的时间差
    [Time delta from previous displayed frame: 0.000007000 seconds]
    [Time since reference or first frame: 0.000007000 seconds] #与第一帧之间的时间差
    Frame Number: 2 #帧序号
    Frame Length: 670 bytes (5360 bits) #帧长度
    Capture Length: 670 bytes (5360 bits) #捕获长度
    [Frame is marked: False] #帧是否被标记
    [Frame is ignored: False] #帧是否被忽略
    [Protocols in frame: eth:ethertype:ip:tcp] #此帧内封装的协议层次结构
    [Coloring Rule Name: TCP] #用不同颜色染色标记的协议名称
    [Coloring Rule String: tcp] #染色显示规则的字符串
```

#### Ethernet信息分析

![image-20220816174510915](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202208161745054.png)

```python
Ethernet II, Src: AsixElec_28:d4:3c (00:0e:c6:28:d4:3c), Dst: RuijieNe_58:d9:be (00:74:9c:58:d9:be)
    Destination: RuijieNe_58:d9:be (00:74:9c:58:d9:be) #目的mac地址
        Address: RuijieNe_58:d9:be (00:74:9c:58:d9:be)
        .... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)
        .... ...0 .... .... .... .... = IG bit: Individual address (unicast)
    Source: AsixElec_28:d4:3c (00:0e:c6:28:d4:3c) #源mac地址
        Address: AsixElec_28:d4:3c (00:0e:c6:28:d4:3c)
        .... ..0. .... .... .... .... = LG bit: Globally unique address (factory default)
        .... ...0 .... .... .... .... = IG bit: Individual address (unicast)
    Type: IPv4 (0x0800) #协议类型
```

#### IPv4协议信息解析

![image-20220816175939321](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202208161759423.png)

```python
Internet Protocol Version 4, Src: 192.168.119.104, Dst: 123.57.3.111
    0100 .... = Version: 4 #版本信息
    .... 0101 = Header Length: 20 bytes (5) #IP包头部长度
    Differentiated Services Field: 0x00 (DSCP: CS0, ECN: Not-ECT) #差分服务字段
    Total Length: 656 #IP包的总长度
    Identification: 0x0000 (0) #标志字段
    Flags: 0x40, Don't fragment # 标记字段（在路由传输时，是否允许将此IP包分段）
    ...0 0000 0000 0000 = Fragment Offset: 0 #分段偏移量
    Time to Live: 64 #生存期TTL
    Protocol: TCP (6) #此包内封装的上层协议为TCP
    Header Checksum: 0x81af [validation disabled] # 头部数据的校验和
    [Header checksum status: Unverified] 
    Source Address: 192.168.119.104 #源IP地址
    Destination Address: 123.57.3.111 #目的IP地址
```

> 校验和： 我们可以用诸如 **循环冗余校验** ( *CRC* )算法，为以太网帧计算校验和。如果以太网帧在传输的过程出错，校验和将发生改变。
> Time to Live：[[TTL，IP 包存活时间 _ 小菜学网络#^0alg7o]]

#### 传输层协议解析

![image-20220816180512202](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202208161806746.png)

```python
Transmission Control Protocol, Src Port: 58569, Dst Port: 443, Seq: 1445, Ack: 1, Len: 604
    Source Port: 58569 #源端口
    Destination Port: 443 #目的端口
    [Stream index: 0] 
    [Conversation completeness: Incomplete (28)]
    [TCP Segment Len: 604]
    Sequence Number: 1445    (relative sequence number) #序列号
    Sequence Number (raw): 2641860239
    [Next Sequence Number: 2049    (relative sequence number)] #相对序列号，该数据包的相对序列号为2049(此序列号用来确定传送数据的正确位置，且序列号用来侦测丢失的包)；下一个数据包的序列号是1377
    Acknowledgment Number: 1    (relative ack number)
    Acknowledgment number (raw): 3580640921
    1000 .... = Header Length: 32 bytes (8)
    Flags: 0x018 (PSH, ACK) #含6种标志；ACK：确认序号有效；SYN：同步序号用来发起一个连接；FIN：发端完成发送任务；RST：重新连接；PSH：接收方应该尽快将这个报文段交给应用层；URG：紧急指针(urgentpointer)有效
    Window: 2048 #TCP的流量控制由连接的每一端通过声明的窗口大小来提供。窗口大小为字节数，起始于确认序号字段指明的值，这个值是接收端正期望接收的字节。窗口大小是一个16bit字段，因而窗口大小最大为65536字节，上面显示窗口大小为1825字节；
    [Calculated window size: 2048]
    [Window size scaling factor: -1 (unknown)]
    Checksum: 0x5c12 [unverified]
    [Checksum Status: Unverified]
    Urgent Pointer: 0
    Options: (12 bytes), No-Operation (NOP), No-Operation (NOP), Timestamps
    [Timestamps]
    [SEQ/ACK analysis]
    TCP payload (604 bytes)
    [Reassembled PDU in frame: 3]
    TCP segment data (604 bytes)

```

### UDP报文

![[TCP IP参考模型#^bh6mtq]]

仔细看UDP的报文，其实大部分的内容和TCP报文差异不大

#### 封包信息分析

```python
Frame 337: 698 bytes on wire (5584 bits), 698 bytes captured (5584 bits) on interface en5, id 0 #帧序号等信息
Ethernet II, Src: CompalIn_bc:8c:1e (08:97:98:bc:8c:1e), Dst: IPv4mcast_7f:ff:fa (01:00:5e:7f:ff:fa) #以太网
Internet Protocol Version 4, Src: 192.168.119.103, Dst: 239.255.255.250 #ip协议
User Datagram Protocol, Src Port: 63596, Dst Port: 3702 #UDP协议
Data (656 bytes)
```
### ARP报文

![image-20220817163811980](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202208171638697.png)

![[ARP 协议原理 _ 小菜学网络#^z1h2km]]

![image-20220817164908822](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202208171649879.png)

上图展示了ARP的工作流程。总的来说，一个ARP报文包含了以下几个字段：

![](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202208171643497.png)

结合Wireshark可以看到上述报文的具体参数：
```python
Address Resolution Protocol (request)
    Hardware type: Ethernet (1) #硬件类型
    Protocol type: IPv4 (0x0800) #协议类型
    Hardware size: 6 #硬件地址长度
    Protocol size: 4 #协议地址长度
    Opcode: request (1) #操作码，标记了是请求还是回复 reply (2)
    Sender MAC address: RuijieNe_58:d9:be (00:74:9c:58:d9:be) #源硬件地址
    Sender IP address: 192.168.119.1 #源协议地址
    Target MAC address: 00:00:00_00:00:00 (00:00:00:00:00:00) #目标硬件地址
    Target IP address: 192.168.119.4 #目标协议地址

```

### ICMP报文

ping是向网络主机发送**ICMP回显请求**(ECHO_REQUEST)分组，是TCP/IP协议的一部分。主要可以检查网络是否通畅或者网络连接速度快慢，从而判断网络是否正常。

回送请求的具体报文：

```python
Internet Control Message Protocol
    Type: 8 (Echo (ping) request)
    Code: 0 #请求包
    Checksum: 0x610f [correct] #检验和
    [Checksum Status: Good]
    Identifier (BE): 32033 (0x7d21)
    Identifier (LE): 8573 (0x217d)
    Sequence Number (BE): 12 (0x000c)
    Sequence Number (LE): 3072 (0x0c00)
    [Response frame: 121184]
    Timestamp from icmp data: Aug 19, 2022 15:39:14.298394000 CST
    [Timestamp from icmp data (relative): 0.000154000 seconds]
    Data (48 bytes)
        Data: 08090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b…
        [Length: 48]

```

回送应答的具体报文：

```python
Internet Control Message Protocol
    Type: 0 (Echo (ping) reply)
    Code: 0
    Checksum: 0xa32b [correct]
    [Checksum Status: Good]
    Identifier (BE): 32033 (0x7d21)
    Identifier (LE): 8573 (0x217d)
    Sequence Number (BE): 45 (0x002d)
    Sequence Number (LE): 11520 (0x2d00)
    [Request frame: 121933]
    [Response time: 0.522 ms]
    Timestamp from icmp data: Aug 19, 2022 15:39:47.414522000 CST
    [Timestamp from icmp data (relative): 0.000763000 seconds]
    Data (48 bytes)
        Data: 08090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b…
        [Length: 48]

```

