'use client';

import {FaHtml5, FaCss3, FaJs, FaReact, FaPython} from 'react-icons/fa';
import {SiTailwindcss, SiLaravel, SiDjango, SiBootstrap, SiUnity, SiAdobephotoshop, SiAdobepremierepro} from 'react-icons/si'

// about data
const about ={
    title: 'About Me',
    description: 'Mengenali siapa saya lebih jauh',
    info: [
        {
            fieldName: 'Name',
            fieldvalue: 'Hafadz Hazmirullah',
        },
        {
            fieldName: 'Phone',
            fieldvalue: '(+62) 853 2058 4910',
        },
        {
            fieldName: 'Experience',
            fieldvalue: '1+ Years',
        },
        {
            fieldName: 'Email',
            fieldvalue: 'mirufadz25@gmail.com',
        },
        {
            fieldName: 'Nationality',
            fieldvalue: 'Indonesian',
        },
        {
            fieldName: 'Freelance',
            fieldvalue: 'Available',
        },
        {
            fieldName: 'Language',
            fieldvalue: 'Indonesia, English',
        },
    ]
};

// experience data
const experiences = {
    icon:'/assets/resume/badge.svg',
    title:'My Experience',
    description: 'Beberapa pengalaman yang saya miliki sebagai web developer, IT Support, dan Cyber Security. Mulai dari proyek selama menempuh program studi, magang, dan pekerjaan setelah lulus.',
    items: [
        {
            company: 'PT. Kunci Transformasi Digital',
            position: 'Backend Developer',
            duration: 'August 2023 - December 2023',
        },
        {
            company: 'Madrasah Alif',
            position: 'Guru Informatika',
            duration: '2023 - Present',
        },
        {
            company: 'Madrasah Alif',
            position: 'IT Support',
            duration: '2023 - Present',
        },
        {
            company: 'Want to Knows About Film',
            position: 'Backend Developer',
            duration: 'February 2023 - May 2023',
        },
    ]
};

// education data
const education={
    icon:'/assets/resume/cap.svg',
    title:'My Education',
    description: 'Studi, pelatihan, dan seminar yang dilakukan untuk meningkatkan level kemahiran dalam bidang web development, IT Support, dan Cyber Security',
    items:[
        {
            institution: 'Universitas Pasundan',
            degree: 'Bachelor of Informatics Engineering',
            duration: '2020 - 2024',
        },
        {
            institution: 'Cyber Academy',
            degree: 'Classical Cryptography for Beginer Course',
            duration: '2024',
        },
        {
            institution: 'Cyber Academy',
            degree: 'Introduction to Information Security Case',
            duration: '2024',
        },
        {
            institution: 'Edspert.id',
            degree: 'Intensive Bootcamp Microsoft Excel',
            duration: '2022',
        },
    ]
};

// skill data
const skills = {
    title: 'My Skills',
    description: 'Bahasa pemrograman, framework, dan aplikasi pendukung yang telah dikuasai',
    skilllist: [
        {
            icon: <FaHtml5 />,
            name: 'html 5',
        },
        {
            icon: <FaCss3 />,
            name: 'css 3',
        },
        {
            icon: <FaJs />,
            name: 'javascript',
        },
        {
            icon: <FaReact />,
            name: 'react.js',
        },
        {
            icon: <FaPython />,
            name: 'python',
        },
        {
            icon: <SiTailwindcss />,
            name: 'tailwind.css',
        },
        {
            icon: <SiLaravel />,
            name: 'laravel',
        },
        {
            icon: <SiDjango />,
            name: 'django.py',
        },
        {
            icon: <SiBootstrap />,
            name: 'bootstrap.css',
        },
        {
            icon: <SiUnity />,
            name: 'Unity',
        },
        {
            icon: <SiAdobephotoshop />,
            name: 'Adobe Photoshop',
        },
        {
            icon: <SiAdobepremierepro />,
            name: 'Adobe Premire',
        },
    ]
};

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {
                delay: 2.4,
                duration: 0.4,
                ease: 'easeIn'
            }}}
            className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue='experience'
                    className='flex flex-col xl:flex-row gap-[60px]'
                >
                    <TabsList className='flex flex-col w-full max-w-[360px] max-auto xl:mx-0 gap-6'>
                        <TabsTrigger value='experience'>Experiences</TabsTrigger>
                        <TabsTrigger value='education'>Education</TabsTrigger>
                        <TabsTrigger value='skills'>Skills</TabsTrigger>
                        <TabsTrigger value='about'>About Me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[80vh] w-full'>
                        {/* experience */}
                        <TabsContent value='experience' className='w-full'>
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experiences.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experiences.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experiences.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                        {item.position}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.company}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value='education' className='w-full'>
                        <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                                                >
                                                    <span className='text-accent'>{item.duration}</span>
                                                    <h3 className='text-lg max-w-[260px] min-h-[60px] text-center lg:text-left'>
                                                        {item.degree}
                                                    </h3>
                                                    <div className='flex items-center gap-3'>
                                                        {/* dot */}
                                                        <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                        <p className='text-white/60'>{item.institution}</p>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value='skills' className='w-full'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skilllist.map((skill, index) => {
                                        return (
                                            <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                            <div className='text-6xl group-hover:text-accent transistion-all duration-500'>{skill.icon}</div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className='capitalize'>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value='about' className='w-full text-center xl:text-left'>
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldvalue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}

export default Resume;