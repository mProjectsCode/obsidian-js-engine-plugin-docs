---
editUrl: false
next: false
prev: false
title: "LibAPI"
---

The lib API provides in interface to some external libraries packaged into js engine.

## Constructors

### new LibAPI(apiInstance)

> **new LibAPI**(`apiInstance`): [`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/) |

#### Returns

[`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

#### Source

[jsEngine/api/LibAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/LibAPI.ts#L24)

## Methods

### itertools()

> **itertools**(): `__module`

Get the [itertools-ts](https://github.com/Smoren/itertools-ts) library.

#### Returns

`__module`

#### Source

[jsEngine/api/LibAPI.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/LibAPI.ts#L45)

***

### parsinom()

> **parsinom**(): [`LibParsiNOM`](/obsidian-js-engine-plugin-docs/api/interfaces/libparsinom/)

Get the [ParsiNOM](https://github.com/mProjectsCode/parsiNOM) library.

#### Returns

[`LibParsiNOM`](/obsidian-js-engine-plugin-docs/api/interfaces/libparsinom/)

#### Source

[jsEngine/api/LibAPI.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/LibAPI.ts#L31)
