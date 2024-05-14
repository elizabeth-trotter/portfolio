'use client';

import { motion } from "framer-motion";
import { getTextLogoColor } from "@/app/utils/LogoColorSwitch";

export default function SkillsCardComponent(props: SkillsCardProps) {
    let textColorClass = getTextLogoColor(props.title);

    return (
        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} className="flex flex-col items-center justify-center gap-2 3xl:gap-3">
            <props.icon className={`h-8 w-8 3xl:h-12 3xl:w-12 4xl:h-16 4xl:w-16 ${textColorClass} dark:text-white`} />
            <p className="text-sm 3xl:text-base 4xl:text-lg font-light text-center">{props.title}</p>
        </motion.div>
    );
}