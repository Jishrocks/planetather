import Box from "@mui/material/Box";
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
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', paddingBottom: '0.9em', marginTop: isMobile ? '0.9em' : '0', borderBottom: '4px solid #282840'}}>
                        {!isMobile &&
                            <>
                            <h1 style={{fontFamily: 'Subheading', color: '#13141e', fontSize: isMobile ? '0.4rem' : '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>προσοχή, αυτό είναι</h1>
                            <h1 style={{fontFamily: 'Subheading', color: '#13141e', fontSize: isMobile ? '0.4rem' : '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>\\ ειδοποίηση επιπέδου 7</h1>
                            </>
                        }
                    </Box>
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
            <Box>
                <motion.div>
                <h1 style={{fontFamily: 'Mono', color: '#ece8e1', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase'}}>EP 00 - the doomsday</h1>
                    <h1 style={{fontFamily: 'Mono', color: '#c7c3bb', fontSize: '0.8rem', letterSpacing: '1px', marginBlockStart: '2rem'}}>
                        Before time ever existed, deep into Space, there was an enchanted planet, named Ather. No one knew how it got created, but it had the potent to give birth to a new race, the Atherians. A race rich in power and mystique, with unique yet diverse creatures, living in peace & harmony for a very long time. 

                        With the power of their great mind and body, they created a world rich in tech. But with great power comes the urge to control the uncontrolled. All was fine, until one day, a group set an expedition to explore and extract the core of the Planet to harvest it’s source of energy. The process left imbalances in stability of the core. And this… stroke the beginning of the doom of Ather. 

                        Slowly, the planet was consumed by death and disaster. Ather was destined to be destroyed.
                    </h1>
                </motion.div>
            </Box>
            :
            // Full screen view
            <Grid container gap={6}>
                {/* Left grid - full screen */}
                <Grid item xs>
                    
                    {/* Korean text - Prologue */}
                    <Parallax className={assetsStyles.whiteBackgroundText} speed={15} style={{position: 'absolute'}}>
                        <h1 style={{opacity: 0.1, fontSize: '15rem', fontFamily: 'Mandalore', marginTop: '8rem', letterSpacing: '4px', color: '#ece8e1', textShadow: '-2px -2px 0 #111222, 2px -2px 0 #111222, -2px 2px 0 #111222, 2px 2px 0 #111222', transform: 'rotate(90deg) translateY(58rem) translateX(25rem)'}}>시작시작시작시작</h1>    
                    </Parallax>

                </Grid>

                {/* Right grid - full screen */}
                <Grid item xs>
                    <motion.div>
                        <h1 style={{fontFamily: 'Mono', color: '#13141e', fontSize: '1.2rem', letterSpacing: '1px', textTransform: 'uppercase'}}>EP 00 - the doomsday</h1>
                        <h1 style={{fontFamily: 'Mono', color: '#768079', fontSize: '0.95rem', letterSpacing: '1px', marginBlockStart: '1rem'}}>
                            Before time ever existed, deep into Space, there was an enchanted planet, named Ather. No one knew how it got created, but it had the potent to give birth to a new race, the Atherians. A race rich in power and mystique, with unique yet diverse creatures, living in peace & harmony for a very long time. 

                            With the power of their great mind and body, they created a world rich in tech. But with great power comes the urge to control the uncontrolled. All was fine, until one day, a group set an expedition to explore and extract the core of the Planet to harvest it’s source of energy. The process left imbalances in stability of the core. And this… stroke the beginning of the doom of Ather. 

                            Slowly, the planet was consumed by death and disaster. Ather was destined to be destroyed.
                        </h1>
                    </motion.div>
                </Grid>

            </Grid>
            }
        </motion.div>
    )
}

export default Prologue