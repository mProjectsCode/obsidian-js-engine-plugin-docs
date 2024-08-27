---
editUrl: false
next: false
prev: false
title: "LibAPI"
---

The lib API provides in interface to some external libraries packaged into js engine.

## Constructors

### new LibAPI()

> **new LibAPI**(`apiInstance`): [`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

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

#### Defined in

[jsEngine/api/LibAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L24)

## Methods

### itertools()

> **itertools**(): `__module`

Get the [itertools-ts](https://github.com/Smoren/itertools-ts) library.

#### Returns

`__module`

#### Defined in

[jsEngine/api/LibAPI.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L45)

***

### parsinom()

> **parsinom**(): [`LibParsiNOM`](/obsidian-js-engine-plugin-docs/api/interfaces/libparsinom/)

Get the [ParsiNOM](https://github.com/mProjectsCode/parsiNOM) library.

#### Returns

[`LibParsiNOM`](/obsidian-js-engine-plugin-docs/api/interfaces/libparsinom/)

#### Defined in

[jsEngine/api/LibAPI.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L31)
