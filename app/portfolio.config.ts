// app/portfolio.config.ts

export const ACCENT = "#EB150C";

export const COPY = {
    en: {
        heroTitle: "Hi, I'm Piotr.",
        heroSubtitle:
            "I build things that connect engineering, creativity and real impact.",
        heroDesc:
            "This is my portfolio. Soon you’ll find my key projects here – web, data/ML, animation and HPC experiments.",
        seeMore: "Scroll to explore",
        stackTitle: "Tech Stack",
        stackSubtitle:
            "Technologies I enjoy using and want to push further in future projects.",
        projectsTitle: "Projects",
        projectsSubtitle:
            "A space reserved for case studies and interactive demos of my work.",
        roleLabel: "Software Engineer / CS MSc",
        navIntro: "Intro",
        navStack: "Stack",
        navProjects: "Projects",
    },
    pl: {
        heroTitle: "Cześć, jestem Piotr.",
        heroSubtitle:
            "Tworzę rzeczy łączące inżynierię, kreatywność i realny wpływ.",
        heroDesc:
            "To moje portfolio. Wkrótce pojawią się tu projekty – web, data/ML, animacje oraz eksperymenty HPC.",
        seeMore: "Przewiń, żeby zobaczyć więcej",
        stackTitle: "Technologie",
        stackSubtitle:
            "Technologie, z którymi lubię pracować i które chcę rozwijać w kolejnych projektach.",
        projectsTitle: "Projekty",
        projectsSubtitle:
            "Miejsce na case studies i interaktywne demo tego, co robię.",
        roleLabel: "Inżynier oprogramowania / CS MSc",
        navIntro: "Intro",
        navStack: "Stack",
        navProjects: "Projekty",
    },
} as const;

export type Lang = keyof typeof COPY;
export type Theme = "dark" | "light";

export const STACK_GROUPS = [
    {
        label: "Frontend",
        items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
        label: "Backend & Data",
        items: ["Node.js", "Python", "REST/GraphQL", "SQL/NoSQL"],
    },
    {
        label: "Extras",
        items: ["motion (animations)", "Testing", "CI/CD", "HPC / ML"],
    },
] as const;

export const PROJECTS = [
    {
        title: "Upcoming Project #1",
        desc: "Slot for a full case study – from idea to deployment.",
    },
    {
        title: "Upcoming Project #2",
        desc: "Space for a web / ML / animation project with live demo.",
    },
    {
        title: "Upcoming Project #3",
        desc: "Placeholder for something a bit experimental and fun.",
    },
] as const;
