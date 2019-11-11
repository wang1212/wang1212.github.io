---

    {
        "title": "ODM 本地部署",
        "tags": ["Computer Technology", "GIS"],
        "keywords": ["Computer Technology", "GIS"],
        "summary": "GIS，ODM（OpenDroneMap）是开源的无人机航片处理工具套件，基本上已成为该领域开源的事实标准，这篇文章主要记录如何在本地进行 ODM 工具套件的部署。",
        "ctime": "2019-11-11 11:26:21",
        "mtime": "2019-11-11 11:26:21"
    }

---

## ODM

　　[OpenDroneMap](https://www.opendronemap.org/) 是开源的无人机航片处理工具套件，其构建维护了丰富的解决方案生态系统，基本上已成为该领域内开源的事实标准。

　　ODM 团队提供了丰富的工具，包括命令行工具包，具有可视化、存储和数据分析的 Web 应用程序，轻量级 REST API，Python SDK，集群支持等，而这些资源全部开源，支持本地部署和构建。其中，WebODM 是一个提供可视化、存储、数据分析的无人机影像处理平台，采用了 Docker 容器化部署方案。

## WebODM 本地部署

　　ODM 团队一直在致力于维护庞大的 ODM 技术生态，同时也在不断的完善官方文档，下面为官方的本地化部署指南：

> [WebODM 本地化部署指南（官方文档）](https://docs.opendronemap.org/installation.html#installation)

　　官方文档目前相比较之前已改善很多，步骤也相当清晰，在这里只是梳理一下部署过程，并记录了一些要注意的细节。

　　WebODM 的整体架构设计很清晰，分解成了不同的模块：

	ODM（算法处理，底层 API） -> NodeODM（轻量级 REST API） -> ClusterODM（集群支持，负载均衡） -> WebODM（Web 应用）

　　各个模块已由 ODM 团队制作成了 Docker 镜像发布到了 Docker Hub 上面，最简单的方案就是直接利用镜像进行部署，当然也支持自己构建，此处采用镜像部署。

　　官方推荐的环境是 Ubuntu 16.04 操作系统，64 位多核 CPU，至少 4GB 内存，20GB 磁盘空间。在这里，我们采用 Ubuntu 18.04 Server 宿主操作系统环境，不建议在 Windows 上部署，耗时且容易出错。

### 安装 Ubuntu

　　可以直接在物理机安装 [Ubuntu 18.04 Server](https://ubuntu.com/download/server) 操作系统，也可以利用虚拟机安装。

　　安装完成后进入系统，首先创建 `root` 用户，Ubuntu 默认没有 `root` 用户。执行：

	sudo passwd root  # 该命令会要求先输入当前登录用户命令，再输入两遍要设置的 root 用户命令

　　其次，换源。`apt` 是 Ubuntu 官方的软件包管理器，其仓库地址在国外，安装软件容易出错且速度缓慢，换为国内仓库地址（中科大、阿里云、网易云等等），网上搜索即可。主要改动的文件是 `/etc/apt/sources.list`，改动前注意备份。换掉仓库地址之后更新源，执行：

	sudo apt-get update
	sudo apt-get upgrade

　　推荐使用 [WinSCP](https://winscp.net/) 和 [PuTTY](https://www.putty.org/) 利用 SSH 协议远程管理 Linux 操作系统。Ubuntu 默认不支持 `root` 用户远程登录，需修改 SSH 配置。先检查 ssh 服务是否已安装并在运行，执行：

	sudo ps -e | grep ssh

　　大部分情况下应该是已存在的，如果不存在则安装，执行：

	sudo apt-get install openssh-server

　　然后，修改 `/etc/ssh/sshd_config` 配置文件，将其中的 `PermitRootLogin prohibit-password` 修改为 `PermitRootLogin yes` 即可，保存后需重启服务，执行：

	service ssh restart

　　这样就可以利用 WinSCP 和 PuTTY 使用 `root` 用户远程管理多个 Linux 操作系统了。查看系统的 IP 地址，执行：

	ifconfig -a  # eth 开头的为以太网卡地址

### 安装 Git

　　安装前先看看是不是已经安装了 Git，执行：

	git --version

　　大部分情况下，Ubuntu 系统都会在安装时自动安装 Git，如未安装，执行：

	sudo apt-get install git

### 安装 Python3

　　这里其实安装 Python2 或者 Python3 都可以，建议安装 Python3。检查是否已安装：

	python3 -V
	pip3 -V

　　如未安装，则执行：

	sudo apt-get install python3
	sudo apt-get install python3-pip  # 注意，pip 不要安装错，必须为 python3-pip

　　安装完成后，上网搜索将 pip 的源换为国内源（中科大、阿里云、网易云等等）。默认情况下配置文件不存在，新建一个即可：

	mkdir ~/.pip
	touch ~/.pip/pip.conf

### 安装 Docker

　　这里必需要注意的是，不要使用 `apt` 安装 Docker，因为更新不及时，也不要查看网络上的教程，容易出错，直接根据官方文档进行安装：

> [Docker 安装指南（官方文档）](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

　　安装过程中遇到以下步骤时，进行换源：

	sudo add-apt-repository \
	"deb [arch=amd64] https://download.docker.com/linux/ubuntu \
	$(lsb_release -cs) \
	stable"

　　其中，`deb [arch=amd64] https://download.docker.com/linux/ubuntu` 为 Docker 官方地址，在国外，基本很难安装成功，上网搜索换为国内地址（中科大、阿里云、网易云等等）再安装。顺利安装完成后，根据官方文档，测试 `hello-world` 镜像是否能运行成功。

　　Docker Hub 是 Docker 官方提供的镜像文件托管仓库，在国内访问速度较慢，上网搜索换为国内源（中科大、阿里云、网易云等等）。默认情况下配置文件应该是不存在的，创建一个即可：

	touch /etc/docker/daemon.json

　　换掉源之后，重启 Docker 服务，执行：

	service docker restart

　　WebODM 所要用到的 Docker 镜像文件国内仓库均没有，所以稍后安装时将会耗费较长时间。不过，第一次安装之后，镜像会下载到本地，执行：

	docker images

　　列出在本地已存在的所有镜像文件，可以利用 `docker save` 命令将要用的镜像文件导出，稍后便可利用 `docker load` 命令在其它系统中导入镜像文件，这样就不需要多次下载了，节省时间。

> [docker save（官方文档）](https://docs.docker.com/engine/reference/commandline/save/)

### 安装 docker-compose

　　`docker-compose` 是 Docker 的一个命令行工具，提供管理由多个 docker 容器组成的一个应用程序的能力，前面说过 WebODM 由几个模块组成，每个模块运行在不同的 Docker 容器中，所以要借助该工具。先检查是否已安装：

	docker-compose --version

　　如未安装，执行：

	sudo pip3 install docker-compose

### 安装 WebODM

　　其实，前面所有的步骤都只是为这一步自动化完成 WebODM 安装提供所必要的运行环境。ODM 团队编写了 Bash 脚本，提供了很多命令，可以通过几条命令完成 WebODM 的安装、后期更新、重启，方便很多。

　　首先，利用 Git 下载仓库代码：

	git clone https://github.com/OpenDroneMap/WebODM

　　下载比较耗时，约有上百兆甚至 1GB 多文件，运气好的话，10 多分钟就可以完成。如果实在缓慢，可以申请一个 [Gitee](https://gitee.com/) 帐号，将 GitHub 上的该仓库导入你的 Gitee 仓库，然后从 Gitee 下载会非常快，几分钟即可完成。

　　下载完成后，进入目录，开始安装 WebODM，执行 Bash 脚本：

	cd WebODM
	./webodm.sh start

　　这个过程中，因为要从 Docker Hub 拉取几个镜像文件（约 7GB），会异常缓慢，运气好的话半个小时到一小时就能完成，否则只能等。

　　安装完成后，命令行会提示你该应用程序已经运行在 `localhost:8000` 上了，打开另一个命令行窗口，利用 `curl` 命令测试一下：

	curl localhost:8000 -L # 看到页面代码输出后，说明已成功安装

　　成功后，可以在（内网中）其它拥有 GUI 的操作系统中用浏览器打开 `ip:8000` 来访问 WebODM 管理页面了，用 `ifconfig -a` 命令可查看 ip 地址（`eth` 开头的，`inet` 信息即为 ipv4 地址）。

### 设置系统静态 IP

　　为了方便管理多个 Linux 系统，将其设置为静态 IP 会更方便，如果是在虚拟机中安装的，将虚拟机和宿主机的网络配置为桥接模式，物理机直接安装的则不需要。

　　然后，配置静态 IP，Ubuntu 18.04 Server 使用 [netplan](https://netplan.io/) 来管理配置网络。编辑 `/etc/netplan/50-cloud-init.yaml` 文件：

	network:
		ethernets:
			eth0:
				addresses: [192.168.1.120/24]
				dhcp4: false
				dhcp6: false
				gateway4: 192.168.1.1
				nameservers:
					addresses: [114.114.114.114, 8.8.8.8]
					search: []
		version: 2

　　静态 IP 的配置大致如上，其中 `addresses` 为要配置的 IP 地址，务必设置 `dhcp4` 和 `dhcp6` 为 `false`，否则会出错。编辑保存之后，执行：

	sudo netplan apply

　　更新了网络配置之后，测试网络是否正常：

	ping www.baidu.com # 测试是否能访问外网
	ping <local_net_ip> # 测试是否能访问局域网中其它主机

## 部署更多处理节点

　　这样安装的 WebODM 只有一个 NodeODM 处理节点，但具备所有的功能。其架构大致为：

	ODM（算法处理，底层 API） -> NodeODM（处理节点，轻量级 REST API） -> WebODM（Web 应用）

　　而我们可以在其它服务器上部署多个 NodeODM 节点添加到 WebODM 中，即可实现多节点并行处理多个任务，现在也支持利用[拆分合并](https://docs.opendronemap.org/large.html#)实现多节点处理同一个任务。其架构大致为：

	ODM（算法处理，底层 API） -> NodeODM（多个处理节点，轻量级 REST API） -> ClusterODM（集群支持，负载均衡） -> WebODM（Web 应用）

### 部署 NodeODM

　　安装多个 [NodeODM](https://github.com/OpenDroneMap/NodeODM) 处理节点非常简单，在其它多个内网服务器上配置好必要的运行环境（Ubuntu、Git、Python3、Docker），利用 `docker save` 和 `docker load` 命令，将安装 WebODM 时下载的 `opendronemap/nodeodm` 复制到其它服务器上，这样就不用再从 Docker Hub 下载，节省大量时间。

　　执行：

	docker images

　　查看是否本地已成功导入 `opendronemap/nodeodm` 镜像文件，已成功则直接执行：

	docker run --rm -it -p 3000:3000 opendronemap/nodeodm -q 1 --token <secret>

　　其中 `<secret>` 为要连接该处理节点时的密钥，可省略 `--token` 选项。运行成功后，可访问 `localhost:3000/?token=<secret>` 查看，页面成功显示则部署成功，设置好该服务器的静态 IP 后，即可在 WebODM 管理页面将该节点加入队列中，提供并行处理多个任务的能力。

### 部署 ClusterODM

　　NodeODM 只能支持一个节点处理一个任务，要缩短时间，提高效率，必然有多个 NodeODM 节点处理同一个任务的需求，而 ODM 团队近期（2019年 6 月）宣布了[拆分合并](https://docs.opendronemap.org/large.html#)的新特性，并在不断优化，而其设计也非常简洁，只需使用 [ClusterODM](https://github.com/OpenDroneMap/ClusterODM) 来自动管理多个 NodeODM 节点即可。

　　同样的，任意找一台内网中的服务器配置好必要的运行环境（Ubuntu、Git、Python3、Docker），执行：

	docker run -ti -p 3001:3000 -p 8080:8080 -p 10000:10000 opendronemap/clusterodm

　　此时会从 Docker Hub 下载 `opendronemap/clusterodm` 镜像文件（约 1GB），如果宿主机 `3001` 端口已被占用换成其它端口即可。运行成功后，可访问 `localhost:10000` 查看已加入的 NodeODM 节点信息。ClusterODM 对 NodeODM 的管理操作（添加、删除、查看），都是通过 telnet 协议完成：

	telnet localhost 8080

　　连接成功后，即可管理 NodeODM 节点，输入 `HELP` 可查看所有命令。

　　此时将需要作为集群部署的 NodeODM 节点从 WebODM 管理页面中删除，而是直接添加 ClusterODM，这样在 WebODM 中创建的任务如果选择了 ClusterODM 作为处理节点，其会自动协调连接到 ClusterODM 的所有空闲 NodeODM 节点并行处理该任务。

　　这里还需要注意的是，如果要让集群生效，需要在创建任务的时候将 `sm-cluster` 选项设置为 `true`，同时调整 `split` 和 `split-overlap` 选项，如果失败，说明 `split` 和 `split-overlap` 选项参数有问题，调整后再试。具体设置项参考以下文档：

> [ODM 配置项（官方文档）](https://docs.opendronemap.org/arguments.html)
