import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
import PostHeader from "../../components/post-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import PostTitle from "../../components/post-title";
import Tags from "../../components/tags";
import { getAllPagesWithSlug, getPostAndMorePosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";

export default function Page({ page, pages, preview }) {
	const router = useRouter();
	const morePages = pages?.edges;

	if (!router.isFallback && !page?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article>
							<Head>
								<title>
									{page.title} | Next.js Blog Example with {CMS_NAME}
								</title>
								<meta
									property="og:image"
									content={page.featuredImage?.node.sourceUrl}
								/>
							</Head>
							<PostHeader
								title={page.title}
								coverImage={page.featuredImage}
								date={page.date}
								author={page.author}
								categories={page.categories}
							/>
							<PostBody content={page.content} />
							<footer>
								{page.tags.edges.length > 0 && <Tags tags={page.tags} />}
							</footer>
						</article>

						<SectionSeparator />
						{morePages.length > 0 && <MoreStories posts={morePages} />}
					</>
				)}
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({
	params,
	preview = false,
	previewData,
}) => {
	const data = await getPostAndMorePosts(params?.slug, preview, previewData);

	return {
		props: {
			preview,
			post: data.post,
			posts: data.posts,
		},
		revalidate: 10,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const allPages = await getAllPagesWithSlug();

	console.log(allPages.edges);

	return {
		paths: allPages.edges.map(({ node }) => `/pages/${node.slug}`) || [],
		fallback: true,
	};
};
