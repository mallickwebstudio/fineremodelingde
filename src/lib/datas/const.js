
// ==============================================
// Common

// import SparkleText from "@/components/other/sparkle-text";
import { BadgeDollarSign, ChevronsUp, MonitorSmartphone, PencilRuler, ScanSearch, Sparkles, User, Wrench, HandCoins, GaugeCircle, BugOff, FilePlus, ArrowUpAZ, Layers2, Badge, Fullscreen, CircleSlash, RefreshCw, AlignVerticalSpaceAround, File, ImageIcon, } from "lucide-react";
import Link from "next/link";

// ==============================================
export const navigationLinks = [
  {
    title: "Home",
    href: "/",
    varient: "ghost"
  },
  {
    title: "About",
    href: "/about",
    varient: "ghost"
  },
  {
    title: "Services",
    href: "/services",
    varient: "ghost"
  },
  {
    title: "Pricing",
    href: "/pricing",
    varient: "ghost"
  },
  {
    title: "Contact Us",
    href: "/contact-us",
    varient: ""
  }
]

export const projectsData = [
  // {
  //   title: "Nova Cart",
  //   description: "Discover sustainable style and connect with us for exclusive offers and updates.",
  //   link: "https://wds-novacart.vercel.app",
  //   concept: ["NextJS", "Sanity.io", "stripe-payment", "ShadcnUI"],
  //   imageUrl: "/images/projects/novacart.png",
  // },
  // {
  //   title: "Regal Estate",
  //   description: "Experience the epitome of luxury with our meticulously crafted estate website, offering seamless navigation and stunning visuals.",
  //   link: "https://wds-regalestate.vercel.app",
  //   concept: ["NextJS", "Sanity.io", "Headless-CMS", "ShadcnUI"],
  //   imageUrl: "/images/projects/regalestate.png",
  // },
  {
    title: "BugBuster",
    description: "Say goodbye to pesky pests with our comprehensive pest control service website, designed to ensure a pest-free environment for your home or business.",
    link: "https://wds-bugbuster.vercel.app",
    concept: ["NextJS", "ShadcnUI"],
    imageUrl: "/images/projects/bugbuster.png",
  },
  {
    title: "Foodie",
    description: "Indulge your palate with a culinary journey through our restaurant website, showcasing tantalizing dishes and a delightful dining experience.",
    link: "https://wds-foodie.vercel.app",
    concept: ["NextJS"],
    imageUrl: "/images/projects/foodie.jpg",
  },
  {
    title: "Zenflex",
    description: "Elevate your fitness journey with our dynamic gym website, empowering you with cutting-edge resources and personalized training options.",
    link: "https://wds-zenflex.vercel.app",
    concept: ["NextJS", "API"],
    imageUrl: "/images/projects/zenflex.jpg",
  },
  {
    title: "Cofeco",
    description: "Immerse yourself in the aroma of freshly brewed coffee with our captivating coffee shop website, promising a cozy retreat for coffee enthusiasts.",
    link: "https://wds-cofeco.vercel.app",
    concept: ["NextJS", "Shadcn-UI"],
    imageUrl: "/images/projects/cofeco.jpg",
  },
  {
    title: "Blog",
    description: "Dive into a world of captivating content with our engaging blog website, offering a diverse array of topics to spark your curiosity.",
    link: "https://wds-blog.netlify.app",
    concept: ["ReactJS", "Mock API", "API handling"],
    imageUrl: "/images/projects/blog.png",
  },
  {
    title: "Freeapi",
    description: "Explore a treasure trove of humor and wisdom with our versatile website, delivering random jokes, advice, quotes, and much more at your fingertips.",
    link: "https://wds-freeapi.netlify.app",
    concept: ["ReactJS", "Content APIs"],
    imageUrl: "/images/projects/freeapi.png",
  },
  {
    title: "TaskManager",
    description: "Streamline your productivity with our intuitive task manager app, revolutionizing the way you organize and prioritize your daily tasks.",
    link: "https://wds-taskmanager.netlify.app",
    concept: ["Vanilla JS", "Local Storage", "JS OOP"],
    imageUrl: "/images/projects/taskmanager.png",
  },
  {
    title: "AtendEase",
    description: "Seamlessly track your attended lectures and stay organized with our user-friendly platform, simplifying your educational journey.",
    link: "https://atendease.netlify.app",
    concept: ["ReactJS", "Local Storage"],
    imageUrl: "/images/projects/atendease.png",
  },
];

