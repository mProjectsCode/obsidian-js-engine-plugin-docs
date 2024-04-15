---
editUrl: false
next: false
prev: false
title: "CodeElement"
---

Represents an inline markdown code block.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new CodeElement(content)

> **new CodeElement**(`content`): [`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:164](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L164)

## Properties

### content

> **content**: `string`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:162](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L162)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:170](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L170)
