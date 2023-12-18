---
editUrl: false
next: false
prev: false
title: "MarkdownAPI"
---

The markdown API provides utilities for creating markdown using js.

## Constructors

### new MarkdownAPI(apiInstance)

> **new MarkdownAPI**(`apiInstance`): [`MarkdownAPI`](/api/api/markdownapi/classes/markdownapi/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](/api/api/api/classes/api/) |

#### Returns

[`MarkdownAPI`](/api/api/markdownapi/classes/markdownapi/)

#### Source

[jsEngine/api/MarkdownAPI.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L21)

## Methods

### create()

> **create**(`markdown`): [`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

Creates a markdown string form a normal string.
This does not modify the string.
It only wraps it in an object, so that the plugin can recognize and render it as markdown.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `markdown` | `string` | the string to wrap |

#### Returns

[`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Source

[jsEngine/api/MarkdownAPI.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L39)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/blockquoteelement/)

Creates a new markdown block quote element.

#### Returns

[`BlockQuoteElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/blockquoteelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:110](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L110)

***

### createBoldText()

> **createBoldText**(`text`): [`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

Creates a new markdown text element with bold formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:57](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L57)

***

### createBuilder()

> **createBuilder**(): [`MarkdownBuilder`](/api/api/markdown/markdownbuilder/classes/markdownbuilder/)

Creates a markdown builder.

#### Returns

[`MarkdownBuilder`](/api/api/markdown/markdownbuilder/classes/markdownbuilder/)

#### Source

[jsEngine/api/MarkdownAPI.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L28)

***

### createCallout()

> **createCallout**(`title`, `type`, `args`): [`CalloutElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/calloutelement/)

Creates a new markdown callout element.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `title` | `string` | `undefined` | the title of the callout |
| `type` | `string` | `undefined` | the type of the callout |
| `args` | `string` | `''` | the callout args, optional |

#### Returns

[`CalloutElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/calloutelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:121](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L121)

***

### createCode()

> **createCode**(`text`): [`CodeElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/codeelement/)

Creates a new markdown code element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`CodeElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/codeelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:84](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L84)

***

### createCodeBlock()

> **createCodeBlock**(`language`, `content`): [`CodeBlockElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/codeblockelement/)

Creates a new markdown code block element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | the language of the code block |
| `content` | `string` | the content of the code block |

#### Returns

[`CodeBlockElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/codeblockelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:131](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L131)

***

### createCursiveText()

> **createCursiveText**(`text`): [`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

Creates a new markdown text element with cursive formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:66](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L66)

***

### createHeading()

> **createHeading**(`level`, `content`): [`HeadingElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/headingelement/)

Creates a new markdown heading element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | the level of the heading from 1 to 6 |
| `content` | `string` | the text of the heading |

#### Returns

[`HeadingElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/headingelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:103](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L103)

***

### createParagraph()

> **createParagraph**(`content`): [`ParagraphElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/paragraphelement/)

Creates a new markdown paragraph element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` |  |

#### Returns

[`ParagraphElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/paragraphelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:93](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L93)

***

### createTable()

> **createTable**(`header`, `body`): [`TableElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/tableelement/)

Creates a new markdown table element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `header` | `string`[] | the header row |
| `body` | `string`[][] | the table body |

#### Returns

[`TableElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/tableelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:141](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L141)

***

### createText()

> **createText**(`text`): [`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

Creates a new markdown text element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:48](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L48)

***

### createUnderlinedText()

> **createUnderlinedText**(`text`): [`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

Creates a new markdown text element with underline formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`TextElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/textelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:75](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/MarkdownAPI.ts#L75)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
