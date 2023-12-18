---
editUrl: false
next: false
prev: false
title: "AbstractMarkdownElement"
---

## Extended By

- [`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)
- [`AbstractMarkdownLiteral`](/api/api/markdown/abstractmarkdownliteral/classes/abstractmarkdownliteral/)

## Constructors

### new AbstractMarkdownElement()

> **new AbstractMarkdownElement**(): [`AbstractMarkdownElement`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/)

#### Returns

[`AbstractMarkdownElement`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/)

## Methods

### `abstract` getType()

> **`abstract`** **getType**(): [`MarkdownElementType`](/api/api/markdown/markdownelementtype/enumerations/markdownelementtype/)

#### Returns

[`MarkdownElementType`](/api/api/markdown/markdownelementtype/enumerations/markdownelementtype/)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:7](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElement.ts#L7)

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Returns

[`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

***

### `abstract` toString()

> **`abstract`** **toString**(): `string`

#### Returns

`string`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:5](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElement.ts#L5)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
