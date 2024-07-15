import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import sr from '@utils/sr';
import { srConfig } from '@config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '@styles';
import Img from "gatsby-image";
const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  text-align: center;
  max-width: 900px;
  margin: 0 auto 100px;
`;

const StyledHeading = styled(Heading)`
  display: block;
  color: ${colors.green};
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  margin-bottom: 30px;
  &:before {
    bottom: 0;
    font-size: ${fontSizes.sm};
  }
  &:after {
    display: none;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  ${media.desktop`grid-template-columns: repeat(3, 1fr);`};
  ${media.tablet`grid-template-columns: repeat(2, 1fr);`};
  ${media.phablet`grid-template-columns: 1fr;`};

  /* Targeting the 5th grid item */
  > div:nth-child(5) {
    grid-column-end: span 2; 
  }
`;


const AdventureItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${colors.green};
  border-radius: 5px;
  overflow: hidden;

  img {
    flex: 3; /* allocate more space for the image */
    width: 100%;
    height: auto;
    transition: ${theme.transition};
    &:hover {
      transform: scale(1.3);
    }
  }

  p {
    flex: 1; /* allocate less space for the text */
    padding: 15px;
    text-align: left;
  }
`;
 

const Personal = ({ adventures }) => {
  const revealContainer = useRef(null);
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  return (
    <StyledContainer id="personal" ref={revealContainer}>
      <StyledHeading>My Adventures</StyledHeading>
      
      <Grid>
      {adventures.map((adventure, index) => (
    <AdventureItem key={index}>
        {adventure.image && adventure.image.childImageSharp && adventure.image.childImageSharp.fluid ? (
            <Img fluid={adventure.image.childImageSharp.fluid} alt={adventure.title} />
        ) : (
            <p>No Image Available</p>
        )}
        <p>{adventure.description}</p>
    </AdventureItem>
))}

      </Grid>
    </StyledContainer>
  );
};

Personal.propTypes = {
  adventures: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.object.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default Personal;
