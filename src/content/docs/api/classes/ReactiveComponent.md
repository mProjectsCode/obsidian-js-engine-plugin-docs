---
editUrl: false
next: false
prev: false
title: "ReactiveComponent"
---

A reactive component is a component that can be refreshed.
This is useful for rendering dynamic content.

See [API.reactive](../../../../../obsidian-js-engine-plugin-docs/api/classes/api/#reactive)

## Constructors

### new ReactiveComponent(api, _render, initialArgs)

```ts
new ReactiveComponent(
   api, 
   _render, 
   initialArgs): ReactiveComponent
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `api` | [`API`](API.md) |
| `_render` | [`JsFunc`](../type-aliases/JsFunc.md) |
| `initialArgs` | `unknown`[] |

#### Returns

[`ReactiveComponent`](ReactiveComponent.md)

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/reactive/ReactiveComponent.ts#L21)

## Methods

### refresh()

```ts
refresh(...args): Promise<void>
```

Refreshes the component by rerunning the render function with the arguments passed into this function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `unknown`[] |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/reactive/ReactiveComponent.ts#L32)
