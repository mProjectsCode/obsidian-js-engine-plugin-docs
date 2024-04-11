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
| `apiInstance` | [`API`](API.md) |

#### Returns

[`MarkdownAPI`](MarkdownAPI.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:22](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L22)

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

[`MarkdownString`](MarkdownString.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:40](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L40)

***

### createBlockQuote()

```ts
createBlockQuote(): BlockQuoteElement
```

Creates a new markdown block quote element.

#### Returns

[`BlockQuoteElement`](BlockQuoteElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:111](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L111)

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

[`TextElement`](TextElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:58](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L58)

***

### createBuilder()

```ts
createBuilder(): MarkdownBuilder
```

Creates a markdown builder.

#### Returns

[`MarkdownBuilder`](MarkdownBuilder.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L29)

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

[`CalloutElement`](CalloutElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:122](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L122)

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

[`CodeElement`](CodeElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:85](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L85)

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

[`CodeBlockElement`](CodeBlockElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:132](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L132)

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

[`TextElement`](TextElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:67](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L67)

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

[`HeadingElement`](HeadingElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:104](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L104)

***

### createList()

```ts
createList(ordered): ListElement
```

Creates a new markdown list element.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ordered` | `boolean` | whether the list should be ordered or not (use 1. or -) |

#### Returns

[`ListElement`](ListElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:151](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L151)

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

[`ParagraphElement`](ParagraphElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:94](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L94)

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

[`TableElement`](TableElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:142](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L142)

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

[`TextElement`](TextElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:49](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L49)

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

[`TextElement`](TextElement.md)

#### Source

[jsEngine/api/MarkdownAPI.ts:76](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/MarkdownAPI.ts#L76)
