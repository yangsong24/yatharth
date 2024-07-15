// import React, { useState, useEffect } from 'react';
// import Helmet from 'react-helmet';
// import PropTypes from 'prop-types';
// import anime from 'animejs';
// import { IconLoader } from '@components/icons';
// import styled from 'styled-components';
// import { theme, mixins } from '@styles';
// const { colors } = theme;

// const StyledContainer = styled.div`
//   ${mixins.flexCenter};
//   background-color: ${colors.darkNavy};
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 99;
// `;
// const StyledLogo = styled.div`
//   width: max-content;
//   max-width: 100px;
//   transition: ${theme.transition};
//   opacity: ${props => (props.isMounted ? 1 : 0)};
//   svg {
//     width: 100%;
//     height: 100%;
//     display: block;
//     margin: 0 auto;
//     fill: none;
//     user-select: none;
//     #B {
//       opacity: 0;
//     }
//   }
// `;

// const Loader = ({ finishLoading }) => {
//   const animate = () => {
//     const loader = anime.timeline({
//       complete: () => finishLoading(),
//     });

//     loader
//       .add({
//         targets: '#logo path',
//         delay: 300,
//         duration: 1500,
//         easing: 'easeInOutQuart',
//         strokeDashoffset: [anime.setDashoffset, 0],
//       })
//       .add({
//         targets: '#logo #B',
//         duration: 700,
//         easing: 'easeInOutQuart',
//         opacity: 1,
//       })
//       .add({
//         targets: '#logo',
//         delay: 500,
//         duration: 300,
//         easing: 'easeInOutQuart',
//         opacity: 0,
//         scale: 0.1,
//       })
//       .add({
//         targets: '.loader',
//         duration: 200,
//         easing: 'easeInOutQuart',
//         opacity: 0,
//         zIndex: -1,
//       });
//   };

//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsMounted(true), 10);
//     animate();
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <StyledContainer className="loader">
//       <Helmet bodyAttributes={{ class: `hidden` }} />

//       <StyledLogo isMounted={isMounted}>
//         <IconLoader />
//       </StyledLogo>
//     </StyledContainer>
//   );
// };

// Loader.propTypes = {
//   finishLoading: PropTypes.func.isRequired,
// };

// export default Loader;

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';
import { theme } from '@styles';

const { colors, fontSizes } = theme;
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: ${colors.darkNavy};
`;

const StyledTextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledText = styled.h1`
  color: ${colors.lightestNavy};
  font-size: ${(props) => (props.isMain ? fontSizes.xlarge : fontSizes.xxlarge)};
  text-transform: uppercase;
  opacity: 0;
  margin: 0;
  padding: 0;
`;


const Loader = ({ finishLoading }) => {
  useEffect(() => {
    const animate = () => {
      const nameTimeline = anime.timeline({
        complete: () => {
          setTimeout(finishLoading, 1500);
        },
      });

      nameTimeline
        .add({
          targets: '#name',
          scale: [4, 1],
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 720,
        })
        .add({
          targets: '#name',
          scale: [1, 0.2],
          opacity: [1, 0],
          easing: 'easeInExpo',
          duration: 500,
          delay: 600,
        })
        .add({
          targets: '#logo',
          opacity: [0, 1],
          scale: [0.2, 1],
          easing: 'easeOutExpo',
          duration: 150,
        });
    };

    animate();
  }, [finishLoading]);

  return (
    <StyledContainer>
      <StyledTextContainer>
        <StyledText id="name" isMain>
          Yatharth Bansal
        </StyledText>
      </StyledTextContainer>
      <StyledTextContainer>
        <StyledText id="logo">
          YB
        </StyledText>
      </StyledTextContainer>
    </StyledContainer>
  );
};




// const StyledContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: ${colors.darkNavy};
// `;

// const StyledNameContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledLogoContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const StyledText = styled.h1`
//   color: ${(props) => (props.showMain ? colors.lightestNavy : colors.white)};
//   font-size: ${(props) => (props.showMain ? fontSizes.xlarge : fontSizes.xxlarge)};
//   text-transform: uppercase;
//   opacity: ${(props) => (props.showMain ? 0 : 1)};
//   transition: opacity 0.3s ease-out;
// `;

