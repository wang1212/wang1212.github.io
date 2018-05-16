---

    {
        "title": "Linux-基础概念",
        "keywords": ["Linux", "基础"],
        "summary": "Linux 是在做一些较为底层的开发工作时的必要开发环境，了解 Linux 也对操作系统概念的理解有很大的帮助，这篇文章是对 Linux 的一些基础概念的阐述。",
        "ctime": "2016-5-29 15:34:00",
        "mtime": "2016-5-29 15:34:00"
    }

--- 

## Linux

　　Linux 的诞生是在上世纪 90 年代，距离现在也就二十年左右，是一种优秀的开发环境，大多时候应用在嵌入式系统开发当中。**Linux 是一个开源的基于 POSIX 和 UNIX，支持多用户、多任务、多线程和多CPU的操作系统。事实上，linux 指的是其操作系统的内核。**

### 特点

　　下面是一些 Linux 系统的一些特点。

- 开源

    　　Linux 操作系统的源代码是公开的，遵循 GPL 协议（开源协议），所以 Linux 允许任何人去查看它的源代码，并进行修改。这对于开发人员来说相当于提供了一个了解操作系统原理的绝佳机会。

- 免费

    　　Linux 操作系统的使用是免费的，但需要遵循 GPL 协议。很多人认为开源即免费，这其实是个概念上的错误。有很多的商业项目是开源的，开源即允许个人用户去查看源代码，了解其实现过程，但并不意味着你可以将其免费用作商业用途。但是，Linux 不仅是开源的，还是免费的。还需要注意的一点就是，Linux有不同的发行版本，部分都有商业公司支持，这样的 Linux 用作商业用途的话需要购买其许可证，之后会得到更好的技术服务支持。

- 兼容 POSIX 标准

    　　POSIX 是一种可移植操作系统接口标准，POSIX 标准定义了操作系统应该为应用程序提供的接口标准，是 IEEE 为要在各种 UNIX 操作系统上运行的软件而定义的一系列API标准的总称，其正式称呼为 IEEE 1003，而国际标准名称为 ISO/IEC 9945。这样的好处就是，在 Linux 环境下，我们可以通过相应的模拟器运行常见的 DOS、Windows 的程序。

- 多用户、多任务

    　　与微软 Windows 系统一样，Linux 也支持多用户、多任务、多线程、多CPU，这是现代操作系统所必须具备的能力。

- 基于命令行

    　　Linux 操作系统准确的说是一个基于命令行的系统，它并没有实现 GUI（图形用户界面），这就是和微软 Windows 的不同之处，这也使得 Linux 根本不可能面向社会上的大众用户。

- 可移植性

    　　Linux 可运行在不同的CPU平台上，可移植性很强，所以 Linux 在嵌入式系统开发当中应用广泛。

### linux 内核

　　**Linux 操作系统对于用户空间和内核空间有严格的区分，他们之间有明显的界限。**用户空间主要包含GNU C库（glibc）和用户应用程序（User Applications）等；内核空间则包含系统调用接口（System Call Interface，SCI）、内核（Kernel）、板级支持包（Board Support Package，BSP）三层。

　　Windows 系统的内核是 NT，它是一种微内核，只提供操作系统必要的功能，例如进程管理，内存管理等等，微内核可以更方便的进行升级，扩展；而** Linux 操作系统的内核是 linux，它是一种宏内核**，不仅在内核中实现了操作系统必要的服务，而且硬件设备驱动也存在于内核中，内核效率相对于微内核来说较高，对硬件设备支持也更全面。所有不同发行版本的 Linux 操作系统都是使用的统一标准的 linux 内核，版本号由 Linux 社区所控制。

　　linux内核主要包含以下几部分子系统：

- 系统调用接口（System Call Interface，SCI）

    　　系统调用接口主要实现从用户空间到内核的函数调用，是一个非常有用的函数调用多路复用和多路分解服务。

- 进程管理（Process Management，PM）

    　　进程管理主要完成进程调度，管理进程共享内存空间等。

- 内存管理（Memory Management，MM）

    　　内存管理主要完成对系统内存资源的管理，以及实现虚拟内存和硬盘资源交换。

- 虚拟文件系统（Virtual File System，VFS）

    　　虚拟文件系统是为文件系统提供的通用的借口抽象，为 SCI 和内核与文件系统之间提供了一个交换层。

- 网络堆栈（Network Stack）

    　　网络堆栈提供了大量的网络协议的用户接口，例如IP、TCP协议。

- 设备驱动（Device Drivers，DD）

    　　包含了硬件设备驱动，并且占用了内核大量的资源。

- 依赖体系结构的代码（Arch）

    　　包含 linux 内核支持的硬件体系结构相关的核心代码。

　　linux 内核还是一个动态内核，支持动态添加或删除软件组件，可以在任何时候根据需要将特定模块进行插入，即实现用户定制功能。

### Shell

　　Linux 是一个基于命令行的操作系统，提供了一个命令解释器，即 shell（壳）。Shell 是一个软件，是操作系统的用户界面，用户通过在 shell 中输入命令，然后命令解释器解释完成后将指令送往内核中执行，来实现对 Linux 的操作。

　　Linux 中的 shell 也有不同的版本：Bourne Shell（贝尔实验室开发）、Bash（GNU 开发）、C shell（Sun 公司开发）、Z shell（集成了前几种 shell 的优点）等等。

### Bootloader

　　**Bootloader 是系统的启动加载程序，用来初始化硬件设备、建立内存空间映射图，为调用内核准备好正确的环境。**Bootloader 一般包括两种不同的操作模式：

- 启动加载模式

    　　此模式下，Bootloader 会将操作系统从固态存储设备上加载进内存。

