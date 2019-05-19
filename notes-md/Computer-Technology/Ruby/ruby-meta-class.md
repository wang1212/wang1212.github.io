---

    {
        "title": "Ruby-元编程之类",
        "keywords": ["Ruby", "元编程", "Class"],
        "summary": "这篇文章讲述关于 Ruby 中类相关的知识，这也是面向对象语言的核心。事实上，有很多编程语言都具备元编程的能力，而 Ruby 则是将元编程发挥到极致的语言。元编程这个概念是模糊的，很多人都说是用代码生成代码的方式，不过我们不用去纠结这个概念。元编程最具有魅力的地方就是，原来我们还可以在程序运行时去操控代码。",
        "ctime": "2016-12-8 21:07:00",
        "mtime": "2016-12-8 21:07:00"
    }

--- 

　　<u>本文的代码均在 Ruby 2.3.0 环境下测试通过。</u>

## 类

　　我们都知道在面向对象编程中，我们大多数时候都是用类（class）在封装方法和变量，而 Ruby 中的类继承自模块（Module），接下来应该深入到类（模块）中去了解对象模型。

### 当前类

　　无论我们的程序运行到哪里，总会存在一个当前对象 `self`，而对象是所属类的实例，所以也就存在一个当前类。

    result = class A
        self
    end

    p result  # ==> A

　　**特别的是，类也是一个对象，它是 `Class` 类的实例，充当当前对象 `self`；但此时的当前类我们更愿意定义为该 `self` 指向的类，而不是 `Class`，因为前者是有意义的。**

    result.class_eval do
        def speak
        end
    end

    p result.instance_methods(false)
    # ==> [:speak]

　　**除过使用 `class` 关键字打开一个类外，我们也可以使用类调用 `class_eval()` 方法打开一个类，不过后者并没有创建一个独立的作用域，而是块作用域，块中 `self` 指向类自身；它和 `instance_eval()` 方法是相似的。**

    result.class_exec(:speak) do |name|
        define_method(name) do
        end
    end

    p result.instance_methods(false)
    # ==> [:speak]

　　`class_eval()` 方法不允许传递块参数，而 `class_exec()` 方法会将方法参数传递给块参数。

　　**在类（类方法）定义中，`self` 指向当前对象，当前对象也是当前类；而在实例方法定义中，`self` 指向当前对象，当前类则是当前对象的所属类。**

### 类实例变量

　　类本身也是一个对象，所以我们可以在类中定义类实例变量，这和对象实例变量是一样的，是该类独有的。

    class A
        @var1 = "class_instance_variable"

        def initialize
            @var2 = "instance_variable"
        end
    end

    p A.instance_variables
    # ==> [:@var1]
    p A.new.instance_variables
    # ==> [:@var2]

　　也就是说，**实例变量定义时是绑定在<code>self</code>指向的当前对象身上的，它是该对象独有的变量。**

### 类变量

　　Ruby 中还有一种变量叫做类变量，它不是属于某个类（对象）的变量。

    class A
        @@var = "class_variable"
    end

    class B < A
    end

    p A.class_variables
    # ==> [:@@var]
    p B.class_variables
    # ==> [:@@var]

　　从该示例可以看出，我们定义在父类中的类变量被子类继承了，**所以类变量不是单独属于某个类的变量，而是被类继承链共享的变量。**

　　所以在选择上来说，如果不希望子类继承父类的变量，我们应该选择类实例变量，这样大多时候更安全一些。

### 类方法

　　类方法事实上是一种特殊的方法，Ruby 把它命名为单例方法（singleton_method）。

    class A
        def self.new_method
        end
    end

    p A.singleton_methods
    # ==> [:new_method]

　　**单例方法定义时通常直接指定接受者，这样就会将该方法的调用权限限制在该接受者上，其他对象是无法调用该方法的。**其实，所谓的单例也就是这个意思，即单个实例对象的方法；而这区别于一个类的所有实例化对象共同拥有类中实例方法。

    class A
        def one_method
        end
    end

    a = A.new
    b = A.new
    def b.other_method
    end

    p a.public_methods(false)
    # ==> [:one_method]
    p b.public_methods(false)
    # ==> [:other_method, :one_method]

　　该示例说明了类中的实例方法 `one_method()` 是该类的所有实例对象共有的，而我们给其中一个对象定义了单例方法 `other_method()`，该方法则是该单个实例所有的。

　　单例方法是相当有用的，当我们要单独给某个对象增加一些方法时，就不需要去另外创建一个类了。

### 类宏

　　Ruby 的对象默认是封装的，不允许外部直接访问对象的实例变量，所以就需要去定义 `getter()` 和 `setter()` 方法。

    class Person
        def name
            return @name
        end

        def name=(new_name)
            @name = new_name
        end
    end

　　其实，这一组读、写方法是没什么技术含量的，尤其是有多个需要外部访问的实例变量时，这样的写法反而使代码显得冗余。所以，我们需要更优雅的方式来解决这个问题。

    class Person
        attr_accessor :name
    end

