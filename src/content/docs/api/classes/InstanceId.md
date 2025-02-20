---
editUrl: false
next: false
prev: false
title: "InstanceId"
---

Defined in: [jsEngine/api/InstanceId.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/InstanceId.ts#L13)

Identifies an instance of the API.

For the API passed into a JsExecution this is the id of the JsExecution itself.

## Constructors

### new InstanceId()

> **new InstanceId**(`name`, `id`, `executionContext`?): [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

Defined in: [jsEngine/api/InstanceId.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/InstanceId.ts#L18)

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

`name`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`id`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`executionContext`?

</td>
<td>

[`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/)

</td>
</tr>
</tbody>
</table>

#### Returns

[`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

## Properties

### executionContext

> `readonly` **executionContext**: `undefined` \| [`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/)

Defined in: [jsEngine/api/InstanceId.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/InstanceId.ts#L16)

***

### id

> `readonly` **id**: `string`

Defined in: [jsEngine/api/InstanceId.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/InstanceId.ts#L15)

***

### name

> `readonly` **name**: `string`

Defined in: [jsEngine/api/InstanceId.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/InstanceId.ts#L14)

## Methods

### toString()

> **toString**(): `string`

Defined in: [jsEngine/api/InstanceId.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/InstanceId.ts#L24)

#### Returns

`string`

***

### create()

> `static` **create**(`name`): [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

Defined in: [jsEngine/api/InstanceId.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/InstanceId.ts#L28)

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

`name`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

[`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)
