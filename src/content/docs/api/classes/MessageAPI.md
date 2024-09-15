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

[jsEngine/api/MessageAPI.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/MessageAPI.ts#L9)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Defined in

[jsEngine/api/MessageAPI.ts:6](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/MessageAPI.ts#L6)

***

### messageManager

> `readonly` **messageManager**: `MessageManager`

#### Defined in

[jsEngine/api/MessageAPI.ts:7](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/MessageAPI.ts#L7)

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

[jsEngine/api/MessageAPI.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/MessageAPI.ts#L14)

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

[jsEngine/api/MessageAPI.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/MessageAPI.ts#L18)

***

### getMessagesForInstance()

> **getMessagesForInstance**(): `MessageWrapper`[]

#### Returns

`MessageWrapper`[]

#### Defined in

[jsEngine/api/MessageAPI.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/MessageAPI.ts#L22)
