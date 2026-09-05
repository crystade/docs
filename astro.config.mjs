// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLlmsTxt from 'starlight-llms-txt';

// https://astro.build/config
export default defineConfig({
  	site: 'https://docs.crystade.com',
	integrations: [
		starlight({
			plugins: [
				starlightLlmsTxt({
					projectName: 'Crystade',
					description:
						'Crystade is a platform for developer teams that need cron jobs, monitoring, incidents, and status pages in one place. Schedule outbound HTTP jobs, probe HTTP, TCP, TLS, and Minecraft endpoints, track disruptions, and publish status pages without running your own scheduling or monitoring infrastructure.',
					details: `Use **team** for the organizational unit — not workspace or project. Resources (cron jobs, monitors, assertions, incidents, status pages) belong to a team and cannot move between teams. A personal team is created at signup and is exclusive to one user; collaborative teams support owners and members.

Sign-in is Google or GitHub only. Billing is per team (Free, Starter, Standard) via Paddle in USD. Paused resources keep configuration and history, do not run, and still occupy slots. Monitoring, incidents, and status pages are separate objects: a check feeds assertions, assertions can open an incident, and only published incidents appear on a status page.

Documentation follows Diátaxis: tutorials teach a first success, guides cover one task, concepts explain why, and reference lists exact limits and protocols.`,
					optionalLinks: [
						{
							label: 'Crystade website',
							url: 'https://crystade.com',
							description: 'Product site and dashboard',
						},
						{
							label: 'GitHub',
							url: 'https://github.com/crystade',
							description: 'Crystade organization on GitHub',
						},
					],
					customSets: [
						{
							label: 'Tutorials',
							description: 'step-by-step first successes for monitors and cron jobs',
							paths: ['tutorials/**', 'guides/getting-started'],
						},
						{
							label: 'How-to guides',
							description: 'task-oriented instructions for account, jobs, monitoring, incidents, and status',
							paths: ['guides/**'],
						},
						{
							label: 'Concepts',
							description: 'how monitoring, incidents, status pages, and capacity pauses relate',
							paths: ['concepts/**'],
						},
						{
							label: 'Reference',
							description: 'plan limits, cron job fields, monitor protocols, and glossary',
							paths: ['reference/**'],
						},
					],
					promote: [
						'index*',
						'guides/getting-started*',
						'tutorials/**',
						'concepts/monitoring-incidents-status*',
					],
					demote: ['guides/affiliate*'],
					exclude: ['guides/affiliate*'],
					customSelectors: {
						small: ['img', 'figure'],
					},
					pageSeparator: '\n\n---\n\n',
				}),
			],
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
