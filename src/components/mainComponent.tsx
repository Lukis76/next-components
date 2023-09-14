import { FC } from "react";
import { notFound } from "next/navigation";
import { ScrollArea } from "./ui/scroll-area";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "./mdx-components";

interface MainComponentProps {
	params: {
		slug: string;
	};
	// Define prop types here
}

async function getPostFormParams(slug: string) {
	const post = allPosts.find((post) => post.slugAsParams === slug);

	if (!post) notFound();
	return post;
}

export const MainComponent: FC<MainComponentProps> = async ({ params }) => {
	const slag = "next.js-more-docker";
	const post = await getPostFormParams(slag);

	return (
		<section className="h-[calc(100dvh-64px)] bg-blue-400 flex flex-col items-center w-full  max-w-3xl mx-8">
			<ScrollArea className="flex-1 bg-slate-500 w-full">
				<Mdx code={post.body.code} />
			</ScrollArea>
		</section>
	);
};
