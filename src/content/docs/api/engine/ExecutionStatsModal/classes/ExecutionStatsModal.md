---
editUrl: false
next: false
prev: false
title: "ExecutionStatsModal"
---

## Extends

- `Modal`

## Constructors

### new ExecutionStatsModal(app, plugin)

> **new ExecutionStatsModal**(`app`, `plugin`): [`ExecutionStatsModal`](/api/engine/executionstatsmodal/classes/executionstatsmodal/)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `app` | `App` |
| `plugin` | `default` |

#### Returns

[`ExecutionStatsModal`](/api/engine/executionstatsmodal/classes/executionstatsmodal/)

#### Overrides

`Modal.constructor`

#### Source

[jsEngine/engine/ExecutionStatsModal.ts:11](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/ExecutionStatsModal.ts#L11)

## Properties

### app

> **app**: `App`

#### Inherited from

`Modal.app`

#### Source

node\_modules/obsidian/obsidian.d.ts:2602

***

### containerEl

> **containerEl**: [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement )

#### Inherited from

`Modal.containerEl`

#### Source

node\_modules/obsidian/obsidian.d.ts:2610

***

### contentEl

> **contentEl**: [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement )

#### Inherited from

`Modal.contentEl`

#### Source

node\_modules/obsidian/obsidian.d.ts:2622

***

### modalEl

> **modalEl**: [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement )

#### Inherited from

`Modal.modalEl`

#### Source

node\_modules/obsidian/obsidian.d.ts:2614

***

### scope

> **scope**: `Scope`

#### Inherited from

`Modal.scope`

#### Source

node\_modules/obsidian/obsidian.d.ts:2606

***

### shouldRestoreSelection

> **shouldRestoreSelection**: `boolean`

#### Inherited from

`Modal.shouldRestoreSelection`

#### Source

node\_modules/obsidian/obsidian.d.ts:2627

***

### titleEl

> **titleEl**: [`HTMLElement`]( https://developer.mozilla.org/docs/Web/API/HTMLElement )

#### Inherited from

`Modal.titleEl`

#### Source

node\_modules/obsidian/obsidian.d.ts:2618

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

#### Inherited from

`Modal.close`

#### Source

node\_modules/obsidian/obsidian.d.ts:2640

***

### onClose()

> **onClose**(): `void`

#### Returns

`void`

#### Overrides

`Modal.onClose`

#### Source

[jsEngine/engine/ExecutionStatsModal.ts:38](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/ExecutionStatsModal.ts#L38)

***

### onOpen()

> **onOpen**(): `void`

#### Returns

`void`

#### Overrides

`Modal.onOpen`

#### Source

[jsEngine/engine/ExecutionStatsModal.ts:20](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/ExecutionStatsModal.ts#L20)

***

### open()

> **open**(): `void`

#### Returns

`void`

#### Inherited from

`Modal.open`

#### Source

node\_modules/obsidian/obsidian.d.ts:2636

***

### setExecution()

> **setExecution**(`execution`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `execution` | [`JsExecution`](/api/engine/jsexecution/classes/jsexecution/) |

#### Returns

`void`

#### Source

[jsEngine/engine/ExecutionStatsModal.ts:16](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/6478290/jsEngine/engine/ExecutionStatsModal.ts#L16)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
