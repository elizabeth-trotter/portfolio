// External imports
import { useEffect, useRef, useState } from "react";
import { Card } from "flowbite-react";
import { motion } from "framer-motion";
import Link from "next/link";

// Internal imports
import { customCardTheme } from "@/app/styles/themes/CustomCardTheme";
import { getTextLogoColor } from "@/app/utils/LogoColorSwitch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { HiOutlineExternalLink } from "@/app/icons";

// import CarouselComponent from "./CarouselComponent";
export default function ProjectCardComponent(props: ProjectCardProps) {
  const [hoveredCard, setHoveredCard] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imgSrc, setImgSrc] = useState<string>(props.image);
  const cardRef = useRef<HTMLDivElement>(null);

  // const handleScroll = () => {
  //   const card = cardRef.current;
  //   if (card) {
  //     console.log('card exists')
  //     const { top, bottom } = card.getBoundingClientRect();
  //     const isVisible = top >= 0 && bottom <= window.innerHeight;
  //     setHoveredCard(isVisible);
  //     console.log(hoveredCard)
  //   }
  // };

  // const handleWheel = () => {
  //   // If the card is hovered, ensure it stays hovered during scroll
  //   if (hoveredCard) {
  //     setHoveredCard(true);
  //   }
  // };

  useEffect(() => {
    const handleResize = () => {
      const newImgSrc = window.innerWidth < 480 ? props.imageMobile : props.image;
      setImgSrc(newImgSrc);

      const isMobile = window.innerWidth < 768;
      setHoveredCard(isMobile);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) {
      const threshold = window.innerWidth < 1024 ? 0.5 : 0.6;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setHoveredCard(true);
            } else {
              setHoveredCard(false);
            }
          });
        },
        { threshold: threshold }
      );

      const card = cardRef.current;
      if (card) {
        observer.observe(card);
      }

      return () => {
        if (card) {
          observer.unobserve(card);
        }
      };
    } else {
      setHoveredCard(true);
    }
  }, [cardRef]);

  return (
    <motion.div initial={{ scale: 0.90 }} whileInView={{ scale: 1 }} whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center gap-2 3xl:gap-3 overflow-hidden"
      // onMouseEnter={() => setHoveredCard(true)}
      // onMouseLeave={() => setHoveredCard(false)}
      // onTouchStart={() => setHoveredCard(true)}
      // onTouchEnd={() => setHoveredCard(false)}
      // onWheel={handleWheel}
      // onWheel={handleScroll}
      // onTouchMove={handleScroll}    
      ref={cardRef}
    >
      <Card theme={customCardTheme} className={`min-w-sm`} imgSrc={imgSrc}>
        <div className="flex justify-between items-center">
          <p className="font-josefin-sans text-xl 3xl:text-2xl 4xl:text-3xl font-semibold text-gray-900 dark:text-white">
            {props.title}
          </p>
          <Link href={props.github} target='_blank' aria-label="GitHub Icon Link" className="hidden 2xs:inline">
            <FontAwesomeIcon icon={faGithubSquare} className='text-black dark:text-slate-400 pt-2 sm:pt-0 text-3xl 3xl:text-4xl 4xl:text-5xl hover:text-slate-600 dark:hover:text-slate-300' />
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: hoveredCard ? 1 : 0, height: hoveredCard ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-balance 3xl:text-lg 4xl:text-xl font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <p className="py-3 font-semibold dark:font-medium 3xl:text-lg 4xl:text-xl">Built with:</p>

          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="grid grid-cols-3 grid-rows-2 3xs:grid-rows-1 3xs:grid-cols-6 gap-4">
              {props.icons.map((Icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: -0, x: '50%' }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.5 }}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Icon className={`${index < 3 ? '-mb-5' : ''} 3xs:mb-0 h-7 w-7 3xl:h-8 3xl:w-8 4xl:h-10 4xl:w-10 ${getTextLogoColor(props.iconNames[index])} dark:text-white`} />
                  {hoveredIndex === index && (
                    <div className="absolute z-1 left-1/2 transform -translate-x-1/2 bottom-full bg-black text-white rounded-md p-2 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                      {props.iconNames[index]}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col items-center 3xs:flex-row 3xs:items-baseline">
              <div className="px-4 rounded sm:hover:border sm:hover:shadow-md flex gap-1 pt-6 sm:pt-0 sm:hidden">
                <Link className="dark:font-light" href={props.github} target="_blank">View Repo</Link>
                <HiOutlineExternalLink className="h-4 w-4 pt-1" />
              </div>
              <p className="hidden 3xs:inline sm:hidden">|</p>
              <div className="px-4 rounded sm:hover:border sm:hover:shadow-md flex gap-1 pt-2 3xs:pt-6 sm:pt-0">
                <Link className="dark:font-light" href={props.site} target="_blank">View Site</Link>
                <HiOutlineExternalLink className="h-4 w-4 pt-1" />
              </div>
            </div>

          </div>
        </motion.div>
      </Card>

    </motion.div>
  );
}
