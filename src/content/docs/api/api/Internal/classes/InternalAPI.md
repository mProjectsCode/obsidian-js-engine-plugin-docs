---
editUrl: false
next: false
prev: false
title: "InternalAPI"
---

The internal API provides access to some of js engines internals.

## Constructors

### new InternalAPI(apiInstance)

> **new InternalAPI**(`apiInstance`): [`InternalAPI`](/api/api/internal/classes/internalapi/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](/api/api/api/classes/api/) |

#### Returns

[`InternalAPI`](/api/api/internal/classes/internalapi/)

#### Source

[jsEngine/api/Internal.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/Internal.ts#L13)

## Methods

### createRenderer()

> **createRenderer**(`container`, `sourcePath`, `component`): `ResultRenderer`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `container` | [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement ) |
| `sourcePath` | `string` |
| `component` | `Component` |

#### Returns

`ResultRenderer`

#### Source

[jsEngine/api/Internal.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/Internal.ts#L21)

***

### execute()

> **execute**(`params`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `params` | [`EngineExecutionParams`](/api/engine/engine/type-aliases/engineexecutionparams/) |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)\>

#### Source

[jsEngine/api/Internal.ts:17](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/Internal.ts#L17)

***

### executeFile()

> **executeFile**(`path`, `params`): [`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |
| `params` | [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<[`EngineExecutionParams`](/api/engine/engine/type-aliases/engineexecutionparams/), `"code"`\> |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/api/engine/jsexecution/classes/jsexecution/)\>

#### Source

[jsEngine/api/Internal.ts:25](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/Internal.ts#L25)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
