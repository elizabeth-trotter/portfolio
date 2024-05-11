'use client';

import { motion } from "framer-motion";
import { getTextLogoColor } from "@/app/utils/LogoColorSwitch";

export default function SkillsCardComponent(props: SkillsCardProps) {
    let textColorClass = getTextLogoColor(props.title);

    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="flex flex-col items-center justify-center gap-2">
            <props.icon className={`h-8 w-8 ${textColorClass} dark:text-white`} />
            <p className="text-sm font-light text-center">{props.title}</p>
        </motion.div>
    );
}