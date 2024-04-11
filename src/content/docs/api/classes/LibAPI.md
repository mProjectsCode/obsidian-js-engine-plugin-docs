---
editUrl: false
next: false
prev: false
title: "LibAPI"
---

The lib API provides in interface to some external libraries packaged into js engine.

## Constructors

### new LibAPI(apiInstance)

```ts
new LibAPI(apiInstance): LibAPI
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](API.md) |

#### Returns

[`LibAPI`](LibAPI.md)

#### Source

[jsEngine/api/LibAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/LibAPI.ts#L24)

## Methods

### itertools()

```ts
itertools(): __module
```

Get the [itertools-ts](https://github.com/Smoren/itertools-ts) library.

#### Returns

`__module`

#### Source

[jsEngine/api/LibAPI.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/LibAPI.ts#L45)

***

### parsinom()

```ts
parsinom(): LibParsiNOM
```

Get the [ParsiNOM](https://github.com/mProjectsCode/parsiNOM) library.

#### Returns

[`LibParsiNOM`](../interfaces/LibParsiNOM.md)

#### Source

[jsEngine/api/LibAPI.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/LibAPI.ts#L31)
