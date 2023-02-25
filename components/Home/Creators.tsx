import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import Tilt from 'react-parallax-tilt'

const Creators = ({children}: any) => {

    const animation = useAnimation()
    const [ref, inView] = useInView()

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
        className="flex flex-col m-28 h-auto z-20">
            
            <div className="flex flex-col justify-center items-center mb-10 z-30">
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-white font-body tracking-widest uppercase text-sm'>
                        The makers
                </motion.h1>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-white font-display tracking-wide uppercase text-7xl'>
                        Creators
                </motion.h1>
            </div>

            <div className="flex flex-row gap-5 justify-center items-center">
                <div className="flex justify-center items-end w-[325px]">
                        <img className="grayscale" src="https://cdn.discordapp.com/attachments/934914135613931593/1033142127691055264/unknown.png" alt=""/>
                        <h1 className="text-white absolute font-body text-md tracking-wide uppercase z-10 mb-6">
                                ThrottleMonk <span style={{opacity: 0.7}}>/ Brain</span>
                        </h1>
                </div>
                <div className="flex justify-center items-end w-[325px]">
                        <img className="grayscale" src="https://cdn.discordapp.com/attachments/934914135613931593/1033144036569133056/unknown.png" alt=""/>
                        <h1 className="text-white absolute font-body text-md tracking-wide uppercase z-10 mb-6">
                                Nitro <span style={{opacity: 0.7}}>/ Techie</span>
                        </h1>
                </div>
                <div className="flex justify-center items-end w-[325px]">
                        <img className="grayscale" src="https://cdn.discordapp.com/attachments/934914135613931593/1033145177239466074/IMG_0417.jpg" alt=""/>
                        <h1 className="text-white absolute font-body text-md tracking-wide uppercase z-10 mb-6">
                                Kraken <span style={{opacity: 0.7}}>/ Picasso</span>
                        </h1>
                </div>
            </div>
            <div className="flex flex-row gap-5 justify-center items-center mt-5">
                <div className="flex justify-center items-end w-[325px]">
                        <img className="grayscale" src="https://cdn.discordapp.com/attachments/934914135613931593/1033396677408731268/aman_Cropped.jpg" alt=""/>
                        <h1 className="text-white absolute font-body text-md tracking-wide uppercase z-10 mb-6">
                                Hades <span style={{opacity: 0.7}}>/ Author</span>
                        </h1>
                </div>
                <div className="flex justify-center items-end w-[325px]">
                        <img className="grayscale w-full" src="https://cdn.discordapp.com/attachments/934914135613931593/1033395131493142559/Moo_Cropped.png" alt=""/>
                        <h1 className="text-white absolute font-body text-md tracking-wide uppercase z-10 mb-6">
                                Moo <span style={{opacity: 0.7}}>/ Animator</span>
                        </h1>
                </div>
            </div>
        </motion.div>
    )
}

export default Creators