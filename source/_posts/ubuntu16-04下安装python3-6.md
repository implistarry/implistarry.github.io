---
title: ubuntu16.04下安装python3.6
catalog: true
toc_nav_num: true
tags:
  - Python
  - Linux
catagories:
  - Python
  - Linux
abbrlink: '8838'
date: 2020-01-09 21:23:32
subtitle:
header-img:
updateDate:
---

# 安装检查
Ubuntu默认安装了Python2.7和3.5
>[warning]请注意，系统自带的python千万不能卸载！

输入命令`python` 查看当前版本
按Ctrl+D退出python命令行

> 第三方仓库安装方式失效
add-apt-repository ppa:jonathonf/python-3.6

# 安装
去官网下载python3.6.5
[下载链接](https://www.python.org/downloads/release/)
1、解压

	sudo tar -zxvf    ××××××
2、安装依赖

 	sudo apt-get install libffi-dev

3、配置

	 cd Python3.6.5
	 ./configure --prefix=/opt/ptyhon3.6

4、编译

	sudo make

5、安装

	sudo make install

6、创建软连接

	sudo ln -s /opt/python3.6/bin/python3.6  /usr/bin/python3.6

7、看是否安装成功

	python3.6 -V

8、修改系统默认python版本为3.6，并更新

	cd /usr/bin
	rm python
	ln -s python3.6 python
