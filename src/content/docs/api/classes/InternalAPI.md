---
editUrl: false
next: false
prev: false
title: "InternalAPI"
---

The internal API provides access to some of js engines internals.

## Constructors

### new InternalAPI(apiInstance)

> **new InternalAPI**(`apiInstance`): [`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/) |

#### Returns

[`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

#### Source

[jsEngine/api/Internal.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/Internal.ts#L13)

## Methods

### createRenderer()

> **createRenderer**(`container`, `sourcePath`, `component`): [`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/classes/resultrenderer/)

Creates a result renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `container` | [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement) |  |
| `sourcePath` | `string` |  |
| `component` | `Component` |  |

#### Returns

[`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/classes/resultrenderer/)

#### Source

[jsEngine/api/Internal.ts:33](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/Internal.ts#L33)

***

### execute()

> **execute**(`params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Executes the given code.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/) |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Source

[jsEngine/api/Internal.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/Internal.ts#L22)

***

### executeFile()

> **executeFile**(`path`, `params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Load and execute the given file.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` |  |
| `params` | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/), `"code"`\> |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Source

[jsEngine/api/Internal.ts:43](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/Internal.ts#L43)

***

### executeFileSimple()

> **executeFileSimple**(`path`, `params`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Lead and execute the given file.
This method also handles the lifetime of the execution.
The component for the execution is created and destroyed automatically.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` |  |
| `params`? | [`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/), `"code"` \| `"component"`\> |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Source

[jsEngine/api/Internal.ts:61](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/Internal.ts#L61)

***

### getContextForFile()

> **getContextForFile**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/)\>

#### Source

[jsEngine/api/Internal.ts:71](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/Internal.ts#L71)
