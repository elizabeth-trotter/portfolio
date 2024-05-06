'use client';

export default function SkillsCardComponent(props: SkillsCardProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <props.icon className={`h-10 w-10 text-${props.color} dark:text-white`} />
            <p className="text-sm font-light">{props.language}</p>
        </div>
    );
}