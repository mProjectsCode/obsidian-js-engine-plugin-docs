---
editUrl: false
next: false
prev: false
title: "LibParsiNOM"
---

## Properties

### P

```ts
P: *typeof* P;
```

#### Source

[jsEngine/api/LibAPI.ts:10](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/api/LibAPI.ts#L10)

***

### P\_UTILS

```ts
P_UTILS: *typeof* P_UTILS;
```

#### Source

[jsEngine/api/LibAPI.ts:11](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/api/LibAPI.ts#L11)

***

### Parser

```ts
Parser: *typeof* Parser;
```

#### Source

[jsEngine/api/LibAPI.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/api/LibAPI.ts#L12)

***

### ParserContext

```ts
ParserContext: *typeof* ParserContext;
```

#### Source

[jsEngine/api/LibAPI.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/api/LibAPI.ts#L15)

***

### ParsingError

```ts
ParsingError: *typeof* ParsingError;
```

#### Source

[jsEngine/api/LibAPI.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/api/LibAPI.ts#L14)

***

### createParsingErrorMessage

```ts
createParsingErrorMessage: (str, parseFailure, verbose) => string;
```

Generate an error message string for a parse failure on a specific string.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | the input string that the parse failure occurred on |
| `parseFailure` | `ParseFailure` | the failure to generate the error message for |
| `verbose` | `boolean` | will underline the failure position in the input string, if set to true |

#### Returns

`string`

#### Source

[jsEngine/api/LibAPI.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/0278a4c/jsEngine/api/LibAPI.ts#L13)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
