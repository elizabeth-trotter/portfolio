'use client';

import { motion } from "framer-motion";

export default function SkillsCardComponent(props: SkillsCardProps) {
    let textColorClass = "";

    switch (props.title) {
        case "JavaScript":
            textColorClass = "text-javascriptYellow";
            break;
        case "TypeScript":
            textColorClass = "text-typescriptBlue";
            break;
        case "C#":
            textColorClass = "text-csharpPurple";
            break;
        case "HTML":
            textColorClass = "text-htmlRed";
            break;
        case "CSS":
            textColorClass = "text-cssBlue";
            break;
        case "SQL":
            textColorClass = "text-sqlBlack";
            break;
        case ".NET":
            textColorClass = "text-dotnetBlue";
            break;
        case "React":
            textColorClass = "text-reactBlue";
            break;
        case "Next.js":
            textColorClass = "text-nextjsPurple";
            break;
        case "Angular":
            textColorClass = "text-angularRed";
            break;
        case "Bootstrap":
            textColorClass = "text-bootstrapIndigo";
            break;
        case "Tailwind CSS":
            textColorClass = "text-tailwindBlack";
            break;
        case "Azure":
            textColorClass = "text-azureBlue";
            break;
        case "Visual Studio Code":
            textColorClass = "text-vscodeBlue";
            break;
        case "Figma":
            textColorClass = "text-figmaPink";
            break;
        case "Postman":
            textColorClass = "text-postmanOrange";
            break;
        case "Jira":
            textColorClass = "text-jiraGreen";
            break;
        case "Git":
            textColorClass = "text-gitBlack";
            break;
        default:
            textColorClass = "text-black";
            break;
    }

    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="flex flex-col items-center justify-center gap-2">
            <props.icon className={`h-8 w-8 ${textColorClass} dark:text-white`} />
            <p className="text-sm font-light text-center">{props.title}</p>
        </motion.div>
    );
}