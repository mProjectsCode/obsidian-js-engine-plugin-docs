---
editUrl: false
next: false
prev: false
title: "MessageAPI"
---

Defined in: [jsEngine/api/MessageAPI.ts:7](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/MessageAPI.ts#L7)

## Constructors

### new MessageAPI()

> **new MessageAPI**(`apiInstance`): [`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

Defined in: [jsEngine/api/MessageAPI.ts:11](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/MessageAPI.ts#L11)

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

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/api/MessageAPI.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/MessageAPI.ts#L8)

***

### messageManager

> `readonly` **messageManager**: `MessageManager`

Defined in: [jsEngine/api/MessageAPI.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/MessageAPI.ts#L9)

## Methods

### createMessage()

> **createMessage**(`type`, `title`, `content`, `code`): `MessageWrapper`

Defined in: [jsEngine/api/MessageAPI.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/MessageAPI.ts#L16)

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

***

### getMessageById()

> **getMessageById**(`id`): `undefined` \| `MessageWrapper`

Defined in: [jsEngine/api/MessageAPI.ts:27](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/MessageAPI.ts#L27)

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

***

### getMessagesForInstance()

> **getMessagesForInstance**(): `MessageWrapper`[]

Defined in: [jsEngine/api/MessageAPI.ts:33](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/MessageAPI.ts#L33)

#### Returns

`MessageWrapper`[]
