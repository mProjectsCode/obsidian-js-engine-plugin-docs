---
editUrl: false
next: false
prev: false
title: "API"
---

Defined in: [jsEngine/api/API.ts:18](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L18)

## Constructors

### new API()

> **new API**(`app`, `plugin`, `instanceId`): [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

Defined in: [jsEngine/api/API.ts:51](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L51)

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

`app`

</td>
<td>

`App`

</td>
</tr>
<tr>
<td>

`plugin`

</td>
<td>

`JsEnginePlugin`

</td>
</tr>
<tr>
<td>

`instanceId`

</td>
<td>

[`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

</td>
</tr>
</tbody>
</table>

#### Returns

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

## Properties

### app

> `readonly` **app**: `App`

Defined in: [jsEngine/api/API.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L22)

Reference to the obsidian app.

***

### instanceId

> `readonly` **instanceId**: [`InstanceId`](/obsidian-js-engine-plugin-docs/api/classes/instanceid/)

Defined in: [jsEngine/api/API.ts:27](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L27)

***

### internal

> `readonly` **internal**: [`InternalAPI`](/obsidian-js-engine-plugin-docs/api/classes/internalapi/)

Defined in: [jsEngine/api/API.ts:49](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L49)

API to interact with js engines internals.

***

### lib

> `readonly` **lib**: [`LibAPI`](/obsidian-js-engine-plugin-docs/api/classes/libapi/)

Defined in: [jsEngine/api/API.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L40)

API to interact with packaged libraries.

***

### markdown

> `readonly` **markdown**: [`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

Defined in: [jsEngine/api/API.ts:32](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L32)

API to interact with markdown.

***

### message

> `readonly` **message**: [`MessageAPI`](/obsidian-js-engine-plugin-docs/api/classes/messageapi/)

Defined in: [jsEngine/api/API.ts:36](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L36)

API to interact with the plugins message system.

***

### plugin

> `readonly` **plugin**: `JsEnginePlugin`

Defined in: [jsEngine/api/API.ts:26](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L26)

Reference the JS Engine plugin.

***

### prompt

> `readonly` **prompt**: [`PromptAPI`](/obsidian-js-engine-plugin-docs/api/classes/promptapi/)

Defined in: [jsEngine/api/API.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L45)

***

### query

> `readonly` **query**: [`QueryAPI`](/obsidian-js-engine-plugin-docs/api/classes/queryapi/)

Defined in: [jsEngine/api/API.ts:44](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L44)

API to query your vault with simple javascript functions.

***

### validators

> `readonly` **validators**: `Validators`

Defined in: [jsEngine/api/API.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L28)

## Methods

### getObsidianModule()

> **getObsidianModule**(): `__module`

Defined in: [jsEngine/api/API.ts:110](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L110)

Gets the obsidian module.
This allows you to access all things exported by the obsidian module.

#### Returns

`__module`

#### Example

```js
const obsidian = engine.getObsidianModule();
new obsidian.Notice('Hello World!');
```

***

### getPlugin()

> **getPlugin**(`pluginId`): `undefined` \| `Plugin`

Defined in: [jsEngine/api/API.ts:94](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L94)

Gets a plugin by its id. A plugin id can be found by looking at its manifest.
If the plugin is not enabled, this will return undefined.

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

`pluginId`

</td>
<td>

`string`

</td>
<td>

the id of the plugin.

</td>
</tr>
</tbody>
</table>

#### Returns

`undefined` \| `Plugin`

***

### importJs()

> **importJs**(`path`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

Defined in: [jsEngine/api/API.ts:74](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L74)

Loads an ECMAScript module from a vault relative path.
Everything you import via this function will be loaded as an ECMAScript module.

Since imports are cached by the browser (aka Obsidian),
you might need to reload Obsidian to see changes made to the imported file.

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

the vault relative path of the file to import

</td>
</tr>
</tbody>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`unknown`\>

***

### parseLink()

> **parseLink**(`link`): `undefined` \| `MarkdownLink`

Defined in: [jsEngine/api/API.ts:149](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L149)

Parses a markdown link.
This link can be a markdown link or a wiki link.

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

`link`

</td>
<td>

`string`

</td>
<td>

the link to parse.

</td>
</tr>
</tbody>
</table>

#### Returns

`undefined` \| `MarkdownLink`

***

### reactive()

> **reactive**(`fn`, ...`initialArgs`): [`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

Defined in: [jsEngine/api/API.ts:121](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L121)

Creates a reactive component.
Reactive components are useful for creating dynamic content.

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

`fn`

</td>
<td>

[`JsFunc`](/obsidian-js-engine-plugin-docs/api/type-aliases/jsfunc/)

</td>
<td>

the function to rerun. It's return value will be rendered.

</td>
</tr>
<tr>
<td>

...`initialArgs`

</td>
<td>

`unknown`[]

</td>
<td>

the initial arguments (for the first render) to pass to the function.

</td>
</tr>
</tbody>
</table>

#### Returns

[`ReactiveComponent`](/obsidian-js-engine-plugin-docs/api/classes/reactivecomponent/)

***

### resolveLinkToTFile()

> **resolveLinkToTFile**(`link`, `sourcePath`): `undefined` \| `TFile`

Defined in: [jsEngine/api/API.ts:135](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/API.ts#L135)

Gets the target file of a link.
This link can be a markdown link or a wiki link.
If the link target is not found, this will return undefined.

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

`link`

</td>
<td>

`string`

</td>
<td>

the link to get the target file of.

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

the path of the file that contains the link. This is needed to resolve relative links.

</td>
</tr>
</tbody>
</table>

#### Returns

`undefined` \| `TFile`
