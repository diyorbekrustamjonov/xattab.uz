import { JobType, PostType, ProfileType, ProjectType, SkillProps } from "@/types";
import {
    BiLogoFlutter,
    BiLogoPython,
    BiLogoGoLang,
    BiLogoFirebase,
    BiLogoPostgresql,
    BiLogoGit,
    BiLogoVisualStudio,
    BiLogoFirefox,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiLogoYoutube,
    BiLogoTelegram, BiLogoJavascript, BiLogoNodejs, BiLogoMongodb
} from "react-icons/bi";

import ArchLinuxIcon from '../components/shared/ArchLinuxIcon';
import CSharpIcon from "../components/shared/CSharpIcon";

export const userProfile: ProfileType = {
    id: "p1",
    fullName: "Diyorbek Rustamjonov",
    headline: "Software Engineer",
    profileImage: {
        image: "/images/about/payme-2022.jpg",
        alt: "Diyorbek Rustamjonov Avatar"
    },
    shortBio: "I'm Diyorbek Rustamjonov, Currently broadening my expertise with Go and developing an exciting app",
    email: "drustamjonov0919@gmail.com",
    location: "Tashkent, Uzbekistan",
    resumeURL: "/Diyorbek-Rustamjonov-CV.pdf",
};

export const jobs: JobType[] = [
    {
        id: "j2",
        name: "Payme.uz",
        jobTitle: "Software engineer",
        logo: "/images/jobs/payme-logo.jpeg",
        url: "https://www.payme.uz/",
        description: "At Payme.uz, I'm working on the backend side of the Payme.uz payment system. I'm responsible for developing new features, fixing bugs, and improving the performance of the system. I'm also working on the integration of the Payme.uz payment system with other system",
        startDate: "2022-09-15",
        endDate: ""
    }
];

export const projects: ProjectType[] = [
    {
        id: "1",
        name: "NovaPool",
        slug: "novapool",
        tagline: "Node.js Cluster Pool and Worker Thread Pool implementations",
        projectUrl: "",
        logo: "/images/apps/novapool/1.jpg",
        description: ``,
        googlePlay: "",
        appStore: "",
        webApp: "",
        github: "https://github.com/diyorbekrustamjonov/novapool",
        screenshots: [
            // "/images/apps/novapool/1.jpg",
        ],
    }
];

export const posts: PostType[] = [
    // {
    //         id: "po1",
    //         createdAt: "2022-01-01T00:00:00Z",
    //         title: "My Journey in Tech",
    //         slug: "my-journey-in-tech",
    //         description: "A summary of my journey in the tech industry.",
    //         date: "2022-01-01",
    //         coverImage: {
    //             image: "",
    //             alt: "A scenic road representing a journey"
    //         },
    //         tags: ["tech", "journey", "career"],
    //         author: {
    //             name: "John Doe",
    //             photo: {
    //                 image: "",
    //                 alt: "Portrait of John Doe"
    //             },
    //             twitterUrl: "https://twitter.com/xattab"
    //         },
    //         body: "",
    //         featured: true,
    //         isPublished: true
    //     }
];

export const images = 9;

export const skills: SkillProps[] = [
    { name: 'JavaScript', icon: BiLogoJavascript, color: '#46D1FD' },
    { name: 'Node.js', icon: BiLogoNodejs, color: '#3B77A8' },
    { name: 'Go', icon: BiLogoGoLang, color: '#00ACD7' },
    { name: 'Postgresql', icon: BiLogoPostgresql, color: '#336791' },
    { name: 'Mongodb', icon: BiLogoMongodb, color: '#336791' },
    { name: 'Linux', icon: ArchLinuxIcon, color: '#FFD133' },
    { name: 'Git', icon: BiLogoGit, color: '#F03C2E' },
];

export const socialLinks = [
    {
        id: 1,
        name: "GitHub",
        url: "https://github.com/diyorbekrustamjonov",
        icon: BiLogoGithub,
    },
    {
        id: 3,
        name: "Linkedin",
        url: "https://www.linkedin.com/in/diyorbekrustamjonov",
        icon: BiLogoLinkedinSquare,
    },
    {
        id: 4,
        name: "Instagram",
        url: "https://instagram.com/developerdee",
        icon: BiLogoInstagram,
    },
    {
        id: 5,
        name: "Youtube",
        url: "https://www.youtube.com/@diyorbekrustamjonov",
        icon: BiLogoYoutube,
    },
    {
        id: 5,
        name: "Telegram",
        url: "https://t.me/Rustamjonov_Diyorbek",
        icon: BiLogoTelegram,
    }
];
