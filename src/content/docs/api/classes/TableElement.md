---
editUrl: false
next: false
prev: false
title: "TableElement"
---

Represents a markdown table.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new TableElement(header, body)

> **new TableElement**(`header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `header` | `string`[] |
| `body` | `string`[][] |

#### Returns

[`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:182](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L182)

## Properties

### body

> **body**: `string`[][]

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:180](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L180)

***

### header

> **header**: `string`[]

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:179](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L179)

## Methods

### getType()

> **getType**(): `MarkdownElementType`

#### Returns

`MarkdownElementType`

#### Inherited from

`AbstractMarkdownLiteral.getType`

#### Source

[jsEngine/api/markdown/AbstractMarkdownLiteral.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownLiteral.ts#L8)

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:189](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L189)
