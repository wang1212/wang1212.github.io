---
title: Ruby-元编程之方法
date: 2016-08-08 12:56:00
update: 2016-08-08 12:56:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - Ruby
  - 元编程
  - Method
keywords: *ref_0
description: 这篇文章讲述关于 Ruby 中方法相关的知识。事实上，有很多编程语言都具备元编程的能力，而 Ruby 则是将元编程发挥到极致的语言。元编程这个概念是模糊的，很多人都说是用代码生成代码的方式，不过我们不用去纠结这个概念。元编程最具有魅力的地方就是，原来我们还可以在程序运行时去操控代码。
---


<u>本文的代码均在 Ruby 2.3.0 环境下测试通过。</u>
<br />
<br />

这篇文章讲述关于 Ruby 中方法相关的知识。事实上，有很多编程语言都具备元编程的能力，而 Ruby 则是将元编程发挥到极致的语言。元编程这个概念是模糊的，很多人都说是用代码生成代码的方式，不过我们不用去纠结这个概念。元编程最具有魅力的地方就是，原来我们还可以在程序运行时去操控代码。

<!-- truncate -->

## 方法（Method）

在 OOP（面向对象编程）思想中，对象之间通过消息传递来进行交互，其实所谓的消息就是方法。当我们调用了一个对象的某个方法时，意味着当前对象给目标对象发送了一条消息。所以说，方法也是一个很重要的概念。

### 修饰符

**Ruby 中的实例方法有三种修饰符，`public`、`protected`、`private`，修饰符只是限制了实例方法的调用权限，并不影响继承，所有的超类方法都会被子类继承。**

    # 声明形式修饰方法
    class Test
        public
        # 这里定义公共方法

        protected
        # 这里定义保护方法

        private
        # 这里定义私有方法
    end

    # 标记形式修饰方法
        class Test
        def method1 ; end
        def method2 ; end
        def method3 ; end

        # 标记，可接受多个方法名参数
        protected :method2
        private :method3
    end

其中 `public` 是默认的修饰符，代表方法是允许外部调用的；而 `private` 修饰的方法是不允许外部调用的，只允许在对象内部调用且不需要显式指出接受者，默认为 `self`，否则会报错。

另外需要注意的是，`protected` 修饰的方法比较特殊，必须遵循：**接受者与发送者均为同一个类或者具有继承关系的两个类的实例。**其实，就是说保护方法只能在实例方法中调用，在其它地方是不能调用的。

    class SuperClass
        def m1(obj)
            # 保护方法只能在实例方法中调用
            obj.m
        end

        protected

        def m
            p "1"
        end
    end

    class SubClass < SuperClass
    end

    # 同一个类的不同实例
    SuperClass.new.m1(SuperClass.new)  # ==> 1
    # 超类与子类实例
    SuperClass.new.m1(SubClass.new)  # ==> 1
    SubClass.new.m1(SuperClass.new)  # ==> 1

用 Ruby 来编程的话，我们大多数时候写的都是公共方法，只要能分辨出不同方法的调用权限即可，而且无论什么方法都是会被子类继承的。

现在可以学习一些元编程的技巧了。下面有一个这样的场景：我们从图书馆办卡、借书、还书的时候都需要机器或者图书管理员作为中介帮助我们进行这些操作，而不能自己直接去操作图书馆数据库。

    class Library
        def get_card(name,book_id=nil)
            ...
            puts "#{name}办卡"
        end

        def check_out(name,book_id)
            ...
            puts "#{name}借书#{book_id}"
        end

        def return_book(name,book_id)
            ...
            puts "#{name}还书#{book_id}"
        end
    end

    class Manager
        def initialize
            @library = Library.new
            puts "现在受理业务"
        end

        def controller(type,name,book_id=nil)
            # ...
            case type
            when "get_card"
                @library.get_card(name)
            when "check_out"
                @library.check_out(name,book_id)
            when "return_book"
                @library.return_book(name,book_id)
            else
                return puts "操作失败"
            end

            puts "操作成功"
        end
    end

    # 模拟管理员业务
    manager = Manager.new
    # ==> 现在受理业务
    manager.controller("get_card","小王")
    # ==> 小王办卡
    # ==> 操作成功
    manager.controller("check_out","小明",222)
    # ==> 小明借书222
    # ==> 操作成功
    manager.controller("return_book","小李",111)
    # ==> 小李还书111
    # ==> 操作成功

### 动态派发

Manager 类代理了读者的各种业务操作，并在其中可以进行相应过滤，保证图书馆数据安全。不过，我们可以看到 `Manager` 中 `controller()` 方法是通过 `case...when` 来代理读者业务的，如果 `Library` 增加了新业务，那么该方法似乎又要添加新的 `when` 子句，业务如果很多呢？ `controller()` 方法似乎会变得臃肿，却实际上都在进行无聊的重复。