- 下载模式

    　　此模式下，目标机可通过串口连接或网络连接从主机下载文件，例如内核映射和根文件系统映射。

　　Bootloader 的作用主要是完成系统配置、中断接管、系统引导；装载内核、根文件系统、参数传递、内核调试、内核和根文件系统的下载。

### 文件（设备）系统

　　Linux 操作系统支持非常多的文件系统类型，例如 ext、ext2、ext3、iso9660、xfs、ntfs、proc 等等。而且，**Linux 中的一切设备都抽象成为了文件，用户通过设备文件（设备节点）来使用设备驱动操作设备。**Linux 系统中将设备分为三类：

- 字符设备

    　　指那些必须以串行顺序依次进行访问的设备，如触摸屏、磁带驱动器、鼠标等，用字节流存取文件，没有缓冲区。

- 块设备

    　　块设备可以从设备的任意位置读取一定长度数据的设备，包括硬盘、磁盘、U盘、SD卡等,有缓冲区。

- 网络设备

    　　网络设备不同于前两者，不能直接对文件进行操作，不能直接访问网络设备驱动，在 Linux 中通过设备接口和 Socket（套接字）技术（协议）来进行网络设备（进程）之间的通信，从而访问网络设备驱动，实现对网络设备的操作。

### 根目录

　　Windows 下用户可以将硬盘实现分区，即C盘、D盘等，文件存储的实现是多个并行树形结构；而在**Linux 下硬盘用户是不可以分区的，文件存储的实现是单个树形结构，最顶层则是根目录`/`。**

　　在根目录下，有许多一级子目录，这些子目录有很多必须的目录，即 Linxu 不可或缺的目录，主要有：

- /bin

    　　存储一些普通的系统所必需用户命令，是二进制可执行命令文件；

- /boot

    　　存储 Linux 操作系统的引导程序，启动加载文件等；

- /dev

    　　存储系统设备文件，并不是设备驱动程序，而是设备端口文件；

- /etc

    　　系统配置文件，服务器配置文件，用户账号密码等；

- /home

    　　用户工作主目录，用户的个人配置，个人环境变量等都在此存储；

- /lib

    　　动态共享库文件，类似 Windows 上的 Dll 文件；

- /proc

    　　系统信息，系统运行时由内存自动生成；

- /root

    　　管理员用户的工作目录；

- /sbin

    　　存储管理员用户的命令文件，是二进制可执行命令文件；

- /usr

    　　存储应用程序文件和工具等；

- /srv

    　　存储系统服务文件。

　　以上就是 Linux 根目录下一些关键性目录及其存储的文件。需要注意的是：**Linux 下的文件存放并不像 Windows 下那样具有随意性，很多文件需要存放在相应的目录中才行。**

## 图形用户界面（GUI）

　　GUI (图形用户界面)可以帮助用户进行更便捷的操作，提高用户的使用体验，能极大的提高处理日常工作的效率。在以上特点中，我明确的说明了 Linux 没有实现 GUI，可能很多人不同意，明明现在使用的 Linux 都有图形用户界面。这里呢，有一个非常重要的概念：**Linux 的 GUI 并没有在其系统中真正实现。**

　　Linux 操作系统的GUI是通过X（视窗）协议来实现的，所有 Linux 下 GUI 的实现都是需要通过与 X 服务器的通讯来完成，即就是 GUI 在 Linux 中相当于一个应用程序，即以独立进程存在，这个进程就是X服务器。一句话，GUI 不是 Linux 操作系统的一部分，它是独立于操作系统之外的。也就是说，即便是抛弃 GUI 的实现，Linux 依然可以通过命令行完成所有的用户命令。

　　既然说到 GUI，就不得不说微软的操作系统，Windows 之所以能在面对大众用户的商业市场取得巨大成功，是有原因的。这个原因就是，微软通过系统底层函数，真正实现了 GUI，使得其 Windows 操作系统的用户体验得到了极大的提升，让大多数人的日常工作效率得到了极大的提高，也让人们在日常生活进行浏览网页，玩游戏等等接触互联网的途径更为便捷，这对于促进互联网的大众化发展也是极具重大意义的。

　　可能有的人会说，既然 Linux 可以通过 X 协议实现 GUI，那应该也具备面向大众市场的能力。这么说的人可能没有接触过 Linux，若接触过但你忽略了最重要的因素：质量和性能。到目前为止，Linux 下 GUI 实现的还不能称之为完美，最起码要达到与 Windows 下 GUI 一样的用户体验还是有很大差距的。之所以出现这样的情况，是因为 Windows 通过系统底层函数调用完成 GUI 的描绘，这本身就是一种系统内置服务，效率很高，并且通过 Windows系统多年来的迭代升级，质量也会更高；然而，在 Linux 下每一次的 GUI 实现，都要依靠与X服务器通讯并调用 CPU 来描绘 GUI，这样的后果就是严重影响计算机性能，即便是在I5处理器下，性能消耗也是很严重，同时 Linux 下 GUI 实现的质量明显不足，这是因为缺乏商业支持的结果。

## 应用程序安装

　　Linux 是一个开源的操作系统，上面使用的软件大多数为开源软件，安装应用程序的方式与 Windows 很不相同。Linux 下的应用程序安装包多为源码包，在安装前需要进行编译，然后才能进行安装；不过，也有 RPM 包，安装过程中不需要手动编译，对技术要求较低。但是，源码包适合所有发行版本的 Linux，RPM 包却没有这个优点。

## 结语

　　这篇文章并不能涵盖 Linux 操作系统的所有概念，Linux 的可移植性很强，使得其在嵌入式系统开发中有着广泛的应用，智能手机操作系统安卓（Android）使用的就是 linux 内核。可以说，Linux 操作系统为开发者提供了一个优秀的开发环境，但 Linux 并不适合所有人。