export const budgetData = [
  {
    id: "bd1",
    title: "Less Than $100",
    value: "lessthan $100",
  },
  {
    id: "bd2",
    title: "Standard Website",
    value: "Standard Website",
  },
  {
    id: "bd3",
    title: "Advanced Website",
    value: "Advanced Website",
  },
]
// ==============================================
// Home Page
// ==============================================
// export const services = [
//   {
//     slug: "website-design-and-development",
//     icon: <PencilRuler className="size-8 group-hover:text-primary" />,
//     heading: <>Website <SparkleText text="Desing" /> & <SparkleText text="Development" /></>,
//     title: "Website Design & Development",
//     pageTitle: <>Websites <SparkleText text="built"/> & <SparkleText text="designed" /> for <SparkleText text="success"/></>,
//     description: "Jumpstart and establish your brand with your first website or get your existing website redesigned/updated.",
//     href: "/services/website-design-and-development",
//     benefits: [
//       {
//         icon: <User className="size-8 group-hover:text-primary" />,
//         title: "User-Experience Focused",
//         description: "We design websites that prioritize user experience, ensuring easy navigation to help achieve your business goals.",
//       },
//       {
//         icon: <BadgeDollarSign className="size-8 group-hover:text-primary" />,
//         title: "Conversion Optimized",
//         description: "Our organized CTAs encourage visitors to convert into customers, making your website a powerful business tool.",
//       },
//       {
//         icon: <MonitorSmartphone className="size-8 group-hover:text-primary" />,
//         title: "Mobile Optimized",
//         description: "With over 58% of users viewing websites on their phones, we ensure every page is fully responsive as a standard.",
//       },
//       {
//         icon: <ScanSearch className="size-8 group-hover:text-primary" />,
//         title: "Search Engine Optimized",
//         description: "Our sites follow best SEO practices, including metadata, proper markup, sitemaps, image names, accessibility, and more to enhance your ranking.",
//       },
//       {
//         icon: <Sparkles className="size-8 group-hover:text-primary" />,
//         title: "Beautifully Designed",
//         description: "Your website will be uniquely designed to reflect your brand's style, including custom fonts, icons, colors, and more.",
//       },
//       {
//         icon: <GaugeCircle className="size-8 group-hover:text-primary" />,
//         title: "Speed Optimized",
//         description: "Developed with performance in mind, your site will be optimized for speed, ensuring no loss of customers due to slow loading times.",
//       },
//       {
//         icon: <HandCoins className="size-8 group-hover:text-primary" />,
//         title: "One-Stop-Shop Support",
//         description: "We offer ongoing support, just an email away for any website assistance you need. Quick changes are often free, and we provide affordable rates for larger updates.",
//       },
//     ]
//   },
//   {
//     slug: "website-update",
//     icon: <Wrench className="size-8 group-hover:text-primary" />,
//     heading: <>Website <SparkleText text="Updates" /></>,
//     title: "Website Update",
//     pageTitle: <><SparkleText text="Feeling aged?"/> time to <SparkleText text="upgrade"/></>,
//     description: "Anything from Website Updates, Bug Fixes, Content changes, or additions of any kind.",
//     href: "/services/website-update",
//     benefits: [
//       {
//         icon: <Wrench className="size-8 group-hover:text-primary" />,
//         title: "Re-Designed Overhauls",
//         description: "Transform an outdated website with a fresh, modern redesign.",
//       },
//       {
//         icon: <BugOff className="size-8 group-hover:text-primary" />,
//         title: "Bug Fixes",
//         description: "Resolve any bugs or issues your website may be experiencing.",
//       },
//       {
//         icon: <FilePlus className="size-8 group-hover:text-primary" />,
//         title: "Add New Pages & Posts",
//         description: "Add new posts or custom-designed, responsive pages to your website.",
//       },
//       {
//         icon: <ArrowUpAZ className="size-8 group-hover:text-primary" />,
//         title: "Text & Content Updates",
//         description: "Keep your website current with updated text and images.",
//       },
//       {
//         icon: <Layers2 className="size-8 group-hover:text-primary" />,
//         title: "Maintenance",
//         description: "Perform essential maintenance, including plugin updates, backups, and bug fixes.",
//       },
//       {
//         icon: <Badge className="size-8 group-hover:text-primary" />,
//         title: "Malware Cleanup",
//         description: "Remove malware from your site, eliminating unwanted redirects, ads, and spam pages.",
//       },
//     ]
//   },
//   {
//     slug: "speed-optimization",
//     icon: <ChevronsUp className="size-8 group-hover:text-primary" />,
//     heading: <>Speed <SparkleText text="Optimization" /></>,
//     title: "Speed Optimization",
//     pageTitle: <>Let <SparkleText text="Google Rank"/> You</>,
//     description: "Get your website loading faster. A slow site can easily loose visitors and customers.",
//     href: "/services/speed-optimization",
//     benefits: [
//       {
//         icon: <ImageIcon className="size-8 group-hover:text-primary" />,
//         title: "Media Compression",
//         description: "Compress media files to save kilobytes and improve load times on your website.",
//       },
//       {
//         icon: <Fullscreen className="size-8 group-hover:text-primary" />,
//         title: "Image Resizing",
//         description: "Optimize image sizes to maintain necessary quality without blurriness, reducing file sizes.",
//       },
//       {
//         icon: <CircleSlash className="size-8 group-hover:text-primary" />,
//         title: "Disable Unnecessary Assets",
//         description: "Remove unnecessary files from your site to reduce load times and enhance speed.",
//       },
//       {
//         icon: <RefreshCw className="size-8 group-hover:text-primary" />,
//         title: "Loading JS Asynchronously",
//         description: "Load JavaScript files simultaneously with other files to avoid delays in loading.",
//       },
//       {
//         icon: <AlignVerticalSpaceAround className="size-8 group-hover:text-primary" />,
//         title: "Minifying CSS & JS",
//         description: "Compress CSS and JavaScript files to reduce their size and improve load speeds.",
//       },
//       {
//         icon: <File className="size-8 group-hover:text-primary" />,
//         title: "Simplifying Pages",
//         description: "Eliminate unnecessary page elements to reduce file weight and speed up your site.",
//       },
//     ]
//   },
// ];

