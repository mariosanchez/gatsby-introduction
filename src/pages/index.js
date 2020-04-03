import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import PostPreview from '../components/post-preview';
import usePosts from '../hooks/use-posts';
import Hero from '../components/hero';


export default () => {
  const posts = usePosts();
  
  return (
  <>
    <Hero />
    <Layout>
      <h1>Home</h1>
      <p>Hello Frontend Masters!</p>
      <Link to="/about">Learn more about me</Link>
      <h2>Read my posts:</h2>
      {posts.map(post => <PostPreview key={post.slug} post={post} />)}
    </ Layout>
  </>
)};
