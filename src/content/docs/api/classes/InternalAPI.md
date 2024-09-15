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

[jsEngine/api/Internal.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/Internal.ts#L14)

## Methods

### createExecutionGlobals()

> **createExecutionGlobals**(`options`): [`JsExecutionGlobals`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionglobals/)

Creates execution globals.

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

`options`

</td>
<td>

[`JsExecutionGlobalsConstructionOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionglobalsconstructionoptions/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`JsExecutionGlobals`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionglobals/)

#### Defined in

[jsEngine/api/Internal.ts:97](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/Internal.ts#L97)

***

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

[jsEngine/api/Internal.ts:34](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/Internal.ts#L34)

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

[jsEngine/api/Internal.ts:23](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/Internal.ts#L23)

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

[jsEngine/api/Internal.ts:44](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/Internal.ts#L44)

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

[jsEngine/api/Internal.ts:62](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/Internal.ts#L62)

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

[jsEngine/api/Internal.ts:77](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/1f0648da628182867a83f5d8f76c6abab1f05793/jsEngine/api/Internal.ts#L77)
