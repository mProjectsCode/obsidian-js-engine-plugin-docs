---
editUrl: false
next: false
prev: false
title: "InstanceId"
---

Identifies an instance of the API.

For the API passed into a JsExecution this is the id of the JsExecution itself.

## Constructors

### new InstanceId()

> **new InstanceId**(`name`, `id`): [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

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
</tbody>
</table>

#### Returns

[`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

#### Defined in

[jsEngine/api/InstanceId.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/InstanceId.ts#L15)

## Properties

### id

> `readonly` **id**: `string`

#### Defined in

[jsEngine/api/InstanceId.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/InstanceId.ts#L13)

***

### name

> `readonly` **name**: `string`

#### Defined in

[jsEngine/api/InstanceId.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/InstanceId.ts#L12)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Defined in

[jsEngine/api/InstanceId.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/InstanceId.ts#L20)

***

### create()

> `static` **create**(`name`): [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

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

#### Defined in

[jsEngine/api/InstanceId.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/InstanceId.ts#L24)
