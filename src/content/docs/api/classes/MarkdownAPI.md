---
editUrl: false
next: false
prev: false
title: "MarkdownAPI"
---

The markdown API provides utilities for creating markdown using js.

## Constructors

### new MarkdownAPI(apiInstance)

> **new MarkdownAPI**(`apiInstance`): [`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/) |

#### Returns

[`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/classes/markdownapi/)

#### Source

[jsEngine/api/MarkdownAPI.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L22)

## Methods

### create()

> **create**(`markdown`): [`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

Creates a markdown string form a normal string.
This does not modify the string.
It only wraps it in an object, so that the plugin can recognize and render it as markdown.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `markdown` | `string` | the string to wrap |

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/classes/markdownstring/)

#### Source

[jsEngine/api/MarkdownAPI.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L40)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

Creates a new markdown block quote element.

#### Returns

[`BlockQuoteElement`](/obsidian-js-engine-plugin-docs/api/classes/blockquoteelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:111](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L111)

***

### createBoldText()

> **createBoldText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Creates a new markdown text element with bold formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:58](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L58)

***

### createBuilder()

> **createBuilder**(): [`MarkdownBuilder`](/obsidian-js-engine-plugin-docs/api/classes/markdownbuilder/)

Creates a markdown builder.

#### Returns

[`MarkdownBuilder`](/obsidian-js-engine-plugin-docs/api/classes/markdownbuilder/)

#### Source

[jsEngine/api/MarkdownAPI.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L29)

***

### createCallout()

> **createCallout**(`title`, `type`, `args`): [`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

Creates a new markdown callout element.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `title` | `string` | `undefined` | the title of the callout |
| `type` | `string` | `undefined` | the type of the callout |
| `args` | `string` | `''` | the callout args, optional |

#### Returns

[`CalloutElement`](/obsidian-js-engine-plugin-docs/api/classes/calloutelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:122](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L122)

***

### createCode()

> **createCode**(`text`): [`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

Creates a new markdown code element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`CodeElement`](/obsidian-js-engine-plugin-docs/api/classes/codeelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:85](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L85)

***

### createCodeBlock()

> **createCodeBlock**(`language`, `content`): [`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

Creates a new markdown code block element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | the language of the code block |
| `content` | `string` | the content of the code block |

#### Returns

[`CodeBlockElement`](/obsidian-js-engine-plugin-docs/api/classes/codeblockelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:132](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L132)

***

### createCursiveText()

> **createCursiveText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Creates a new markdown text element with cursive formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:67](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L67)

***

### createHeading()

> **createHeading**(`level`, `content`): [`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

Creates a new markdown heading element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | the level of the heading from 1 to 6 |
| `content` | `string` | the text of the heading |

#### Returns

[`HeadingElement`](/obsidian-js-engine-plugin-docs/api/classes/headingelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:104](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L104)

***

### createList()

> **createList**(`ordered`): [`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

Creates a new markdown list element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ordered` | `boolean` | whether the list should be ordered or not (use 1. or -) |

#### Returns

[`ListElement`](/obsidian-js-engine-plugin-docs/api/classes/listelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:151](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L151)

***

### createParagraph()

> **createParagraph**(`content`): [`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

Creates a new markdown paragraph element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` |  |

#### Returns

[`ParagraphElement`](/obsidian-js-engine-plugin-docs/api/classes/paragraphelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:94](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L94)

***

### createTable()

> **createTable**(`header`, `body`): [`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

Creates a new markdown table element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `header` | `string`[] | the header row |
| `body` | `string`[][] | the table body |

#### Returns

[`TableElement`](/obsidian-js-engine-plugin-docs/api/classes/tableelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:142](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L142)

***

### createText()

> **createText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Creates a new markdown text element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:49](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L49)

***

### createUnderlinedText()

> **createUnderlinedText**(`text`): [`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

Creates a new markdown text element with underline formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

[`TextElement`](/obsidian-js-engine-plugin-docs/api/classes/textelement/)

#### Source

[jsEngine/api/MarkdownAPI.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/9978dd39a18406d0dee0b76dd4311dc0c6857428/jsEngine/api/MarkdownAPI.ts#L76)
