import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

import assetsStyles from '../../styles/assets.module.css'

const Prologue = ({children}: any) => {
    
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

    return (
        <motion.div
        transition={transition}
        ref={ref}
        variants={animationVariants}
        initial={"hidden"}
        animate={animation}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '10%', marginRight: '10%', gap: 8, marginTop: '8rem', marginBottom: '8rem',
        }}>

            {/* First part - aesthetic text and heading */}
            <Grid container gap={6}>
                <Grid item xs>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', paddingBottom: '0.9em', marginTop: isMobile ? '0.9em' : '0', borderBottom: '4px solid #282840'}}>
                        {!isMobile &&
                            <>
                            <h1 style={{fontFamily: 'Subheading', color: '#13141e', fontSize: isMobile ? '0.4rem' : '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>προσοχή, αυτό είναι</h1>
                            <h1 style={{fontFamily: 'Subheading', color: '#13141e', fontSize: isMobile ? '0.4rem' : '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>\\ ειδοποίηση επιπέδου 7</h1>
                            </>
                        }
                    </div>
                </Grid>
                <Grid item xs>
                    <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    style={{fontFamily: 'Mandalore', color: '#ece8e1', textShadow: `-2px -2px 0 #111222, 2px -2px 0 #111222, -2px 2px 0 #111222, 2px 2px 0 #111222`, fontSize: isMobile ? '3.5rem' : '6rem', letterSpacing: '4px', marginBlock: '0'}}>Prologue</motion.h1>
                </Grid>
            </Grid>

            {/* Second part - Image | Subtitle and description */}
            {isMobile ? 
            // Mobile view
            <div>
                <motion.div>
                <h1 style={{fontFamily: 'Roobert-Regular', color: '#ece8e1', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase'}}>EP 00 - the doomsday</h1>
                    <h1 style={{fontFamily: 'Roobert-Regular', color: '#c7c3bb', fontSize: '0.8rem', letterSpacing: '1px', marginBlockStart: '2rem'}}>
                    A story of renewal, love, faith and humble new journeys. An incredible journey to rebuild and restore their remarkable legacy. 

                    The story of restoration and the struggles to rebuild and prosper on a desolate planet identified to them as Earth.

                     They are from a planet afar, known as Ather. Situated in a galaxy deep in the womb of the Universe. A planet with enchanted soil. With a core harnessing the mighty power of a thousand Suns. A planet which rivals even time itself. With soil so potent that gave birth to a noble race of intelligent beings who named themselves after their beloved planet they call home. 

                    They are the Atherians...
                    </h1>
                </motion.div>
            </div>
            :
            // Full screen view
            <Grid container gap={6}>
                {/* Left grid - full screen */}
                <Grid item xs>
                    
                    {/* Korean text - Prologue */}
                    {/* <Parallax className={assetsStyles.whiteBackgroundText} speed={15} style={{position: 'absolute'}}>
                        <h1 style={{opacity: 0.1, fontSize: '15rem', fontFamily: 'Mandalore', marginTop: '8rem', letterSpacing: '4px', color: '#ece8e1', textShadow: '-2px -2px 0 #111222, 2px -2px 0 #111222, -2px 2px 0 #111222, 2px 2px 0 #111222', transform: 'rotate(90deg) translateY(58rem) translateX(25rem)'}}>시작시작시작시작</h1>    
                    </Parallax> */}

                </Grid>

                {/* Right grid - full screen */}
                <Grid item xs>
                    <motion.div>
                        <h1 style={{fontFamily: 'Roobert-Semibold', color: '#13141e', fontSize: '1.2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>EP 00</h1>
                        <h1 style={{fontFamily: 'Roobert-Regular', color: '#768079', fontSize: '1rem', letterSpacing: '1px', lineHeight: '1.8rem', marginBlockStart: '1rem'}}>
                        A story of renewal, love, faith and humble new journeys. An incredible journey to rebuild and restore their remarkable legacy. 

                        The story of restoration and the struggles to rebuild and prosper on a desolate planet identified to them as Earth.

                         They are from a planet afar, known as Ather. Situated in a galaxy deep in the womb of the Universe. A planet with enchanted soil. With a core harnessing the mighty power of a thousand Suns. A planet which rivals even time itself. With soil so potent that gave birth to a noble race of intelligent beings who named themselves after their beloved planet they call home.

                        They are the Atherians...
                        </h1>
                    </motion.div>
                </Grid>

            </Grid>
            }
        </motion.div>
    )
}

export default Prologue