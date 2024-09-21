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
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`apiInstance`

</td>
<td>

[`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

</td>
</tr>
</tbody>
</table>

#### Returns

[`PromptAPI`](/obsidian-js-engine-plugin-docs/api/classes/promptapi/)

#### Defined in

[jsEngine/api/PromptAPI.ts:101](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L101)

## Properties

### apiInstance

> `readonly` **apiInstance**: [`API`](/obsidian-js-engine-plugin-docs/api/classes/api/)

#### Defined in

[jsEngine/api/PromptAPI.ts:99](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L99)

## Methods

### button()

> **button**\<`T`\>(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `T`\>

Prompts the user with a modal containing a list of buttons.
Returns the value of the button that was clicked, or undefined if the modal was closed.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`ButtonPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/buttonpromptoptions/)\<`T`\>

</td>
</tr>
</tbody>
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

[jsEngine/api/PromptAPI.ts:132](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L132)

***

### confirm()

> **confirm**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`boolean`\>

Prompts the user with a confirm/cancel dialog.
Returns true if the user confirms, false if the user cancels or otherwise closes the modal.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`ConfirmPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/confirmpromptoptions/)

</td>
</tr>
</tbody>
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

[jsEngine/api/PromptAPI.ts:171](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L171)

***

### number()

> **number**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `number`\>

Prompts the user with a number input dialog.
Returns the value of the input field, or undefined if the user closes the modal.
While the input field is focused, the user can use `enter` to submit the value and `esc` to cancel and close the modal.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`NumberInputPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/numberinputpromptoptions/)

</td>
</tr>
</tbody>
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

[jsEngine/api/PromptAPI.ts:362](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L362)

***

### suggester()

> **suggester**\<`T`\>(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `T`\>

Prompts the user with a fuzzy finder suggester dialog.
Returns the value of the selected option, or undefined if the user closes the modal.

#### Type Parameters

<table>
<thead>
<tr>
<th>Type Parameter</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`T`

</td>
</tr>
</tbody>
</table>

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`SuggesterPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/suggesterpromptoptions/)\<`T`\>

</td>
</tr>
</tbody>
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

[jsEngine/api/PromptAPI.ts:248](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L248)

***

### text()

> **text**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `string`\>

Prompts the user with a text input dialog.
Returns the value of the input field, or undefined if the user closes the modal.
While the input field is focused, the user can use `enter` to submit the value and `esc` to cancel and close the modal.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`InputPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/inputpromptoptions/)

</td>
</tr>
</tbody>
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
```

#### Defined in

[jsEngine/api/PromptAPI.ts:275](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L275)

***

### textarea()

> **textarea**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `string`\>

Prompts the user with a textarea input dialog.
Returns the value of the input field, or undefined if the user closes the modal.
While the input field is focused, the user can use `esc` to cancel and close the modal.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`InputPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/inputpromptoptions/)

</td>
</tr>
</tbody>
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

[jsEngine/api/PromptAPI.ts:319](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L319)

***

### yesNo()

> **yesNo**(`options`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`undefined` \| `boolean`\>

Prompts the user with a yes/no dialog.
Returns true if the user selects yes, false if the user selects no, and undefined if the user otherwise closes the modal.

#### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`options`

</td>
<td>

[`YesNoPromptOptions`](/obsidian-js-engine-plugin-docs/api/interfaces/yesnopromptoptions/)

</td>
</tr>
</tbody>
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
```

#### Defined in

[jsEngine/api/PromptAPI.ts:207](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/2a2cfe4836b2dabd89bbe1da5831eff3e3e8be62/jsEngine/api/PromptAPI.ts#L207)
