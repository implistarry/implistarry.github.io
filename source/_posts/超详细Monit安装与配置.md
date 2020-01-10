---
title: 超详细Monit安装与配置
catalog: true
toc_nav_num: true
tags:
  - 监控
catagories:
  - 开源工具
date: 2020-01-10 14:14:21
subtitle:
header-img:
updateDate:
top:
---



## 简述
Monit是一个跨平台的用来监控Unix/linux系统（比如Linux、BSD、OSX、Solaris）的工具。Monit特别易于安装，而且非常轻量级（只有500KB大小），并且不依赖任何第三方程序、插件或者库。

Monit可以监控服务器进程状态、HTTP/TCP状态码、服务器资源变化、文件系统变动等等，根据这些变化，可以设定邮件报警、重启进程或服务。易于安装、轻量级的实现以及强大的功能，让Monit成为一个理想的后备监控工具。

官网：https://mmonit.com/monit
文档：https://mmonit.com/monit/documentation/monit.html

## 安装

	sudo apt-get install monit
## 命令
	调用格式： monit [options] {arguments}


### 选项

| 选项         | 说明                                       |
| ------------ | ------------------------------------------ |
| -c file      | 指定配置文件                               |
| -d n         | 每隔n秒，以守护进程的方式运行monit一次     |
| -g name      | 设置启动、停止、监控、重启、解除监控的组名 |
| -l logfile   | 指定日在文件路径                           |
| -p pidfile   | 指定守护模式的PID（锁）文件                |
| -s statefile | 指定状态存储文件                           |
| -t           | 对控制文件进行语法检查                     |

### 子命令

| 参数                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| start all                                                    | 启动控制文件中所有列出的服务，并监控它们。如果指定-g，仅仅针对目标组中的服务 |
| start name                                                   | 启动指定的服务并监控，name是控制文件中服务条目的名称         |
| stop all                                                     | 停止控制文件中所有列出的服务，并不再监控它们                 |
| stop name                                                    | 停止指定的服务并不再监控                                     |
| restart all <br> restart name                                | 重启操作                                                     |
| monitor all <br> monitor name <br> unmonitor all <br> unmonitor name | 启用/禁用监控                                                |
| status                                                       | 打印每个服务的状态                                           |
| summary                                                      | 打印简要的状态信息                                           |
| reload                                                       | 重新初始化守护程序，配置文件被重新读取                       |
| quit                                                         | 退出守护程序                                                 |
| validate                                                     | 检查控制文件中所有服务的有效性。守护模式下自动               |
| procmatch regex                                              | 用于方便的测试进程匹配检查Pattern，接受正则式为输入，打印所有匹配的进程 |

### 环境变量

	当Monit执行某个脚本或程序时，下表列出的环境变量被自动注入：

| 环境变量                  | 说明                                     |
| ------------------------- | ---------------------------------------- |
| MONIT_EVENT               | 在服务条目上发生的事件                   |
| MONIT_DESCRIPTION         | 错误条件的描述                           |
| MONIT_SERVICE             | 服务条目的名称                           |
| MONIT_DATE                | 事件发生的日期时间（RFC 822格式）        |
| MONIT_HOST                | 事件发生所在的主机                       |
|                           | 下面的环境变量仅仅对进程类的服务条目可用 |
| MONIT_PROCESS_PID         | 进程的PID                                |
| MONIT_PROCESS_MEMORY      | 进程占用的内存                           |
| MONIT_PROCESS_CHILDREN    | 子进程数量                               |
| MONIT_PROCESS_CPU_PERCENT | 进程CPU占用率                            |

## 如何配置
### 配置文件关键字：
	'if', 'and', 'with(in)', 'has', 'us(ing|e)', 'on(ly)', 'then', 'for', 'of'

### 使用apt-get安装默认配置文件在:

	/etc/monit/monitrc # 全局参数配置文件

为了保护控制文件和密码的安全性，monitrc必须具有读写权限不超过0700(u=xrw,g=,o=)。



## monit相关命令

	monit -t # 配置文件检测
	monit # 启动monit daemon 
	monit -c /var/monit/monitrc # 启动monit daemon时指定配置文件
	monit reload # 当更新了配置文件需要重载 
	monit status # 查看所有服务状态 
	monit status nginx # 查看nginx服务状态 
	monit stop all # 停止所有服务 
	monit stop mongo # 停止mongo服务 
	monit start all # 启动所有服务 
	monit start mongo # 启动mongo服务
	monit -V # 查看版本

## 常见监控方法：

### 1、根据ip+端口，监控web服务器端口存活：

	check host gamecenter_api_10.153.123.2 with address 10.153.123.2
	    if failed port 8093 with timeout 1 seconds for 2 cycles then exec "/data/apps/monit/contrib/sms.py"
表示：在两次监控周期内，如果端口超时超过1m则报警。

