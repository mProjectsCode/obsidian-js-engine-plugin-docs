---
editUrl: false
next: false
prev: false
title: "ParagraphElement"
---

## Extends

- [`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

## Constructors

### new ParagraphElement(content)

> **new ParagraphElement**(`content`): [`ParagraphElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/paragraphelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`ParagraphElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/paragraphelement/)

#### Overrides

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.constructor`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#constructors)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:175](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L175)

## Properties

### markdownElements

> **markdownElements**: [`AbstractMarkdownElement`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/)[]

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.markdownElements`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#markdownelements)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:6](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L6)

## Methods

### addBoldText()

> **addBoldText**(`text`): [`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.addBoldText`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#addboldtext)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:34](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L34)

***

### addCode()

> **addCode**(`text`): [`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.addCode`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#addcode)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:52](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L52)

***

### addCursiveText()

> **addCursiveText**(`text`): [`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.addCursiveText`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#addcursivetext)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L40)

***

### addElement()

> **addElement**(`element`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `element` | [`AbstractMarkdownElement`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/) |

#### Returns

`void`

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.addElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#addelement)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L20)

***

### addText()

> **addText**(`text`): [`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.addText`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#addtext)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L28)

***

### addUnderlinedText()

> **addUnderlinedText**(`text`): [`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.addUnderlinedText`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#addunderlinedtext)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:46](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L46)

***

### allowElement()

> **allowElement**(`element`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `element` | [`AbstractMarkdownElement`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/) |

#### Returns

`boolean`

#### Overrides

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.allowElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#abstract-allowelement)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:185](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L185)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/blockquoteelement/)

#### Returns

[`BlockQuoteElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/blockquoteelement/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.createBlockQuote`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#createblockquote)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:70](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L70)

***

### createCallout()

> **createCallout**(`title`, `type`, `args`): [`CalloutElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/calloutelement/)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `title` | `string` | `undefined` |
| `type` | `string` | `undefined` |
| `args` | `string` | `''` |

#### Returns

[`CalloutElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/calloutelement/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.createCallout`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#createcallout)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L76)

***

### createCodeBlock()

> **createCodeBlock**(`language`, `content`): [`CodeBlockElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/codeblockelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `language` | `string` |
| `content` | `string` |

#### Returns

[`CodeBlockElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/codeblockelement/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.createCodeBlock`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#createcodeblock)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:82](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L82)

***

### createHeading()

> **createHeading**(`level`, `content`): [`HeadingElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/headingelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | `number` |
| `content` | `string` |

#### Returns

[`HeadingElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/headingelement/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.createHeading`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#createheading)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:64](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L64)

***

### createParagraph()

> **createParagraph**(`content`): [`ParagraphElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/paragraphelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `content` | `string` |

#### Returns

[`ParagraphElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/paragraphelement/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.createParagraph`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#createparagraph)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:58](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L58)

***

### createTable()

> **createTable**(`header`, `body`): [`TableElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/tableelement/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `header` | `string`[] |
| `body` | `string`[][] |

#### Returns

[`TableElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/tableelement/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.createTable`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#createtable)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:88](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L88)

***

### getType()

> **getType**(): [`MarkdownElementType`](/api/api/markdown/markdownelementtype/enumerations/markdownelementtype/)

#### Returns

[`MarkdownElementType`](/api/api/markdown/markdownelementtype/enumerations/markdownelementtype/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.getType`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#gettype)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L16)

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Returns

[`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Inherited from

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.toMarkdown`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#tomarkdown)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

***

### toString()

> **toString**(): `string`

#### Returns

`string`

#### Overrides

[`api/markdown/AbstractMarkdownElementContainer.AbstractMarkdownElementContainer.toString`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/#abstract-tostring)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:181](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L181)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
