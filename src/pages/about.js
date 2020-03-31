import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About Me</h1>
    <div>This is my personal website.</div>
    <Link to="/">&larr; Back to home</Link>
  </Layout>
)