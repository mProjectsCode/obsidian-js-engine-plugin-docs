---
editUrl: false
next: false
prev: false
title: "CodeElement"
---

## Extends

- [`AbstractMarkdownLiteral`](/api/api/markdown/abstractmarkdownliteral/classes/abstractmarkdownliteral/)

## Constructors

### new CodeElement(content)

> **new CodeElement**(`content`): [`CodeElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/codeelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`CodeElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/codeelement/)

#### Overrides

[`api/markdown/AbstractMarkdownLiteral.AbstractMarkdownLiteral.constructor`](/api/api/markdown/abstractmarkdownliteral/classes/abstractmarkdownliteral/#constructors)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:140](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L140)

## Properties

### content

> **content**: `string`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:138](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L138)

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

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:146](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L146)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