// const Loader = ({ finishLoading }) => {
//   const [showMain, setShowMain] = useState(false);

//   useEffect(() => {
//     const animate = () => {
//       const nameTimeline = anime.timeline({
//         complete: () => {
//           setShowMain(true);
//           setTimeout(() => {
//             finishLoading();
//           }, 1500);
//         },
//       });

//       nameTimeline
//         .add({
//           targets: '#name',
//           scale: [4, 1],
//           opacity: [0, 1],
//           easing: 'easeOutExpo',
//           duration: 1000,
//         })
//         .add({
//           targets: '#name',
//           scale: [1, 0.2],
//           opacity: [1, 0],
//           easing: 'easeInExpo',
//           duration: 500,
//           delay: 600,
//         });

//       nameTimeline.finished.then(() => {
//         anime({
//           targets: '#logo',
//           opacity: [0, 1],
//           scale: [0.2, 1],
//           easing: 'easeOutExpo',
//           duration: 800,
//         });
//       });
//     };

//     animate();
//   }, []);

//   return (
//     <StyledContainer>
//       <StyledNameContainer>
//         <StyledText id="name" showMain={showMain}>
//           Yatharth Bansal
//         </StyledText>
//       </StyledNameContainer>
//       <StyledLogoContainer>
//         <StyledText id="logo" showMain={!showMain}>
//           YB
//         </StyledText>
//       </StyledLogoContainer>
//     </StyledContainer>
//   );
// };

// Loader.propTypes = {
//   finishLoading: PropTypes.func.isRequired,
// };

// export default Loader;


// import React, { useState, useEffect } from 'react';
// import Helmet from 'react-helmet';
// import PropTypes from 'prop-types';
// import anime from 'animejs';
// import { IconLoader } from '@components/icons';
// import styled from 'styled-components';
// import { theme, mixins } from '@styles';

// const { colors } = theme;

// const StyledContainer = styled.div`
//   ${mixins.flexCenter};
//   background-color: ${colors.darkNavy};
//   position: fixed;
//   width: 100%;
//   height: 100%;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   z-index: 99;
//   opacity: 1;
//   visibility: visible;
//   transition: ${theme.transition};
//   &.hidden {
//     opacity: 0;
//     visibility: hidden;
//   }
// `;

// const StyledLogo = styled.div`
//   width: max-content;
//   max-width: 100px;
//   transition: ${theme.transition};
//   opacity: ${props => (props.isMounted ? 1 : 0)};
//   svg {
//     width: 100%;
//     height: 100%;
//     display: block;
//     margin: 0 auto;
//     fill: none;
//     user-select: none;
//     #B {
//       opacity: 0;
//     }
//   }
// `;

// const Loader = ({ finishLoading }) => {
//   const runAnimations = () => {
//     const loadingAnimation = anime.timeline({
//       complete: () => finishLoading(),
//     });

//     loadingAnimation
//       .add({
//         targets: '#logo path',
//         delay: 300,
//         duration: 1000, // Reduced duration for quicker load perception
//         easing: 'easeInOutQuart',
//         strokeDashoffset: [anime.setDashoffset, 0],
//       })
//       .add({
//         targets: '#logo #B',
//         duration: 500, // Reduced duration for quicker load perception
//         easing: 'easeInOutQuart',
//         opacity: 1,
//       })
//       .add({
//         targets: '.loader',
//         delay: 300, // Slight delay for better UX
//         duration: 300,
//         easing: 'easeInOutQuart',
//         begin: () => setIsHidden(true),
//       });
//   };

//   const [isMounted, setIsMounted] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => setIsMounted(true), 10);
//     runAnimations();
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <StyledContainer className={`loader ${isHidden ? 'hidden' : ''}`}>
//       <Helmet bodyAttributes={{ class: `hidden` }} />

//       <StyledLogo isMounted={isMounted}>
//         <IconLoader />
//       </StyledLogo>
//     </StyledContainer>
//   );
// };

// Loader.propTypes = {
//   finishLoading: PropTypes.func.isRequired,
// };

export default Loader;



