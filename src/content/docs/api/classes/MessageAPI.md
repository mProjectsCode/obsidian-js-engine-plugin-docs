---
editUrl: false
next: false
prev: false
title: "MessageAPI"
---

## Constructors

### new MessageAPI(apiInstance)

```ts
new MessageAPI(apiInstance): MessageAPI
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](API.md) |

#### Returns

[`MessageAPI`](MessageAPI.md)

#### Source

[jsEngine/api/MessageAPI.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MessageAPI.ts#L8)

## Properties

### apiInstance

```ts
readonly apiInstance: API;
```

#### Source

[jsEngine/api/MessageAPI.ts:5](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MessageAPI.ts#L5)

***

### messageManager

```ts
readonly messageManager: MessageManager;
```

#### Source

[jsEngine/api/MessageAPI.ts:6](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MessageAPI.ts#L6)

## Methods

### createMessage()

```ts
createMessage(
   type, 
   title, 
   content, 
   code): MessageWrapper
```

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

[jsEngine/api/MessageAPI.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MessageAPI.ts#L13)

***

### getMessageById()

```ts
getMessageById(id): undefined | MessageWrapper
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`undefined` \| `MessageWrapper`

#### Source

[jsEngine/api/MessageAPI.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MessageAPI.ts#L17)

***

### getMessagesForInstance()

```ts
getMessagesForInstance(): MessageWrapper[]
```

#### Returns

`MessageWrapper`[]

#### Source

[jsEngine/api/MessageAPI.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MessageAPI.ts#L21)
