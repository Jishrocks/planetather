import Grid from "@mui/material/Grid";
import { motion, useAnimation } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

import Image from 'next/image'

import useMediaQuery from "@mui/material/useMediaQuery";

const Vision = ({children}: any) => {

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
            x: -150,
            opacity: 0
        },
        visible: {
            x: 0,
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
        style={{display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '7.5rem', marginRight: '7.5rem', marginTop: '7.5rem', marginBottom: '7.5rem', height: 'auto', zIndex: 2}}>
            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'start'}}>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    style={{fontFamily: 'FFMark', color: 'transparent', backgroundImage: 'linear-gradient(56deg, #f3a5da 0%, #81cefd 100%)', WebkitBackgroundClip: 'text', fontSize: '5rem', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        <span style={{fontSize: '3.5rem', color: 'silver'}}>01</span> Manifesto
                </motion.h1>
            </div>

            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'start'}}>
                <motion.h1 style={{fontFamily: 'Roobert-Regular', color: '#262626', fontSize: '1.875rem', letterSpacing: '1px', lineHeight: '1.5', marginBlock: '0.5625rem'}}>
                Amid the NFT heat wave around the world, we are your own decentralized entertainment company, that will take over digital horizons.
                <br></br>
                <br></br>
                From community-driven comics, web series, merch, cosplays, and gamification to a super-charged blazing community filled with creativity and zeal, we are here to zip your imaginations and weave a whole new world, hand together.
                </motion.h1>
            </div>
        </motion.div>
    )
}

export default Vision