下面我们要介绍的就是**动态派发**技术。

    class Manager
        def controller(type,name,book_id=nil)
            ...
            # 动态派发
            @library.send(type,name,book_id)
            puts "操作成功"
        end
    end

所有的 `case...when` 只需要一句 `send()` 方法代替即可实现同样的业务，并且不再担心 `Library` 增加业务的情况，是不是很强大呢。

**动态派发：**我们可以使用目标对象的<code>send()</code>方法来给其发送一条消息，也就是实现方法调用，该方法第一个参数为方法名称（可以是字符串或者符号），后续参数为传入方法的参数，最后一个参数为方法的块。不过，我们需要强调一下动态的意义，所谓动态就是我们只有在运行时才会知道调用哪个方法，另一个角度来说我们根本不需要在乎调用哪个方法。

**注意：`send()` 方法会无视 `private` 权限而调用私有方法，如果有需要可以这么做；否则请用 `public_send()` 方法代替，从而避免调用目标对象的私有方法。**

### 动态定义

现在图书馆外面引进了大量的机器，无需办卡就可以免费阅览部分书籍，并定期更新。

    class Machine
        def initialize
            puts "今天可以免费阅览部分书籍了"
        end

        def book11
            puts "欢迎阅览本书，编号11"
            #...
            #return content
        end

        def book22
            puts "欢迎阅览本书，编号22"
            #...
            #return content
        end

        def book33
            puts "欢迎阅览本书，编号33"
            #...
            #return content
        end
    end

    # 模拟免费阅览业务
    machine = Machine.new
    machine.book11
    machine.book22
    machine.book33

该机器提供了具体的方法让读者免费阅览相应的书籍，而且 `book11()`、`book22()`、`book33()`方法内部业务逻辑相似，更重要的这些可供免费阅览的书籍是定期更新的，那么这些相似的方法也就需要重新去写，这是一个多么枯燥的造轮子的过程。

下面我们要介绍的就是**动态定义**技术。

    class Machine
        @@free_id = [11,22,33]

        def initialize
            @@free_id.each do |id|
                # 动态定义
                define_singleton_method("book#{id}") do
                    puts "欢迎阅览本书，编号#{id}"
                    #...
                    #return content
                end
            end

            puts "部分书籍今天可以免费阅览了"
        end
    end

我们将提供免费阅览的书籍的编号存进一个类变量，然后在实例化时通过 `define_singleton_method()` 方法动态的定义该对象的单例方法，以后定期更新类变量中的编号即可，不用手动去删除类中原来的实例方法，也不用手动去定义新添加的实例方法。

**动态定义：**使用 `define_singleton_method()` 方法即可为当前对象定义一个单例方法(singleton_method)，也就是该对象独有的方法；该方法接受一个参数也就是方法名，块中也可以指定多个参数作为将被定义的方法的参数。`define_method()` 方法类似的可以用来在类、模块或者类方法内部用来动态定义当前类、模块的实例方法。

**注意：`define_singleton_method()` 方法定义的是当前对象的单例方法；而 `define_method()` 方法定义的是当前类、模块的实例方法。**

### 幽灵方法

当我们调用一个不存在的方法时，Ruby 会报错，而报错之前 Ruby 都干了些什么呢？这是一个神秘的过程。我们都知道首先会沿对象的继承链去寻找这个方法，当没有找到时就会报错吗？其实不是的，Ruby 的 Kernel 模块中定义了一个私有实例方法 `method_missing()`，在没有找到对象的方法时，会将方法名转换成符号类型作为参数传进该方法进一步处理，然后才会报错。

**我们将 `method_missing()` 方法称为幽灵方法，因为它只有在找不到我们定义的方法时才出现，借助它我们可以做很多原来不可能完成的事情；它的首个参数就是符号类型方法名，其余参数捕获的则是传入该方法的参数。**

    class Test
        def method_missing(name, *args)
            puts "#{name} 方法没有找到，参数为#{args}"
        end
    end

这是个空类，我们调用该类实例对象的任何方法都不会报错。

    class TestObject
        def initialize
            @collect = {}
        end

        def method_missing(key, value=nil)
            key = key.to_s
            if key =~ /=$/
                @collect.store(key.chop, value)
            else
                @collect[key]
            end
        end
    end

    obj = TestObject.new
    obj.a = 123
    obj.a  # ==> 123
    obj.b  # ==> nil

这样我们就创建了一个可自由设置和访问属性的对象，是不是有点像 JavaScript 中的对象呢。

