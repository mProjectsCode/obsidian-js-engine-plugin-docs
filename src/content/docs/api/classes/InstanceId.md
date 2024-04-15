---
editUrl: false
next: false
prev: false
title: "InstanceId"
---

Identifies an instance of the API.

For the API passed into a JsExecution this is the id of the JsExecution itself.

## Constructors

### new InstanceId(name, id)

> **new InstanceId**(`name`, `id`): [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `id` | `string` |

#### Returns

[`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

#### Source

[jsEngine/api/InstanceId.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/InstanceId.ts#L15)

## Properties

### id

> **`readonly`** **id**: `string`

#### Source

[jsEngine/api/InstanceId.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/InstanceId.ts#L13)

***

### name

> **`readonly`** **name**: `string`

#### Source

[jsEngine/api/InstanceId.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/InstanceId.ts#L12)

## Methods

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Source

[jsEngine/api/InstanceId.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/InstanceId.ts#L20)

***

### create()

> **`static`** **create**(`name`): [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

#### Source

[jsEngine/api/InstanceId.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/InstanceId.ts#L24)
