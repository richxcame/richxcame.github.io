import type { GetStaticProps, NextPage } from 'next';
import { Typography, AppBar, IconButton, Button, Toolbar } from '@mui/material';
import { NextSeo } from 'next-seo';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';

type Props = {
	allPosts: Post[];
};

const Home = ({ allPosts }: Props) => {
	return (
		<>
			<NextSeo title='richxcame' description='Blog of Baygeldi Cholukov' />
			<Toolbar>
				<Typography
					align='center'
					variant='h4'
					component='div'
					sx={{ flexGrow: 1, mt: 3 }}
				>
					richxcame
				</Typography>
			</Toolbar>
			{allPosts.map((post, i) => (
				// <div key={i}>{post.title}</div>
				<div key={i} sx={{ maxWidth: 300 }}>
					<Typography variant='h6'>{post.title}</Typography>
				</div>
			))}
		</>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const allPosts = getAllPosts(['title', 'date', 'slug']);

	return {
		props: { allPosts },
	};
};
