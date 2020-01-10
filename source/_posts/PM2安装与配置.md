---
title: PM2安装与配置t安装
catalog: true
toc_nav_num: true
tags:
  - Nodejs
catagories:
  - 开源工具
date: 2020-01-10 14:19:45
subtitle:
header-img:
updateDate:
top:
---



##  简介



[官方文档](http://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)

PM2是node进程管理工具，可以利用它来简化很多node应用管理的繁琐任务，如性能监控、自动重启、负载均衡等，而且使用非常简单。





## 安装



​    npm install -g pm2



## 常用命令



​    pm2 start app.js --name=fork  -i 0 #启动app.js 



​    \# --name=fork 命名为fork 

​    \# -i 0  根据CPU核数启动进程个数



​    pm2 start app.js --watch      # 当文件变化时自动重启应用

​    pm2 start script.sh           # 启动 bash 脚本

​    pm2 list                      # 列表 PM2 启动的所有的应用程序

​    pm2 monit                     # 显示每个应用程序的CPU和内存占用情况

​    pm2 show [app-name]           # 显示应用程序的所有信息

​    pm2 logs                      # 显示所有应用程序的日志

​    pm2 stop all                  # 停止所有的应用程序

​    pm2 stop 0                    # 停止 id为 0的指定应用程序

​    pm2 restart all               # 重启所有应用

​    pm2 reload all                # 重启 cluster mode下的所有应用

​    pm2 delete all                # 关闭并删除所有应用

​    pm2 delete 0                  # 删除指定应用 id 0

​    pm2 scale api 10              # 把名字叫api的应用扩展到10个实例pm2 reset [app-name]          # 重置重启数量

​    pm2 startup                   # 创建开机自启动命令

​    pm2 save                      # 保存当前应用列表

​    pm2 resurrect                 # 重新加载保存的应用列表



​    \#内存使用超过上限自动重启 可以加上--max-memory-restart参数

​    pm2 start app.js --max-memory-restart 20M

​    

## 配置文件详细介绍(常用配置,不完整,详细请查看官网)



​    {

​        "apps": {

​            "name": "wuwu",                             // 项目名          

​            "script": "./bin/www",                      // 执行文件

​            "cwd": "./",                                // 根目录

​            "args": "",                                 // 传递给脚本的参数

​            "interpreter": "",                          // 指定的脚本解释器

​            "interpreter_args": "",                     // 传递给解释器的参数

​            "watch": true,                              // 是否监听文件变动然后重启

​            "ignore_watch": [                           // 不用监听的文件

​                "node_modules",

​                "logs"

​            ],

​            "exec_mode": "cluster",                // 应用启动模式，支持fork和cluster模式

​            "instances": 4,                             // 应用启动实例个数，仅在cluster模式有效 默认为fork；或者 max

​            "max_memory_restart": 8,                    // 最大内存限制数，超出自动重启

​            "error_file": "./logs/app-err.log",         // 错误日志文件

​            "out_file": "./logs/app-out.log",           // 正常日志文件

​            "merge_logs": true,                         // 设置追加日志而不是新建日志

​            "log_date_format": "YYYY-MM-DD HH:mm:ss",   // 指定日志文件的时间格式

​            "min_uptime": "60s",                        // 应用运行少于时间被认为是异常启动

​            "max_restarts": 30,                         // 最大异常重启次数，即小于min_uptime运行时间重启次数；

​            "autorestart": true,                        // 默认为true, 发生异常的情况下自动重启

​            "cron_restart": "",                         // crontab时间格式重启应用，目前只支持cluster模式;

​            "restart_delay": "60"                      // 异常重启情况下，延时重启时间(以毫秒为单位)。默认值为0

​            "env": {

​               "NODE_ENV": "production",                // 环境参数，当前指定为生产环境 process.env.NODE_ENV

​               "REMOTE_ADDR": "爱上大声地"               // process.env.REMOTE_ADDR

​            },

​            "env_dev": {

​                "NODE_ENV": "development",              // 环境参数，当前指定为开发环境 pm2 start app.js --env_dev

​                "REMOTE_ADDR": ""

​            },

​            "env_test": {                               // 环境参数，当前指定为测试环境 pm2 start app.js --env_test

​                "NODE_ENV": "test",

​                "REMOTE_ADDR": ""

​            }

​        }

​    }