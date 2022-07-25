import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
        style={{display: 'flex', height: '28rem', flexDirection: 'column', alignItems: 'start', marginLeft: '8rem', marginRight: '8rem', gap: 8, background: 'linear-gradient(to top, #080913, #080913, #080913, #080913, #080913, #080913, transparent)'}}>
            <Grid container gap={6}>
                <Grid item xs style={{display: 'flex', justifyContent: 'end'}}>
                    <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: '6rem', letterSpacing: '4px', marginBlock: '0'}}>Collection</motion.h1>
                </Grid>
                <Grid item xs>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'end', paddingBottom: '0.9em', borderBottom: '4px solid #282840'}}>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>αυτό είμαστε</h1>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>κάναμε αθέ //</h1>
                    </Box>
                </Grid>
            </Grid>
            <Grid container gap={6}>
                <Box sx={{transform: 'rotate(358deg)', right: '15%', marginTop: '4rem', position: 'relative'}}>
                    <Parallax translateX={[0, -10]} style={{position: 'absolute', backgroundColor: '#e1ffac'}}>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={{display: 'flex', width: '200vw', height: '200px', backgroundColor: '#e1ffac'}}>
                        {shuffle(Array.from({length: 12}, (_, i) => 
                                <Box key={i + 1} style={{borderRight: '7px solid black'}}>
                                    <Image 
                                    height={"200px"} 
                                    width={"200px"}
                                    src={`/images/atherians/${i + 1}.png`} />
                                </Box>
                        ))}
                        </motion.div>
                    </Parallax>
                    <Parallax translateX={[-10, 0]} style={{position: 'absolute', backgroundColor: '#fec8d8', marginTop: '14rem'}}>
                        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={{display: 'flex', width: '200vw', height: '200px', backgroundColor: '#fec8d8'}}>
                        {shuffle(Array.from({length: 11}, (_, i) => 
                                <Box key={i + 1 + 11} style={{borderRight: '7px solid black'}}>
                                    <Image
                                    height={"200px"} 
                                    width={"200px"}
                                    src={`/images/atherians/${i + 1 + 11}.png`} />
                                </Box>
                        ))}
                        </motion.div>
                    </Parallax>
                </Box>
                <Grid item xs>
                    <motion.div>
                    </motion.div>
                </Grid>
                <Grid item xs>
                    <Parallax speed={-10} style={{position: 'absolute', right: '7%', zIndex: -999}}>
                        <h1 style={{opacity: 0.1, fontSize: '14rem', fontFamily: 'Mandalore', marginTop: '26rem', marginRight: '0rem', letterSpacing: '4px', color: 'inherit', textShadow: `-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff`}}>squad</h1>
                    </Parallax>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default Collection