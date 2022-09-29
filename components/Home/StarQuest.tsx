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
        style={{display: 'flex', flexDirection: 'column', marginLeft: '7.5rem', marginRight: '7.5rem', marginTop: '7.5rem', marginBottom: '7.5rem', height: 'auto'}}>
            <div style={{display: 'flex', justifyContent: 'left', alignItems: 'start'}}>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    style={{fontFamily: 'FFMark', color: 'transparent', backgroundImage: 'linear-gradient(56deg, #f3a5da 0%, #81cefd 100%)', WebkitBackgroundClip: 'text', fontSize: '5rem', letterSpacing: '4px', textTransform: 'uppercase'}}>
                        <span style={{fontSize: '3.5rem', color: 'silver'}}>02</span> StarQuest
                </motion.h1>
            </div>

            <div style={{display: 'grid', gridTemplateColumns: '1fr '.repeat(starquestTopics.length)}}>
                {
                    Array.from({length: starquestTopics.length}, (_, i) => 
                        <div key={i + 1} style={{display: 'flex', flexDirection: 'column', justifyContent: 'end', height: '30rem', width: '20rem', borderRadius: '20px', border: '1px solid rgba(0, 0, 0, 0.1)'}}>
                            <h1 style={{fontFamily: 'FFMark', color: 'silver', fontSize: '3.5rem', marginLeft: '1.75rem', textTransform: 'uppercase', marginBlock: 0}}>0{i + 1}</h1>
                            <h1 style={{fontFamily: 'FFMark', color: '#404040', fontSize: '1.2rem', marginLeft: '2rem', marginBottom: '2rem', textTransform: 'uppercase'}}>{starquestTopics[i]} <span style={{color: 'rgb(254, 200, 216)'}}>↗</span></h1>
                        </div>
                    )
                }
            </div>

            {/* <div style={{display: 'flex', position: 'absolute', height: '27.5rem', width: '10rem', left: '-3.5rem', transform: 'translateY(14.25rem)', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '20px'}}>
            </div>

            <div style={{display: 'flex', position: 'absolute', height: '27.5rem', width: '10rem', right: '-3.5rem', transform: 'translateY(14.25rem)', border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '20px'}}>
            </div> */}

            {/* <div style={{display: 'flex', position: 'absolute', height: '27.5rem', width: '10rem', transform: 'translateY(14.25rem)', border: '1px solid rgba(0, 0, 0, 0.05)', borderRadius: '20px'}}>
            </div> */}
        </motion.div>
    )
}

export default StarQuest