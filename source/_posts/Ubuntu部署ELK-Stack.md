---
title: Ubuntu部署ELK-Stack
catalog: true
toc_nav_num: true
tags:
  - Ubuntu
  - Linux
catagories:
  - Ubuntu
  - Linux
date: 2020-01-09 21:23:32
subtitle:
header-img:
updateDate:
top: 2
---


# Elasticsearch 7.5.1

## 下载
	wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.5.1-linux-x86_64.tar.gz
	wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.5.1-linux-x86_64.tar.gz.sha512
	shasum -a 512 -c elasticsearch-7.5.1-linux-x86_64.tar.gz.sha512
	tar -xzf elasticsearch-7.5.1-linux-x86_64.tar.gz
	cd elasticsearch-7.5.1/

## 配置
1. 修改vm.max_map_count大小

	//查看当前vm.max_map_count大小
	cat /proc/sys/vm/max_map_count
	//修改,root用户执行
	echo 262144 > /proc/sys/vm/max_map_count

2. 位置: elasticsearch-7.5.1/config/elasticsearch.yml

> [ELK搭建过程中出现的问题与解决方法汇总](https://www.cnblogs.com/hellxz/p/11057234.html)

文件内容:

	
	node.name: node-1
	
	# ----------------------------------- Paths ------------------------------------
	#
	# Path to directory where to store the data (separate multiple locations by comma):
	#
	#path.data: /path/to/data
	#
	# Path to log files:
	#
	#path.logs: /path/to/logs
	#
	
	# ---------------------------------- Network -----------------------------------
	#
	# Set the bind address to a specific IP (IPv4 or IPv6):
	#
	#network.host: 192.168.0.1
	network.host: 0.0.0.0
	#
	# Set a custom port for HTTP:
	#
	http.port: 9200
	#
	# For more information, consult the network module documentation.
	#
	# --------------------------------- Discovery ----------------------------------
	#
	# Pass an initial list of hosts to perform discovery when this node is started:
	# The default list of hosts is ["127.0.0.1", "[::1]"]
	#
	#discovery.seed_hosts: ["host1", "host2"]
	#
	# Bootstrap the cluster using an initial set of master-eligible nodes:
	#
	cluster.initial_master_nodes: ["node-1"]
	#
	# For more information, consult the discovery and cluster formation module documentation.
	


## 运行

	./elasticsearch -d

# Kibana 7.5.1

## 下载
	curl -O https://artifacts.elastic.co/downloads/kibana/kibana-7.5.1-linux-x86_64.tar.gz
	curl https://artifacts.elastic.co/downloads/kibana/kibana-7.5.1-linux-x86_64.tar.gz.sha512 | shasum -a 512 -c -
	tar -xzf kibana-7.5.1-linux-x86_64.tar.gz
	cd kibana-7.5.1-linux-x86_64/

## 配置
kibana-7.5.1-linux-x86_64/config/kibana.yml

文件内容:

	# Kibana is served by a back end server. This setting specifies the port to use.
	server.port: 5601
	
	# Specifies the address to which the Kibana server will bind. IP addresses and host names are both valid values.
	# The default is 'localhost', which usually means remote machines will not be able to connect.
	# To allow connections from remote users, set this parameter to a non-loopback address.
	server.host: "0.0.0.0"
	
	# The URLs of the Elasticsearch instances to use for all your queries.
	elasticsearch.hosts: ["http://localhost:9200"]
	
	# Specifies locale to be used for all localizable strings, dates and number formats.
	# Supported languages are the following: English - en , by default , Chinese - zh-CN .
	i18n.locale: "zh-CN"

## 运行

	//在后台运行
	./Kibana &
	//退出shell
	exit
	
	//查看进程id
	fuser -n tcp 5601

# Logstash 7.5.1
暂无

# 客户端Server功能配置

通过Kibana前端配置
- 收集日志:首页-->添加日志数据-->Apache日志等
- APM: 首页-->添加APM

## 收集Apache日志

### 安装Filebeat
	curl -L -O https://artifacts.elastic.co/downloads/beats/filebeat/filebeat-7.5.1-linux-x86_64.tar.gz
	tar xzvf filebeat-7.5.1-linux-x86_64.tar.gz

### 配置
位置: filebeat-7.5.1-linux-x86_64/filebeat.yml
文件内容:

	
	filebeat.inputs:
	
	# Each - is an input. Most options can be set at the input level, so
	# you can use different inputs for various configurations.
	# Below are the input specific configurations.
	
	- type: log
	
	  # Change to true to enable this input configuration.
	  enabled: false
	
	  # Paths that should be crawled and fetched. Glob based paths.
	  paths:
		- /var/log/*.log
		#- c:\programdata\elasticsearch\logs\*
	


	#============================= Filebeat modules ===============================
	
	filebeat.config.modules:
	  # Glob pattern for configuration loading
	  path: ${path.config}/modules.d/*.yml
	
	  # Set to true to enable config reloading
	  reload.enabled: false
	
	  # Period on which files under path should be checked for changes
	  #reload.period: 10s
	
	#==================== Elasticsearch template setting ==========================
	
	setup.template.settings:
	  index.number_of_shards: 1
	  #index.codec: best_compression
	  #_source.enabled: false
	
	#================================ General =====================================
	
	# The name of the shipper that publishes the network data. It can be used to group
	# all the transactions sent by a single shipper in the web interface.
	#name:
	
	# The tags of the shipper are included in their own field with each
	# transaction published.
	#tags: ["service-X", "web-tier"]
	
	# Optional fields that you can specify to add additional information to the
	# output.
	#fields:
	#  env: staging


	#============================== Kibana =====================================
	
	# Starting with Beats version 6.0.0, the dashboards are loaded via the Kibana API.
	# This requires a Kibana endpoint configuration.
	setup.kibana:
	
	  # Kibana Host
	  # Scheme and port can be left out and will be set to the default (http and 5601)
	  # In case you specify and additional path, the scheme is required: http://localhost:5601/path
	  # IPv6 addresses should always be defined as: https://[2001:db8::1]:5601
	  host: "localhost:5601"
	
	  # Kibana Space ID
	  # ID of the Kibana Space into which the dashboards should be loaded. By default,
	  # the Default Space will be used.
	  #space.id:
	
	#================================ Outputs =====================================
	
	# Configure what output to use when sending the data collected by the beat.
	
	#-------------------------- Elasticsearch output ------------------------------
	output.elasticsearch:
	  # Array of hosts to connect to.
	  hosts: ["localhost:9200"]
	
	  # Optional protocol and basic auth credentials.
	  #protocol: "https"
	  #username: "elastic"
	  #password: "changeme"
	
	#----------------------------- Logstash output --------------------------------
	#output.logstash:
	  # The Logstash hosts
	  #hosts: ["localhost:5044"]
	
	  # Optional SSL. By default is off.
	  # List of root certificates for HTTPS server verifications
	  #ssl.certificate_authorities: ["/etc/pki/root/ca.pem"]
	
	  # Certificate for SSL client authentication
	  #ssl.certificate: "/etc/pki/client/cert.pem"
	
	  # Client Certificate Key
	  #ssl.key: "/etc/pki/client/cert.key"

### 运行
	./filebeat -e


# APM Server搭建

## 下载
	curl -L -O https://artifacts.elastic.co/downloads/apm-server/apm-server-7.5.1-linux-x86_64.tar.gz
	tar xzvf apm-server-7.5.1-linux-x86_64.tar.gz
	cd apm-server-7.5.1-linux-x86_64

## 配置
位置: apm-server-7.5.1-linux-x86_64/apm-server.yml
文件内容:

	######################### APM Server Configuration #########################
	
	################################ APM Server ################################
	
	apm-server:
	  # Defines the host and port the server is listening on. Use "unix:/path/to.sock" to listen on a unix domain socket.
	  host: "0.0.0.0:8200"


	  #---------------------------- APM Server - Agent Configuration -----------------------
	
	  # When using APM agent configuration, information fetched from Kibana will be cached in memory for some time.
	  # Specify cache key expiration via this setting. Default is 30 seconds.
	  #agent.config.cache.expiration: 30s
	
	  #kibana:
		# For APM Agent configuration in Kibana, enabled must be true.
		#enabled: false
	
		# Scheme and port can be left out and will be set to the default (`http` and `5601`).
		# In case you specify an additional path, the scheme is required: `http://localhost:5601/path`.
		# IPv6 addresses should always be defined as: `https://[2001:db8::1]:5601`.
		host: "localhost:5601"


	#================================ Outputs =================================
	
	# Configure the output to use when sending the data collected by apm-server.
	
	#-------------------------- Elasticsearch output --------------------------
	output.elasticsearch:
	  # Array of hosts to connect to.
	  # Scheme and port can be left out and will be set to the default (`http` and `9200`).
	  # In case you specify and additional path, the scheme is required: `http://localhost:9200/path`.
	  # IPv6 addresses should always be defined as: `https://[2001:db8::1]:9200`.
	  hosts: ["localhost:9200"]
	#---------------------------- Logstash output -----------------------------
	#output.logstash:
	  # Boolean flag to enable or disable the output module.
	  #enabled: false
	
	  # The Logstash hosts.
	  hosts: ["localhost:5044"]

## 运行

	./apm-server -e

## APM 代理
### 下载 APM 代理
从 [Maven Central](http://search.maven.org/#search%7Cga%7C1%7Ca%3Aelastic-apm-agent) 下载代理 jar。切勿将该代理添加为您的应用程序的依赖项。

### Tomcat配置
修改/home/ubuntu/work/apache/apache-tomcat-8.5.8/bin/catalina.sh

		cp catalina.sh catalina.sh.bak
		vim catalina.sh
	
		243 # Register custom URL handlers
		244 # Do this here so custom URL handles (specifically 'war:...') can be used in the security policy
		245 JAVA_OPTS="$JAVA_OPTS -Djava.protocol.handler.pkgs=org.apache.catalina.webresources"
		246
		//插入以下配置
		247 JAVA_OPTS="$JAVA_OPTS -javaagent:/home/ubuntu/work/apm-server-7.5.1-linux-x86_64/elastic-apm-agent-1.12.0.jar \
		248       -Delastic.apm.service_name=SG-Gateway \
		249       -Delastic.apm.server_url=localhost:8200 \
		250       -Delastic.apm.application_packages=com.u8.server"

重启Tomcat

	./shutdown.sh
	./startup.sh