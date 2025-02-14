---
editUrl: false
next: false
prev: false
title: "NumberInputPromptOptions"
---

Defined in: [jsEngine/api/PromptAPI.ts:83](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L83)

Basic options for a prompt modal.
This interface is used as a base for other prompt options.

## Extends

- [`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/)

## Properties

### classes?

> `optional` **classes**: `string`[]

Defined in: [jsEngine/api/PromptAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L24)

A list of CSS classes to apply to the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`classes`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#classes)

***

### content?

> `optional` **content**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:87](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L87)

Text content to display in the modal.

***

### initialValue?

> `optional` **initialValue**: `number`

Defined in: [jsEngine/api/PromptAPI.ts:95](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L95)

The initial value of the input field that is pre-filled when the modal is opened.

***

### placeholder?

> `optional` **placeholder**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:91](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L91)

The placeholder text for the input field. This will show when the input field is empty.

***

### title

> **title**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/8502428515e4bbbda63a1c50981c15858802b7c4/jsEngine/api/PromptAPI.ts#L20)

The title of the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`title`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#title)
