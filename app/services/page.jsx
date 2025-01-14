'use client';

import {BsArrowDownRight} from 'react-icons/bs'
import Link from 'next/link';

const services = [
    {
        num: '01',
        title: 'Web Developer',
        description: 'Menawarkan layanan pengembangan web yang penuh semangat, dengan fokus pada pengalaman pengguna dan desain modern yang responsif di berbagai perangkat.',
        href: '',
    },
    {
        num: '02',
        title: 'Game Developer',
        description: 'Membawa pendekatan baru dalam menciptakan game dengan grafis menarik dan mekanik gameplay yang interaktif.',
        href: '',
    },
    {
        num: '03',
        title: 'Mobile Developer',
        description: 'Siap membantu mewujudkan aplikasi yang memenuhi kebutuhan pengguna dengan desain yang modern dan kinerja yang efisien.',
        href: '',
    },
    {
        num: '04',
        title: 'Cyber Security',
        description: 'Siap membantu Anda mengidentifikasi kerentanan dan mengamankan sistem dengan solusi terbaru dalam keamanan siber, dengan tekad untuk terus belajar dan menghadapi tantangan baru.',
        href: '',
    },
];

import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div 
                    initial={{opacity:0}}
                    animate={{
                        opacity:1,
                        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
                    }}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'
                >
                    {services.map((item, index) => {
                        return (
                            <div 
                                key={index}
                                className='flex-1 flex flex-col justify-center gap-6 group'
                            >
                                {/* top */}
                                <div className='w-full flex justify-between items-center'>
                                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
                                        {item.num}
                                    </div>
                                    <Link 
                                        className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                                        href={item.href}
                                    >
                                        <BsArrowDownRight 
                                            className='text-primary text-3xl'
                                        />
                                    </Link>
                                </div>

                                {/* heading */}
                                <h2 className='text-[42px] font-bold leading-none texxt-white group-hover:text-accent transition-all duration-500'>{item.title}</h2>

                                {/* description */}
                                <p className='text-whote/60'>{item.description}</p>

                                {/* border */}
                                <div className='border-b border-white/20 w-full'></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;