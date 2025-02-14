---
editUrl: false
next: false
prev: false
title: "ButtonPromptOptions"
---

Defined in: [jsEngine/api/PromptAPI.ts:27](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L27)

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

Defined in: [jsEngine/api/PromptAPI.ts:35](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L35)

A list of buttons to display in the modal.

***

### classes?

> `optional` **classes**: `string`[]

Defined in: [jsEngine/api/PromptAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L24)

A list of CSS classes to apply to the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`classes`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#classes)

***

### content?

> `optional` **content**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:31](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L31)

Text content to display in the modal.

***

### title

> **title**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L20)

The title of the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`title`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#title)
