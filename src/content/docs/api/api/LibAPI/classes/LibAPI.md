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
| `apiInstance` | [`API`](/obsidian-js-engine-plugin-docs/api/api/api/classes/api/) |

#### Returns

[`LibAPI`](/obsidian-js-engine-plugin-docs/api/api/libapi/classes/libapi/)

#### Source

[jsEngine/api/LibAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/LibAPI.ts#L24)

## Methods

### itertools()

```ts
itertools(): __module
```

Get the [itertools-ts](https://github.com/Smoren/itertools-ts) library.

#### Returns

`__module`

#### Source

[jsEngine/api/LibAPI.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/LibAPI.ts#L45)

***

### parsinom()

```ts
parsinom(): LibParsiNOM
```

Get the [ParsiNOM](https://github.com/mProjectsCode/parsiNOM) library.

#### Returns

[`LibParsiNOM`](/obsidian-js-engine-plugin-docs/api/api/libapi/interfaces/libparsinom/)

#### Source

[jsEngine/api/LibAPI.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/LibAPI.ts#L31)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
