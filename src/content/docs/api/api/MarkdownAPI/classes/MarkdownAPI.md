---
editUrl: false
next: false
prev: false
title: "MarkdownAPI"
---

The markdown API provides utilities for creating markdown using js.

## Constructors

### new MarkdownAPI(apiInstance)

```ts
new MarkdownAPI(apiInstance): MarkdownAPI
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `apiInstance` | [`API`](/obsidian-js-engine-plugin-docs/api/api/api/classes/api/) |

#### Returns

[`MarkdownAPI`](/obsidian-js-engine-plugin-docs/api/api/markdownapi/classes/markdownapi/)

#### Source

[jsEngine/api/MarkdownAPI.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L21)

## Methods

### create()

```ts
create(markdown): MarkdownString
```

Creates a markdown string form a normal string.
This does not modify the string.
It only wraps it in an object, so that the plugin can recognize and render it as markdown.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `markdown` | `string` | the string to wrap |

#### Returns

[`MarkdownString`](/obsidian-js-engine-plugin-docs/api/api/markdown/markdownstring/classes/markdownstring/)

#### Source

[jsEngine/api/MarkdownAPI.ts:39](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L39)

***

### createBlockQuote()

```ts
createBlockQuote(): BlockQuoteElement
```

Creates a new markdown block quote element.

#### Returns

`BlockQuoteElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:110](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L110)

***

### createBoldText()

```ts
createBoldText(text): TextElement
```

Creates a new markdown text element with bold formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

`TextElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:57](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L57)

***

### createBuilder()

```ts
createBuilder(): MarkdownBuilder
```

Creates a markdown builder.

#### Returns

[`MarkdownBuilder`](/obsidian-js-engine-plugin-docs/api/api/markdown/markdownbuilder/classes/markdownbuilder/)

#### Source

[jsEngine/api/MarkdownAPI.ts:28](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L28)

***

### createCallout()

```ts
createCallout(
   title, 
   type, 
   args): CalloutElement
```

Creates a new markdown callout element.

#### Parameters

| Parameter | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `title` | `string` | `undefined` | the title of the callout |
| `type` | `string` | `undefined` | the type of the callout |
| `args` | `string` | `''` | the callout args, optional |

#### Returns

`CalloutElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:121](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L121)

***

### createCode()

```ts
createCode(text): CodeElement
```

Creates a new markdown code element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

`CodeElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:84](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L84)

***

### createCodeBlock()

```ts
createCodeBlock(language, content): CodeBlockElement
```

Creates a new markdown code block element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `language` | `string` | the language of the code block |
| `content` | `string` | the content of the code block |

#### Returns

`CodeBlockElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:131](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L131)

***

### createCursiveText()

```ts
createCursiveText(text): TextElement
```

Creates a new markdown text element with cursive formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

`TextElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:66](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L66)

***

### createHeading()

```ts
createHeading(level, content): HeadingElement
```

Creates a new markdown heading element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `number` | the level of the heading from 1 to 6 |
| `content` | `string` | the text of the heading |

#### Returns

`HeadingElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:103](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L103)

***

### createParagraph()

```ts
createParagraph(content): ParagraphElement
```

Creates a new markdown paragraph element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `content` | `string` |  |

#### Returns

`ParagraphElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:93](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L93)

***

### createTable()

```ts
createTable(header, body): TableElement
```

Creates a new markdown table element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `header` | `string`[] | the header row |
| `body` | `string`[][] | the table body |

#### Returns

`TableElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:141](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L141)

***

### createText()

```ts
createText(text): TextElement
```

Creates a new markdown text element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

`TextElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:48](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L48)

***

### createUnderlinedText()

```ts
createUnderlinedText(text): TextElement
```

Creates a new markdown text element with underline formatting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` |  |

#### Returns

`TextElement`

#### Source

[jsEngine/api/MarkdownAPI.ts:75](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/b447776/jsEngine/api/MarkdownAPI.ts#L75)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
