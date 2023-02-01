module.exports = {
  siteTitle: 'Yatharth Bansal | Data Scientist',
  siteDescription:
    'Yatharth Bansal`s Portfolio | Transforming Data into Action: Partner with Me!',
  siteKeywords:
    'Yatharth Bansal, yatharthbansal, yangsong, yatharth, columbia, columbiauniversity, electrical, datascience, datascientist, covid-19, covid india, covid dashboard, yang, yatharth24, data analyst, iit roorkee, EY, china,yangsong , bit',
  siteUrl: 'https://yatharthbansal.com/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-209106714-1',
  googleVerification: 'k1o9gX2IIjVOQElcFStaSptD9sBxMqZ3FcS5Wo_HxSQ',
  name: 'Yatharth Bansal',
  location: 'New York, NY',
  email: 'yatharth.bansal@columbia.edu',
  github: 'https://github.com/yangsong24',
  linkedin:'https://www.linkedin.com/in/yatharth-bansal/',
  //twitterHandle: '',Driving Impact with Data: Connect with Me, Your Data Scientist!

  socialMedia: [

    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yatharth-bansal/',
    },
   // {
     // name: 'GitHub',
      //url: 'https://github.com/yangsong24',
    //},
    //{
    //  name: 'Codepen',
    //  url: '',
    //},
    //{
      //name: 'Instagram',
      //url: '',
    //},
    //{
      //name: 'Twitter',
      //url: '',
    //},
  ],


  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Featured',
      url: '/#projects',
    },
    {
      name: 'Accomplishments',
      url: '/#extras',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },

    {
       name: 'Covid-19 India',
       url: '/covidindia'
    }
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
