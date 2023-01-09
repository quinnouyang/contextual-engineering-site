import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPagesWithSlug, getAllPostsForHome } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

export default function Index({ allPosts: { edges }, allPages, preview }) {
	const heroPost = edges[0]?.node;
	const morePosts = edges.slice(1);

	return (
		<Layout preview={preview}>
			<Head>
				<title>Next.js Blog Example with {CMS_NAME}</title>
			</Head>
			<Container>
				<Intro />
				{heroPost && (
					<HeroPost
						title={heroPost.title}
						coverImage={heroPost.featuredImage}
						date={heroPost.date}
						author={heroPost.author}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
				{"Posts: " + JSON.stringify(edges, null, 2)}
				<br />
				{"Pages: " + JSON.stringify(allPages.edges, null, 2)}
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await getAllPostsForHome(preview);
	const allPages = await getAllPagesWithSlug();

	return {
		props: { allPosts, allPages, preview },
		revalidate: 10,
	};
};
