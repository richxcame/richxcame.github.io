import { Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import postType from '../../types/post';
import PostBody from '../../components/post-body';

const Post = ({ title, slug, date, content }: postType) => {
	return (
		<>
			{date}
			<Typography variant='h2'>{title}</Typography>
			<PostBody content={content} />
		</>
	);
};

export default Post;

type Params = {
	params: {
		slug: string;
	};
};

export const getStaticProps = async ({ params }: Params) => {
	const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content']);

	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			...post,
			content,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
};
