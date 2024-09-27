---
editUrl: false
next: false
prev: false
title: "ButtonPromptOptions"
---

Basic options for a prompt modal.
This interface is used as a base for other prompt options.

## Extends

- [`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/)

## Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

## Properties

### buttons

> **buttons**: [`ButtonPromptButtonOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/buttonpromptbuttonoptions/)\<`T`\>[]

A list of buttons to display in the modal.

#### Defined in

[jsEngine/api/PromptAPI.ts:35](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/PromptAPI.ts#L35)

***

### classes?

> `optional` **classes**: `string`[]

A list of CSS classes to apply to the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`classes`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#classes)

#### Defined in

[jsEngine/api/PromptAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/PromptAPI.ts#L24)

***

### content?

> `optional` **content**: `string`

Text content to display in the modal.

#### Defined in

[jsEngine/api/PromptAPI.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/PromptAPI.ts#L31)

***

### title

> **title**: `string`

The title of the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`title`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#title)

#### Defined in

[jsEngine/api/PromptAPI.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/478195ff0950169f74ac27af6df4a8ee89bd131d/jsEngine/api/PromptAPI.ts#L20)
