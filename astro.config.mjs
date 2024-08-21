import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';
import starlightLinksValidator from 'starlight-links-validator';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';
import starlightSiteGraph from 'starlight-site-graph';

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
			components: {
				TableOfContents: './src/components/TableOfContents.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: {
						directory: 'guides',
					},
				},
				{
					label: 'Examples',
					autogenerate: {
						directory: 'examples',
					},
				},
				typeDocSidebarGroup,
			],
			expressiveCode: {
				themes: ['dracula', 'github-light'],
				useStarlightUiThemeColors: true,
			},
			plugins: [
				starlightLinksValidator({
					errorOnRelativeLinks: false,
					exclude: ['/obsidian-js-engine-plugin-docs/api/**/*'],
				}),
				starlightTypeDoc({
					entryPoints: [
						// 'obsidian-js-engine-plugin/JsEngine.d.ts',
						'obsidian-js-engine-plugin/jsEngine/index.ts',
					],
					typeDoc: {
						parametersFormat: 'htmlTable',
						propertiesFormat: 'list',
						enumMembersFormat: 'htmlTable',
						typeDeclarationFormat: 'table',
						excludePrivate: true,
						excludeProtected: true,
						excludeInternal: true,
						plugin: ['typedoc-plugin-mdn-links'],
					},
					tsconfig: 'obsidian-js-engine-plugin/tsconfig.json',
					sidebar: {
						label: 'API Reference',
						collapsed: true,
					},
				}),
				starlightSiteGraph({
					graphConfig: {
						depth: 5,
						trackVisitedPages: false,
					},
					storageLocation: 'none',
					contentRoot: './src/content/docs',
					include_sitemap: ['./api/*/**/*.md'],
					exclude_sitemap: ['**'],
					show_graph: ['api/**'],
					hide_graph: ['**', ''],
				}),
			],
			customCss: ['./src/styles/custom.css'],
		}),
		// svelte(),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeMathjax],
	},
});
