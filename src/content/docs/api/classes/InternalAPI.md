---
editUrl: false
next: false
prev: false
title: "InternalAPI"
---

The internal API provides access to some of js engines internals.

## Constructors

### new InternalAPI()

> **new InternalAPI**(`apiInstance`): [`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`apiInstance`

</td>
<td>

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

</td>
</tr>
</tbody>
</table>

#### Returns

[`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

#### Defined in

[jsEngine/api/Internal.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/Internal.ts#L13)

## Methods

### createRenderer()

> **createRenderer**(`container`, `sourcePath`, `component`): [`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/classes/resultrenderer/)

Creates a result renderer.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`container`

</td>
<td>

[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

</td>
<td>

</td>
</tr>
<tr>
<td>

`sourcePath`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
<tr>
<td>

`component`

</td>
<td>

`Component`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/classes/resultrenderer/)

#### Defined in

[jsEngine/api/Internal.ts:33](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/Internal.ts#L33)

***

### execute()

> **execute**(`params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Executes the given code.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`params`

</td>
<td>

[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Defined in

[jsEngine/api/Internal.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/Internal.ts#L22)

***

### executeFile()

> **executeFile**(`path`, `params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Load and execute the given file.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`path`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
<tr>
<td>

`params`

</td>
<td>

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/), `"code"`\>

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Defined in

[jsEngine/api/Internal.ts:43](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/Internal.ts#L43)

***

### executeFileSimple()

> **executeFileSimple**(`path`, `params`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Lead and execute the given file.
This method also handles the lifetime of the execution.
The component for the execution is created and destroyed automatically.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`path`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
<tr>
<td>

`params`?

</td>
<td>

[`Omit`](https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys)\<[`EngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/interfaces/engineexecutionparams/), `"code"` \| `"component"`\>

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Defined in

[jsEngine/api/Internal.ts:61](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/Internal.ts#L61)

***

### getContextForFile()

> **getContextForFile**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/)\>

Gets the execution context for a specific file, throws when the file does not exist.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`path`

</td>
<td>

`string`

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutioncontext/)\>

#### Defined in

[jsEngine/api/Internal.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b03cdc5d89f9f492e8ccbc5d6a798fe7e18efd5e/jsEngine/api/Internal.ts#L76)
