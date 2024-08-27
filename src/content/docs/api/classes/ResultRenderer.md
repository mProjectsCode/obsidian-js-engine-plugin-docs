---
editUrl: false
next: false
prev: false
title: "ResultRenderer"
---

Attaches to a container and renders values.
Used to render the result of a [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

## Constructors

### new ResultRenderer()

> **new ResultRenderer**(`plugin`, `container`, `sourcePath`, `component`): [`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/classes/resultrenderer/)

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

`plugin`

</td>
<td>

`JsEnginePlugin`

</td>
</tr>
<tr>
<td>

`container`

</td>
<td>

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
</tr>
<tr>
<td>

`sourcePath`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`component`

</td>
<td>

`Component`

</td>
</tr>
</tbody>
</table>

#### Returns

[`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/classes/resultrenderer/)

#### Defined in

[jsEngine/engine/ResultRenderer.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/ResultRenderer.ts#L20)

## Properties

### component

> `readonly` **component**: `Component`

#### Defined in

[jsEngine/engine/ResultRenderer.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/ResultRenderer.ts#L18)

***

### container

> `readonly` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Defined in

[jsEngine/engine/ResultRenderer.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/ResultRenderer.ts#L16)

***

### plugin

> `readonly` **plugin**: `JsEnginePlugin`

#### Defined in

[jsEngine/engine/ResultRenderer.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/ResultRenderer.ts#L15)

***

### sourcePath

> `readonly` **sourcePath**: `string`

#### Defined in

[jsEngine/engine/ResultRenderer.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/ResultRenderer.ts#L17)

## Methods

### convertToSimpleObject()

> **convertToSimpleObject**(`value`): `unknown`

Converts the given value to a simple object.
E.g. a [MarkdownBuilder](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownbuilder) will be converted to a string.

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

`value`

</td>
<td>

`unknown`

</td>
<td>

The value to convert.

</td>
</tr>
</tbody>
</table>

#### Returns

`unknown`

The simple object.

#### Defined in

[jsEngine/engine/ResultRenderer.ts:92](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/ResultRenderer.ts#L92)

***

### render()

> **render**(`value`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Renders the given value to the container.

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

`value`

</td>
<td>

`unknown`

</td>
<td>

The value to render.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Defined in

[jsEngine/engine/ResultRenderer.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/engine/ResultRenderer.ts#L32)
