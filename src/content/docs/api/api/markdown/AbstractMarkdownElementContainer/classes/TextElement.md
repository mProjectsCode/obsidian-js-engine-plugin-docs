---
editUrl: false
next: false
prev: false
title: "TextElement"
---

## Extends

- [`AbstractMarkdownLiteral`](/api/api/markdown/abstractmarkdownliteral/classes/abstractmarkdownliteral/)

## Constructors

### new TextElement(content, bold, cursive, underline)

> **new TextElement**(`content`, `bold`, `cursive`, `underline`): [`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |
| `bold` | `boolean` |
| `cursive` | `boolean` |
| `underline` | `boolean` |

#### Returns

[`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

#### Overrides

[`api/markdown/AbstractMarkdownLiteral.AbstractMarkdownLiteral.constructor`](/api/api/markdown/abstractmarkdownliteral/classes/abstractmarkdownliteral/#constructors)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:105](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L105)

## Properties

### bold

> **bold**: `boolean`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:101](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L101)

***

### content

> **content**: `string`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:100](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L100)

***

### cursive

> **cursive**: `boolean`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:102](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L102)

***

### underline

> **underline**: `boolean`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:103](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L103)

## Methods

### getType()

> **getType**(): [`MarkdownElementType`](/api/api/markdown/markdownelementtype/enumerations/markdownelementtype/)

#### Returns

[`MarkdownElementType`](/api/api/markdown/markdownelementtype/enumerations/markdownelementtype/)

#### Inherited from

[`api/markdown/AbstractMarkdownLiteral.AbstractMarkdownLiteral.getType`](/api/api/markdown/abstractmarkdownliteral/classes/abstractmarkdownliteral/#gettype)

#### Source

[jsEngine/api/markdown/AbstractMarkdownLiteral.ts:5](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownLiteral.ts#L5)

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Returns

[`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Inherited from

[`api/markdown/AbstractMarkdownLiteral.AbstractMarkdownLiteral.toMarkdown`](/api/api/markdown/abstractmarkdownliteral/classes/abstractmarkdownliteral/#tomarkdown)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Overrides

[`api/markdown/AbstractMarkdownLiteral.AbstractMarkdownLiteral.toString`](/api/api/markdown/abstractmarkdownliteral/classes/abstractmarkdownliteral/#abstract-tostring)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:114](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L114)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
