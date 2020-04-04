import { css } from '@emotion/core';
import Image from 'gatsby-image';
import React from 'react';
import useInstagram from '../hooks/useInstagram';

const Insta = () => {
  
  const instaPhotos = useInstagram();
  const {username} = instaPhotos[0];
  return (
    <>
      <h2>Instragram posts</h2>
      <div css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 1rem -0.5rem;
      `}>
        {instaPhotos.map(photo => (
          <a
            key={photo.id}
            href={`https://www.instagram.com/p/${photo.id}`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;
              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image fluid={photo.fluid} alt={photo.caption} css={css`
              * {
                margin-top: 0;
              }
            `} />
          </a>
        ))}
      </div>
      <a href={`https://www.instagram.com/${username}`}>See more</a>
    </>
  )
}

export default Insta;