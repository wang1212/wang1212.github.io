---

    {
        "title": "内存的 3 种刷新方式",
        "keywords": ["Computer", "内存", "刷新方式"],
        "summary": "内存为我们提供了一个数据快速交换的缓冲区，但同时会在掉电的情况下数据丢失，来看看内存是如何在带电情况下刷新数据的。",
        "ctime": "2016-5-3 1:59:00",
        "mtime": "2016-5-3 1:59:00"
    }

--- 

　　**众所周知，内存（Memory）是带电存储的，掉电就会丢失数据，所以需要刷新来保持数据。**

## 原因

　　由于内存（Memory）以及缓存（Cache）都由相应的存储单元芯片**DRAM**和**SRAM**构成存储阵列，是一种半导体存储器件。并且，所有的数据都是逻辑 `1` 和 `0` 的组合。

　　至于 `1` 与 `0` 的输出，这源于存储单元芯片的基本结构：晶体管（场效应管）。其中，高低电平（1 和 0）的输出取决于源极**电容**上保存的电荷量，而电容上电荷的保持是需要一定电压维持的。所以一断电，电容上的电荷会全部消失，相应的数据也就会消失。

## 解决方案：刷新

　　解决的方法策略就是，在电容上电荷消失之前，对其刷新一次，让其保持原状态，即保证数据的正确存储。

　　一般有三种方式：

1. 集中刷新 （单次耗费时间）
2. 分散刷新 （刷新太过频繁）
3. 异步刷新 （高效率，低时间消耗）

　　一般情况下，电容上的电荷可保持**2ms**，数据读写周期为**0.5us**，并且存储阵列的刷新均是**按行**刷新的。同时，内存刷新相当于一次数据的读写，消耗时间基本和读写周期相同。下面以**128行×128行×8bit**的存储阵列，即就是 16KB*8bit 的内存（Memory）为例，进行说明：

### 集中刷新

　　集中刷新的原理就是，快到 2ms 的时候，也就是电容上电荷即将消失时，停止一切读写状态，对内存进行**所有行**刷新，那么这样耗费的时间就是：

> **刷新消耗时间：**128行×0.5us=64us

　　这就相当于，在每过 2ms，就有 64us 刷新时间，这 64us 期间内存停止与外界的一切交互，这对数据读写效率的影响是巨大的。

　　**特点：单次时间耗费巨大。**

### 分散刷新

　　分散刷新的原理就是，每次读写操作完成之后，就**刷新一行**，这样相当于每次读写操作的时间翻倍**0.5us(读写)+0.5us(刷新)**。

> **每行刷新间隔：**128行×1us=128us

　　电容上的电荷可保持 2ms，但是分散刷新每隔 128us 就会刷新一次，这样显得太过频繁，在一定程度上影响了读写操作的效率。

　　**特点：刷新太过频繁。**

### 异步刷新

　　异步刷新的原理就是，既然电容上电荷可保持 2ms，那么就在几乎快到 2ms 的时候刷新。这样相当于每行只刷新一次，对读写操作的影响是最小的。

> **行间刷新间隔：**2ms÷128行=15.625us （取15.5us） <br>
> **每行刷新间隔：**15.5us×128行=1.984ms

　　可以看出，异步刷新事实上是改进了的分散刷新，分散刷新太过频繁，异步刷新将分散刷新的每行刷新间隔延长到几乎 2ms，保证数据不会丢失即可，极大的降低了刷新操作对读写过程的影响。

　　**特点：刷新一次，保证数据正确性，同时最小化对读写操作的影响。**

## 结语

　　这就是内存（Memory）以及缓存（Cache）需要带电存储数据的原因，以及保证数据存储正确性的解决策略：刷新操作，其3种方式的详细解释。