export const faqs = [
  {
    id: "faq1",
    question: "When can we get our project scheduled?",
    answerJSX: (
      <p>
        Please expect our project schedule to already be booked for weeks to a
        few months. Don’t worry; it generally takes some time to get to that
        point. Remember, we need to review &amp; plan your project first.
      </p>
    ),
  },
  {
    id: "faq2",
    question: "Can I select my own materials?",
    answerJSX: (
      <p>
        Yes, we can also assist in picking materials. Come to us no matter the
        stage of planning, and we will be glad to assist. We can get you into a
        design session where we can help you get the planning process going.
        That means spending some time to get an idea of what you want. We’ll
        then be able to gather the information we need to create a project plan
        to start.
      </p>
    ),
  },
  {
    id: "faq3",
    question: "Can you assist me in the entire process to get my project to construction?",
    answerJSX: (
      <p>
        The process is simple: get a scope of work, get any appropriate drawings
        to convey a rendering of the final product, get under contract, pick the
        finish materials to be used on the project, and let us get to building
        your dreams.
      </p>
    ),
  },
  {
    id: "faq4",
    question: "What are your hours of operation?",
    answerJSX: (
      <p>
        Monday through Friday 8am-5pm EST. We operate from our job sites and are
        occasionally in the office. We can respond to phone calls and emails
        regularly. We observe 5 federal holidays throughout the year.
      </p>
    ),
  },
  {
    id: "faq5",
    question: "Who is going to be in my home?",
    answerJSX: (
      <p>
        We have a small staff of builders/remodelers and relationships with
        other contractors in our area. We all work together to provide your
        services. Ultimately, we are the responsible party and maintain
        communication, project management, and job site organization.
      </p>
    ),
  },
  {
    id: "faq6",
    question: "How much is the deposit on a project?",
    answerJSX: (
      <p>
        We install a 50% deposit + 100% of the material allowances, 30%
        milestone, 15% milestone, and 5% significant completion payment
        schedule. Any change orders during the project will be due as they are
        completed. We will set milestones of job completion for payments.
      </p>
    ),
  },
  {
    id: "faq7",
    question:
      "I work from home, will I be able to stay home during the day to work? Will I be able to occupy the home during construction?",
    answerJSX: (
      <p>
        Absolutely. Remember that construction can be a loud, dusty, and long
        process to live through. We will discuss whether or not the
        home/adjacent rooms should be occupied. We operate regularly in occupied
        homes and take the appropriate precautions like protecting finished
        surfaces, setting up dust barriers, and providing different forms of air
        extraction.
      </p>
    ),
  },
  {
    id: "faq8",
    question: "How much will things cost?",
    answerJSX: (
      <p>
        We price projects individually. In our experience, we've seen a few
        hundred dollars spent to upgrade a bathroom to well over one hundred
        thousand dollars spent on a bathroom upgrade. We are happy to discuss
        and ultimately provide the amount of the investment you'll need to make
        so we can build what you dream of.
      </p>
    ),
  },
];


