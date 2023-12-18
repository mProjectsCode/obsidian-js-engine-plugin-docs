---
editUrl: false
next: false
prev: false
title: "AbstractMarkdownElementContainer"
---

## Extends

- [`AbstractMarkdownElement`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/)

## Constructors

### new AbstractMarkdownElementContainer()

> **new AbstractMarkdownElementContainer**(): [`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Returns

[`AbstractMarkdownElementContainer`](/api/api/markdown/abstractmarkdownelementcontainer/classes/abstractmarkdownelementcontainer/)

#### Overrides

[`api/markdown/AbstractMarkdownElement.AbstractMarkdownElement.constructor`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/#constructors)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L8)

## Properties

### markdownElements

> **markdownElements**: [`AbstractMarkdownElement`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/)[]

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

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:46](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L46)

***

### `abstract` allowElement()

> **`abstract`** **allowElement**(`element`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `element` | [`AbstractMarkdownElement`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/) |

#### Returns

`boolean`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L14)

***

### createBlockQuote()

> **createBlockQuote**(): [`BlockQuoteElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/blockquoteelement/)

#### Returns

[`BlockQuoteElement`](/api/api/markdown/abstractmarkdownelementcontainer/classes/blockquoteelement/)

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

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:88](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L88)

***

### getType()

> **getType**(): [`MarkdownElementType`](/api/api/markdown/markdownelementtype/enumerations/markdownelementtype/)

#### Returns

[`MarkdownElementType`](/api/api/markdown/markdownelementtype/enumerations/markdownelementtype/)

#### Overrides

[`api/markdown/AbstractMarkdownElement.AbstractMarkdownElement.getType`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/#abstract-gettype)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L16)

***

### toMarkdown()

> **toMarkdown**(): [`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Returns

[`MarkdownString`](/api/api/markdown/markdownstring/classes/markdownstring/)

#### Inherited from

[`api/markdown/AbstractMarkdownElement.AbstractMarkdownElement.toMarkdown`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/#tomarkdown)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:9](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElement.ts#L9)

***

### `abstract` toString()

> **`abstract`** **toString**(): `string`

#### Returns

`string`

#### Inherited from

[`api/markdown/AbstractMarkdownElement.AbstractMarkdownElement.toString`](/api/api/markdown/abstractmarkdownelement/classes/abstractmarkdownelement/#abstract-tostring)

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:5](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/api/markdown/AbstractMarkdownElement.ts#L5)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
