import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Manas Ranjan",
  lastName: "Adha",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Fullstack Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Asia/Kolkata'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/codewithmanas",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/manasranjan96/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/codewithmanas",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:manas865873@gmail.com",
  },
  {
    name: "Resume",
    icon: "pdf",
    link: "/resume.pdf",
  }
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hi, There!👋</>,
  subline: (
    // <>
    //   I'm Manas, a Software Engineer at <InlineCode>Lean Platform Technologies</InlineCode>, where I craft intuitive
    //   <br /> user experiences. After hours, I build my own projects.
    // </>
    <>
    I'm Manas, An Adaptable Developer with a Team-Building Superpower! I'm a Software Engineer at <InlineCode>Lean Platform Technologies</InlineCode>, where I craft intuitive user experiences.
    <br></br> Outside of programming, you'll find me in filmmaking and playing football.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Manas is a India-based frontend developer with a passion for transforming complex challenges
        into simple, elegant design solutions. Her work spans digital interfaces, interactive
        experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Lean Platform Technologies",
        timeframe: "Aug 2024 - Jun 2025",
        role: "Software Development Engineer - 1",
        achievements: [
          <>
            Designed and developed secure, production grade full-stack applications using React.js(frontend) and
            Node.js/Express(backend), ensuring scalability and resilience for 10K+ monthly active users.
          </>,
          <>
            Improved frontend performance by using React hooks like useMemo and useCallback, and introduced
            localStorage caching to avoid unnecessary API calls. This reduced average API load by 65% and speed up page
            load times by nearly 30%.
          </>,
          <>
          Enhanced backend response time by 40% by implementing efficient API design with pagination, caching,
          and optimized ORM queries.
          </>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/blog.png",
            alt: "Blog Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Lean Platform Technologies",
        timeframe: "Apr 2023 - Aug 2024",
        role: "Associate Software Engineer", 
        achievements: [
          <>
            Developed a Greeting platform for personalized greeting and video messaging, ideal for creating memorable event moments. It leverages Supabase for scalable data management, Google Authentication for secure logins, a card editor for easy customization, and unique link generation for seamless sharing of user-created wishes.
          </>,
          <>
            Enhanced platform performance by implementing state management techniques, and modern asset formats
            such as WebP and AVIF, effectively reducing loading time by 8% and increasing user satisfaction.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/greetsu/greetsu1.png",
            alt: "Greetsu Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Indian Institute of Information Technology, Allahabad",
        description: <>Studied Information Technology.</>,
      },
      {
        name: "Prayas Junior College, Sundargarh, Odisha",  
        description: <>Studied Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "React",
        description: <>Able to create interactive UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-02.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
          // {
          //   src: "/images/projects/project-01/cover-03.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Tailwindcss + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: "/images/projects/project-01/cover-04.jpg",
          //   alt: "Project image",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      { title: "JavaScript", description: "", images: [] },
      { title: "TailwindCSS", description: "", images: [] },
      { title: "Firebase", description: "", images: [] },
      { title: "Supabase", description: "", images: [] },
      { title: "SQL", description: "", images: [] },
      { title: "Nodejs", description: "", images: [] },
      { title: "Redux", description: "", images: [] },
      { title: "Zustand", description: "", images: [] },
      { title: "React Query", description: "", images: [] },
      { title: "REST API", description: "", images: [] },
      { title: "AWS", description: "", images: [] },
      { title: "Linux", description: "", images: [] },
      { title: "Docker", description: "", images: [] },
      { title: "Git/GitHub", description: "", images: [] },
      { title: "PostgreSQL", description: "", images: [] },
      { title: "MongoDB", description: "", images: [] },
      { title: "Java", description: "", images: [] },
      { title: "SpringBoot", description: "", images: [] },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
