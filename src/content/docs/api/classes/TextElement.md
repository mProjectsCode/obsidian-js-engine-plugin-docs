---
editUrl: false
next: false
prev: false
title: "TextElement"
---

Represents a piece of pure markdown text.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new TextElement(content, bold, cursive, underline)

> **new TextElement**(`content`, `bold`, `cursive`, `underline`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |
| `bold` | `boolean` |
| `cursive` | `boolean` |
| `underline` | `boolean` |

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:126](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L126)

## Properties

### bold

> **bold**: `boolean`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:122](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L122)

***

### content

> **content**: `string`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:121](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L121)

***

### cursive

> **cursive**: `boolean`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:123](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L123)

***

### underline

> **underline**: `boolean`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:124](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L124)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:135](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L135)
