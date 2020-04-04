import styled from '@emotion/styled';
import { graphql, Link, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import React from 'react';

const ImageBackground = styled(BackgroundImage)`
    background-image: url('/images/tom-hermans-peanuts.jpg');
    background-size: cover;
    height: 20vh;
    * + * {
       margin-top: 0; 
    }
`


const TextBox = styled('div')`
    background-image: linear-gradient(to top, #0000ffdd 2rem, #0000ff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    width: 100%;

    h1 {
        text-shadow: 1px 1px 3px #0000ff66;
        font-size: 2.25rem;
    }

    p,
    a {
        color: #222;
        margin-top: 0;
    }

    a {
        margin-top: 0.5;
    }
`

const Hero = () => {

    const { image } = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "tom-hermans-peanuts.jpg"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);

    return (
        <ImageBackground Tag="section" fluid={image.sharp.fluid}>
            <TextBox>
                <h1>Gatsby &hearts; 101</h1>
                <p>
                    Hello Pepinuts
                    <Link to="/about">
                        Learn about me
                    </Link>
                </p>
            </TextBox>
        </ImageBackground>
    )
}

export default Hero;