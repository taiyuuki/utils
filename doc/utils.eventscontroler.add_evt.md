<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@taiyuuki/utils](./utils.md) &gt; [EventsControler](./utils.eventscontroler.md) &gt; [add\_evt](./utils.eventscontroler.add_evt.md)

## EventsControler.add\_evt() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

绑定事件

**Signature:**

```typescript
add_evt<T extends EventTarget>(target: T, type: Parameters<T['addEventListener']>[0], callback: FnNoArgs): this;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  target | T | 需要绑定事件的对象，比如DOM元素 |
|  type | Parameters&lt;T\['addEventListener'\]&gt;\[0\] | 事件类型 |
|  callback | FnNoArgs | 回调 |

**Returns:**

this
