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
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
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
</table>

#### Returns

[`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/classes/resultrenderer/)

#### Defined in

[jsEngine/engine/ResultRenderer.ts:19](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/ResultRenderer.ts#L19)

## Properties

### component

> `readonly` **component**: `Component`

#### Defined in

[jsEngine/engine/ResultRenderer.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/ResultRenderer.ts#L17)

***

### container

> `readonly` **container**: [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

#### Defined in

[jsEngine/engine/ResultRenderer.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/ResultRenderer.ts#L15)

***

### plugin

> `readonly` **plugin**: `JsEnginePlugin`

#### Defined in

[jsEngine/engine/ResultRenderer.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/ResultRenderer.ts#L14)

***

### sourcePath

> `readonly` **sourcePath**: `string`

#### Defined in

[jsEngine/engine/ResultRenderer.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/ResultRenderer.ts#L16)

## Methods

### convertToSimpleObject()

> **convertToSimpleObject**(`value`): `unknown`

Converts the given value to a simple object.
E.g. a [MarkdownBuilder](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownbuilder) will be converted to a string.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

`unknown`

The simple object.

#### Defined in

[jsEngine/engine/ResultRenderer.ts:87](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/ResultRenderer.ts#L87)

***

### render()

> **render**(`value`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Renders the given value to the container.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Defined in

[jsEngine/engine/ResultRenderer.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/ResultRenderer.ts#L31)
