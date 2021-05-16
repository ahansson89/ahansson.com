import React from 'react';
import styled from 'styled-components';
import Img from "gatsby-image"

import media from '../utils/style';

const Paragraph = styled.p`
    margin: 1rem 0;
    text-align: start;
    ${media.md`
        text-align: center;
    `}
`;

const Avatar = styled(Img)`
    flex-basis:33.33%;
    margin: 0 0 0 5rem;
    height: 350px;
    width: 350px;
    ${media.md`
        flex-basis: 100%;
        height: 250px;
        width: 250px;
    `}
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:center;
    margin 0 auto;
    max-width: 1200px;
    ${media.md`
        flex-direction: column;
    `}
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis:66.66%;
    padding: 0 5rem;
    ${media.md`
        flex-basis: 100%;
    `}
`;

function About(props) {
    const { fluid } = props;
    return (
        <Container>
            <Avatar fluid={fluid} imgStyle={{ objectFit: "contain" }} />
            <Description>
                <Paragraph>
                    After graduating in Biological Sciences I am currently doing
                    my master's degree in Marine Sciences to pursue my dream of becoming a marine biologist.
                </Paragraph>
                <Paragraph>
                    My research interests are wide and include marine biology and ecology,
                    marine conservation and the effects of climate change on the marine environment.
                </Paragraph>
                <Paragraph>
                    In my future career, I would like to combine my passion for the ocean with
                    the field of science communication through video making and editing.
                </Paragraph>
                <Paragraph>
                    I am moved by a strong will to learn and get involved by always giving my best.
                    Some of my distinctive skills include motivation and commitment, as well as adaptability, time management and planning.
                </Paragraph>
            </Description>
        </Container>
    );
}

export default About;