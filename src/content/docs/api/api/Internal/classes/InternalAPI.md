---
editUrl: false
next: false
prev: false
title: "InternalAPI"
---

The internal API provides access to some of js engines internals.

## Constructors

### new InternalAPI(apiInstance)

```ts
new InternalAPI(apiInstance): InternalAPI
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](/obsidian-js-engine-plugin-docs/api/api/api/classes/api/) |

#### Returns

[`InternalAPI`](/obsidian-js-engine-plugin-docs/api/api/internal/classes/internalapi/)

#### Source

[jsEngine/api/Internal.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/Internal.ts#L13)

## Methods

### createRenderer()

```ts
createRenderer(
   container, 
   sourcePath, 
   component): ResultRenderer
```

Creates a result renderer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `container` | [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement ) |  |
| `sourcePath` | `string` |  |
| `component` | `Component` |  |

#### Returns

[`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/engine/resultrenderer/classes/resultrenderer/)

#### Source

[jsEngine/api/Internal.ts:33](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/Internal.ts#L33)

***

### execute()

```ts
execute(params): Promise<JsExecution>
```

Executes the given code.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `params` | [`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/) |  |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/classes/jsexecution/)\>

#### Source

[jsEngine/api/Internal.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/Internal.ts#L22)

***

### executeFile()

```ts
executeFile(path, params): Promise<JsExecution>
```

Load and execute the given file.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` |  |
| `params` | [`Omit`]( https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys )\<[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/engine/engine/interfaces/engineexecutionparams/), `"code"`\> |  |

#### Returns

[`Promise`]( https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise )\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/engine/jsexecution/classes/jsexecution/)\>

#### Source

[jsEngine/api/Internal.ts:43](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/Internal.ts#L43)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
