import Box from "@mui/material/Box";
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

    let starquestTopics = ['Inspiration', 'Vision', 'Community', 'Neural', 'Tangibles', 'Collaborations']

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
                    style={{fontFamily: 'Mandalore', color: '#ece8e1', textShadow: `-2px -2px 0 #111222, 2px -2px 0 #111222, -2px 2px 0 #111222, 2px 2px 0 #111222`, fontSize: isMobile ? '3.5rem' : '6rem', letterSpacing: '4px', marginBlock: '0'}}>StarQuest</motion.h1>
                </Grid>
            </Grid>

            <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem', gap: 50}}>
                {starquestTopics.map((topic) => 
                    <Box key={topic} style={{clipPath: 'polygon(11% 0, 100% 0, 100% 94%, 89% 100%, 0 100%, 0 6%)', width: '16rem', height: '32rem'}}>
                        <Box style={{width: 'auto', height: 'calc(32rem - 10px)', margin: '5px', background: 'linear-gradient(56deg, rgba(35,38,59,1) 0%, rgba(19,20,30,1) 75%)'}}>
                            <h1 style={{position: 'relative', fontSize: '2.6rem', fontFamily: 'Hikou', 
                            textShadow: '0 0 64px rgb(192 219 255 / 48%), 0 0 16px rgb(65 120 255 / 24%)', 
                            letterSpacing: '4px',
                            color: '#ece8e1', transform: 'rotate(90deg) translateY(5rem) translateX(8rem)', textTransform: 'uppercase'}}>{topic}</h1>
                        </Box>
                    </Box>)
                }
            </Box>
        </motion.div>
    )
}

export default StarQuest