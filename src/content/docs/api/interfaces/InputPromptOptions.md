---
editUrl: false
next: false
prev: false
title: "InputPromptOptions"
---

Basic options for a prompt modal.
This interface is used as a base for other prompt options.

## Extends

- [`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/)

## Properties

### classes?

> `optional` **classes**: `string`[]

A list of CSS classes to apply to the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`classes`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#classes)

#### Defined in

[jsEngine/api/PromptAPI.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L24)

***

### content?

> `optional` **content**: `string`

Text content to display in the modal.

#### Defined in

[jsEngine/api/PromptAPI.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L72)

***

### initialValue?

> `optional` **initialValue**: `string`

The initial value of the input field that is pre-filled when the modal is opened.

#### Defined in

[jsEngine/api/PromptAPI.ts:80](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L80)

***

### placeholder?

> `optional` **placeholder**: `string`

The placeholder text for the input field. This will show when the input field is empty.

#### Defined in

[jsEngine/api/PromptAPI.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L76)

***

### title

> **title**: `string`

The title of the modal.

#### Inherited from

[`ModalPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/).[`title`](/obsidian-js-engine-plugin-docs/api/interfaces/modalpromptoptions/#title)

#### Defined in

[jsEngine/api/PromptAPI.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L20)
