---
title: Markdown Builder
description: Examples of using the Markdown Builder.
---

The Markdown Builder allows for easy creation of markdown with JavaScript.

```js
let markdownBuilder = engine.markdown.createBuilder();

markdownBuilder.createHeading(2, 'Test Heading');
markdownBuilder.createParagraph('This is a test paragraph.');

markdownBuilder.createHeading(3, 'This is a sub heading');
markdownBuilder.createHeading(4, 'This is a sub sub heading');
markdownBuilder.createParagraph('This is another test paragraph.');

return markdownBuilder;
```

> ## Test Heading
>
> This is a test paragraph.
>
> ### This is a sub heading
>
> #### This is a sub sub heading
>
> This is another test paragraph.
