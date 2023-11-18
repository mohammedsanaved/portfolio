import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  meta,
  starbucks,
  tesla,
  shopify,
  jobit,
  tripguide,
  // carrent,
  threejs,
  nikePro,
  worldHotel,
} from "../assets";

export const navLinks = [
  // {
  //   id: "about",
  //   title: "CV",
  // },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "DSA",
    icon: web,
  },
  {
    title: "FrontEnd",
    icon: mobile,
  },
  {
    title: "Backend",
    icon: backend,
  },
  {
    title: "OpenSource",
    icon: creator,
  },
];

const technologies = [
  {
    id: 1,
    name: "HTML 5",
    icon: html,
  },
  {
    id: 2,
    name: "CSS 3",
    icon: css,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
  },
  {
    id: 4,
    name: "TypeScript",
    icon: typescript,
  },
  {
    id: 5,
    name: "React JS",
    icon: reactjs,
  },
  {
    id: 6,
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    id: 7,
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    id: 8,
    name: "Node JS",
    icon: nodejs,
  },
  {
    id: 9,
    name: "MongoDB",
    icon: mongodb,
  },
  {
    id: 10,
    name: "Three JS",
    icon: threejs,
  },
  {
    id: 11,
    name: "git",
    icon: git,
  },
  {
    id: 12,
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "WorldHotel",
    description:
      "Currently Working on This DashBoard App, The User of Hotel Employees can perform all the Tasks",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Styled Components",
        color: "blue-text-gradient",
      },
      {
        name: "charts",
        color: "pink-text-gradient",
      },
      {
        name: "React Query",
        color: "green-text-gradient",
      },
      {
        name: "React Hook Form",
        color: "pink-text-gradient",
      },
      // (React Query, Styled Components, React Hook Form, Supabase, advanced compound component pattern, authentication, charts, dark mode, professional application planning and development)
    ],
    image: worldHotel,
    source_code_link: "https://github.com/mohammedsanaved/worldHotel",
    demo_link: "https://the-wild-oasis.vercel.app/",
  },
  {
    name: "NikeClone",
    description:
      "Enable users to add products to their cart, update quantities .Enable users to pay for the Product .Solely responsible for the development and deployment of the project",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Stripe",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: nikePro,
    source_code_link: "https://github.com/mohammedsanaved/front-nike-stripe",
    demo_link: "https://front-nike-stripe-2bh2.vercel.app/",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  //   demo_link: "#",
  // },
];

export { services, technologies, experiences, testimonials, projects };
// In the '../assets/index.js' file
// export { mobile, backend, creator, web };
