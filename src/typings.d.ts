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
    image?: HTMLImageElement;
    skills: Skill[];
}