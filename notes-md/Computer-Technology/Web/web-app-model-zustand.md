---

    {
		"title": "Web 应用的轻量级状态管理工具 zustand",
		"tags": ["计算机技术", "Web", "Front End", "React.js"],
        "keywords": ["计算机技术", "Web", "Front End", "Model", "React.js"],
        "summary": "Web 网页向 Web 应用发展的过程中，势必会出现 Web 项目的复杂化问题，而在移动端场景，基于 React.js 的应用中如何管理状态？zustand 也许值得一试。",
        "ctime": "2021-11-18 00:14:00",
        "mtime": "2021-11-18 00:14:00"
    }
---

　　基于 React.js 的 Web 应用如何完成状态管理？社区主流方案是 **react-redux**，其本质上基于 React 的 `Context` 特性实现，如果应用足够简单，实际上用 `Context` 手写一个简单的状态管理工具倒也并不难。不过，考虑到工具的完善性、项目的健壮性，通过采用较好的、成熟的社区方案，尤其是在移动端场景下，**react-redux** 略显臃肿，通过了解 **zustand** 倒是一个不错的方案。

## 轻量级状态管理方案

　　Web 优化中，资源大小的优化是重中之重，而且也是成本最低，收益最高的优化方式，在移动端场景下尤为突出。每在项目中引入一个工具库，都要考虑是否有更轻量级的替代品。众所周知，**moment** 就是一个典型的例子，我通常采用 **dayjs** 作为替代方案。而在应用状态管理工具的选择中，可以利用 Bundlephobia 首先评估一下社区主流方案 **react-redux**。

