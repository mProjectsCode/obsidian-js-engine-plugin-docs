---
editUrl: false
next: false
prev: false
title: "MarkdownCallingJSFileExecutionContext"
---

Defined in: [jsEngine/engine/JsExecution.ts:45](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L45)

## Properties

### executionSource

> **executionSource**: [`MarkdownCallingJSFile`](/obsidian-js-engine-plugin-docs/api/enumerations/executionsource/#markdowncallingjsfile)

Defined in: [jsEngine/engine/JsExecution.ts:46](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L46)

***

### file?

> `optional` **file**: `TFile`

Defined in: [jsEngine/engine/JsExecution.ts:51](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L51)

The markdown file that the JS File is called from.
Since rendered markdown does not necessarily have an associated file, this can be undefined.

***

### jsFile

> **jsFile**: `TFile`

Defined in: [jsEngine/engine/JsExecution.ts:59](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L59)

The JS that is being called.

***

### metadata?

> `optional` **metadata**: `CachedMetadata`

Defined in: [jsEngine/engine/JsExecution.ts:55](https://github.com/mProjectsCode/obsidian-js-engine-plugin/blob/fff05749aaa23f9a775003f5828b7e747db4ed95/jsEngine/engine/JsExecution.ts#L55)

The metadata of the markdown file.