### 2、根据pid，监控服务进程：

	check process tomcat with pidfile /var/run/catalina.pid     # 进程pid
	    start program = "/etc/init.d/tomcat start"              # 设置启动命令
	    stop program  = "/etc/init.d/tomcat stop"               # 设置停止命令
	    if 9 restarts within 10 cycles then timeout             # 设置在10个监视周期内重，启了9次则超时,不再监视这个服务。原因另外说明【3】
	    if cpu usage > 90% for 5 cycles then alert              # 如果在5个周期内该服务的cpu使用率都超过90%则提示
	    if failed url http://127.0.0.1:4000/ timeout 120 seconds for 5 cycles then restart # 若连续5个周期打开url都失败（120秒超时，超时也认为失败）则重启服务
设置超时后不再监视是为了让服务不要一直重启,如果连续重启多次不成功,极有可能再重启下去也不会成功的。并且tomcat的重启需要占用大量系统资源,假如一直重启下去,反而会使其它服务也无法正常运作。

>  start和stop的program参数里的命令必须是全路径，否则monit不能正常启动，比如killall应该是/usr/bin/killall

### 3、可以对moint本身服务器进行监控：

 系统名称，可以是IP或域名

	check system www.example.com
	    if loadavg (1min) > 4 then alert
	    if loadavg (5min) > 2 then alert
	    if memory usage > 75% then alert
	    if cpu usage (user) > 70% then alert
	    if cpu usage (system) > 30% then alert
	    if cpu usage (wait) > 20% then alert

---
---
## 语法详解

### mailserver 支持格式为：
	SET MAILSERVER <hostname|ip-address [PORT number] [USERNAME string] [PASSWORD string] [using SSLAUTO|SSLV2|SSLV3|TLSV1|TLSV11|TLSV12] [CERTMD5 checksum]>, ...
	                [with TIMEOUT X SECONDS]
	                [using HOSTNAME hostname]

### 服务类型

首先需要理解在monit里什么是服务(service)。看监控语法：

	check <类型> <服务名> [PATH <path>] [ADDRESS <host address>]

其中类型是monit支持的监控类型，一共有：`system、file、process、fifo、filesystem、directory、host、network、program`
服务名必需是英文且唯一，不可以出现重复！
后面的带`[]`是根据类型需要添加的。

服务类型语法
每个服务条目由关键字组成`check`，后面是服务类型。每个条目需要唯一的描述性名称，可以自由选择。此名称由Monit用于在内部和与用户的所有交互中引用该服务。

目前，支持九种类型的检查语句：

### 进程
	CHECK PROCESS <unique name> <PIDFILE <path> | MATCHING <regex>>
`<path>`是程序的pid文件的绝对路径。pid文件是一个包含进程唯一ID的文件。如果pid文件不存在或不包含正在运行的进程的PID编号，则Monit将调用该条目的start方法（如果已定义）。

`<regex>`是使用PID文件的替代方法，并使用进程名称模式匹配来查找要监视的进程。选择具有最长正常运行时间的最顶部匹配的父级，因此如果进程名称是唯一的，则此检查形式是最有用的。应该尽可能使用Pid文件，因为它定义了预期的PID。您可以测试一个进程是否匹配来自命令行使用的模式`monit procmatch "regex-pattern"`。这将列出匹配或不匹配的所有进程，regex模式。

### 文件
	CHECK FILE <unique name> PATH <path>
`<path>`是文件的绝对路径。如果文件不存在，Monit将调用该条目的start方法（如果已定义），如果`<path>`不指向常规文件类型（例如目录），Monit将禁用此条目的监视。如果Monit在被动模式下运行或者没有定义start方法，Monit只会在错误时发送警报。

### Fifo
	CHECK FIFO <unique name> PATH <path>
`<path>`是fifo的绝对路径。如果fifo不存在，Monit将定义调用该条目的start方法，如果`<path>`没有指向fifo类型（例如目录），Monit将禁用对该条目的监视。如果Monit在被动模式下运行或者没有定义start方法，Monit只会在错误时发送警报。

### 文件系统
	CHECK FILESYSTEM <unique name> PATH <path>
`<path>`是设备/磁盘，安装点，文件或作为文件系统一部分的目录的路径。建议直接使用块特殊文件（例如Linux上的`/dev/hda1`或Solaris上的`/dev/dsk/c0t0d0s1`等）如果使用挂载点（例如`/data`），请注意文件系统是卸载的测试仍然是真的，因为挂载点存在。

如果文件系统不可用，Monit将调用该条目的start方法（如果已定义）。如果不指向文件系统，Monit将禁用对此条目的监视。如果Monit在被动模式下运行或者没有定义start方法，Monit只会在错误时发送警报。

### 目录
	CHECK DIRECTORY <unique name> PATH <path>
`<path>`是目录的绝对路径。如果目录不存在，Monit将调用该条目的start方法（如果已定义）。如果`<path>`不指向目录，monit将禁用对此条目的监视。如果Monit在被动模式下运行或者没有定义启动方法，Monit只会在错误时发送警报。

### 远程主机
	CHECK HOST <unique name> ADDRESS <host address>
主机地址可以指定为主机名字符串或点分十进制格式的IP地址字符串。例如，tildeslash.com或“64.87.72.95”。

### 系统
	CHECK SYSTEM <unique name>