　　这就是 Ruby 给我们提供的解决方案，这显得优雅多了。`attr_accessor()` 可接受多个参数，这些参数被作为实例变量的名称各创建一组读、写方法；同样地，`attr_reader()` 用来创建实例变量的读方法，`attr_writer()` 则用来创建实例变量的写方法。

　　对于多个实例变量我们只需使用同一个方法声明式地动态创建它们各自的读、写方法，这样的技术称之为类宏。**类宏的意义在于，对于业务逻辑非常相似的行为，我们不需要自己去一个个实现，我们可以写一个通用的模版然后提供一个方法接口来动态实现。**

    class Person
        def self.attr_my_method(*variables)
            variables.each do |var|
                define_method(var) { instance_variable_get("@#{var}") }
                define_method("#{var}=") { |value| instance_variable_set("@#{var}", value) }
            end
        end

        attr_my_method :name
    end

    p Person.instance_methods(false)
    # ==> [:name, :name=]

    a = Person.new
    p a.instance_variables  # ==> []
    a.name = "MrWang"
    p a.name  # ==> "MrWang"
    p a.instance_variables  # ==> [:@name]

　　看吧，其实我们自己也可以实现一个类似的定义实例变量读、写方法的统一接口方法 `attr_my_method()`，类宏完美的诠释了动态生成代码的元编程能力。

## 单例类

　　前面刚说过类方法其实是个单例方法（singleton_method），作为一个实例对象独有的方法，它肯定是不存在于该对象所属类中的，同时它也不可能存在于该对象身上，因为对象自身只存在实例变量，实例方法只不过是个引用而已。

    class Test
        def self.new_method
        end
        p self.class

        class << self
            p self.class
            p self.instance_methods(false)
        end
    end

    # ==> Class
    # ==> Class
    # ==> [:new_method]

　　`Test` 是 `Class` 类的实例对象，我们通过 `class` 关键字又创建了一个独立作用域，然后我们发现这也是个类，是一个匿名类，而且 `new_method()` 方法竟然是该类的实例方法。于是，我们大胆的想象 Test 真正的所属类并不是 Class 类，而是这个匿名类。

　　其实，对象的 `class()` 方法骗了我们，该方法刻意隐藏了对象真正的所属类，它返回的是我们期望的结果，但不是正确的结果。**对象真正的所属类是一个单例类（singleton_class），它只有一个实例也就是该对象，单例方法是存在于该类中的，这也就解释了为什么单例方法只有该对象独有了。**我们有时候也称之为特征类（eigenclass）、匿名类、元类（metaclass）。

    p Test.singleton_class.instance_methods(false)
    # ==> [:new_method]

　　我们可以调用对象的 `singleton_class()` 方法来获取到单例类的引用。

### 继承链

　　单例类的存在似乎让 Ruby 的继承链变得更复杂了，现在我们深入到继承链中去看看。

    p Test.ancestors
    # ==> [Test, Object, Kernel, BasicObject]
    p Test.singleton_class.ancestors
    # ==> [#<Class:Test>, <Class:Object>, #<Class:BasicObject>, Class, Module, Object, Kernel, BasicObject]

　　`ancestors()` 方法可以获取类的继承链，我们发现 `Test` 的继承链正是我们期望的，而 `Test.singleton_class` 的继承链也并没有与前者发生冲突，它们像是两条平行线。**也就是说，一个类依次继承自超类，而该类的单例类也依次继承自超类的单例类，前者与后者的继承链是平行的。**

　　类方法是单例方法，但是子类却可以调用父类的类方法，从单例类的继承链可以很好的理解这是为什么。**单例方法是单例类的实例方法，会随单例类继承链依次继承下来，所以子类可以调用父类的类方法也就不奇怪了。**

    p Test.new.singleton_class.ancestors
    # ==> [#&lt;Class:#&lt;Test:0x00000002766d60&gt;&gt;, Test, Object, Kernel, BasicObject]

　　**而对于一个类的实例化对象来说，该实例的单例类继承自所属类的继承链，所以说实例对象的方法调用过程中，方法查找（Method Lookup）的起点并不是所属类而是单例类。**因此，单例方法是会覆盖所属类中同名实例方法的。

### 单例方法

　　下面，我们就来看看如何定义单例方法。大致的方法就两种，打开单例类定义与不打开单例类定义，但最终单例方法都是存在于单例类中的。

    # 打开单例类定义单例方法
    class << obj
        def new_singleton_method
        end
    end

　　可以使用 `class << 对象引用` 的方式打开单例类，在其中定义单例方法，这种方式会创建一个独立作用域。

    # 直接在对象上定义单例方法
    def obj.new_singleton_method
    end

　　也可以使用 `对象引用.方法名` 的方式直接定义对象的单例方法，前面一直演示的类方法就采用的这种方式。

    # 在对象上下文中定义单例方法
    obj.instance_eval do
        def new_sinleton_method
        end
    end

　　`instance_eval()` 与 `instance_exec()` 方法都会获取对象的上下文（作用域），在其中也可以定义单例方法。事实上，这也是打开了对象的单例类，我们打印块中的 `self` 就能明白。

## 方法

