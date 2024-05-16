interface SkillsCardProps {
    icon: React.ElementType;
    title: string;
}

interface ProjectCardProps {
    index: number;
    icons: React.ElementType[];
    iconNames: string[];
    title: string;
    description: string
    image: string
    imageMobile : string
    github: string
    site: string
}