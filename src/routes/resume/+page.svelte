<script lang="ts">
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import Meta from '$lib/composables/Meta.svelte';
	import { author } from 'siteConfig';
</script>

<svelte:head>
	<Meta title="Resume" description="My education and experience as a software developer" />
</svelte:head>

## Education I attended 1337 Coding school, where I gained valuable knowledge and skills in software
development. The curriculum focused on practical coding exercises and projects, allowing me to gain
hands-on experience in various programming languages and technologies. Through rigorous training and
collaboration with peers, I developed a strong foundation in problem-solving, algorithmic thinking,
and software engineering principles. This experience has greatly contributed to my growth as a
developer and prepared me for real-world challenges in the industry. ## Experiencel I have
experience working as a software developer intern at a tech company, where I developed and
maintained software systems, troubleshooted technical issues, and collaborated with a team of
professionals. This opportunity allowed me to apply my coding skills in a professional setting, gain
exposure to industry best practices, and learn from experienced developers. I also had the chance to
work on real-world projects, contribute to team meetings, and participate in code reviews, enhancing
my understanding of software development processes and teamwork.

{#each author.experience as exp}
	<ExperienceCard
		title={exp.title}
		startDate={exp.startDate}
		endDate={exp.endDate}
		description={exp.description}
		bullets={exp.bullets}
	/>
{/each}
