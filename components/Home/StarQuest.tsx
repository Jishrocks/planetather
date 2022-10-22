import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

import assetsStyles from '../../styles/assets.module.css'

const StarQuest = ({children}: any) => {

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
            x: 150,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1
        }
    }

    const headingTransition = {duration: 1, type: 'spring'}

    let starquestTopics = ['Inspiration', 'Community', 'Neural Networks', 'Tangibles', 'Collaborations']

    return (
        <motion.div 
        transition={transition}
        ref={ref}
        variants={animationVariants}
        initial={"hidden"}
        animate={animation}
        style={{display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: '7.5rem', marginRight: '7.5rem', marginTop: '5rem', marginBottom: '5rem', height: 'auto', zIndex: 2}}>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'left', marginLeft: '5rem'}}>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-gradient'
                    style={{font: '400 0.9rem/80% Mono', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        Around the subway
                </motion.h1>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-gradient'
                    style={{font: '400 6rem/80% FKScreamer', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        The Chase
                </motion.h1>

                <motion.p className="content" style={{fontSize: '16px', color: 'var(--palette-white)', fontFamily: 'Mono', lineHeight: '1.5', marginTop: '2.5rem'}}>
                Amid the NFT heat wave around the world, we are your own decentralized entertainment company, that will take over digital horizons.

                From community-driven comics, web series, merch, cosplays, and gamification to a super-charged blazing community filled with creativity and zeal, we are here to zip your imaginations and weave a whole new world, hand together.
                </motion.p>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', gap: 6, justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://media.discordapp.net/attachments/934914135613931593/1033139897906774087/Untitled_Artwork.png?width=1880&height=1058" style={{width: '700px', transform: 'translateY(-2.5rem) translateX(-5rem) rotate(-50deg)', opacity: 0.4, filter: 'invert()'}} alt="" />
            </div>
        </motion.div>
    )
}

export default StarQuest