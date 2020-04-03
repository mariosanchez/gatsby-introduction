import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const ImageBackground = styled('div')`
    background-image: url('/images/tom-hermans-peanuts.jpg');
    background-size: cover;
    height: 20vh;

    + * {
       margin-top: 0; 
    }
`


const TextBox = styled('div')`
    background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 0 calc((100vw - 550px) / 2) 2rem;
    width: 100%;

    h1 {
        text-shadow: 1px 1px 3px #eeddff66;
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

    return (
        <ImageBackground>
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