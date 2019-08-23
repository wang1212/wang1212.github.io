---

    {
        "title": "网络通信关键概念",
        "tags": ["Computer Technology", "Protocol"],
        "keywords": ["Computer Technology", "Protocol", "Key Concept"],
        "summary": "计算机网络是通过通信设备与线路将地理上分散并且具有独立功能的计算机系统连接在一起，并由功能完善的软件来控制，进而实现资源共享的系统。从物理组成上来看，计算机网络包括硬件、软件和协议三大部分。计算机网络中结点间相互通信是由控制信息传送的网络协议及其他相应的网络软件共同实现的。在计算机网络通信中，有部分关键性概念需要理解透彻，在此做一总结。",
        "ctime": "2016-6-18 16:17:00",
        "mtime": "2016-6-18 16:17:00"
    }

---

## 网络通信协议

　　**网络通信协议简称网络协议（Poctocol），是指为了能在计算机网络中进行数据交换，实现资源共享而建立的通信规则、标准或约定的集合。**在计算机网络中，只有采用相同网络协议的计算机才能进行信息的交流与沟通。网络协议有以下三个基本要素：

- 语义（Semantics）

    　　规定双方完成通信需要的控制信息及应执行的动作。

- 语法（Syntax）

    　　规定通信双方交换的数据或控制信息的格式和结构。

- 时序（Timing）

    　　规定通信双方彼此的应答关系，包括速度的匹配和顺序。

## 点-点传输 & 端-端传输

　　在网络通信过程中，定义了两种数据传输方式：**点到点传输**和**端到端传输**。

### 点-点传输

　　**点到点（Point-To-Point，PTP）传输方式对应于物理拓扑，是一种更注重过程的传输方式。**点到点传输不需要建立连接，在网络中的两个直接相连相邻节点之间的数据传输方式就是点到点传输，即相邻设备之间不存在其他设备。在OSI体系结构中，底三层通信子网（物理层、链路层、网络层）采用的就是点到点传输方式。

- 优点

    　　发送端设备送出数据后，它的任务已经完成，不需要参与整个传输过程，这样不会浪费发送端设备的资源。另外，即使接收端设备关机或故障，点到点传输也可以采用存储转发技术进行缓冲。

- 缺点

    　　发送端发出数据后，不知道接收端能否收到或何时能收到数据。

### 端-端传输

　　**端到端（End-To-End，ETE）传输方式对应于逻辑拓扑，是一种更注重结果的传输方式。**
端到端传输是依赖于网络连接的，网络要通信必须建立连接，无论（源和目的）之间经过多少个网络节点，只要建立连接就属于端到端传输，即这种连接是一种逻辑链路。在 OSI 体系结构中，高四层（传输层、会话层、表示层、应用层）采用的就是端到端传输方式。

- 优点

    　　逻辑链路建立后，发送端知道接收设备一定能收到，而且经过中间交换设备时不需要进行存储转发，因此传输延迟小。

- 缺点

    　　直到接收端收到数据为止，发送端的设备一直要参与传输。如果整个传输的延迟很长，那么对发送端的设备造成很大的浪费；而且如果接收设备关机或故障，那么端到端传输不可能实现。

## 面向连接协议 & 无连接协议

　　网络通信协议可分为两种类型：**面向连接协议**和**无连接协议**。

### 面向连接协议

　　**采用面向连接协议（Connection-oriented Protocol）进行通信时，发送端与接收端必须要建立连接，即两个端点之间建立数据通信信道（虚电路）。**面向连接的方式通常提供的是可靠的传输服务，它能保证数据一定能够传送到目的地，而且数据内容不发生变化。 TCP 协议就是一种面向连接的协议，它提供了面向连接、可靠的字节流服务。

### 无连接协议

　　**采用无连接协议（Connectionless Protocol）进行通信时，发送端与接收端不需要建立连接，只需要知道接收端地址即可。**无连接的方式通常提供的是不可靠的传输服务，它不能保证数据一定能够到达目的地，但它可以检验出到达目的地的数据是否完整；另一方面，由于不需要建立连接，这种方式更快一些。IP、UDP 协议就是无连接的协议，它们也是数据报协议，不是通过字节流而是分组的数据报进行数据传输。

## 电路交换 & 报文交换 & 分组交换

　　网络数据交换技术主要有三种：**电路交换**、**报文交换**、**分组交换**。现在主要使用电路交换和分组交换技术。

### 电路交换

　　**电路交换（Circuit Switching，也称线路交换）是一种面向连接的服务，即两台计算机通过通信子网进行数据交换之前，首先要在通信子网中建立一条实际的、专用的（独占的）物理线路连接。**最典型的例子就是电话通信系统。

- 优点

    　　通信线路为通信双方专用，数据直达，所以传输数据的时延非常小；通信双方之间的物理通路一旦建立，双方可以随时通信，实时性强；双方通信时按发送顺序传送数据，不存在失序问题；电路交换既适用于传输模拟信号，也适用于传输数字信号；电路交换的交换设备（交换机等）及控制均较简单。

- 缺点

    　　平均连接建立时间对计算机通信来说显得较长；电路交换连接建立后，物理通路被通信双方独占，即使通信线路空闲，也不能供其他用户使用，因而信道利用率低；电路交换时，数据直达，不同类型、不同规格、不同速率的终端很难相互进行通信，也难以在通信过程中进行差错控制。

### 报文交换

　　**报文交换（Message Switching）采用存储-转发技术进行数据传输。**首先将一个完整的报文传送给交换机的缓冲区，待下一个节点的交换机空闲时将报文转发给它，一级一级的最终送到目的主机。电子邮件系统（E-mail）适合采用报文交换方式。

- 优点

    　　报文交换不需要为通信双方预先建立一条专用的通信线路，不存在连接建立时延，用户可随时发送报文；采用存储-转发技术，可通过不同的逻辑链路将数据送达目的主机，提高了可靠性；而且可实现不同类型、不同规格、不同速率的终端之间相互通信；提供多目标服务，即一个报文可以同时发送到多个目的地址；允许建立数据传输的优先级，使优先级高的报文优先转换。

- 缺点

    　　由于数据进入交换结点后要经历存储、转发这一过程，从而引起转发时延，同时也造成服务实时性差；报文交换只适用于数字信号；每个网络节点需要一定容量的缓冲区，成本高。

### 分组交换

　　**分组交换（Packet Switching，也称包交换）仍采用存储-转发传输方式，但将一个长报文先分割为若干个较短的分组，然后把这些分组逐个地发送出去。**分组交换原理与报文交换类似，是目前应用最广的交换技术，它结合了电路交换和报文交换两者的优点，使其性能达到最优。分组交换的实现方式又分为两种：**数据报分组交换**和**虚电路分组交换**。

- 数据报（Datagram）分组交换

    　　通信前不需要建立逻辑连接，数据包可通过不同的逻辑链路送达目的主机，而且不同数据包到达顺序是无序的，属于无连接的工作方式。

- 虚电路（Virtual Circuit）分组交

    　　通信前需要建立一条逻辑连接，数据包通过一条相同的逻辑链路，保证了数据传输的顺序，提供了可靠的服务，属于面向连接的工作方式。

　　除过报文交换的优缺点外，分组交换在此基础上的优缺点为以下部分。

- 优点

    　　加速了数据在网络中的传输；简化了存储管理；减少了出错几率和重发数据量。

- 缺点

    　　每个分组都要添加源、目的地址和分组编号等，开销大；采用数据报分组交换服务时，可能出现失序、丢失或重新分组。