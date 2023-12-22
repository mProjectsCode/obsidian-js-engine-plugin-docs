---
editUrl: false
next: false
prev: false
title: "ReactiveComponent"
---

A reactive component is a component that can be refreshed.
This is useful for rendering dynamic content.

See API.reactive

## Constructors

### new ReactiveComponent(_render, initialArgs)

```ts
new ReactiveComponent(_render, initialArgs): ReactiveComponent
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_render` | [`JsFunc`](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/type-aliases/jsfunc/) |
| `initialArgs` | `unknown`[] |

#### Returns

[`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/api/reactive/reactivecomponent/classes/reactivecomponent/)

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/api/reactive/ReactiveComponent.ts#L18)

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

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/api/reactive/ReactiveComponent.ts#L28)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
