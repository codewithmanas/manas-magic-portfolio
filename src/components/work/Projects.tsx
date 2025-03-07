// "use client"

import { getPosts } from "@/app/utils/utils";
import { Column } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
}

export function Projects({ range }: ProjectsProps) {
  // let allProjects = getPosts(["src", "app", "work", "projects"]);

 let  allProjects = [
      {
        metadata: {
        title: "The Product Platform - Edtech for PM",
        publishedAt: "2024-04-01",
        summary: "The Product Platform is a learning hub for enhancing product management skills. Led a team of 3 developers, crafted multiple modules, made the app end to end and processes to launch flagship features like Porfolio, Interview questions, Loyalty tiers, Concept Cards, Live Project and Case study portal.",
        image: "",
        images: [
        '/images/projects/tpp/tpp1.png',
        '/images/projects/tpp/tpp2.png',
        '/images/projects/tpp/tpp3.png',
        '/images/projects/tpp/tpp4.png',
          ],
        tag: ["react", "nextjs", "firebase", "tailwindcss", "figma", "product-management"],
        team: [{
          avatar: "",
          name: "Siddharth", 
        }],
        link: "https://theproductplatform.in/"
        },
        slug: "the-product-platform-edtech-for-pm",
        content: ""
      },
      {
        metadata: {
        title: "KhamBee - A Website Builder",
        publishedAt: "2024-08-10",
        summary: "KhamBee is a SaaS platform designed for creators to establish and manage their online presence. It offers tools to build personal websites, showcase work, and engage with audiences. Developed the core features, including user authentication, content management, payment gateways and firewall for paid and non paid users.",
        image: "",
        images: [
        '/images/projects/khambee/khambee1.png',
        '/images/projects/khambee/khambee2.png',
        '/images/projects/khambee/khambee3.png',
        '/images/projects/khambee/khambee4.png',
          ],
        tag: ["react", "nextjs", "firebase", "tailwindcss", "figma", "product-management"],
        team: [{
          avatar: "",
          name: "Siddharth", 
        }],
        link: "https://khambee.com/"
        },
        slug: "khambee-a-website-builder",
        content: ""
      },
      {
        metadata: {
        title: "GreetsU - Video Messaging and Greetings Platform",
        publishedAt: "2024-06-08",
        summary: "GreetsU is a video messaging platform that allows users to send personalized video messages to their loved ones. Developed the core features, including user authentication, content management, payment gateways and firewall for paid and non paid users.",
        image: "",
        images: [
        '/images/projects/greetsu/greetsu1.png',
        '/images/projects/greetsu/greetsu2.png',
        '/images/projects/greetsu/greetsu3.png',
        '/images/projects/greetsu/greetsu4.png',
          ],
        tag: ["react", "nextjs", "firebase", "tailwindcss", "figma", "product-management"],
        team: [{
          avatar: "",
          name: "Siddharth", 
        }],
        link: "https://greetsu.com/"
        },
        slug: "greetsu-video-messaging-and-greetings-platform",
        content: ""
      },
      {
        metadata: {
        title: "QLearn - A Learning Management System",
        publishedAt: "2024-02-01",
        summary: "QLearn is a learning management system that offers online courses to students. Developed the core features, including user authentication, content management, payment gateways and firewall for paid and non paid users.",
        image: "",
        images: [
        '/images/projects/lms/lms1.png',
        '/images/projects/lms/lms2.png',
        '/images/projects/lms/lms3.png',
        ],
        tag: ["react", "nextjs", "firebase", "tailwindcss", "figma", "product-management"],
        team: [{
          avatar: "",
          name: "Siddharth", 
        }],
        link: "https://qlearn-lms-platform.vercel.app/"
        },
        slug: "qlearn-a-learning-management-system",
        content: ""
      }
  ]



  // console.log("Projects", allProjects);

  const sortedProjects = allProjects.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`work/${post.slug}`}
          images={post.metadata.images}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.metadata.link || ""}
        />
      ))}
    </Column>
  );
}