|                                                                         | MINIFIED | MINIFIED + GZIPPED |
|-------------------------------------------------------------------------|---------:|-------------------:|
| [redux@4.1.2](https://bundlephobia.com/package/redux@4.1.2 )            |    4.3kB |              1.6kB |
| [react-redux@7.2.6](https://bundlephobia.com/package/react-redux@7.2.6) |   16.2kB |              5.4kB |
|                                                                         |   20.5kB |                7kB |

　　仅必须的依赖就需要 **7kb** 之多，而我们也知道，redux 不仅是一个状态管理工具，其同时也提倡一种优秀的模式，即我们熟知的：

> Store -> Dispatch -> Action -> Reducer -> Store

　　而这种模式需要我们手写大量的模板代码，于是就有了官方解决方案 **@reduxjs/toolkit** 和社区方案 **@rematch/core**，这进一步加剧了资源大小所带来的影响。

|                                                              | MINIFIED | MINIFIED + GZIPPED |
| :----------------------------------------------------------- | -------: | -----------------: |
| [@reduxjs/toolkit@1.6.2](https://bundlephobia.com/package/@reduxjs/toolkit@1.6.2) |   32.1kB |             10.5kB |
| [@rematch/core@2.2.0](https://bundlephobia.com/package/@rematch/core@2.2.0) |    4.7kB |              1.7kB |

　　经过分析，事实上我们可以看到 redux 的核心代码库仅有 **1.6kb** 的大小，但为了适配 React.js 和解决模板代码的问题，至少也要增加 **7.1kb** 的资源大小。换句话说，状态管理工具的核心实现其实是比较简单的，这也是核心库较小的原因，而在移动端场景下，项目一般较为简单、规模较小，对于工具的核心需求其实也仅仅是满足应用状态管理即可。于是，**zustand** 社区方案成为了我的一个选择。

|                                                              | MINIFIED | MINIFIED + GZIPPED |
| :----------------------------------------------------------- | -------: | -----------------: |
| [zustand@3.6.5](https://bundlephobia.com/package/zustand@3.6.5) |      2kB |               954B |
| [jotai@1.4.3](https://bundlephobia.com/package/jotai@1.4.3)  |    6.1kB |              2.5kB |

　　上表中，还列出了 jotai，它与 zustand 出自同一个开发者群体之手，前者仅适用于 React.js 组件内的状态管理，而后者还适用于组件之外的状态操作。**zustand** 足够简单，且无需太多模板代码，仅 **954B** 大小即可满足应用状态管理的核心需求。

　　至此，移动端场景下，要替代 react-redux 这种主流方案，考虑以下几点：

- 满足应用状态管理的核心需求
- 具备资源大小优势
- 用法足够简单
- 方案成熟（较多人采用、有配套的调试工具等）
- 可在组件外操作状态

　　其中，可在组件外操作状态这一点其实是为了满足方案的灵活性，有时候业务需求的实现可能会涉及到在组件之外进行状态操作的场景，这个时候就很方便了。

## redux vs zustand

　　接下来，分析一下两者的源码实现，即可了解是否 zustand 可作为一个较好的替代方案。分两步进行，第一步首先来看看两者的核心实现，即状态管理的机制。

　　首先，我们要明白状态管理做的是什么事情。状态即数据，对于一个原生的 Web 应用来说，某一时刻页面展示的结构和样式取决于此时的状态，状态可能会由于用户交互动作发生变化。Web 应用有很多状态，比如表单的勾选按钮状态，我们可以将这种状态视为局部状态，该状态的变化不会导致页面其它部分发生变化；当然，如果我们将用户体验设计更进一步，勾选按钮的状态会同步影响表单提交按钮是否处于可点击的状态，此时一个状态在页面两个部分都有影响，对于更复杂的 Web 应用来说，一个状态可能影响到页面数十个部分，我们就需要对状态的维护更新机制进行设计，将状态的维护从页面进行解耦，独立到全局来进行，则将这种状态称之为全局状态。显然，对于局部状态来说，页面局部可以完成自治，而对于全局状态来说，则需要一个全局中心化的“数据库”来进行管理。

　　现在，我们可以知道，状态管理需要提供一个类似中心化的“数据库”，同时对于状态要提供更新机制，而状态可以被多个部分依赖，状态更新的同时依赖方可以及时获取到最新状态。这不就是软件架构中典型的发布/订阅模式吗？所以，先来看看 redux 和 zustand 两者提供的 API，大致就能理解其核心实现的模型。

```typescript
// Redux (https://redux.js.org/api/api-reference)
createStore(reducer, [preloadedState], [enhancer])
// Store
getState()
subscribe(listener)
dispatch(action)

// zustand (https://github.com/pmndrs/zustand)
createStore()
// Store
getState()
subscribe()
setState()
```

　　由此可见，两者提供的核心 API 是非常相近的，从 API 命名的角度来看，其核心实现无疑是基于发布/订阅模式。

　　两者都有一个 `createStore()` API 来创建一个中心化的数据存储区，同时创建的 store 实例均会暴露出主动获取状态的 API `getState()`，订阅状态更新的 API `subscribe()`，以及更新状态的 API `dispatch()` 和 `setState()`，当然 redux 还引入了一个 `reducer` 的概念和 API。

　　两者的核心库均只有 1kb 大小，而 zustand 更小，这是因为 zustand 实现更为简单一些，其差异主要集中在状态更新机制上，其次是状态订阅机制。

### `subscribe()`

　　在状态订阅的 `subscribe()` API 实现中，zustand 仅是简单的直接将订阅函数添加到订阅列表中，同时提供了一个 `selector` 机制来过滤状态：

```typescript
// see https://github.com/pmndrs/zustand/blob/v3.6.5/src/vanilla.ts#L126
const subscribe: Subscribe<TState> = <StateSlice>(
  listener: StateListener<TState> | StateSliceListener<StateSlice>,
  selector?: StateSelector<TState, StateSlice>,
  equalityFn?: EqualityChecker<StateSlice>
) => {
  if (selector || equalityFn) {
    return subscribeWithSelector(
      listener as StateSliceListener<StateSlice>,
      selector,
      equalityFn
    )
  }
  listeners.add(listener as StateListener<TState>)
  // Unsubscribe
  return () => listeners.delete(listener as StateListener<TState>)
}

// see https://github.com/pmndrs/zustand/blob/v3.6.5/src/vanilla.ts#L107
const subscribeWithSelector = <StateSlice>(
  listener: StateSliceListener<StateSlice>,
  selector: StateSelector<TState, StateSlice> = getState as any,
  equalityFn: EqualityChecker<StateSlice> = Object.is
) => {
  console.warn('[DEPRECATED] Please use `subscribeWithSelector` middleware')
  let currentSlice: StateSlice = selector(state)
  function listenerToAdd() {
    const nextSlice = selector(state)
    if (!equalityFn(currentSlice, nextSlice)) {
      const previousSlice = currentSlice
      listener((currentSlice = nextSlice), previousSlice)
    }
  }
  listeners.add(listenerToAdd)
  // Unsubscribe
  return () => listeners.delete(listenerToAdd)
}
```

　　通过上面 `listenerToAdd()` 函数可以看到，在订阅状态时提供了 `selector` 的话，状态更新时会首先将状态过滤一遍再通知给订阅者。

```typescript
// see https://github.com/pmndrs/zustand/blob/v3.6.5/src/vanilla.ts#L89
const setState: SetState<TState> = (partial, replace) => {
	// ...
    listeners.forEach((listener) => listener(state, previousState))
    // ...
}
```

　　通过 `setState()` 更新状态时，所有订阅函数将会调用，同时会将新的状态和旧的状态传递给订阅函数。

　　接下来，看看 redux 的实现，redux 在添加订阅函数时做了一些特殊的判断，以及特殊处理：

```js
// see https://github.com/reduxjs/redux/blob/v4.1.2/src/createStore.js#L128
function subscribe(listener) {
  // ...
  if (isDispatching) {
    throw new Error('...')
  }

  let isSubscribed = true

  ensureCanMutateNextListeners()
  nextListeners.push(listener)

  return function unsubscribe() {
    if (!isSubscribed) {
      return
    }

    if (isDispatching) {
      throw new Error('...')
    }

    isSubscribed = false

    ensureCanMutateNextListeners()
    const index = nextListeners.indexOf(listener)
    nextListeners.splice(index, 1)
    currentListeners = null
  }
}

// see https://github.com/reduxjs/redux/blob/v4.1.2/src/createStore.js#L82
function ensureCanMutateNextListeners() {
  if (nextListeners === currentListeners) {
    nextListeners = currentListeners.slice()
  }
}
```

　　根据实现，redux 通过 `isDispatching` 标志位避免在状态更新期间添加订阅函数，以及通过 `ensureCanMutateNextListeners()` 函数将订阅函数列表做了浅拷贝再进行添加和删除操作，这都是对潜在的问题的规避。

```js
// see https://github.com/reduxjs/redux/blob/v4.1.2/src/createStore.js#L197
function dispatch(action) {
  // ...

  const listeners = (currentListeners = nextListeners)
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i]
    listener()
  }

  return action
}
```

　　redux 通过 `dispatch()` 更新状态时，由于在订阅时没有默认提供 `selector` 机制，所以会无差别的通知所有订阅者，同时也不会将新旧状态传递给订阅函数，当然在官方示例代码中可以看到，官方推荐在订阅函数中主动通过 `getState()` 获取新的状态以及完成 selector 操作。可以说，由于 redux 和 zustand 设计理念不同，订阅的实现方式也略有差别，前者控制的更细致，而灵活性很高，而后者在保持简单性的同时也没有牺牲灵活性。

### `setState()` && `dispatch()`

　　状态更新机制是两者实现最大的不同，zustand 提供一个 `setState()` 函数来更新状态：

```typescript
// see https://github.com/pmndrs/zustand/blob/v3.6.5/src/vanilla.ts#L89
const setState: SetState<TState> = (partial, replace) => {
  // TODO: Remove type assertion once https://github.com/microsoft/TypeScript/issues/37663 is resolved
  // https://github.com/microsoft/TypeScript/issues/37663#issuecomment-759728342
  const nextState =
    typeof partial === 'function'
      ? (partial as (state: TState) => TState)(state)
      : partial
  if (nextState !== state) {
    const previousState = state
    state = replace
      ? (nextState as TState)
      : Object.assign({}, state, nextState)
    listeners.forEach((listener) => listener(state, previousState))
  }
}
```

　　根据源码实现来看，zustand 通过 `Object.assign` 函数合并更新状态，同时提供 `replace` 标志位直接将旧状态完全替换。

　　而 redux 的状态更新则要复杂一些，主要是官方推荐的编程模式将状态更新拆分为多个步骤，`dispatch()` 函数触发一个 `Action`，而具体处理 Action 以及状态合并的操作均由 `Reducer` 函数完成，该函数是一个纯函数。至于为什么要这么设计，官方有说明，纯函数对于状态变化来说是可预测的，而且利于测试，更是实现时间旅行类似功能的基础。

```js
// see https://github.com/reduxjs/redux/blob/v4.1.2/src/createStore.js#L197
function dispatch(action) {
  if (!isPlainObject(action)) {
    throw new Error(
      `Actions must be plain objects. Instead, the actual type was: '${kindOf(
        action
      )}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`
    )
  }

  if (typeof action.type === 'undefined') {
    throw new Error(
      'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.'
    )
  }

  if (isDispatching) {
    throw new Error('Reducers may not dispatch actions.')
  }

  try {
    isDispatching = true
    currentState = currentReducer(currentState, action)
  } finally {
    isDispatching = false
  }

  const listeners = (currentListeners = nextListeners)
  for (let i = 0; i < listeners.length; i++) {
    const listener = listeners[i]
    listener()
  }

  return action
}
```

　　根据源码实现来看，这里出现了 `isDispatching` 标志位，主要是用来限制状态更新过程中不能再次发起状态更新操作，避免出现错误。

　　不过，有一点值得提一下，redux 默认不支持异步更新状态，需要借助 redux-thunk 库来支持；而 zustand 本身则是支持异步更新状态的。

　　根据以上分析来看，实际上核心实现是相似的，而且 zustand 作为后来者，对 redux 有借鉴也有简化的地方，满足状态管理的核心简单需求是没有多大问题的，可作为 redux 的一个替代方案。

### React.js 适配

　　如果说，核心库差异较小，而且包尺寸相近的话，那么最大的差异则出现在对 React.js 库的适配上面。

　　zustand 出现的较晚，目前 Hook API 已经成为 React.js 社区的主流，所以 zustand 在对其适配的时候也是以 Hook API 的方式实现，没有提供类组件的适配。

```typescript
// see https://github.com/pmndrs/zustand/blob/v3.6.5/src/index.ts#L64
function create<
  TState extends State,
  CustomSetState,
  CustomGetState,
  CustomStoreApi extends StoreApi<TState>
>(
  createState:
    | StateCreator<TState, CustomSetState, CustomGetState, CustomStoreApi>
    | CustomStoreApi
): UseBoundStore<TState, CustomStoreApi> {
  // ...
  const useStore: any = <StateSlice>(
    selector: StateSelector<TState, StateSlice> = api.getState as any,
    equalityFn: EqualityChecker<StateSlice> = Object.is
  ) => {
    const [, forceUpdate] = useReducer((c) => c + 1, 0) as [never, () => void]
    // ...
    const stateBeforeSubscriptionRef = useRef(state)
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = api.getState()
          const nextStateSlice = selectorRef.current(nextState)
          if (
            !equalityFnRef.current(
              currentSliceRef.current as StateSlice,
              nextStateSlice
            )
          ) {
            stateRef.current = nextState
            currentSliceRef.current = nextStateSlice
            forceUpdate()
          }
        } catch (error) {
          erroredRef.current = true
          forceUpdate()
        }
      }
      const unsubscribe = api.subscribe(listener)
      if (api.getState() !== stateBeforeSubscriptionRef.current) {
        listener() // state has changed before subscription
      }
      return unsubscribe
    }, [])

    const sliceToReturn = hasNewStateSlice
      ? (newStateSlice as StateSlice)
      : currentSliceRef.current
    useDebugValue(sliceToReturn)
    return sliceToReturn
  }

  // ...
  return useStore
}
```

　　zustand 将 `createStore` 函数的返回值作为一个自定义 hook 来实现，其中为了让 React.js 组件能感知到状态更新，是利用 `useEffect` 来完成订阅操作，而状态更新发布后，则通过 `forceUpdate()` 来强制组件进行 rerender 以获取最新的状态。

　　这里，看看如何在函数组件中使用 zustand：

```js
import create from 'zustand'

// Store
const useStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

// Component
function BearCounter() {
  const bears = useStore(state => state.bears)
  return <h1>{bears} around here ...</h1>
}

function Controls() {
  const increasePopulation = useStore(state => state.increasePopulation)
  return <button onClick={increasePopulation}>one up</button>
}
```

　　实际上，用法和 react-redux 非常相似，但获取状态与更新状态均只需要使用 `useStore` 一个 API 即可完成业务。

　　然而，react-redux 的实现则要复杂的多。由于其出现的较早，所以同时适配了类组件和函数组件。这里不再细究 react-redux 的具体实现，但其与 zustand 最大的差异则在于把状态放在了 `Context` 中存储，所以需要使用 `Provider` 将页面的根组件包裹起来才能使用。redux 的 `useSelector()` Hook API 与 zustand 上面提到的 `useStore()` 的实现逻辑也非常相似。

### 调式工具

　　一个核心工具库好不好用，不仅要能解决业务问题，同时也要能提供良好的开发体验，redux 之所以能成为 React.js 社区普遍采用的状态管理方案，不仅在于其实现的优雅，倡导的优秀的模式，更在于其配套的调试工具、中间件也非常好用。所以，zustand 作为后来者并没有重复造轮子，而是尽最大的可能重用 redux 社区的开源方案，这一点也是比较好的，至少从 redux 迁移到 zustand 不会有太大的困难，开发体验上来说还是不错的。

## 结语

　　至此，完成了对 zustand 这个轻量级的状态管理方案的探索，至少在满足状态管理简单的核心需求、使用简单、具备良好的调式工具等几方面来说还是不错的，作为 redux 的轻量级替代方案，完全值得一试。

## 参考

- [redux](https://redux.js.org/)
- [react-redux](https://react-redux.js.org/)
- [zustand](https://zustand.surge.sh/)
- [Let’s build our own Redux](https://javascript.plainenglish.io/lets-build-our-own-redux-9384b283529c)
