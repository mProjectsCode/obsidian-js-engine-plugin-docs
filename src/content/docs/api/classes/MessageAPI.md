---
editUrl: false
next: false
prev: false
title: "MessageAPI"
---

## Constructors

### new MessageAPI(apiInstance)

> **new MessageAPI**(`apiInstance`): [`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/) |

#### Returns

[`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

#### Source

[jsEngine/api/MessageAPI.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MessageAPI.ts#L8)

## Properties

### apiInstance

> **`readonly`** **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Source

[jsEngine/api/MessageAPI.ts:5](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MessageAPI.ts#L5)

***

### messageManager

> **`readonly`** **messageManager**: `MessageManager`

#### Source

[jsEngine/api/MessageAPI.ts:6](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MessageAPI.ts#L6)

## Methods

### createMessage()

> **createMessage**(`type`, `title`, `content`, `code`): `MessageWrapper`

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `type` | `MessageType` | `undefined` |
| `title` | `string` | `undefined` |
| `content` | `string` | `undefined` |
| `code` | `string` | `''` |

#### Returns

`MessageWrapper`

#### Source

[jsEngine/api/MessageAPI.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MessageAPI.ts#L13)

***

### getMessageById()

> **getMessageById**(`id`): `undefined` \| `MessageWrapper`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| `MessageWrapper`

#### Source

[jsEngine/api/MessageAPI.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MessageAPI.ts#L17)

***

### getMessagesForInstance()

> **getMessagesForInstance**(): `MessageWrapper`[]

#### Returns

`MessageWrapper`[]

#### Source

[jsEngine/api/MessageAPI.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MessageAPI.ts#L21)
