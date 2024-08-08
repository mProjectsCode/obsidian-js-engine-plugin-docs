---
editUrl: false
next: false
prev: false
title: "PromptAPI"
---

## Constructors

### new PromptAPI()

> **new PromptAPI**(`apiInstance`): [`PromptAPI`](/obsidian-js-engine-plugin-docs/api/classes/promptapi/)

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`apiInstance`

</td>
<td>

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

</td>
</tr>
</table>

#### Returns

[`PromptAPI`](/obsidian-js-engine-plugin-docs/api/classes/promptapi/)

#### Defined in

[jsEngine/api/PromptAPI.ts:74](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L74)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Defined in

[jsEngine/api/PromptAPI.ts:72](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L72)

## Methods

### button()

> **button**\<`T`\>(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `T`\>

Prompts the user with a modal containing a list of buttons.
Returns the value of the button that was clicked, or undefined if the modal was closed.

#### Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`T`

</td>
</tr>
</table>

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`ButtonPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/buttonpromptoptions/)\<`T`\>

</td>
</tr>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `T`\>

#### Example

```typescript
// Prompt the user with a true/false question.

const ret = await engine.prompt.button({
    title: 'The set of natural numbers with zero and the addition operation is a monoid.',
    buttons: [
        {
            label: 'True',
            value: true,
        },
        {
            label: 'False',
            value: false,
        },
        {
            label: 'Cancel',
            value: undefined,
        }
    ]
});
```

#### Defined in

[jsEngine/api/PromptAPI.ts:105](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L105)

***

### confirm()

> **confirm**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Prompts the user with a confirm/cancel dialog.
Returns true if the user confirms, false if the user cancels or otherwise closes the modal.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`ConfirmPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/confirmpromptoptions/)

</td>
</tr>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

#### Example

```typescript
// Ask the user if they want to confirm an action.

const ret = await engine.prompt.confirm({
    title: 'Confirm File Deletion',
    content: 'Are you sure you want to delete this file? This action cannot be undone.',
});
```

#### Defined in

[jsEngine/api/PromptAPI.ts:142](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L142)

***

### number()

> **number**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `number`\>

Prompts the user with a number input dialog.
Returns the value of the input field, or undefined if the user closes the modal.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`InputPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/inputpromptoptions/)

</td>
</tr>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `number`\>

#### Example

```typescript
// Prompt the user to input their age.

const ret = await engine.prompt.text({
    title: 'Please enter your age',
    content: 'Please enter your age in years in the field below.',
});
```

#### Defined in

[jsEngine/api/PromptAPI.ts:314](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L314)

***

### suggester()

> **suggester**\<`T`\>(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `T`\>

Prompts the user with a fuzzy finder suggester dialog.
Returns the value of the selected option, or undefined if the user closes the modal.

#### Type Parameters

<table>
<tr>
<th>Type Parameter</th>
</tr>
<tr>
<td>

`T`

</td>
</tr>
</table>

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`SuggesterPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/suggesterpromptoptions/)\<`T`\>

</td>
</tr>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `T`\>

#### Example

```typescript
// Query a list of files and prompt the user to select one.

const files = engine.query.files((file) => {
    return {
        label: file.name,
        value: file.pat,
    };
});

const ret = await engine.prompt.suggester({
    placeholder: 'Select a file',
    options: files,
});
```

#### Defined in

[jsEngine/api/PromptAPI.ts:214](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L214)

***

### text()

> **text**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `string`\>

Prompts the user with a text input dialog.
Returns the value of the input field, or undefined if the user closes the modal.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`InputPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/inputpromptoptions/)

</td>
</tr>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `string`\>

#### Example

```typescript
// Prompt the user to input their name.

const ret = await engine.prompt.text({
    title: 'Please enter your name',
    content: 'Please enter your name in the field below.',
});

#### Defined in

[jsEngine/api/PromptAPI.ts:237](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L237)

***

### textarea()

> **textarea**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `string`\>

Prompts the user with a textarea input dialog.
Returns the value of the input field, or undefined if the user closes the modal.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`InputPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/inputpromptoptions/)

</td>
</tr>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `string`\>

#### Example

```typescript
// Prompt the user to input a multi-line message.

const ret = await engine.prompt.textarea({
    title: 'Please enter your message',
    content: 'Please enter your message in the field below.',
    placeholder: 'Your message here...',
});
```

#### Defined in

[jsEngine/api/PromptAPI.ts:276](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L276)

***

### yesNo()

> **yesNo**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `boolean`\>

Prompts the user with a yes/no dialog.
Returns true if the user selects yes, false if the user selects no, and undefined if the user otherwise closes the modal.

#### Parameters

<table>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
<tr>
<td>

`options`

</td>
<td>

[`YesNoPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/yesnopromptoptions/)

</td>
</tr>
</table>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `boolean`\>

#### Example

```typescript
// Ask the user if they like Obsidian.

const ret = await engine.prompt.yesNo({
    title: 'Is this a test?',
    content: 'Are you sure this is a test? Are you sure that your choice is really meaningless?',
});

#### Defined in

[jsEngine/api/PromptAPI.ts:175](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/10197bef1eb83a7d7334445d888ca7cb0cfc5bff/jsEngine/api/PromptAPI.ts#L175)