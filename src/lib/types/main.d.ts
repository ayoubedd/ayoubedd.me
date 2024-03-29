export type Publication = {
	title: string;
	slug: string;
	description: string;
	tags: string[];
	publishDate: string;
	modificationDate: string;
	draft: boolean;
	content: string;
};

export type Project = {
	title: string;
	link: string;
	description: string;
	publishDate: string;
	image: string;
	draft: boolean;
};
