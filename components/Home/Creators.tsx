import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Creators = ({children}: any) => {

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
        style={{display: 'flex', flexDirection: 'column', marginLeft: '7.5rem', marginRight: '7.5rem', marginTop: '7.5rem', marginBottom: '7.5rem', height: 'auto', zIndex: 2}}>
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '2.5rem', zIndex: 3}}>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-gradient'
                    style={{font: '400 0.9rem/80% Mono', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        The makers
                </motion.h1>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-gradient'
                    style={{font: '400 10rem/80% FKScreamer', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        Creators
                </motion.h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end', borderRadius: '10px', width: '325px'}}>
                    <img src="https://cdn.discordapp.com/attachments/934914135613931593/1033142127691055264/unknown.png" style={{filter: 'grayscale(100%)', borderRadius: '10px', width: 'inherit'}} alt=""/>
                    <h1
                        style={{font: '400 1rem/80% Mono', position: 'absolute', color: 'var(--palette-white)', textTransform: 'uppercase', transform: 'translateY(-2rem)', marginBlock: 0, zIndex: 10}}>
                            ThrottleMonk <span style={{opacity: 0.7}}>/ Brain</span>
                    </h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end', borderRadius: '10px', width: '325px'}}>
                    <img src="https://cdn.discordapp.com/attachments/934914135613931593/1033144036569133056/unknown.png" style={{filter: 'grayscale(100%)', borderRadius: '10px', width: 'inherit'}} alt=""/>
                    <h1
                        style={{font: '400 1rem/80% Mono', position: 'absolute', color: 'var(--palette-white)', textTransform: 'uppercase', transform: 'translateY(-2rem)', marginBlock: 0, zIndex: 10}}>
                            Nitro <span style={{opacity: 0.7}}>/ Techie</span>
                    </h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end', borderRadius: '10px', width: '325px'}}>
                    <img src="https://cdn.discordapp.com/attachments/934914135613931593/1033145177239466074/IMG_0417.jpg" style={{filter: 'grayscale(100%)', borderRadius: '10px', width: 'inherit'}} alt=""/>
                    <h1
                        style={{font: '400 1rem/80% Mono', position: 'absolute', color: 'var(--palette-white)', textTransform: 'uppercase', transform: 'translateY(-2rem)', marginBlock: 0, zIndex: 10}}>
                            Kraken <span style={{opacity: 0.7}}>/ Picasso</span>
                    </h1>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', gap: 20, justifyContent: 'center', alignItems: 'center', marginTop: '20px'}}>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end', borderRadius: '10px', width: '325px'}}>
                    <img src="https://cdn.discordapp.com/attachments/934914135613931593/1033396677408731268/aman_Cropped.jpg" style={{filter: 'grayscale(100%)', borderRadius: '10px', width: 'inherit'}} alt=""/>
                    <h1
                        style={{font: '400 1rem/80% Mono', position: 'absolute', color: 'var(--palette-white)', textTransform: 'uppercase', transform: 'translateY(-2rem)', marginBlock: 0, zIndex: 10}}>
                            Hades <span style={{opacity: 0.7}}>/ Author</span>
                    </h1>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'end', borderRadius: '10px', width: '325px'}}>
                    <img src="https://cdn.discordapp.com/attachments/934914135613931593/1033395131493142559/Moo_Cropped.png" style={{filter: 'grayscale(100%)', borderRadius: '10px', width: 'inherit'}} alt=""/>
                    <h1
                        style={{font: '400 1rem/80% Mono', position: 'absolute', color: 'var(--palette-white)', textTransform: 'uppercase', transform: 'translateY(-2rem)', marginBlock: 0, zIndex: 10}}>
                            Moo <span style={{opacity: 0.7}}>/ Animator</span>
                    </h1>
                </div>
            </div>
        </motion.div>
    )
}

export default Creators