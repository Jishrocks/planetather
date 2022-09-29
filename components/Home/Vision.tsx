import Grid from "@mui/material/Grid";
import { motion, useAnimation } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

import Image from 'next/image'

import useMediaQuery from "@mui/material/useMediaQuery";
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
            

            <div style={{display: 'flex', flexDirection: 'column', gap: 6, justifyContent: 'center', alignItems: 'center'}}>
                    <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={{display: 'flex', backgroundColor: '#e1ffac', transform: 'rotate(-2deg) translateX(2rem)'}}>
                        {shuffle(Array.from({length: 4}, (_, i) => 
                                <div key={i + 1} style={{borderRight: '7px solid #fff', height: isMobile ? '150px' : '200px', width: isMobile ? '150px' : '200px'}}>
                                    <Image 
                                    height={isMobile ? '150px' : '400px'} 
                                    width={isMobile ? '150px' : '400px'}
                                    src={`/images/atherians2/${i + 1}.PNG`} />
                                </div>
                        ))}
                        {/* {shuffle(Array.from({length: 3}, (_, i) => 
                                <div key={i + 1} style={{borderRight: '7px solid #fff', height: isMobile ? '150px' : '200px', width: isMobile ? '150px' : '200px'}}>
                                    <Image 
                                    height={isMobile ? '150px' : '300px'} 
                                    width={isMobile ? '150px' : '300px'}
                                    src={`/images/atherians2/${i + 1}.PNG`} />
                                </div>
                        ))} */}
                        </motion.div>

                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={{display: 'flex', backgroundColor: '#fec8d8', transform: 'rotate(-2deg) translateX(-2rem)'}}>
                        {shuffle(Array.from({length: 4}, (_, i) => 
                                <div key={i + 1} style={{borderRight: '7px solid #fff', height: isMobile ? '150px' : '200px', width: isMobile ? '150px' : '200px'}}>
                                    <Image
                                    height={isMobile ? '150px' : '300px'}
                                    width={isMobile ? '150px' : '300px'}
                                    src={`/images/atherians2/${i + 1}.PNG`} />
                                </div>
                        ))}
                        {/* {shuffle(Array.from({length: 3}, (_, i) => 
                                <div key={i + 1} style={{borderRight: '7px solid #fff', height: isMobile ? '150px' : '200px', width: isMobile ? '150px' : '200px'}}>
                                    <Image
                                    height={isMobile ? '150px' : '300px'}
                                    width={isMobile ? '150px' : '300px'}
                                    src={`/images/atherians2/${i + 1}.PNG`} />
                                </div>
                        ))} */}
                        </motion.div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    style={{font: '400 5.625rem/80% FKScreamer', color: 'black', fontSize: '5rem', letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        Manifesto
                </motion.h1>

                <motion.h1 style={{fontSize: '16px', color: 'rgba(0, 0, 0, 0.7)', fontFamily: 'Mono', letterSpacing: '1px', lineHeight: '1.5', width: '50%', marginLeft: '9.5rem', marginTop: '2.5rem'}}>
                Amid the NFT heat wave around the world, we are your own decentralized entertainment company, that will take over digital horizons.

                From community-driven comics, web series, merch, cosplays, and gamification to a super-charged blazing community filled with creativity and zeal, we are here to zip your imaginations and weave a whole new world, hand together.
                </motion.h1>
            </div>
        </motion.div>
    )
}

export default Vision