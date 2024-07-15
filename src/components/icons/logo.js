// import React from 'react';

// const IconLogo = () => (
//   <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
//     <title>Logo</title>
//     <g transform="translate(-8.000000, -2.000000)">
//       <g transform="translate(11.000000, 5.000000)">
//         <polygon
//           id="Shape"
//           stroke="currentColor"
//           strokeWidth="5"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           points="100 0 100 0 100 0 100 1 0 0 0 0"
//         />
//       </g>
//     </g>
//     <text x="7" y="65" fill="currentColor" fontSize="50px" fontFamily="Bodoni">
//       YB
//     </text>
//   </svg>
// );

// export default IconLogo;

// import React from 'react';

// const IconLogo = () => (
//   <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 84">
//     <title>Logo</title>
//     <rect
//       x="0"
//       y="0"
//       width="84"
//       height="84"
//       stroke="currentColor"
//       strokeWidth="5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       fill="url(#gradient)"
//     >
//       <animateTransform
//         attributeName="transform"
//         attributeType="XML"
//         type="rotate"
//         from="0 42 42"
//         to="360 42 42"
//         dur="1.5s"
//         repeatCount="indefinite"
//       />
//     </rect>
//     <text x="16" y="58" fill="currentColor" fontSize="45px" fontFamily="Bodoni" fontWeight="bold" textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)">
//       YB
//     </text>
//     <defs>
//       <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" stopColor="#ff00cc" />
//         <stop offset="100%" stopColor="#3333ff" />
//       </linearGradient>
//     </defs>
//   </svg>
// );

// export default IconLogo;


import React from 'react';

const IconLogo = () => {
  const [isYBVisible, setIsYBVisible] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsYBVisible((prevIsYBVisible) => !prevIsYBVisible);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentText = isYBVisible ? 'YB' : '杨松';
  const fontSize = isYBVisible ? "40px" : "32px";
  const yPosition = isYBVisible ? "58" : "56";

  return (
    <svg 
      id="logo" 
      xmlns="http://www.w3.org/2000/svg" 
      role="img" 
      viewBox="0 0 84 84"
      onMouseOver={() => setIsYBVisible(false)}
      onMouseOut={() => setIsYBVisible(true)}
    >
      <title>Logo</title>
      <rect
        x="0"
        y="0"
        width="84"
        height="84"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#gradient)"
        filter="url(#shadow)"
      />
      <text 
        x="12" 
        y={yPosition} 
        fill="currentColor" 
        fontSize={fontSize} 
        fontFamily="Bodoni" 
        fontWeight="bold" 
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.3)"
        opacity="0.8"
      >
        {currentText}
        <animate
          attributeName="opacity"
          dur="2.5s"
          values="0.8;1;0.8"
          repeatCount="indefinite"
        />
      </text>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ff00cc" />
          <stop offset="100%" stopColor="#3333ff" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset result="offOut" in="SourceGraphic" dx="2" dy="2" />
          <feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.5 0 0 0 0 0 0.5 0 0 0 0 0 0.5 0 0 0 0 0 1 0" />
          <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>
    </svg>
  );
};

export default IconLogo;




 