**注意：`method_missing()` 实例方法是非常耗性能的，因为要查找整个继承链该方法才会起作用。类似的，在一个类、模块中，`const_missing()` 类方法用来处理引用一个不存在的常量时的情况。前者为实例方法，后者为类方法。**

### 响应询问

我们说了方法就是一个消息，在发送消息之前我们可以询问目标是否会有响应，也就是说要调用的方法是否存在，可以通过 `respond_to?()` 方法来完成。

    class Test
        def test1
        end

        public

        def test2
        end

        private

        def test3
        end
    end

    t = Test.new
    t.respond_to?(:test1)  # ==> true
    t.respond_to?(:test2)  # ==> true
    t.respond_to?(:test3)  # ==> false

**注意：该方法默认只询问 `public` 公有方法，若同时要询问保护方法和私有方法，需给定第二个参数为 `true`；而且私有方法调用时是不需要显式指出接受者的，否则会报错。**

## 方法参数

Ruby 中的方法参数目前支持**位置参数**、**关键字参数**、**Array/Hash 参数（可变参数）**、**块参数**。

### 位置参数

特点：数量固定，必须按顺序传入值，可以有默认值。

    def test(a, b)
        p a: a, b: b
    end

    test(1, 2)
    # ==> {:a=>1, :b=>2}

位置参数可以带有默认值，不传入值时采用默认值，否则覆盖默认值；多个默认值参数位置必须连续，Ruby 会首先填充没有默认值的参数。

    def test(a, b='b', c='c', d)
        p a: a, b: b, c: c, d: d
    end

    test(1, 2)
    # ==> {:a=>1, :b=>"b", :c=>"c", :d=>2}

    test(1, 2, 3)
    # ==> {:a=>1, :b=>2, :c=>"c", :d=>3}

    test(1, 2, 3, 4)
    # ==> {:a=>1, :b=>2, :c=>3, :d=>4}

### 关键字参数

特点：数量固定，必须显式指出关键字，不传入值时采用默认值，否则覆盖默认值。

    def test(a:, b:'b', c:)
        p "#{a} #{b} #{c}"
    end

    test(a:1, c:3)  # ==> "1 b 3"
    test(a:1, b:2, c:3)  # ==> "1 2 3"

### Array/Hash 参数

特点：数量可变，方法内部通过数组索引和键值访问；必须位于参数表末尾。

    def test(a, *b)
        p a: a, b: b
    end

    test(1)
    # ==> {:a=>1, :b=>[]}

    test(1, 2)
    # ==> {:a=>1, :b=>[2]}

    test(1, 2, 3)
    # ==> {:a=>1, :b=>[2, 3]}

---

    def test(**a)
        p a
    end

    test()  # ==> {}
    test(a:1)  # ==> {:a=>1}
    test(a:1,b:2)  # ==> {:a=>1, :b=>2}

属于数组参数的还有一种对应赋值参数，就是把多个参数看为一个整体参数进行对应赋值。

    class A
        def a(a, (b, c), d)
            p a: a, b: b, c: c, d: d
        end
    end

    A.new.a(1, 2, 3)
    # ==> {:a=>1, :b=>2, :c=>nil, :d=>3}

    A.new.a(1, [2, 3], 4)
    # ==> {:a=>1, :b=>2, :c=>3, :d=>4}

    A.new.a(1, [2, 3, 4], 5)
    # ==> {:a=>1, :b=>2, :c=>3, :d=>5}

要注意的是，这几种参数可组合在一起，但应符合：

- 位置参数是按传入顺序匹配；关键字参数是按关键字匹配，与顺序无关，但必须指定关键字；
- 当位置参数与关键字混合使用时，所有位置参数必须放在任意关键字参数前面；
- 可变参数（Array 或 Hash）应该放在参数表末尾。

### 块参数

事实上，每个方法还有一个隐藏的块参数，默认在参数表末尾，并用 `&` 操作符表示，用来捕获该方法的块。

    class Array
        def every(&block)
            self.each(&block)
        end
    end

    [1, 2, 3].every { |value| puts value }
    # ==> 1
    # ==> 2
    # ==> 3

我们捕获到块之后就可以将块传入另一个方法，如果不需要将块传给其它方法则直接采用 `yield` 关键字调用块更方便，性能更好。

## 结语

这下是不是见识到了元编程的能力呢？用你写的代码来动态生成更多的代码供我们所使用，也许这就是所谓的生成代码的代码。

## 参考

- 《Ruby 元编程》，[意] Paolo Perrotta，廖志刚 译
- 《Ruby 基础教程》，[日] 高桥征义 后藤裕藏，何文斯 译
