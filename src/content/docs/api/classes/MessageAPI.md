---
editUrl: false
next: false
prev: false
title: "MessageAPI"
---

## Constructors

### new MessageAPI()

> **new MessageAPI**(`apiInstance`): [`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

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

[`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

#### Defined in

[jsEngine/api/MessageAPI.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/MessageAPI.ts#L8)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Defined in

[jsEngine/api/MessageAPI.ts:5](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/MessageAPI.ts#L5)

***

### messageManager

> `readonly` **messageManager**: `MessageManager`

#### Defined in

[jsEngine/api/MessageAPI.ts:6](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/MessageAPI.ts#L6)

## Methods

### createMessage()

> **createMessage**(`type`, `title`, `content`, `code`): `MessageWrapper`

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Default value</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`type`

</td>
<td>

`MessageType`

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`title`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`content`

</td>
<td>

`string`

</td>
<td>

`undefined`

</td>
</tr>
<tr>
<td>

`code`

</td>
<td>

`string`

</td>
<td>

`''`

</td>
</tr>
</tbody>
</table>

#### Returns

`MessageWrapper`

#### Defined in

[jsEngine/api/MessageAPI.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/MessageAPI.ts#L13)

***

### getMessageById()

> **getMessageById**(`id`): `undefined` \| `MessageWrapper`

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

`id`

</td>
<td>

`string`

</td>
</tr>
</tbody>
</table>

#### Returns

`undefined` \| `MessageWrapper`

#### Defined in

[jsEngine/api/MessageAPI.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/MessageAPI.ts#L17)

***

### getMessagesForInstance()

> **getMessagesForInstance**(): `MessageWrapper`[]

#### Returns

`MessageWrapper`[]

#### Defined in

[jsEngine/api/MessageAPI.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/MessageAPI.ts#L21)
