import Box from "@mui/material/Box";
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
        style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '10%', marginRight: '10%', gap: 8, marginTop: '8rem', marginBottom: '8rem'}}>
            <Grid container gap={6}>
                <Grid item xs style={{display: 'flex', justifyContent: 'end'}}>
                    <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: isMobile ? '3.5rem' : '6rem', letterSpacing: '4px', marginBlock: '0'}}>vision</motion.h1>
                </Grid>
                <Grid item xs>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'end', paddingBottom: '0.9em', marginTop: isMobile ? '0.9em' : '0', borderBottom: '4px solid #282840'}}>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: isMobile ? '0.4rem' : '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>αυτό είμαστε</h1>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: isMobile ? '0.4rem' : '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>είμαστε ατhέρ //</h1>
                    </Box>
                </Grid>
            </Grid>
            {isMobile ?
            <Box>
                <motion.div>
                    <h1 style={{fontFamily: 'Mono', color: '#ece8e1', fontSize: '1rem', letterSpacing: '1px', textAlign: 'right', textTransform: 'uppercase'}}>get. set. ather.</h1>
                    <h1 style={{fontFamily: 'Mono', color: '#c7c3bb', fontSize: '0.8rem', letterSpacing: '1px', marginBlockStart: '2rem'}}>
                    Amid the nft heat wave around the world, we are your own decentralized entertainment company, that will take over digital horizons. From community-driven comics, web series, merch, cosplays, and gamification to a super-charged blazing community filled with creativity and zeal, we are here to zip your imaginations and weave a whole new world, hand together.
                    </h1>
                </motion.div>
            </Box>
            :
            <Grid container gap={6}>
                <Grid item xs>
                    <motion.div>
                        <h1 style={{fontFamily: 'Roobert-Semibold', color: '#ece8e1', fontSize: '1.2rem', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'right'}}>get. set. ather.</h1>
                        <h1 style={{fontFamily: 'Roobert-Regular', color: '#c7c3bb', fontSize: '1rem', letterSpacing: '1px', lineHeight: '1.8rem', marginBlockStart: '1rem', textAlign: 'right'}}>
                        Amid the nft heat wave around the world, we are your own decentralized entertainment company, that will take over digital horizons. From community-driven comics, web series, merch, cosplays, and gamification to a super-charged blazing community filled with creativity and zeal, we are here to zip your imaginations and weave a whole new world, hand together.
                        </h1>
                    </motion.div>
                </Grid>
                <Grid item xs>
                        {/* <Box>
                            <Image
                                style={{transform: 'translateY(-100px) translateX(80px)'}}
                                    height={'600px'}
                                    width={'600px'}
                                    src={`/images/atherians2/2.PNG`} />
                        </Box> */}
                {/* <motion.img
								// animate={{
								//     y: 20,
								//     // scale: 1.05,
								//     transition: {
								//         duration: 4,
								//         yoyo: Infinity,
								//     }
								// }}
								style={{width: '53rem', position: 'absolute', transform: 'translateY(-20rem) translateX(-5rem)'}}
								src="/images/atherians-island.png"
								></motion.img> */}
                    {/* <Parallax speed={-10} style={{position: 'absolute', right: '7%'}}>
                        <h1 style={{opacity: 0.1, fontSize: '14rem', fontFamily: 'Mandalore', marginTop: '16rem', marginRight: '0rem', letterSpacing: '4px', color: '#13141e', textShadow: `-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff`}}>protocol</h1>
                    </Parallax> */}
                </Grid>
            </Grid>
            }
        </motion.div>
    )
}

export default Vision