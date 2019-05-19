---

    {
        "title": "Ruby-元编程之代码块",
        "keywords": ["Ruby", "元编程", "Block"],
        "summary": "这篇文章讲述关于 Ruby 中代码块相关的知识，这也是 Ruby 的特色。事实上，有很多编程语言都具备元编程的能力，而 Ruby 则是将元编程发挥到极致的语言。元编程这个概念是模糊的，很多人都说是用代码生成代码的方式，不过我们不用去纠结这个概念。元编程最具有魅力的地方就是，原来我们还可以在程序运行时去操控代码。",
        "ctime": "2016-12-5 15:33:00",
        "mtime": "2016-12-5 15:33:00"
    }

--- 

　　<u>本文的代码均在 Ruby 2.3.0 环境下测试通过。</u>

## 代码块

　　块（Block）在 Ruby 中是一大特色，在某些应用过程中能够实现闭包，而且其内部的迭代器（iterator）的实现大量使用了块，下面就来探究一下在 Ruby 中的代码块吧。

### 定义块

　　块（Block）即代码段，相对于一个完整的方法来说，块强调的是一种过程。在 Ruby 中块的定义形式有两种，下面结合实例来说明：

    [1, 2, 3].each { |item|
        puts item
    }

    # ==> 1
    # ==> 2
    # ==> 3

　　块的第一种定义形式为：`block_name { |arguments| ... }`。

    ["a", "b", "c"].each do |item|
        puts item
    end

    # ==> a
    # ==> b
    # ==> c

　　块的第二种定义形式为：`block_name do |arguments| ... end`。

　　**在 Ruby 中，块是依赖于方法存在的，没有方法就没有块，块必须在方法定义之后才能定义。而且  `{...}` 形式比 `do...end` 形式的优先级高。**

### 调用块

　　定义的块是不能自己自动执行的，我们需要主动调用才可以，调用的方式也有两种。

#### yield关键字

　　在方法内部我们可以使用 `yield` 关键字捕获关联块，并允许传入参数回调执行块。

    # 定义方法
    def each(*a)
        for element in a
            # 捕获块，回调执行
            yield(element)
        end
    end

    # 定义块
    each(1,2,3) do |item|
        puts item * 2
    end

    # ==> 2
    # ==> 4
    # ==> 6

#### & 尾部参数捕获

　　其实，每个方法都有一个默认的带 `&` 操作符的尾部参数，该参数可以用来捕获方法关联块，从而使用 `call()` 方法调用块。

    # 定义方法
    def say(&block)
        puts "Do you like dogs?"

        # 捕获块，回调执行
        block.call("yes")
        block.call("no")
        block.call()
    end

    # 定义块
    say do |answer|
        if answer == "yes"
            puts "I like dogs."
        elsif answer == "no"
            puts "I like cats than dogs."
        else
            puts "I don't know."
        end
    end

    # ==> Do you like dogs?
    # ==> I like dogs.
    # ==> I like cats than dogs.
    # ==> I don't know.

　　**Ruby 中的块依赖于方法存在，块不是在定义的时候执行，而是被所关联方法用来回调执行，这也是比较重要的特性。**

#### 检测块

　　如果一个方法并没有定义关联块的话，在方法中去调用关联块则会发生运行时错误，此时我们可以使用 `block_given?()` 检测关联块是否已被定义。

    def test()
        # 检测块
        return yield if block_given?
        puts "no block"
    end

    test # ==> no block
    
    test { puts "block is here" } # ==> block is here

## 作用域

　　说到代码块，我们不得不来谈谈作用域，Ruby 拥有严格的作用域机制，而块并没有形成严格意义上的独立作用域，这使得块可以实现闭包，而这一特性是非常有用的。

### 作用域机制

