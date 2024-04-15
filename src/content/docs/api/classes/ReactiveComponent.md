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

> **new ReactiveComponent**(`api`, `_render`, `initialArgs`): [`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `api` | [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/) |
| `_render` | [`JsFunc`](/obsidian-js-engine-plugin-docs/api/type-aliases/jsfunc/) |
| `initialArgs` | `unknown`[] |

#### Returns

[`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/reactive/ReactiveComponent.ts#L21)

## Methods

### refresh()

> **refresh**(...`args`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Refreshes the component by rerunning the render function with the arguments passed into this function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `unknown`[] |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Source

[jsEngine/api/reactive/ReactiveComponent.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/reactive/ReactiveComponent.ts#L32)
