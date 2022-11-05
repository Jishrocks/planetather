import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

import Image from 'next/image'

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

const Collection = ({children}: any) => {

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
        style={{display: 'flex', flexDirection: 'column', marginTop: '7.5rem', marginBottom: '7.5rem', height: 'auto', zIndex: 2}}>
            
            <div style={{display: 'flex', flexDirection: 'column', marginLeft: '50%', marginRight: '5rem', justifyContent: 'left', alignItems: 'left'}}>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    // className='text-gradient'
                    style={{font: '400 0.9rem/80% Mono', color: 'var(--palette-white)', marginLeft: '3px', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0, zIndex: 10}}>
                        Atherians
                </motion.h1>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    // className='text-gradient'
                    style={{font: '400 6rem/80% FKScreamer', color: 'var(--palette-white)', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0, zIndex: 10}}>
                        Collection
                </motion.h1>
            </div>
            <article style={{display: 'flex', width: '200%'}}>
                <div style={{transform: 'rotate(-2deg) translateY(-6rem)'}}>
                    <ul style={{display: 'flex', listStyleType: 'none', paddingLeft: 0, animation: 'bannermove 30s linear infinite', gap: 20}}>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="/images/atherians2/1.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="/images/atherians2/2.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="/images/atherians2/9.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="/images/atherians2/4.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="/images/atherians2/5.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="/images/atherians2/6.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="/images/atherians2/7.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="/images/atherians2/8.PNG" alt="" /></li>

                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="/images/atherians2/1.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="/images/atherians2/2.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="/images/atherians2/9.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="/images/atherians2/4.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#4a2d31'}} src="/images/atherians2/5.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#e0f9f8'}} src="/images/atherians2/6.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#ffdb57'}} src="/images/atherians2/7.PNG" alt="" /></li>
                        <li style={{width: '100%'}}><img style={{width: '28vw', height: '28vw', background: '#cdcccc'}} src="/images/atherians2/8.PNG" alt="" /></li>
                    </ul>
                </div>
            </article>

        </motion.div>
    )
}

export default Collection