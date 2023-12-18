---
title: Usage
description: A guide in my new Starlight docs site.
---

Start by creating a code block with the `js-engine` plugin. 
Inside the code block you can write what ever JavaScript code that you want.
The plugin will run the JavaScript and render the returned value in place of the code block. 
When you return nothing or `undefined`, the plugin will not render anything and the code block will be invisible.
If you are modifying the `container` element, you need to return nothing or `undefined`.
Otherwise, the plugin will overwrite your changes to the `container` element.
