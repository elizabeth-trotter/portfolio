'use client';

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
        default:
            textColorClass = "text-black";
            break;
    }

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <props.icon className={`h-10 w-10 ${textColorClass} dark:text-white`} />
            <p className="text-sm font-light">{props.title}</p>
        </div>
    );
}