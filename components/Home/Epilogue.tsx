import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { motion, useAnimation } from "framer-motion";

import { NextPage } from "next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Epilogue: NextPage = ({children}: any) => {
    
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
        duration: 1
    }

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        } else {
            animation.start("hidden")
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
        style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '8rem', marginRight: '8rem', gap: 8}}>
            <Grid container gap={6}>
                <Grid item xs>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'start', paddingBottom: '0.9em', borderBottom: '2px solid #fa4454'}}>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>προσοχή, αυτό είναι</h1>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>\\ ειδοποίηση επιπέδου 7</h1>
                    </Box>
                </Grid>
                <Grid item xs>
                    <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: '6rem', letterSpacing: '4px', marginBlock: '0'}}>epilogue</motion.h1>
                </Grid>
            </Grid>
            <Grid container gap={6}>
                <Grid item xs>
                    <Box sx={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
                        <motion.img style={{position: 'absolute'}} src="/images/Planet.png" width={"400px"} alt="" />
                        <motion.img 
                            style={{position: 'absolute'}}
                            animate={animation}
                            initial={"hidden"}
                            variants={{
                                hidden: {
                                    opacity: 0.6
                                },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        duration: 2,
                                        yoyo: Infinity,
                                    }
                                }
                            }}
                            src="/images/Flares.png" width={"400px"} alt="" />
                        <motion.img 
                            style={{position: 'absolute'}}
                            animate={animation}
                            initial={"hidden"}
                            variants={{
                                hidden: {
                                    y: 0,
                                    scale: 0.98
                                },
                                visible: {
                                    y: -10,
                                    scale: 1,
                                    transition: {
                                        duration: 5,
                                        yoyo: Infinity,
                                    }
                                }
                            }}
                            src="/images/Rock.png" width={"400px"} alt="" />
                        <motion.img 
                            style={{position: 'absolute'}}
                            animate={animation}
                            initial={"hidden"}
                            variants={{
                                hidden: {
                                    x: 0,
                                    y: 0,
                                    scale: 0.98
                                },
                                visible: {
                                    x: 20,
                                    y: 20,
                                    scale: 1,
                                    transition: {
                                        duration: 5,
                                        yoyo: Infinity,
                                    }
                                }
                            }}
                            src="/images/Spaceship.png" width={"400px"} alt="" />
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
        </motion.div>
    )
}

export default Epilogue