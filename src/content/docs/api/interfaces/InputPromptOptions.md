---
editUrl: false
next: false
prev: false
title: "InputPromptOptions"
---

Defined in: [jsEngine/api/PromptAPI.ts:68](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/PromptAPI.ts#L68)

Basic options for a prompt modal.
This interface is used as a base for other prompt options.

## Extends

- [`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/)

## Properties

### classes?

> `optional` **classes**: `string`[]

Defined in: [jsEngine/api/PromptAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/PromptAPI.ts#L24)

A list of CSS classes to apply to the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`classes`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#classes)

***

### content?

> `optional` **content**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/PromptAPI.ts#L72)

Text content to display in the modal.

***

### initialValue?

> `optional` **initialValue**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:80](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/PromptAPI.ts#L80)

The initial value of the input field that is pre-filled when the modal is opened.

***

### placeholder?

> `optional` **placeholder**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/PromptAPI.ts#L76)

The placeholder text for the input field. This will show when the input field is empty.

***

### title

> **title**: `string`

Defined in: [jsEngine/api/PromptAPI.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/api/PromptAPI.ts#L20)

The title of the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`title`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#title)
