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
</tbody>
</table>

#### Returns

[`Engine`](/obsidian-js-engine-plugin-docs/api/classes/engine/)

#### Defined in

[jsEngine/engine/Engine.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/Engine.ts#L40)

## Properties

### activeExecutions

> `readonly` **activeExecutions**: [`Map`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)\<`string`, [`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

#### Defined in

[jsEngine/engine/Engine.ts:38](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/Engine.ts#L38)

## Methods

### execute()

> **execute**(`params`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)\>

Execute JavaScript code.

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

[jsEngine/engine/Engine.ts:53](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/Engine.ts#L53)

***

### openExecutionStatsModal()

> **openExecutionStatsModal**(`jsExecution`): `void`

Open the execution stats modal for a given [JsExecution](../../../../../obsidian-js-engine-plugin-docs/api/classes/jsexecution).

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

`jsExecution`

</td>
<td>

[`JsExecution`](/obsidian-js-engine-plugin-docs/api/classes/jsexecution/)

</td>
<td>

</td>
</tr>
</tbody>
</table>

#### Returns

`void`

#### Defined in

[jsEngine/engine/Engine.ts:73](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/engine/Engine.ts#L73)
