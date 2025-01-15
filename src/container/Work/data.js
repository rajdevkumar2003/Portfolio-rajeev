//import { images } from "../../constants";

import {
  ecommerce,
  news,
  gym,
  youtoob,
  calculator,
  file_downloader,
  job_detail,
  paragraph,
  stripe,
  QNA,
  todolist,
  tours,
  netflix,
  flipkart,
  photography,
  zedge,
  shoeCard,
  Expense_tracker,
  Threejs,
  Arpics,
  Threads,
  epicCaption,
  airbnb,
  blog,
  devflow,
  guruji,
  sundown
} from "../../images";

const works = [
  {
    name: "GURUJI",
    title: "AI Interview Mocker",
    tags: "API Voice assistant NextJs",
    description: "Developed GURUJI, a web app providing mock AI interviews with real-time feedback, utilizing Next.js, PostgreSQL, Gemini AI, ClerkAuth, ShadcnUI, and Speech to Text.",
    img: guruji,
    gitLink:'https://github.com/rajdevkumar2003/guruji-interview-mocker',
    webLink:'https://guruji-interview-mocker.vercel.app/'
  },
  {
    name: "DevFlow",
    title: "Stackoverflow Clone",
    tags: "API SocialMedia NextJs",
    description: "Developed Fullstack stackoverflow clone utilizing Nextjs ,typescript , Tailwind,mongodb & Nodejs , chatGPT api, clerk! includes AI answer generation as well ",
    img: devflow,
    gitLink:'https://github.com/rajdevkumar2003/stack-overflow-mainproject-AI-nextjs14',
    webLink:'https://stack-overflow-mainproject-ai-nextjs14.vercel.app/'
  },
  
  {
    name: "EpicCaptions",
    title: "Video Transcriber",
    tags: "NextJs",
    description: "A modern website used to apply caption on any video! made with nextjs, AWS transcriber & S3 bucket",
    img: epicCaption,
    gitLink:'https://github.com/rajdevkumar2003/video-transcriber-nextjs-aws',
    webLink:'https://video-transcriber-next-aws.vercel.app/'
  },
  {
    name: "Threads",
    title: "Social Media(Nextjs)",
    tags: "SocialMedia NextJs",
    description: "A fully responsive modern Threads clone made with Next-js,typescript,Tailwind,mongodb & Nodejs!",
    img: Threads,
    gitLink:'https://github.com/rajdevkumar2003/threads-clone-full-stack',
    webLink:'https://threads-clone-rajeev.vercel.app/'
  },
  {
    name: "EarBooth",
    title: "Ecommerce website (Next-js)",
    tags: "Ecommerce NextJs",
    description: "A fully responsive modern ecommerce website made with Next-js and payment functionality with Stripe!",
    img: ecommerce,
    gitLink:'https://github.com/rajdevkumar2003/ecommerce-earbooth-react-sanity',
    webLink:'https://ecommerce-sanity-stripe.vercel.app/'
  },
  {
    name: "Expanse Tracker",
    title: "Data autofill using Speechly",
    tags: "Voice assistant",
    description: "A fully responsive modern Expanse Tracker website made with React-js and VOICE functionality with Speechly!",
    img: Expense_tracker,
    gitLink:'https://github.com/rajdevkumar2003/expense-tracker-speechly',
    webLink:'https://expense-tracker-speechly-rajeev.netlify.app'
  },
  {
    name: "Airbnb-clone",
    title: "Hotel booking app",
    tags: "SocialMedia MERN",
    description: "A fully responsive modern Airbnb full-stack clone made with Reactjs,express,Tailwind,mongodb & Nodejs!",
    img: airbnb,
    gitLink:'https://github.com/rajdevkumar2003/hotel-booking-app-fullstack-MERN',
    webLink:'https://gemoo.com/tools/upload-video/share/599598908459880448?codeId=MlQkV3Oxr8X3b&card=599598902126481408&origin=videolinkgenerator '
  },
  {
    name: "T-Layerz",
    title: "Tshirt Customizer(Three.js & AI)",
    tags: "ThreeJS NextJs",
    description: "A fully responsive modern ecommerce website made with Next-js and payment functionality with Stripe!",
    img: Threejs,
    gitLink:'https://github.com/rajdevkumar2003/Threejs-ai-Tapp',
    webLink:'https://t-customizer-rajeev.netlify.app'
  },
  {
    name: "Arpics",
    title: "Social Media(react)",
    tags: "SocialMedia",
    description: "A fully responsive modern social media website made with React-js and Sanityio!",
    img: Arpics,
    gitLink:'https://github.com/rajdevkumar2003/arpics-react-sanity',
    webLink:'https://arpics-rajeev.netlify.app/'
  },
  {
    name: "BlogAPP",
    title: "Blog APP",
    tags: "MERN",
    description: "A fully responsive modern Blog App made with Reactjs,express,Tailwind,mongodb & Nodejs! We can edit &upload post, signin & signup",
    img: blog,
    gitLink:'https://github.com/rajdevkumar2003/MERN-Blog-app',
    webLink:'https://gemoo.com/tools/upload-video/share/599598908459880448?codeId=MlQkV3Oxr8X3b&card=599598902126481408&origin=videolinkgenerator '
  },
  {
    name: "News Reader",
    title: "News with AI VOICE",
    tags: "Voice assistant API",
    description: "A fully responsive modern News website made with React-js and VOICE functionality with Alan AI!",
    img: news,
    gitLink:'https://github.com/rajdevkumar2003/News-webApp-alan-AI',
    webLink:'https://news-by-rajeev-alan-ai.netlify.app'
  },
  {
    name: "StayFIT",
    title: "Gym exercises",
    tags: "API",
    description: "A fully responsive modern Gym exercise website made with React-js and API fetching functionality with Rapid API!",
    img: gym,
    gitLink:'',
    webLink:''
  },
  {
    name: "Sundown",
    title: "Sundown clone",
    tags: "HTML & CSS",
    description: "A fully responsive modern ANIMATED Sundown CLONE made with HTML , CSS , GSAP & JAVASCRIPT!",
    img: sundown,
    gitLink:'https://github.com/rajdevkumar2003/sundown-frontend-clone-javascript-practice-',
    webLink:'https://sundown-frontend-clone-javascript-practice.vercel.app/'
  },
  {
    name: "Youtoob",
    title: "Youtube clone",
    tags: "API",
    description: "A fully responsive modern YOUTUBE CLONE website made with React-js,MUI and API fetching functionality with Rapid API !",
    img: youtoob,
    gitLink:'https://github.com/rajdevkumar2003/youtoob-react',
    webLink:'https://youtoob-react-rajeev.netlify.app'
  },
  {
    name: "Grocery buds",
    title: "Todolist",
    tags: "React JS practices",
    description: "A list maker with add, delete ,clear & edit functionalities",
    img: todolist,
    gitLink:'https://github.com/rajdevkumar2003/Grocery-BUD',
    webLink:'https://grocery-buds-rajeev.netlify.app'
  },
  {
    name: "Calculator",
    title: "A basic calculator",
    tags: "HTML & CSS",
    description: "A beautifully designed calculator with html css javascript.",
    img: calculator,
    gitLink:'https://github.com/rajdevkumar2003/calculator_react',
    webLink:'https://calculator-rajeev.netlify.app'
  },
  {
    name: "TextToFile",
    title: "Text to file convertor",
    tags: "HTML & CSS",
    description: "Text to file convertor with more than 5 file type options made with html css javascript.",
    img: file_downloader,
    gitLink:'https://github.com/rajdevkumar2003/Basic-HTML-CSS-projects/tree/main/file%20downloader',
    webLink:'https://text-to-file-rajeev.netlify.app'
  },
  {
    name: "Job Wala",
    title: "Job details",
    tags: "React JS practices",
    description: "Job overviews",
    img: job_detail,
    gitLink:'https://github.com/rajdevkumar2003/React-beginner-projects/tree/main/tabs%20job',
    webLink:'https://jobs-wala-rajeev.netlify.app'
  },

  {
    name: "Paragraphs",
    title: "Pargraph generator",
    tags: "React JS practices",
    description: "A random paragraph generator",
    img: paragraph,
    gitLink:'https://github.com/rajdevkumar2003/React-beginner-projects/tree/main/paragraph%20generator',
    webLink:'https://paragraph-generator-rajeev.netlify.app'
  },
  {
    name: "Stripe",
    title: "Stripe HomePAGE",
    tags: "React JS practices",
    description: "Stripe homepage responsive clone ",
    img: stripe,
    gitLink:'https://github.com/rajdevkumar2003/React-beginner-projects/tree/main/stripe%20homepage',
    webLink:'https://stripe-clone-rajeev.netlify.app'
  },
  {
    name: "QNA",
    title: "Questions &  Answers",
    tags: "React JS practices",
    description: "Questions with hidden answers",
    img: QNA,
    gitLink:'https://github.com/rajdevkumar2003/React-beginner-projects/tree/main/QNA',
    webLink:'https://qna-react-rajeev.netlify.app'
  },
 
  {
    name: "Tours",
    title: "Tours and review",
    tags: "React JS practices",
    description: "Tours and reviews",
    img: tours,
    gitLink:'https://github.com/rajdevkumar2003/React-beginner-projects/tree/main/tour',
    webLink:'https://tours-rajeev.netlify.app'
  },
  {
    name: "Netflix",
    title: "unresponsive",
    tags: "HTML & CSS",
    description: "A netflix clone",
    img: netflix,
    gitLink:'https://github.com/rajdevkumar2003/Basic-HTML-CSS-projects/tree/main/netflix',
    webLink:'https://netflix-ui-clone-rajeev.netlify.app'
  },
  {
    name: "Flipkart",
    title: "unresponsive",
    tags: "HTML & CSS",
    description: "A flipkart clone",
    img: flipkart,
    gitLink:'https://github.com/rajdevkumar2003/Basic-HTML-CSS-projects/tree/main/flipkart',
    webLink:'https://flipkart-ui-clone-rajeev.netlify.app'
  },
  {
    name: "Zedge",
    title: "unresponsive",
    tags: "HTML & CSS",
    description: "A Zedge clone",
    img: zedge,
    gitLink:'https://github.com/rajdevkumar2003/Basic-HTML-CSS-projects/tree/main/zedge',
    webLink:'https://zedge-ui-clone-rajeev.netlify.app'
  },
  {
    name: "Photography",
    title: "unresponsive portfolio",
    tags: "HTML & CSS",
    description: "A photographer portfolio",
    img: photography,
    gitLink:'https://github.com/rajdevkumar2003/Basic-HTML-CSS-projects/tree/main/photography',
    webLink:'https://photography-portfolio-rajeev.netlify.app'
  },
  {
    name: "Shoe Card",
    title: "Animation unresponsive",
    tags: "HTML & CSS",
    description: "A beautiful shoe card with animations",
    img: shoeCard,
    gitLink:'https://github.com/rajdevkumar2003/Basic-HTML-CSS-projects/tree/main/nike%20card',
    webLink:'https://nike-card-animation-rajeev.netlify.app'
  },
  
];

export default works;
