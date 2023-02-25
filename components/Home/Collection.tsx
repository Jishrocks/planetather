import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

import Image from 'next/image'

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const Collection = ({children}: any) => {

    const animation = useAnimation()
    const [ref, inView] = useInView()

    let isMobile = useMediaQuery('(max-width: 450px)')
    let isTablet = useMediaQuery('(max-width: 900px)')
    let isDesktop = useMediaQuery('(max-width: 1200px)')

    const animationVariants = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    const transition = {
        type: 'spring',
        // delay: 0.7,
        duration: 1
    }

    useEffect(() => {
        if (inView) {
            animation.start("visible")
            return
        }
    }, [animation, inView])

    const headingAnimationVariants = {
        hidden: {
            y: 150,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const headingTransition = {duration: 1, type: 'spring'}

    return (
        <motion.div 
        transition={transition}
        ref={ref}
        variants={animationVariants}
        initial={"hidden"}
        animate={animation}
        className="flex flex-col my-28 h-auto z-20">
            
            <div className="flex flex-col justify-center items-center mb-10 z-30">
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-white font-body text-sm tracking-widest uppercase'>
                        10000 Atherians
                </motion.h1>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-white font-display tracking-wide uppercase text-7xl'>
                        COLLECTION
                </motion.h1>
            </div>

            <article className="flex w-[200%]">
                <div className="absolute opacity-50">
                    <ul className="flex list-none blur-[100px] gap-5" style={{animation: 'bannermove 60s linear infinite'}}>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078656767023656972/Male_Hair_Part_1.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078067539453689986/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078064869808545872/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078060534806614126/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078058003527372970/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078055575805501500/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078065929134559313/IMG_2173.png" alt="" />
                        </li>

                        {/* /// */}

                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1077674089801596989/IMG_2158.PNG" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599435854893098/13.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599436236558346/14.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599236780638398/10.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599072099672174/3.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599237158117416/11.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599072766562415/4.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1075725019809845329/Female_Hair_2.png" alt="" />
                        </li>
                    </ul>
                </div>

                <div>
                    <ul className="flex list-none gap-5" style={{animation: 'bannermove 60s linear infinite'}}>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078656767023656972/Male_Hair_Part_1.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078067539453689986/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1070717652089192639/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078064869808545872/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078060534806614126/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078058003527372970/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078055575805501500/Untitled_Artwork.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1078065929134559313/IMG_2173.png" alt="" />
                        </li>

                        {/* /// */}

                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1077674089801596989/IMG_2158.PNG" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599435854893098/13.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599436236558346/14.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599236780638398/10.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599072099672174/3.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599237158117416/11.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1076599072766562415/4.png" alt="" />
                        </li>
                        <li className="w-[100%]" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}}>
                            <img className="w-[28vw] h-[28vw] max-w-none" style={{clipPath: 'polygon(0 0, 0 95%, 5% 100%, 100% 100%, 100% 5%, 95% 0)'}} src="https://cdn.discordapp.com/attachments/934914135613931593/1075725019809845329/Female_Hair_2.png" alt="" />
                        </li>
                    </ul>
                </div>
            </article>

        </motion.div>
    )
}

export default Collection