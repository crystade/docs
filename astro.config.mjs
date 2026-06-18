// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  	site: 'https://docs.crystade.com',
	integrations: [
		starlight({
			title: 'Crystade',
			social: [{ icon: 'star', label: 'Website', href: 'https://crystade.com' }, { icon: 'github', label: 'GitHub', href: 'https://github.com/crystade' }],
			logo: {
				src: './public/logo.png',
			},
			favicon: './public/favicon.ico',
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ slug: 'guides/getting-started' },
						{ slug: 'guides/teams' },
						{ slug: 'guides/billing' },
						{ slug: 'guides/resources' },
					],
				},
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
	],
});
