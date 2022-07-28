import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

const Epilogue = ({children}: any) => {
    
    const animation = useAnimation()
    const [ref, inView] = useInView()

    let isMobile = useMediaQuery('(max-width: 1200px)')

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
        style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '10%', marginRight: '10%', gap: 8, background: 'linear-gradient(to top, #080913, #080913, #080913, #080913, transparent)'}}>
            <Grid container gap={6}>
                <Grid item xs>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', paddingBottom: '0.9em', marginTop: isMobile ? '0.9em' : '0', borderBottom: '4px solid #282840'}}>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: isMobile ? '0.4rem' : '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>προσοχή, αυτό είναι</h1>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: isMobile ? '0.4rem' : '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>\\ ειδοποίηση επιπέδου 7</h1>
                    </Box>
                </Grid>
                <Grid item xs>
                    <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: isMobile ? '3.5rem' : '6rem', letterSpacing: '4px', marginBlock: '0'}}>Prologue</motion.h1>
                </Grid>
            </Grid>
            {isMobile ? 
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
            <Grid container gap={6}>
                <Grid item xs>
                    <Parallax speed={-10} style={{position: 'absolute'}}>
                        <h1 style={{opacity: 0.1, fontSize: '15rem', fontFamily: 'Mandalore', marginLeft: '0rem', marginTop: '25rem', letterSpacing: '4px', color: 'inherit', textShadow: `-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff`}}>beginnings</h1>    
                    </Parallax>
                    <Box sx={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
                        {/* <Parallax speed={5} style={{position: 'absolute'}}>
                            <motion.img src="/images/Planet.png" width={"400px"} alt="" />
                        </Parallax>
                        <Parallax speed={5} style={{position: 'absolute'}}>
                            <motion.img
                                // animate={animation}
                                // initial={"hidden"}
                                // variants={{
                                //     hidden: {
                                //         opacity: 0.6
                                //     },
                                //     visible: {
                                //         opacity: 1,
                                //         transition: {
                                //             duration: 2,
                                //             yoyo: Infinity,
                                //         }
                                //     }
                                // }}
                                src="/images/Flares.png" width={"400px"} alt="" />
                        </Parallax>
                        <Parallax speed={10} style={{position: 'absolute'}}>
                            <motion.img
                                // animate={animation}
                                // initial={"hidden"}
                                // variants={{
                                //     hidden: {
                                //         y: 0,
                                //         scale: 0.98
                                //     },
                                //     visible: {
                                //         y: -10,
                                //         scale: 1,
                                //         transition: {
                                //             duration: 5,
                                //             yoyo: Infinity,
                                //         }
                                //     }
                                // }}
                                src="/images/Rock.png" width={"400px"} alt="" />
                        </Parallax>
                        <Parallax speed={2} translateX={['-50px', '50px']} style={{position: 'absolute'}}>
                            <motion.img
                                // animate={animation}
                                // initial={"hidden"}
                                // variants={{
                                //     hidden: {
                                //         x: 0,
                                //         y: 0,
                                //         scale: 0.98
                                //     },
                                //     visible: {
                                //         x: 20,
                                //         y: 20,
                                //         scale: 1,
                                //         transition: {
                                //             duration: 5,
                                //             yoyo: Infinity,
                                //         }
                                //     }
                                // }}
                                src="/images/Spaceship.png" width={"400px"} alt="" />
                        </Parallax> */}
                    </Box>
                </Grid>
                <Grid item xs>
                    <motion.div>
                        <h1 style={{fontFamily: 'Mono', color: '#ece8e1', fontSize: '1.175rem', letterSpacing: '1px', textTransform: 'uppercase'}}>EP 00 - the doomsday</h1>
                        <h1 style={{fontFamily: 'Mono', color: '#c7c3bb', fontSize: '0.875rem', letterSpacing: '1px', marginBlockStart: '1rem'}}>
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

export default Epilogue