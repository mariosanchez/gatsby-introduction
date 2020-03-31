import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import ReadLink from './read-link';

const PostPreview = ({post: {title, excerpt, slug}}) => (
  <article css={css`
    border-bottom: 1px solid #ddd;
    margin-top: 0.75rem;
    padding-bottom: 1rem;

    &:first-of-type {
      margin-top: 1rem;
    }
  `}>
    <Link to={slug}> <h3>{title}</h3></Link>
    <p>{excerpt}</p>
    <ReadLink to={slug}>read this post ></ReadLink>
  </article>
)

export default PostPreview;