export const pricing = [
  {
    id: "standardPricing",
    title: "Essential",
    description: "Beautifully design website with customization and basic features.",
    benefits: [
      {
        id: "s1",
        feature: "Beautifully Designed Website",
      },
      {
        id: "s2",
        feature: "Static Website",
      },
      {
        id: "s3",
        feature: "Great User Experience",
      },
      {
        id: "s4",
        feature: "All Device Accessible",
      },
      {
        id: "s5",
        feature: "SEO-Ready",
      },
      {
        id: "s6",
        feature: "Basic Speed Optimization",
      },
      {
        id: "s7",
        feature: "Upto 4 pages + essential pages",
      },
    ],
    additionalFeature: "+$100 / Additional Website Page",
    price: 1000,
    offer: true,
    offerName: "End-of-Year Offer",
    offerPrice: 250,
  },
  {
    id: "advancePricing",
    title: "Premium",
    description: "Beautifully design website with customization (copywriting Included).",
    benefits: [
      {
        id: "a1",
        feature: "Every thing in Essential +",
      },
      {
        id: "a2",
        feature: "Website Copywriting",
      },
      {
        id: "a4",
        feature: "Easy to Edit & Manage Website",
      },
      {
        id: "a6",
        feature: "SEO-Optimized",
      },
      {
        id: "a7",
        feature: "Conversion Optimization",
      },
      {
        id: "a8",
        feature: "Upto 6 pages + essential pages",
      },
    ],
    additionalFeature: "+$100 / Additional Website Page",
    price: 2000,
    offer: true,
    offerName: "End-of-Year Offer",
    offerPrice: 500,
  },
  {
    id: "ecommercePricing",
    title: "E-Commerce",
    description: "A beautifull website Designed to make you sales online.",
    benefits: [
      {
        id: "e1",
        feature: "Every thing in Essential +",
      },
      {
        id: "e2",
        feature: "Website Copywriting",
      },
      {
        id: "e4",
        feature: "Easy to Edit & Manage Website",
      },
      {
        id: "e6",
        feature: "SEO-Optimized",
      },
      {
        id: "e7",
        feature: "Conversion Optimization",
      },
      {
        id: "e8",
        feature: "Current Data Uploaded",
      },
      {
        id: "e9",
        feature: "Upto 6 pages + essential pages",
      },
    ],
    additionalFeature: "+$100 / Additional Website Page",
    price: 8000,
    offer: true,
    offerName: "End-of-Year Offer",
    offerPrice: 2000,
  }
]

// ==============================================
// About Page
// ==============================================
export const porjectPhases = [
  {
    phase: 1,
    title: "Ananylsis",
    description: "Understanding the project's objectives, target audience, and purpose to lay the foundation for strategic decision-making.",
    includes: [
      "Website Purpose",
      "Website Goals",
      "Target Audience"
    ]
  },
  {
    phase: 2,
    title: "Planning",
    description: "Creating a blueprint for the project including sitemap, structure, and technology stack to ensure smooth execution.",
    includes: [
      "Sitemap",
      "Website Structure",
      "Technology Used"
    ]
  },
  {
    phase: 3,
    title: "Content",
    description: "Developing compelling content, including copywriting and multimedia assets, while optimizing for search engines.",
    includes: [
      "Copywritting",
      "Photos & Videos",
      "Search Enging Optimisation (SEO)"
    ]
  },
  {
    phase: 4,
    title: "Design",
    description: "Crafting wireframes, visual aesthetics, and user experience elements to align with the project's goals and user needs.",
    includes: [
      "Wireframe Models",
      "Visual Style",
      "Usability, UI, UX"
    ]
  },
  {
    phase: 5,
    title: "Development",
    description: "Building the website using modern technologies like Next.js and Sanity, focusing on functionality and responsiveness.",
    includes: [
      "HTML, CSS, JS - Coding",
      "Database",
      "Responsive Design"
    ]
  },
  {
    phase: 6,
    title: "Testing",
    description: "Conducting rigorous tests to ensure technical functionality, browser compatibility, and user satisfaction.",
    includes: [
      "Technical Test",
      "Browser Compatibility",
      "Does it fulfill its purpose"
    ]
  },
  {
    phase: 7,
    title: "Deployment",
    description: "Implementing monitoring systems, addressing bugs, and establishing maintenance protocols for a successful launch and ongoing operation.",
    includes: [
      "Monitoring",
      "Bug Fixes",
      "Maintainence"
    ]
  },
]

// ==============================================
// Portfolio Page
// ==============================================