　　通常作用域都是对于局部变量来说的，下面来演示一下 Ruby 中的独立作用域机制。

    # 进入顶级独立作用域
    local_variable = 'a';

    module Outter  # 进入模块独立作用域
        local_variable = 'b';

        class Inner  # 进入类独立作用域
            local_variable = 'c';

            def func  # 进入方法独立作用域
                local_variable = 'd';
            end
        end
    end

　　该示例在四个作用域中定义了四个同名局部变量，但它们并不是相互覆盖的关系，而是各自独立的。

　　**在 Ruby 中，`module`、`class`、`def`（模块、类、方法）均会创建自己的独立作用域，所谓独立作用域即就是双向封闭的作用域，内外作用域不可相互直接访问。**

### 块的作用域

　　**一个代码块并不会创建独立作用域，它可以穿透（访问）自身定义时所处上下文的作用域，但是自身对外部作用域却是单向封闭的。**

    def test
        x = 100
        puts "method_local_x=#{x}"
        y = 1000
        yield(y)
        puts "method_local_x=#{x}"
    end

    x =10
    puts "main_local_x=#{x}"

    test do |y|
        puts "block_x=#{x}"
        x += y
    end
    
    puts "main_local_x=#{x}"

    # ==> main_local_x=10
    # ==> method_local_x=100
    # ==> block_x=10
    # ==> method_local_x=100
    # ==> main_local_x=1010

　　该示例中，块中访问的 `x` 本地变量是其定义上下文中的本地变量，而并非是回调执行块时方法中的本地变量；同时，在调用块时将方法中的 `y` 本地变量传入块，从而了达到了存在于两个不同独立作用域中本地变量交互的目的。

　　事实上，我们已经感受到了块作用域的具有吸引力的特性。

### 扁平化作用域

　　在讨论完 Ruby 严格的作用域机制与块作用域之后，我们似乎可以干点什么。没错，利用块作用域来打破这种严格的作用域机制。

    local_variable = "a"

    Outter = Module.new do
        puts "module->main:" + local_variable

        Inner = Class.new do
            puts "class->main:" + local_variable

            define_method :func do 
                puts "method->main:" + local_variable
            end
        end
    end

    # ==> module->main:a
    # ==> class->main:a

    Inner.new.func()
    # ==> method->main:a

　　看见了吧，Ruby 严格的作用域机制被完全打破，整个作用域由里向外依次透明化，但块作用域是单向封闭的，所以由外向里又是封闭的。

　　也许你会觉得不可思议，这被称为扁平化作用域，官方名称则为**嵌套文法作用域**，我们可以利用该技术来共享作用域。

　　这里需要说明一下，方法也是一个 `Method` 对象，可以通过 `unbind()` 方法与所属对象解绑，再用 `bind()` 方法与其它所属同类的对象重新绑定。同时，方法可以调用 `to_proc()` 方法转化成一个 Proc 对象，也可以使用 `define_method()` 方法将块转化为一个方法，如示例中所示。**方法绑定的作用域是所属对象的作用域，而块绑定的是定义块的作用域。**

### 上下文探针

　　当一个对象的实例变量没有提供外部接口时，我们可以访问和改变吗？答案是可以的。

    class Person
        def initialize(name,age)
            @name = name;
            @age = age;
        end
    end

    p = Person.new("MrWang",18);
    p.instance_eval do
        puts "#{@name} #{@age} 岁"
        @age = 20
        puts "#{@name} #{@age} 岁"
    end

    # ==> MrWang 18 岁
    # ==> MrWang 20 岁

　　**我们通过对象调用 `instance_eval()` 方法创建了一个块，该块内部作用域则是对象自身作用域，`self` 指向对象自身。**

    p.instance_exec(20) do |age|
        puts "#{@name} #{@age} 岁"
        @age = age
        puts "#{@name} #{@age} 岁"
    end

　　`instance_eval()` 方法是不允许传递块参数的，而 `instance_exec()` 会将方法的参数传递给块参数。

　　这么做看起来像是破坏了对象的封装性，不过这些方法我认为是为程序员服务的，而不是用户。

## Proc 对象

