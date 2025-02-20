---
editUrl: false
next: false
prev: false
title: "ReactiveComponent"
---

Defined in: [jsEngine/api/reactive/ReactiveComponent.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/reactive/ReactiveComponent.ts#L12)

A reactive component is a component that can be refreshed.
This is useful for rendering dynamic content.

See [API.reactive](../../../../../obsidian-js-engine-plugin-docs/api/classes/api/#reactive)

## Constructors

### new ReactiveComponent()

> **new ReactiveComponent**(`api`, `_render`, `initialArgs`): [`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

Defined in: [jsEngine/api/reactive/ReactiveComponent.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/reactive/ReactiveComponent.ts#L21)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`api`

</td>
<td>

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

</td>
</tr>
<tr>
<td>

`_render`

</td>
<td>

[`JsFunc`](/obsidian-js-engine-plugin-docs/api/type-aliases/jsfunc/)

</td>
</tr>
<tr>
<td>

`initialArgs`

</td>
<td>

`unknown`[]

</td>
</tr>
</tbody>
</table>

#### Returns

[`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

## Methods

### refresh()

> **refresh**(...`args`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [jsEngine/api/reactive/ReactiveComponent.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/reactive/ReactiveComponent.ts#L32)

Refreshes the component by rerunning the render function with the arguments passed into this function.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

...`args`

</td>
<td>

`unknown`[]

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>
