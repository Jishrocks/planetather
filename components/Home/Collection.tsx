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
        style={{display: 'flex', height: isMobile ? '18rem' : '28rem', marginBottom: '15rem', flexDirection: 'column', alignItems: 'start', gap: 8}}>
                    <Parallax translateX={[0, -10]} style={{position: 'absolute'}}>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={{display: 'flex', backgroundColor: '#e1ffac', transform: 'rotate(-2deg)'}}>
                        {shuffle(Array.from({length: 9}, (_, i) => 
                                <div key={i + 1} style={{borderRight: '7px solid #fff', height: isMobile ? '150px' : '300px', width: isMobile ? '150px' : '300px'}}>
                                    <Image 
                                    height={isMobile ? '150px' : '400px'} 
                                    width={isMobile ? '150px' : '400px'}
                                    src={`/images/atherians2/${i + 1}.PNG`} />
                                </div>
                        ))}
                        {shuffle(Array.from({length: 3}, (_, i) => 
                                <div key={i + 1} style={{borderRight: '7px solid #fff', height: isMobile ? '150px' : '300px', width: isMobile ? '150px' : '300px'}}>
                                    <Image 
                                    height={isMobile ? '150px' : '300px'} 
                                    width={isMobile ? '150px' : '300px'}
                                    src={`/images/atherians2/${i + 1}.PNG`} />
                                </div>
                        ))}
                        </motion.div>
                    </Parallax>
                    <Parallax translateX={[-10, 0]} style={{position: 'absolute', marginTop: isMobile ? '10rem' : '20rem'}}>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={{display: 'flex', backgroundColor: '#fec8d8', transform: 'rotate(-2deg)'}}>
                        {shuffle(Array.from({length: 9}, (_, i) => 
                                <div key={i + 1} style={{borderRight: '7px solid #fff', height: isMobile ? '150px' : '300px', width: isMobile ? '150px' : '300px'}}>
                                    <Image
                                    height={isMobile ? '150px' : '300px'}
                                    width={isMobile ? '150px' : '300px'}
                                    src={`/images/atherians2/${i + 1}.PNG`} />
                                </div>
                        ))}
                        {shuffle(Array.from({length: 3}, (_, i) => 
                                <div key={i + 1} style={{borderRight: '7px solid #fff', height: isMobile ? '150px' : '300px', width: isMobile ? '150px' : '300px'}}>
                                    <Image
                                    height={isMobile ? '150px' : '300px'}
                                    width={isMobile ? '150px' : '300px'}
                                    src={`/images/atherians2/${i + 1}.PNG`} />
                                </div>
                        ))}
                        </motion.div>
                    </Parallax>
        </motion.div>
    )
}

export default Collection