---
title: 单元测试工具：Junit
date: 2017-08-30 23:42:00
update: 2017-08-30 23:42:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - 工具
  - 测试
  - 单元测试
  - Java
  - JUnit4
keywords: *ref_0
description: 通常一个项目的代码量是比较大的，而且其中逻辑也较为复杂，在开发完成后再进行项目测试其实是比较耗费时间和精力的，因此边开发边测试是个很好的选择，而 JUnit 则为我们提供了这样的便利。
---

> _最后更新于 2017-08-30 23:42:00 _

通常一个项目的代码量是比较大的，而且其中逻辑也较为复杂，在开发完成后再进行项目测试其实是比较耗费时间和精力的，因此边开发边测试是个很好的选择，而 JUnit 则为我们提供了这样的便利。

<!-- truncate -->

## JUnit

JUnit 是一个用来对 Java 代码进行单元测试的框架，是 XUnit （一套基于测试驱动开发的测试框架）的一个子集，类似的还有 PythonUnit、CppUnit。

JUnit 可以帮助我们进行自动化的单元测试，而不需要我们去编写 `main` 方法逐一测试，同时其使用断言（assert）机制可以将我们预期的结果和程序运行得到结果进行比对，确保对结果的可预知性。

## 使用 JUnit4

JUnit 目前已经更新到第 4 个版本，也就是 JUnit4，当然第 5 版也在筹备之中，这里我们使用 Junit4 即可。其实 eclipse 已经集成了 Junit 单元测试框架，我们可以直接使用，而不需要去下载 jar 包导入。

### 导入 JUnit4

在 eclipse 中新建一个 Java 项目，然后<kbd>右键</kbd>项目，选择 **Build Path -> Add Libraries** ,然后选择 Junit 即可将其添加到项目中。接下来我们创建一个被测试的类，然后再创建一个测试类用来使用 JUnit4 对被测试类进行单元测试。

### 进行测试

Junit4 相对于第 3 个版本来说使用起来更为方便了，只需在测试类的测试方法前面加一个 `@Test` 注解即可。这里有一个 `assertEquals()` 方法很有用，其可以帮助我们对程序的期望结果和运行结果进行比对。

    @Test
    public void testXXX(){
        /**
         * obj1 : 期望值（我们指定）
         * obj2 : 运行值（调用被测试类）
         */
        assertEquals(Object obj1, Object obj2);
    }

测试代码编写完成后，**Run As -> JUnit Test** 即可，只要出现绿色的状态条则代表我们的测试全部成功，如果为红色说明我们有部分测试失败，在状态条下方的测试结果列表中，每一项前面都会标记出来，测试成功的则为对号，失败的为叉。

### 代码规范

需要注意的是，我们应该将测试类和项目被测试类代码分开放置，通常会在项目下 **New -> Source Floder** 命名为 **test** 将测试类代码放入其中，测试类和被测试类的包名应一致，在项目部署时删除这个目录即可。

另外，测试类的命名应遵循被测试类名加 Test 后缀的规则；而测试类的方法命名应遵循以 test 为前缀加被测试方法名的规则，比如 `testXXX()`，这样更为规范一些。还有就是，测试方法是公有（public）、无返回值（void）的，并且测试方法之间是相互独立的。

这里有一个小技巧，通常被测试类的方法会很多，手动编写测试方法耗费时间，我们可以<kbd>右键</kbd>测试类，**New -> Other** 然后选择 **JUnit Test Case**，选中要测试的方法，设置好文件路径即可自动生成一个包含指定测试方法的测试类。

### 测试失败分析

JUnit 的测试结果是非常直观的，红色状态条代表我们测试失败，其中又分为两种失败类型，分别为 `Errors` 和 `Failures`。导致测试失败的原因我们可以在下方的消息栈中看到，其说明了引起测试失败的具体原因。

- Errors

  是由于代码异常引起的，可能是测试代码本身的错误，也可能是被测试代码中的错误。

- Failures

  一般由单元测试的断言方法判断失败所引起的，也就是说程序的运行结果和我们的预期不一样。

## JUnit 运行过程

要使用好 JUnit4 这个测试工具，我们应该了解清楚其运行的过程。在 **New -> Other** 新建一个 **JUnit Test Case** 类时，可以勾选四个自动生成的方法：

- setUpBeforeClass()

  `@BeforeClass` 标注的静态方法，测试类加载时运行一次，适合加载配置文件。

- tearDownAfterClass()

  `@AfterClass` 标注的静态方法，所有测试方法执行完成时运行一次，适合清理资源，例如关闭数据库连接。

- setUp()

  `@Before` 标注的实例方法，每个测试方法执行前运行一次。

- tearDown()

  `@After` 标注的实例方法，每个测试方法执行后运行一次。

以上四个方法可以帮助我们更好的进行单元测试，当然前提是这些方法运行的时机和作用我们应该知道。

## JUnit 常用注解

- @Test
- @BeforeClass
- @AfterClass
- @Before
- @After
- @Ignore
- @RunWith

`@Test` 注解标注一个方法为测试方法，除此之外我们还可以设置要捕获的异常和测试时间。

    /**
     * expected : 表明我们预期会发生的异常，使其不影响测试结果，类似于 throws 关键字
     * timeout : 指定测试的时间（ms），可以用来测试程序性能
     */
    @Test(expected=ArithmeticException.class, timeout=2000)

`@Ignore` 注解标注一个测试方法被运行器忽略，同时可以标识一些忽略信息。`@RunWith` 注解用来更改测试运行器。

## JUnit 深入使用

会利用 JUnit 进行基本的单元测试或许已经满足了我们的需求，然而 JUnit 为我们提供了更加便利的工具。

### 测试套件

测试套件是用来同时测试一整套测试类的，**New -> Other** 然后 **JUnit Test Suite** 即可创建一个测试套件。

    // 测试套件类
    @RunWith(Suite.class)
    @SuiteClasses({ taskTest1.class, taskTest2.class })
    public class AllTests { }

在创建测试套件时可以勾选需要包含进来的测试类或者测试套件，当然也可以在 `@SuiteClasses` 注解中手动添加。要注意的是测试套件类必须是一个空类，不能包含任何方法；其次要使用 `@RunWith` 注解将运行器修改为 `Suite.class`。

### 参数化设置

参数化设置可以帮助我们提高代码的重用度，减少类似的代码编写工作量。

    //被测试类
    public class Calculate {
        // 除法
        public int divide(int a, int b){
            return a/b;
        }
    }

    // 参数化设置的测试类
    @RunWith(Parameterized.class)
    public class ParameterTest {
        // 参数
        int expected, input1, input2;

        // 用来返回一组参数
        @Parameters
        public static Collection<Object[]> params(){
            return Arrays.asList(new Object[][]{
                {1,2,2},
                {3,9,3},
                {25, 625, 25}
            });
        }

        // 构造器
        public ParameterTest(int expected, int input1, int input2) {
            this.expected = expected;
            this.input1 = input1;
            this.input2 = input2;
        }

        // 测试方法
        @Test
        public void testDivide() {
            assertEquals(expected, new Calculate().divide(input1, input2));
        }
    }

参数化设置的测试类要使用 `@RunWith` 注解将运行器修改为 **Parameterized.class**。该类中要声明变量来存放预期值和结果值，声明一个 `@Parameters` 注解标注的返回值为 `Collection` 的公共静态方法来返回一组参数值，其次还要声明一个带参数的构造方法。
