---
editUrl: false
next: false
prev: false
title: "LibAPI"
---

Defined in: [jsEngine/api/LibAPI.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/LibAPI.ts#L21)

The lib API provides in interface to some external libraries packaged into js engine.

## Constructors

### new LibAPI()

> **new LibAPI**(`apiInstance`): [`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

Defined in: [jsEngine/api/LibAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/LibAPI.ts#L24)

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

`apiInstance`

</td>
<td>

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

</td>
</tr>
</tbody>
</table>

#### Returns

[`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

## Methods

### itertools()

> **itertools**(): `__module`

Defined in: [jsEngine/api/LibAPI.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/LibAPI.ts#L45)

Get the [itertools-ts](https://github.com/Smoren/itertools-ts) library.

#### Returns

`__module`

***

### parsinom()

> **parsinom**(): [`LibParsiNOM`](/obsidian-js-engine-plugin-docs/api/interfaces/libparsinom/)

Defined in: [jsEngine/api/LibAPI.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/LibAPI.ts#L31)

Get the [ParsiNOM](https://github.com/mProjectsCode/parsiNOM) library.

#### Returns

[`LibParsiNOM`](/obsidian-js-engine-plugin-docs/api/interfaces/libparsinom/)
