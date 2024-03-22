import ExperienceCard from '$lib/components/ExperienceCard.svelte';

export const routes = [
	{ url: '/', name: 'Home' },
	{ url: '/posts', name: 'Blog' },
	{ url: '/projects', name: 'Projects' },
	{ url: '/resume', name: 'Resume' },
	{ url: '/about', name: 'About' }
];

export const author = {
	name: {
		first: 'Ayoub',
		last: 'Eddaoudi',
		full: 'Ayoub Eddaoudi'
	},
	description:
		'Welcome to my little personal corner of the internet, where I share my thoughts and experiences. \
		I am a software engineer, and I love to learn and share my knowledge with others.\
		Feel free to reach out to me if you have any questions or just want to chat.',
	email: 'me@ayoubedd.me',
	socials: [
		{
			name: 'Github',
			url: 'https://github.com/ayoubedd'
		},
		{
			name: 'Linkedin',
			url: 'https://www.linkedin.com/in/ayoubeddaouddi'
		},
		{
			name: 'Twitter',
			url: 'https://twitter.com'
		}
		// {
		// 	name: 'GPG',
		// 	url: '/GPG.key'
		// },
	],
	experience: [
		{
			title: 'Software Engineer',
			startDate: '2020-01-01',
			endDate: '2022-05-01',
			description: 'I worked as a software engineer at a company..',
			bullets: [
				'Worked on a team of 5 engineers to build a web application.',
				'Implemented a feature that increased user engagement by 20%.'
			]
		},
		{
			title: 'Software Engineer',
			startDate: '2020-01-01',
			endDate: '2022-05-01',
			description: 'I worked as a software engineer at a company..',
			bullets: [
				'Worked on a team of 5 engineers to build a web application.',
				'Implemented a feature that increased user engagement by 20%.'
			]
		}
	]
};

export const site = {
	domain: 'www.ayoubedd.com',
	title: 'Ayoub Eddaoudi'
};

export const articles = [
	{
		title: 'Wow hahah, wait ... ?',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'This is a blog post without a title',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'Wow hahah, wait ... ?',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'This is a blog post without a title',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'Wow hahah, wait ... ?',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'This is a blog post without a title',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'Wow hahah, wait ... ?',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'This is a blog post without a title',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'Wow hahah, wait ... ?',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	},
	{
		title: 'This is a blog post without a title',
		url: '/',
		date: new Date(),
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis impedit non in quisquam. This is a example descriptionthis is a example description'
	}
];
