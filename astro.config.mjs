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
			expressiveCode: {
				themes: ['dracula', 'github-light'],
				useStarlightUiThemeColors: true,
			},
			plugins: [
				starlightTypeDoc({
					entryPoints: [
						// 'obsidian-js-engine-plugin/JsEngine.d.ts',
						'obsidian-js-engine-plugin/jsEngine/index.ts',
					],
					typeDoc: {
						parametersFormat: 'table',
						propertiesFormat: 'list',
						enumMembersFormat: 'table',
						typeDeclarationFormat: 'table',
						excludePrivate: true,
						excludeProtected: true,
						excludeInternal: true,
						// useCodeBlocks: true,

						plugin: ['typedoc-plugin-mdn-links'],
					},
					tsconfig: 'obsidian-js-engine-plugin/tsconfig.json',
					sidebar: {
						label: 'API Reference',
						collapsed: true,
					},
				}),
			],
		}),
	],
	markdown: {
		remarkPlugins: [
			remarkMath,
		],
		rehypePlugins: [
			rehypeMathjax,
		],
	},
});
