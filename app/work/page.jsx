'use client';

import { motion } from "framer-motion";
import React, {useState} from "react";

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import {Tooltip, TooltipContent, TooltipTrigger, TooltipProvider} from '@/components/ui/tooltip';
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
    {
        num: '01',
        category: 'backend',
        title: 'Want to Know About Film',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur pariatur deleniti officiis harum eveniet.',
        stacks: [
            {
                name: 'html 5'
            },
            {
                name: 'css 3'
            },
            {
                name: 'bootstrap'
            },
            {
                name: 'laravel'
            },
        ],
        image: '/assets/work/thumb1.png',
        live: '',
        git: '',
    },
    {
        num: '02',
        category: 'backend',
        title: 'Dashboard yayasan',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur pariatur deleniti officiis harum eveniet.',
        stacks: [
            {
                name: 'python'
            },
            {
                name: 'django'
            },
        ],
        image: '/assets/work/thumb2.png',
        live: '',
        git: '',
    },
    {
        num: '03',
        category: 'Game programmer',
        title: 'Kian Santang',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur pariatur deleniti officiis harum eveniet.',
        stacks: [
            {
                name: 'C++'
            },
        ],
        image: '/assets/work/thumb3.png',
        live: '',
        git: '',
    },
    {
        num: '04',
        category: 'Full Stack',
        title: 'Web Madrasah',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus consectetur pariatur deleniti officiis harum eveniet.',
        stacks: [
            {
                name: 'html 5'
            },
            {
                name: 'css 3'
            },
            {
                name: 'javascript'
            },
            {
                name: 'next.js'
            },
        ],
        image: '/assets/work/thumb1.png',
        live: '',
        git: '',
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handSlideChange = (swiper) => {
        // get current slide
        const currentIndex = swiper.activeIndex;
        // update project state based an current slide index
        setProject(projects[currentIndex]);
    }

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease:'easeIn'}}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} Project
                            </h2>

                            {/* project description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>

                            {/* stack */}
                            <ul className="flex gap-4">
                                {project.stacks.map((item, index) => {
                                    return (
                                        <li key={index} className="text-accent text-xl">
                                            {item.name}
                                            {/* remove last coma */}
                                            {index !== project.stacks.length - 1 && ","}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* border */}
                            <div className="border border-white/20"></div>

                            {/* buttons */}
                            <div className="flex items-center gap-4 ">
                                {/* Live project */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github */}
                                <Link href={project.git}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent"/>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overflow */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                                            {/* image */}
                                            <div className="relative w-full h-full">
                                                <Image src={project.image} fill className="object-cover" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            
                            {/* slider button */}
                            <WorkSlideBtns 
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Work;