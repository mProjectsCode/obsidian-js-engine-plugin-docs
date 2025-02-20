---
editUrl: false
next: false
prev: false
title: "InternalAPI"
---

Defined in: [jsEngine/api/Internal.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L32)

The internal API provides access to some of js engines internals.

## Constructors

### new InternalAPI()

> **new InternalAPI**(`apiInstance`): [`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

Defined in: [jsEngine/api/Internal.ts:35](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L35)

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

## Methods

### createExecutionGlobals()

> **createExecutionGlobals**(`options`): [`JsExecutionGlobals`](/obsidian-js-engine-plugin-docs/api/interfaces/jsexecutionglobals/)

Defined in: [jsEngine/api/Internal.ts:250](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L250)

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

***

### createRenderer()

> **createRenderer**(`container`, `sourcePath`, `component`): [`ResultRenderer`](/obsidian-js-engine-plugin-docs/api/classes/resultrenderer/)

Defined in: [jsEngine/api/Internal.ts:57](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L57)

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

***

### execute()

> **execute**(`params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Defined in: [jsEngine/api/Internal.ts:44](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L44)

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

***

### executeFile()

> **executeFile**(`path`, `params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Defined in: [jsEngine/api/Internal.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L72)

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

[`ExecuteFileEngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/type-aliases/executefileengineexecutionparams/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

***

### executeFileSimple()

> **executeFileSimple**(`path`, `params`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Defined in: [jsEngine/api/Internal.ts:97](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L97)

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

[`ExecuteFileSimpleEngineExecutionParams`](/obsidian-js-engine-plugin-docs/api/type-aliases/executefilesimpleengineexecutionparams/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

***

### executeStartupScripts()

> **executeStartupScripts**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [jsEngine/api/Internal.ts:266](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L266)

Runs all startup scripts defined in the plugins settings.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

***

### ~~getContextForFile()~~

> **getContextForFile**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/)\>

Defined in: [jsEngine/api/Internal.ts:121](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L121)

Gets the execution context for a specific file, throws when the file does not exist.

:::caution[Deprecated]
use [getContextForMarkdownCodeBlock](/obsidian-js-engine-plugin-docs/api/classes/internalapi/#getcontextformarkdowncodeblock), [getContextForJSFile](/obsidian-js-engine-plugin-docs/api/classes/internalapi/#getcontextforjsfile), or [getContextForUnknown](/obsidian-js-engine-plugin-docs/api/classes/internalapi/#getcontextforunknown) instead
:::

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

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`ExecutionContext`](/obsidian-js-engine-plugin-docs/api/type-aliases/executioncontext/)\>

***

### getContextForJSFile()

> **getContextForJSFile**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JSFileExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsfileexecutioncontext/)\>

Defined in: [jsEngine/api/Internal.ts:208](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L208)

Gets the execution context for a JS file.

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

The file path of the JS file.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JSFileExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/jsfileexecutioncontext/)\>

***

### getContextForMarkdownCallingJSFile()

> **getContextForMarkdownCallingJSFile**(`markdownPath`, `jsPath`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MarkdownCallingJSFileExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/markdowncallingjsfileexecutioncontext/)\>

Defined in: [jsEngine/api/Internal.ts:167](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L167)

Gets the execution context for when a markdown file calls a JS file.
This adds some extra info about the markdown file into the context, compared to [getContextForJSFile](../../../../../obsidian-js-engine-plugin-docs/api/classes/internalapi/#getcontextforjsfile).

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

`markdownPath`

</td>
<td>

`string`

</td>
<td>

The file path of the markdown file.

</td>
</tr>
<tr>
<td>

`jsPath`

</td>
<td>

`string`

</td>
<td>

The file path of the JS file.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MarkdownCallingJSFileExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/markdowncallingjsfileexecutioncontext/)\>

***

### getContextForMarkdownCodeBlock()

> **getContextForMarkdownCodeBlock**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MarkdownCodeBlockExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/markdowncodeblockexecutioncontext/)\>

Defined in: [jsEngine/api/Internal.ts:145](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L145)

Gets the execution context for a markdown code block.

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

The file path of the markdown file the code block is in.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MarkdownCodeBlockExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/markdowncodeblockexecutioncontext/)\>

***

### getContextForMarkdownOther()

> **getContextForMarkdownOther**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MarkdownOtherExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/markdownotherexecutioncontext/)\>

Defined in: [jsEngine/api/Internal.ts:189](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L189)

Gets the execution context for a markdown code block.

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

The file path of the markdown file the code block is in.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`MarkdownOtherExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/markdownotherexecutioncontext/)\>

***

### getContextForUnknown()

> **getContextForUnknown**(`path`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UnknownExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/unknownexecutioncontext/)\>

Defined in: [jsEngine/api/Internal.ts:225](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/Internal.ts#L225)

Gets an unknown execution context for anything that is not a markdown code block or a JS file.

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

`path`?

</td>
<td>

`string`

</td>
<td>

An optional file path that will get resolved to a TFile.

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`UnknownExecutionContext`](/obsidian-js-engine-plugin-docs/api/interfaces/unknownexecutioncontext/)\>
