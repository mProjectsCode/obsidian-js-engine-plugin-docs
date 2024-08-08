---
editUrl: false
next: false
prev: false
title: "Engine"
---

## Constructors

### new Engine()

> **new Engine**(`app`, `plugin`): [`Engine`](/obsidian-js-engine-plugin-docs/api/classes/engine/)

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
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
</table>

#### Returns

[`Engine`](/obsidian-js-engine-plugin-docs/api/classes/engine/)

#### Defined in

[jsEngine/engine/Engine.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/Engine.ts#L39)

## Properties

### activeExecutions

> `readonly` **activeExecutions**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Defined in

[jsEngine/engine/Engine.ts:37](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/Engine.ts#L37)

## Methods

### execute()

> **execute**(`params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Execute JavaScript code.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
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
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Defined in

[jsEngine/engine/Engine.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/Engine.ts#L52)

***

### openExecutionStatsModal()

> **openExecutionStatsModal**(`jsExecution`): `void`

Open the execution stats modal for a given [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
<tr>
<td>

`jsExecution`

</td>
<td>

[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)

</td>
<td>

</td>
</tr>
</table>

#### Returns

`void`

#### Defined in

[jsEngine/engine/Engine.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/engine/Engine.ts#L72)
