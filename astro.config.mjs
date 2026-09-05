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
					label: 'Start here',
					items: [
						{ slug: 'guides/getting-started' },
						{ slug: 'tutorials/first-monitor' },
						{ slug: 'tutorials/first-cron-job' },
					],
				},
				{
					label: 'Account',
					items: [
						{ slug: 'guides/teams' },
						{ slug: 'guides/billing' },
						{ slug: 'guides/resources' },
						{ slug: 'guides/affiliate' },
					],
				},
				{
					label: 'Cron jobs',
					items: [
						{ slug: 'guides/cron-jobs' },
					],
				},
				{
					label: 'Monitoring',
					items: [
						{ slug: 'guides/monitors' },
						{ slug: 'guides/assertions' },
					],
				},
				{
					label: 'Incidents and status',
					items: [
						{ slug: 'guides/incidents' },
						{ slug: 'guides/status-pages' },
						{ slug: 'guides/alerts' },
					],
				},
				{
					label: 'Concepts',
					items: [
						{ slug: 'concepts/monitoring-incidents-status' },
						{ slug: 'concepts/capacity' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ slug: 'reference/plans' },
						{ slug: 'reference/cron-jobs' },
						{ slug: 'reference/monitor-protocols' },
						{ slug: 'reference/glossary' },
					],
				},
			],
		}),
	],
});
