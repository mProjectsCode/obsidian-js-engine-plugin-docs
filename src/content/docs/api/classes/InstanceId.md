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

```ts
new InstanceId(name, id): InstanceId
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |
| `id` | `string` |

#### Returns

[`InstanceId`](InstanceId.md)

#### Source

[jsEngine/api/InstanceId.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/InstanceId.ts#L15)

## Properties

### id

```ts
readonly id: string;
```

#### Source

[jsEngine/api/InstanceId.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/InstanceId.ts#L13)

***

### name

```ts
readonly name: string;
```

#### Source

[jsEngine/api/InstanceId.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/InstanceId.ts#L12)

## Methods

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Source

[jsEngine/api/InstanceId.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/InstanceId.ts#L20)

***

### create()

```ts
static create(name): InstanceId
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`InstanceId`](InstanceId.md)

#### Source

[jsEngine/api/InstanceId.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/InstanceId.ts#L24)