　　我们一直说块是依赖于方法的，其实我们可以创建独立于方法的 `Proc` 可调用对象。

### Proc.new

　　我们可以创建不依赖于特定方法的块，并存储下来供合适的时候多次重复利用，而 `Proc` 对象就是一种可调用对象，事实上我们已经见过它了。

    inc = Proc.new { |x| puts x + 1 }
    add = proc { |a,b| puts a + b }

    inc.call(2);  # ==> 3
    inc.call(5);  # ==> 6
    add.call(2,3)  # ==> 5
    add.call(4,3)  # ==> 7

　　使用 `Proc.new()` 与 `proc()` 方法是等价的，Proc 对象使用 `call()` 方法调用传参。

    def test(&block)
        return block
    end
    p = test { }

    puts p.class  # ==> Proc

　　其实与方法关联的块在使用尾部参数捕获后，去掉 `&` 操作符就是一个 `Proc` 对象，加上 `&` 又是一个块（可以传递给其他方法），这样可以相互转换。

### lambda 表达式（匿名方法）

　　还有一种方式可以创建 `Proc` 对象，也就是 `lambda()` 方法或者 `->()`（箭头方法）。

    inc = lambda { |x| x + 1 }
    add = ->(a,b) { puts a+b }

    inc.call(2);  # ==> 3
    add.call(2,3);  # ==> 5
    puts inc.class  # ==> Proc

### 区别

　　虽然说，前后创建的都是 `Proc` 对象，但它们还是有一些细微区别的。

- return

    　　前者创建的 Proc 对象中如果使用 `return`，则意味着程序中断（结束）；而使用 `lambda()` 创建的 Proc 对象中使用 `return` 就像调用方法返回值一样，仅仅是调用的块执行结束。

- 参数检查

    　　前者创建的 Proc 对象调用时参数可多可少，多的忽略，少的赋为 `nil`；而使用 `lambda()` 创建的 Proc 对象调用时会进行参数个数检查，必须对应，传入的参数不能多也不能少。

　　看起来，`lambda()` 创建的 Proc 对象更像方法，我们称之为**匿名方法**。

## 闭包

　　当一个方法执行完毕后，该方法的独立作用域会销毁，方法里面的局部变量自然也会随之销毁；但是基于块作用域的特性，我们可以实现闭包。

　　**若方法中存在一个独立于方法的块（非关联块），该独立块具备块作用域特性，可访问定义时上下文（单次方法调用）的外部作用域，该块被外部引用后，即便是所在方法执行完毕后，因为块的存在绑定了方法中的局部变量，因而不会随方法销毁，这就是闭包。**

    def closure(n)
        x = n
        return -> {x *= 10; puts "block_local_x=#{x}"}
    end

    # 获取方法内块的引用
    closure_1 = closure(1)
    closure_2 = closure(2)
    
    closure_1.call  # ==> block_local_x=10
    closure_2.call  # ==> block_local_x=20
    closure_1.call  # ==> block_local_x=100
    closure_2.call  # ==> block_local_x=200
    closure_1.call  # ==> block_local_x=1000
    closure_2.call  # ==> block_local_x=2000

　　上述示例表明，当外部获取方法内的块引用之后，方法内的局部变量便被块绑定，之后依然可以访问；同时，不同的外部引用的块绑定的是不同的局部变量，这是因为两个块定义上下文（作用域）不同。

　　从块作用域的特性来仔细分析，它不仅有吸引力让我们可以实现闭包，同时也存在内存泄露的风险。

## 结语

　　可以说块在 Ruby 中无处不在，合理的利用块可以省去不少代码，更能实现更强大的功能。块中需要注意的是，块不是定义时执行的，而是回调执行的；块作用域两大特点也非常重要。

## 参考

- 《Ruby元编程》，[意] Paolo Perrotta，廖志刚 译
- 《Ruby基础教程》，[日] 高桥征义 后藤裕藏，何文斯 译