---

    {
		"title": "解析函数节流与防抖的实现",
		"tags": ["计算机技术", "JavaScript", "Web", "Front End"],
        "keywords": ["计算机技术", "Web", "Front End", "JavaScript", "节流", "防抖"],
        "summary": "前端开发中广泛采用的优化技巧，函数节流与防抖。",
        "ctime": "2021-04-25 22:56:00",
        "mtime": "2021-04-26 22:48:00"
    }

---

　　前端开发中，有一个使用较为普遍的性能优化技巧，即函数节流（Throttle）和防抖（Debounce），其主要作用是根据时间对函数调用做以限制。最常见的业务场景是监听页面的 `scroll` 事件，浏览器可以在 1s 内触发该事件数次（甚至达数十次），如果事件处理程序在这 1s 内多次执行，必然会造成一定的性能问题，影响用户体验。

　　本质上，函数节流和防抖并不是控制事件源的触发次数，而是在事件短时间内连续多次触发之后控制相应事件处理程序的调用频率。

  - 节流：在一段连续时间内，限制函数在一定时间间隔内仅能调用一次。（例如，时间间隔为 1s，那么 10s 内至多被调用 10 次。）
  - 防抖：在连续的函数调用中，限制两次函数调用的时间间隔应大于一定时间。（例如，时间间隔为 1s，连续调用函数多次且每次间隔小于 1s，那么 10s 内至多被调用 1 次。）


