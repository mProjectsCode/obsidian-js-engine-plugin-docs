---
editUrl: false
next: false
prev: false
title: "ReactiveComponent"
---

## Constructors

### new ReactiveComponent(_render, initialArgs)

> **new ReactiveComponent**(`_render`, `initialArgs`): [`ReactiveComponent`](/api/api/reactive/reactivecomponent/classes/reactivecomponent/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_render` | [`JsFunc`](/api/engine/jsexecution/type-aliases/jsfunc/) |
| `initialArgs` | `unknown`[] |

#### Returns

[`ReactiveComponent`](/api/api/reactive/reactivecomponent/classes/reactivecomponent/)

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/reactive/ReactiveComponent.ts#L9)

## Properties

### \_render

> **`readonly`** **\_render**: [`JsFunc`](/api/engine/jsexecution/type-aliases/jsfunc/)

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:5](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/reactive/ReactiveComponent.ts#L5)

***

### initialArgs

> **`readonly`** **initialArgs**: `unknown`[]

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:6](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/reactive/ReactiveComponent.ts#L6)

***

### renderer

> **renderer**: `undefined` \| `ResultRenderer`

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:7](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/reactive/ReactiveComponent.ts#L7)

## Methods

### initialRender()

> **initialRender**(): `void`

#### Returns

`void`

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/reactive/ReactiveComponent.ts#L18)

***

### refresh()

> **refresh**(...`args`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `unknown`[] |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<`void`\>

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/reactive/ReactiveComponent.ts#L14)

***

### setRenderer()

> **setRenderer**(`renderer`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `renderer` | `ResultRenderer` |

#### Returns

`void`

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/reactive/ReactiveComponent.ts#L22)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
