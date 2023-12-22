import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.moritzjung.dev',
	base: '/obsidian-js-engine-plugin-docs',
	integrations: [
		starlight({
			title: 'JS Engine Docs',
			social: {
				github: 'https://github.com/mProjectsCode/obsidian-js-engine-plugin',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Examples',
					autogenerate: { directory: 'examples' },
				},
				typeDocSidebarGroup,
			],
			plugins: [
				starlightTypeDoc({
					entryPoints: [
						// 'obsidian-js-engine-plugin/JsEngine.d.ts',
						'obsidian-js-engine-plugin/jsEngine/api/API.ts',
						'obsidian-js-engine-plugin/jsEngine/api/Internal.ts',
						'obsidian-js-engine-plugin/jsEngine/api/LibAPI.ts',
						'obsidian-js-engine-plugin/jsEngine/api/MarkdownAPI.ts',
						'obsidian-js-engine-plugin/jsEngine/api/MessageAPI.ts',
						'obsidian-js-engine-plugin/jsEngine/api/reactive/ReactiveComponent.ts',
						'obsidian-js-engine-plugin/jsEngine/api/markdown/MarkdownString.ts',
						'obsidian-js-engine-plugin/jsEngine/api/markdown/MarkdownBuilder.ts',
						'obsidian-js-engine-plugin/jsEngine/api/markdown/MarkdownBuilder.ts',
						'obsidian-js-engine-plugin/jsEngine/engine/Engine.ts',
						'obsidian-js-engine-plugin/jsEngine/engine/JsExecution.ts',
						'obsidian-js-engine-plugin/jsEngine/engine/ResultRenderer.ts',
					],
					typeDoc: {
						entryPointStrategy: 'resolve',
						parametersFormat: 'table',
						propertiesFormat: 'list',
						enumMembersFormat: 'table',
						typeDeclarationFormat: 'table',
						excludePrivate: true,
						excludeProtected: true,
						excludeInternal: true,
						useCodeBlocks: true,
						groupOrder: [
							"Classes",
							"Functions",
							"Variables",
							"Type Aliases",
							"Interfaces",
							"Modules",
							"Namespaces",
						],
						categorizeByGroup: true,
						outputFileStrategy: 'members',

						plugin: ['typedoc-plugin-mdn-links'],
					},
					tsconfig: 'obsidian-js-engine-plugin/tsconfig.json',
					sidebar: {
						label: 'API Reference',
						collapsed: false,
					},
				})
			]
		}),
	],
	markdown: {
		remarkPlugins: [
			remarkMath,
		],
		rehypePlugins: [
			rehypeMathjax
		]
	}
});
