export interface Interest {
    title: string;
    icon: IconProp;
}

export interface Skill {
    title: string;
    level: number;
}

export interface SkillGroup {
    title: string;
    imagePath: string;
    skills: Skill[];
}

export interface Experience {
    startYear: string;
    endYear: string;
    title: string;
    description: string[];
}

export interface Project {
    title: string;
    description: string;
    githubLink: string;
    imagePath: string;
}