　　我们通过对类（模块）深入的理解，了解了单例类和单例方法，对对象模型有了更深刻的认识。而方法又是类（模块）中的主角，下面来了解一下有关方法的新技术。

### 对象扩展

　　Ruby 的类是不支持多继承的，但提供了 MixIn 这种优雅的解决方案，通过 `include()` 与 `prepend()` 方法就可以将模块中的实例方法包含进目标类中，实现多重继承。

    module MyModule
        def other_method
        end
    end

    class MyClass1
        include MyModule
    end

    class MyClass2
        prepend MyModule
    end

    p MyClass1.ancestors
    # ==> [MyClass1, MyModule, Object, Kernel, BasicObject]
    p MyClass1.instance_methods.include?(:other_method)
    # ==> true
    p MyClass2.ancestors
    # ==> [MyModule, MyClass2, Object, Kernel, BasicObject]
    p MyClass2.instance_methods.include?(:other_method)
    # ==> true

　　**可以看出两个方法都是将模块加入了继承链中，不过 `include()` 方法将模块作为该类的超类，意味着该类中的方法则会覆盖掉模块中的同名方法；而 `prepend()` 方法将模块作为该类的子类，意味着模块中的方法会覆盖掉该类中的同名方法。**

　　不过，它实际上是将模块中的实例方法添加到了该类中，扩展了类的实例方法，因为类也是对象所以称为对象扩展，但为了区分实例对象，我们称之为**类扩展**。

　　类扩展是添加了实例方法，并没有扩展类对象本身；我们如果把类看做一个对象的话，在单例类中使用 `include()` 与 `prepend()` 方法，则会为类自身添加单例方法，我们称为 `对象扩展`。

    class MyClass1
        class << self
            include MyModule
        end
    end

    p MyClass1.singleton_class.ancestors
    # ==> [#&lt;Class:MyClass1&gt;, MyModule, #&lt;Class:Object&gt;, #&lt;Class:BasicObject&gt;, Class, ...]
    p MyClass1.singleton_class.instance_methods.include?(:other_method)
    # ==> true

　　打开单例类反而显得繁琐，我们可以使用 `extend()` 方法实现同样的对象扩展的效果，它适用任何对象。

    class MyClass1
        extend MyModule
    end

### 钩子方法

　　我们知道调用方法其实是一个消息传递的过程，如果这个消息被传送给接受者时同时也被另一个方法捕获，那么这样的场景就是运行了钩子方法。

    module MyModule
        def self.included(mixIn_class)
            p "Me was mixed into #{mixIn_class}"
        end
    end

    class MyClass
        include MyModule

        def self.inherited(sub_class)
            p "Me was inherited by #{sub_class}"
        end
    end
    # ==> "Me was mixed into MyClass"

    class SubClass < MyClass
    end
    # ==> "Me was inherited by SubClass"

　　这里的 `included()` 与 `inherited()` 方法就是两个钩子函数，它们在模块自身被混入的时候捕获混入类的信息，以及在类自身被子类继承的时候捕获子类信息。其实只要得到混入类和子类的引用可以干很多事，在这里只是简单的打印了一行消息。

　　当然，Ruby 里的钩子方法远不止这些，像我们定义一个方法时其实就是在给类添加方法，这时的钩子方法就为 `method_added()`，类似的还有很多，我们可以合理的运用钩子方法做一些特殊的处理。

### 方法别名

　　如果我们的项目依赖于一个库，而该库中某个方法我们正好需要部分修改，但是我们又无法直接访问该库源文件，我们并不想直接覆盖重写，因为我们发现我们对该方法的内部实现细节并不知道。

    class Object
        # 方法别名
        alias :original_to_s :to_s
        
        def to_s
            "I will be changed to string --> " + original_to_s
        end
    end

    p Object.new.to_s
    # ==> "I will be changed to string --> #&lt;Object:0x0000000283c320&gt;"

　　使用 `alias` 关键字，以 `alias :new_name :old_name` 的形式即可将一个方法指定给两个不同的方法签名，然后我们可以重新定义旧的方法签名的实现，同时依然可以使用新方法签名去调用原来的方法。这样就解决了我们不清楚旧方法内部实现细节又想进行微修改的目的。

　　`alias_method()` 方法具有相同的作用。

### 删除方法

　　Ruby 中父类的所有实例方法都会被子类继承，使用 `public、protected、private` 关键字只不过是修改了方法调用权限而已。有时候，我们可能不想让一个子类继承父类的某些方法，但不能直接删除父类中的方法，否则会影响父类的其他子类继承该方法。

    class A
        def a_method
        end
    end

    class B < A
        # 删除继承自A的方法
        undef :a_method

        def b_method
        end
    end

    class C < A
        def c_method
        end
    end

    p B.instance_methods.include?(:a_method)
    # ==> false
    p C.instance_methods.include?(:a_method)
    # ==> true

　　使用 `undef()` 或者 `undef_method()` 方法都可以将多个实例方法从类中删除。

## 参考

- 《Ruby元编程》，[意] Paolo Perrotta，廖志刚 译
- 《Ruby基础教程》，[日] 高桥征义 后藤裕藏，何文斯 译