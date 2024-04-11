---
editUrl: false
next: false
prev: false
title: "TableElement"
---

Represents a markdown table.

## Extends

- `AbstractMarkdownLiteral`

## Constructors

### new TableElement(header, body)

```ts
new TableElement(header, body): TableElement
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `header` | `string`[] |
| `body` | `string`[][] |

#### Returns

[`TableElement`](TableElement.md)

#### Overrides

`AbstractMarkdownLiteral.constructor`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:182](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L182)

## Properties

### body

```ts
body: string[][];
```

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:180](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L180)

***

### header

```ts
header: string[];
```

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:179](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L179)

## Methods

### getType()

```ts
getType(): MarkdownElementType
```

#### Returns

`MarkdownElementType`

#### Inherited from

`AbstractMarkdownLiteral.getType`

#### Source

[jsEngine/api/markdown/AbstractMarkdownLiteral.ts:8](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownLiteral.ts#L8)

***

### toMarkdown()

```ts
toMarkdown(): MarkdownString
```

Converts the element to a [MarkdownString](../../../../../obsidian-js-engine-plugin-docs/api/classes/markdownstring).

#### Returns

[`MarkdownString`](MarkdownString.md)

#### Inherited from

`AbstractMarkdownLiteral.toMarkdown`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElement.ts:21](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElement.ts#L21)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Overrides

`AbstractMarkdownLiteral.toString`

#### Source

[jsEngine/api/markdown/AbstractMarkdownElementContainer.ts:189](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/ed3359bafa6ca5667a1f852b3d8e87476c86ce23/jsEngine/api/markdown/AbstractMarkdownElementContainer.ts#L189)