的唯一的名称通常是本地主机名，而是可以使用任何描述性名称。如果使用变量$ HOST作为名称，它将扩展为主机名。此检查允许监控一般系统资源，如CPU使用率，总内存使用或负载平均。该唯一名称在邮件警报中用作系统主机名，在M/Monit中用作主机条目的初始名称。

### 自定义
	CHECK PROGRAM <unique name> PATH <executable file> [TIMEOUT <number> SECONDS]
`<path>`是可执行程序或脚本的绝对路径。该状态测试允许一个检查程序的退出状态。如果程序没有在`<number>`秒内完成执行，Monit将终止它。默认程序超时为300秒（5分钟）。程序的输出被记录并在用户界面和警报中可用，默认情况下最大为512B。您可以使用set limits语句自定义限制。

### 网络
	CHECK NETWORK <unique name> <ADDRESS <ipaddress> | INTERFACE <name>>
`<ipaddress>`是受监视网络接口的IPv4或IPv6地址。也可以在Linux上使用接口名称，例如“eth0”。

### 服务检测时间
可以使用every语句修改服务检查计划。

有三种变体：

1.轮询周期倍数

	EVERY [number] CYCLES
2.Cron-style

	EVERY [cron]
	
	# [cron]
	# * * * * *
	# 分 时 日 月 周
3.与Cron-style相反（do-not-check）

	NOT EVERY [cron]
示例：
示例1：每两个周期检查一次

	check process nginx with pidfile /var/run/nginx.pid
	every 2 cycles
示例2：在上午8点到下午7点之间检查每个工作日

	check program checkOracleDatabase
	with path /var/monit/programs/checkoracle.pl
	every "* 8-19 * * 1-5"
示例3：在星期日0AM到3AM之间不要在备份窗口中运行检查，否则运行具有常规轮询周期频率的检查。

	check process mysqld with pidfile /var/run/mysqld.pid
	not every "* 0-3 * * 0"
注意不要使用特定的分钟，因为Monit可能不会在那分钟运行。

### 服务重启限制
Monit提供了一种重启限制机制，用于服务在较长时间内拒绝启动或响应的情况。
超时语句的语法如下（关键字在大写）：

	IF <number> RESTART <number> CYCLE(S) THEN <action>
该行动值是常见的任何一个动作或超时（为向后兼容，等于取消监视行动）。

下面是一个示例，如果Monit将在3个周期内重新启动服务2次，将取消监视服务：

	if 2 restarts within 3 cycles then unmonitor
要在禁用监视后使Monit再次检查服务，请从命令行运行monit monitor servicename。

超时设置自定义exec的示例：

	if 5 restarts within 5 cycles then exec "/foo/bar"
停止服务的示例：

	if 7 restarts within 10 cycles then stop
### 服务示例
一个完整的HOST监控服务语法：

	check host <service> address <address or ip>
	if failed
	xxx
	then alert
	alert xx@xxx
解释：
第一行是检查类型为host的服务，需要设定服务名及服务器地址；
第二行至第四行的意思是中间的预期代码`xxx`如果失败，则执行`then alert`；
最后一行`alert xx@xxx`配置局部推送的邮箱，可选。可以多行，表示配置多个。

第二行至第四行也可以写成一行：

	if failed xxx then alert

## 控制台访问验证
访问Monit Web界面主要通过ALLOW选项进行控制，ALLOW选项用于指定身份验证并仅授权特定客户端进行连接。

如果正在使用Monit命令行界面，至少需要一个明文密码（见下文），否则Monit命令行界面将无法连接到Monit Web界面。

尝试连接到Monit，但提交错误的用户名和/或密码的客户端将使用其IP地址记录。

### 主机和网络允许列表
Monit维护允许连接的主机和网络的访问控制列表。您可以添加任意数量的主机，但只允许具有有效域名或其IP地址的主机。

Monit将查询名称服务器以检查任何尝试连接的主机。如果主机（客户端）正在尝试连接，但无法在访问列表中找到或无法解决，Monit将立即关闭与客户端的连接。

配置文件示例：

	set httpd port 2812
	  allow localhost
	  allow my.other.work.machine.com
	  allow 10.1.1.1
	  allow 192.168.1.0/255.255.255.0
	  allow 10.0.0.0/8
在允许列表中未提及的客户端，尝试连接到Monit将被拒绝访问，并使用其IP地址记录。

### 明文用户和密码
如果allow语句包含用单独的`：`字符分隔的用户名和密码，Monit将使用基本认证。

注意：可以使用特殊字符，但对于非字母数字，必须引用密码。

句法：

 	ALLOW <username>:<password>

### 只读用户
最后，可以将一些用户定义为只读。只读用户可以读取Monit网页，但无法访问按钮，并且无法从Web界面更改服务。

	  set httpd port 2812
	      allow admin:password
	      allow hauk:password read-only
	      allow @admins
	      allow @users read-only
通过在 username：password 后使用只读关键字将用户设置为只读。在上述示例中，用户hauk被定义为只读用户，而admin用户具有所有访问权限。

