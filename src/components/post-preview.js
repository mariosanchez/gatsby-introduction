import { css } from '@emotion/core';
import { Link } from 'gatsby';
import React from 'react';
import ReadLink from './read-link';
import Image from 'gatsby-image';

const PostPreview = ({post: {title, excerpt, slug, image}}) => (
  <article css={css`
    border-bottom: 1px solid #ddd;
    display: flex;
    margin-top: 0;
    padding-bottom: 1rem;

    &:first-of-type {
      margin-top: 1rem;
    }
  `}>
    <Link to={slug} css={css`margin: 1rem 1rem 0 0; min-width: 100px`}> 
      <Image 
      fluid={image.sharp.fluid}
      css={css`
        * {
          margin-top: 0;
        }
      `}
      alt={title}
      />        
    </Link>
    <div>
      <h3>
      <Link to={slug}> <h3>{title}</h3></Link>
      </h3>
      <p>{excerpt}</p>
      <ReadLink to={slug}>read this post ></ReadLink>
    </div>
  </article>
)

export default PostPreview;