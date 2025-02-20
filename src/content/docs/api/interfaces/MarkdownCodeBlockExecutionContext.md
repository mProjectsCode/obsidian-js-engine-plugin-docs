---
editUrl: false
next: false
prev: false
title: "MarkdownCodeBlockExecutionContext"
---

Defined in: [jsEngine/engine/JsExecution.ts:23](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L23)

## Properties

### block?

> `optional` **block**: [`Block`](/obsidian-js-engine-plugin-docs/api/interfaces/block/)

Defined in: [jsEngine/engine/JsExecution.ts:37](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L37)

Currently unused.

***

### executionSource

> **executionSource**: [`MarkdownCodeBlock`](/obsidian-js-engine-plugin-docs/api/enumerations/executionsource/#markdowncodeblock)

Defined in: [jsEngine/engine/JsExecution.ts:24](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L24)

***

### file?

> `optional` **file**: `TFile`

Defined in: [jsEngine/engine/JsExecution.ts:29](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L29)

The file that the code block is in.
Since rendered markdown does not necessarily have an associated file, this can be undefined.

***

### metadata?

> `optional` **metadata**: `CachedMetadata`

Defined in: [jsEngine/engine/JsExecution.ts:33](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L33)

The metadata of the file.