> [推荐阅读：通过示例解释防抖和节流](https://css-tricks.com/debouncing-throttling-explained-examples/)


## 解析代码实现

　　在这里，主要是分析一下如何用代码实现函数的节流和防抖功能。当然，并不打算自己手写实现，以目前比较成熟的工具库（[Lodash](https://lodash.com/)）所提供的实现为基础来进行分析。

　　大致的实现思路基本上一样，都是利用闭包，维护内部状态，根据内部状态来对函数调用做具体控制。如下所示：

```javascript
function debounce(func, time_interval) {
    // ...
    return () => {
        func.apply(thisArg, arguments)
    }
}

// 对函数进行防抖处理包装
const debounced = debounce(() => {}, 1000)

debounced() // 调用 n 次
```

### 防抖（Debounce）

  > [_.debounce 源码](https://github.com/lodash/lodash/blob/master/debounce.js)

　　我们首先看一下其源码主体结构：

```javascript
function  debounce(func, wait, options)  {
    // 内部状态
    let lastArgs, lastThis, // 保存最后一次函数调用传入的参数列表和 this 指向
        maxWait,
        result, // 函数执行结果
        timerId, lastCallTime // 关键：主要用来限制函数调用
    
    // ...
    
    // wait 没有指定时，默认利用 requestAnimationFrame API 做了性能优化
    const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function')
    
    // 闭包结构
    function debounced(...args)  {}
    
    // 工具方法
    debounced.cancel = cancel
    debounced.flush = flush
    debounced.pending = pending
    
    return debounced
}
```

　　这是符合利用闭包实现的思路的，其中还接受第三个参数 `options`，lodash 库对该防抖功能做了增强，同时也添加了三个工具方法 `cancel`、`flush`、`pending`。很有意思的是，lodash 默认利用 [`requestAnimationFrame` API](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame) 做了性能优化。

　　防抖的核心思想是：**限制两次函数调用的时间间隔应大于一定时间**。来看看具体的实现：

```javascript
function debounce(func, wait, options)  {
    
    // 实际调用函数
    function invokeFunc(time) {
        const args = lastArgs
        const thisArg = lastThis

        lastArgs = lastThis = undefined
        lastInvokeTime = time
        result = func.apply(thisArg, args) // 关键：利用 apply 调用，保证 this 指向和参数列表正确

        return result
    }
    
    // 关键：创建超时器，异步调用函数
    // 异步调用的目的是在两次调用之间时间间隔过短（不符合限制条件）时，延后调用直至满足条件
    function startTimer(pendingFunc, wait) {
        if (useRAF) {
            root.cancelAnimationFrame(timerId)
            return root.requestAnimationFrame(pendingFunc)
        }
        return setTimeout(pendingFunc, wait)
    }
    
    // 判断是否可以调用函数
    function shouldInvoke(time) {
        const timeSinceLastCall = time - lastCallTime
        const timeSinceLastInvoke = time - lastInvokeTime

        // 关键：这一行的判断条件，限制两次函数调用的时间间隔应大于一定时间
        return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
          (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
    }
    
    function timerExpired() {
        const time = Date.now()

        // 关键：超时器到期后，需要再次检查是否满足条件
        if (shouldInvoke(time)) {
            return trailingEdge(time)
        }
        timerId = startTimer(timerExpired, remainingWait(time))
      }
    
    function debounced(...args)  {
        const time = Date.now()
        const isInvoking = shouldInvoke(time)

        lastArgs = args // 每次调用都更新保存的参数列表和 this 指向
        lastThis = this
        lastCallTime = time // 关键：记录每次函数调用的时间，在下一次调用时对时间间隔进行判断
        
        // 关键：进行两次调用时间间隔判断，并创建超时器异步执行函数
        if (isInvoking) {
            if (timerId === undefined) {
                return leadingEdge(lastCallTime)
            }
            if (maxing) {
                timerId = startTimer(timerExpired, wait)
                return invokeFunc(lastCallTime)
            }
        }
        if (timerId === undefined) {
            timerId = startTimer(timerExpired, wait)
        }
        
        return result
    }
}
```

　　源码中像 `trailingEdge()`、`leadingEdge()` 、`remainingWait()` 等可以暂时忽略掉，这些函数主要是 lodash 为结合 `options` 对防抖功能做的一些增强功能。

　　依据源码，防抖的实现思路是：利用闭包返回一个待调用函数 `debounced`，实际要调用的函数 `func()` 采用异步调用的方式，在我们每次调用函数时，利用 `shouldInvoke()` 函数（主要是利用 `Date.now()` 与 `lastCallTime`）判断是否满足时间间隔条件，在满足条件时利用 `startTimer()` 函数创建一个超时器去异步调用 `func()` 函数，而在每次超时器到期后要调用 `func()` 函数时都要通过 `shouldInvoke()` 函数再次检查是否满足条件，不满足则继续延迟调用，直至满足条件后执行 `func()` 函数（主要为 `invokeFunc()` 函数）。

　　这里要注意的是实际要调用的 `func()` 函数是被异步调用的，并且为了保证 `this` 指向和参数一致，使用 `apply()` 方法去调用。

#### 防抖增强

　　lodash 对防抖功能做了增强，先来看看之前提到的三个工具方法。

```javascript
function cancelTimer(id) {
    if (useRAF) {
        returnroot.cancelAnimationFrame(id)
    }
    clearTimeout(id)
}

function cancel() {
    if (timerId !== undefined) {
        cancelTimer(timerId) // 清除超时器，即取消异步的 func() 函数调用
    }
    // 将状态初始化
    lastInvokeTime = 0
    lastArgs = lastCallTime = lastThis = timerId = undefined
}
```

　　`cancel()` 这个工具方法提供了**将要执行的 `func()` 调用取消掉**的功能，实现该功能也得益于其异步调用的实现方式。

```javascript
function trailingEdge(time) {
    timerId = undefined // 关键：虽然丢弃了引用，但没有清除超时器

    if (trailing && lastArgs) { // 关键：利用 lastArgs 在调用 func() 函数前做了判断
        return invokeFunc(time) // 关键：该函数内部也清除了 lastArgs
    }
    lastArgs = lastThis = undefined // 关键：将参数列表清除，意味着将不会再次调用 func() 函数
    
    return result
}

function flush() {
    return timerId === undefined ? result : trailingEdge(Date.now())
}
```

　　`flush()` 这个工具方法提供了**立即调用 `func()` 函数**的功能，但要注意的是其内部实现中只是丢掉了 `timerId` 对已经发起的超时器任务的引用，并没有清除超时器，那么会不会造成对 `func()` 函数的重复调用呢？根据源码来看，在超时器到期之后的 `func()` 函数调用之前用 `lastArgs` 做了判断，而在调用 `flush()` 过程中清除了 `lastArgs` 的值，也就避免了重复调用 `func()` 的问题。

　　至于为何不直接清除掉超时器，而只是丢弃引用？不得而知。但我猜测应该是基于模块设计上的考虑，因为 `trailingEdge()` 函数被调用的时机就是超时器到期之后，所以它只负责清除掉 `timerId` 的值即可。

```javascript
function pending() {
    return timerId !== undefined
}
```

　　`pending()` 这个工具方法就比较简单了，仅提供了**获取目前是否处于等待调用 `func()` 函数的状态**的功能。

　　接下来看看 `options` 这个参数带来了哪些功能上的增强。

```javascript
let maxWait
let leading = false // 默认 false
let maxing = false
let trailing = true // 默认是 true

if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait // 关键：取 maxWait 和 wait 最大值
    trailing = 'trailing' in options ? !!options.trailing : trailing
}
```

　　`{ leading, maxWait, trailing }` 有三个选项字段。先来看看 `maxWait` 选项：

```javascript
function remainingWait(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime
    const timeWaiting = wait - timeSinceLastCall

    // 关键：maxWait 决定了超时器的超时时间
    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting
}

function shouldInvoke(time) {
    const timeSinceLastCall = time - lastCallTime
    const timeSinceLastInvoke = time - lastInvokeTime

    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      // 关键：maxWait 决定了该不该调用 func() 函数
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
} 

function timerExpired() {
    // ...
    timerId = startTimer(timerExpired, remainingWait(time))
}

function debounced(...args) {
    // ...
    const isInvoking = shouldInvoke(time)
    // ...
    if (isInvoking) {
        // ...
        if (maxing) {
            timerId = startTimer(timerExpired, wait)
            return invokeFunc(lastCallTime)
        }
    }
    // ...
    return result
}
```

　　虽然代码看起来很多，但实际 `maxWait` 只提供了一个很简单的功能：**在对函数进行防抖处理中，两次 `func()` 函数实际调用间隔至多为 `maxWait`，也就是说只要两次调用时间间隔达到该时间，无论 `wait` 限制如何，均会执行 `func()` 函数调用。**

　　这个其实解决了因为函数调用频率过高，`func()` 长时间得不到实际调用的业务问题。

　　接下来，需要把 `leading` 和 `trailing` 两个选项放在一起看，因为它们刚好是对立的一组值，本质上解决的是同一个问题：`func()` 函数实际调用的时机。

```javascript
function leadingEdge(time) {
    lastInvokeTime = time

    timerId = startTimer(timerExpired, wait)
    // 关键：利用 leading 判断
    return leading ? invokeFunc(time) : result
}

function timerExpired() {
    const time = Date.now()

    if (shouldInvoke(time)) {
        return trailingEdge(time)  // 关键：超时器到期后总是调用 trailingEdge() 函数
    }

    timerId = startTimer(timerExpired, remainingWait(time))
}

function trailingEdge(time) {
    timerId = undefined

    // 关键：利用 trailing 进行判断
    if (trailing && lastArgs) {
        return invokeFunc(time)
    }
    lastArgs = lastThis = undefined

    return result
}

function debounced(...args) {
    // ...
    if (isInvoking) {
        if (timerId === undefined) {
            return leadingEdge(lastCallTime)
        }
        // ...
    }
    // ...
    return result
}
```

　　首先说结论：**当 `leading=true` 时决定对 `func()` 函数的实际调用在创建超时器时（提前调用），而 `trailing=true` 时决定对 `func()` 函数的实际调用在创建的超时器到期后（延后调用）。**

　　其实要搞懂其中的思路，只要理解了以上几个函数在实际调用中的执行顺序即可：

```javascript
debounced() -> leadingEdge() -> timerExpired() -> trailingEdge() -> debounced()
```

　　这里其实是一个调用循环，无论 `leading` 和 `trailing` 值如何，其相应的函数 `leadingEdge()` 和 `trailingEdge()` 都参与其中，只不过在不同值的情况下，这两个函数所扮演的角色不同而已。这里举一个简单的例子即可说明问题：

```
// 当 leading=true，且 trailing=false 时：
// leadingEdge() 函数主要作用是调用 invokeFunc() 函数来实际调用 func() 函数
// trailingEdge() 函数主要作用则是超时器到期后清除掉内部状态，主要是 timerId 的值
```

　　那么这里有个值得考虑的点，按照常规的实现思路不应将 `leadingEdge()` 和 `trailingEdge()` 函数放在一起同时处理逻辑，而应该按照条件判断独立成两条线去处理逻辑。根据源码分析来看，我猜测是因为 lodash 所提供的 `leading` 和 `trailing` 两个选项并非完全对立的一组值，可能存在它们同时为 `true` 的情况（在函数的顶部注释中有所说明）。当然这里不能同时为 `false`，因为分析下源码的实现，你会发现 `func()` 函数将永远得不到实际调用。

### 节流（Throttle）

  > [_.throttle 源码](https://github.com/lodash/lodash/blob/master/throttle.js)

　　之所以先解析防抖的实现，是因为节流的源码实现中引用到了防抖的源码实现，这样反而让节流的源码实现看起来相当简洁。源码如下：

```javascript
function throttle(func, wait, options) {
    let leading = true
    let trailing = true

    if (typeof func !== 'function') {
        throw new TypeError('Expected a function')
    }

    if (isObject(options)) {
        leading = 'leading'inoptions ? !!options.leading : leading
        trailing = 'trailing'inoptions ? !!options.trailing : trailing
    }

    return debounce(func, wait, {
        leading,
        trailing,
        'maxWait': wait
    })
}
```

　　`options: { leading, trailing, maxWait }` 选项中的 `leading` 和 `trailing` 不再细说，参考防抖的理解即可。而 `maxWait` 选项则是关键，它没有对外暴露，而是直接默认使用了 `wait` 的值（实际上这也是让节流可以利用防抖来实现的主要原因）。

　　接下来，我们主要分析下 `maxWait` 选项是如何让节流可以利用防抖来实现的核心思路。回过头来，我们看看函数的节流和防抖的概念，就可以发现它们本质上都是对函数调用频率做了限制，**唯一不同的是函数防抖会在函数调用过快时（不满足限制条件时）无限期的延迟函数的实际调用，而函数节流必须要保证函数的实际调用要在限制时间内至少发生一次。**

　　而在前面我们分析防抖的功能增强实现时，`maxWait` 选项为函数防抖提供的正是在达到 `maxWait` 时间时实际的函数调用必须发生一次的功能。那么，当 `wait === maxWait` 时恰好满足了节流的要求。所以，lodash 在增强防抖的时候，同时利用防抖也实现了节流的功能。

## 结语

　　函数的节流和防抖是个很常用的性能优化技巧，实现思路也比较简单，但 lodash 对基本的逻辑进行了增强，以适应更多的业务场景。另一方面，在源码实现层面来看，lodash 对防抖的增强逻辑反而降低了节流实现的复杂性，这在开发过程中可能是更值得借鉴的一种思路。