---
editUrl: false
next: false
prev: false
title: "LibParsiNOM"
---

## Properties

### P

> **P**: *typeof* `P`

#### Defined in

[jsEngine/api/LibAPI.ts:10](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L10)

***

### P\_UTILS

> **P\_UTILS**: *typeof* `P_UTILS`

#### Defined in

[jsEngine/api/LibAPI.ts:11](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L11)

***

### Parser

> **Parser**: *typeof* `Parser`

#### Defined in

[jsEngine/api/LibAPI.ts:12](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L12)

***

### ParserContext

> **ParserContext**: *typeof* `ParserContext`

#### Defined in

[jsEngine/api/LibAPI.ts:15](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L15)

***

### ParsingError

> **ParsingError**: *typeof* `ParsingError`

#### Defined in

[jsEngine/api/LibAPI.ts:14](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L14)

***

### createParsingErrorMessage()

> **createParsingErrorMessage**: (`str`, `parseFailure`, `verbose`) => `string`

Generate an error message string for a parse failure on a specific string.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`str`

</td>
<td>

`string`

</td>
<td>

the input string that the parse failure occurred on

</td>
</tr>
<tr>
<td>

`parseFailure`

</td>
<td>

`ParseFailure`

</td>
<td>

the failure to generate the error message for

</td>
</tr>
<tr>
<td>

`verbose`

</td>
<td>

`boolean`

</td>
<td>

will underline the failure position in the input string, if set to true

</td>
</tr>
</tbody>
</table>

#### Returns

`string`

#### Defined in

[jsEngine/api/LibAPI.ts:13](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/e96ff61292c9e90d57d921fab05d7cb5220aa91b/jsEngine/api/LibAPI.ts#L13)
