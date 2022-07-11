import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { motion, useAnimation } from "framer-motion";

import { NextPage } from "next";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";

const Vision: NextPage = ({children}: any) => {

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
        } else {
            animation.start("hidden")
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
        // transition={transition}
        // ref={ref}
        // variants={animationVariants}
        // initial={"hidden"}
        // animate={animation}
        style={{display: 'flex', flexDirection: 'column', alignItems: 'start', marginLeft: '8rem', marginRight: '8rem', gap: 8, background: 'linear-gradient(to top, #080913, #080913, #080913, #080913, #080913, #080913, transparent)'}}>
            <Grid container gap={6}>
                <Grid item xs style={{display: 'flex', justifyContent: 'end'}}>
                    <motion.h1
                    // ref={ref}
                    // animate={animation}
                    // transition={headingTransition}
                    // initial={"hidden"}
                    // variants={headingAnimationVariants}
                    style={{fontFamily: 'Mandalore', color: '#ece8e1', fontSize: '6rem', letterSpacing: '4px', marginBlock: '0'}}>vision</motion.h1>
                </Grid>
                <Grid item xs>
                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'end', justifyContent: 'end', paddingBottom: '0.9em', borderBottom: '4px solid #282840'}}>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>αυτό είμαστε</h1>
                        <h1 style={{fontFamily: 'Subheading', color: '#ece8e1', fontSize: '0.6rem', letterSpacing: '0.2em', marginBlock: '0', transform: 'rotateY(180deg)', textTransform: 'uppercase'}}>είμαστε ατhέρ //</h1>
                    </Box>
                </Grid>
            </Grid>
            <Grid container gap={6}>
                <Grid item xs>
                    <motion.div
                    >
                        <h1 style={{fontFamily: 'Mono', color: '#ece8e1', fontSize: '1.175rem', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'right'}}>get. set. ather.</h1>
                        <h1 style={{fontFamily: 'Mono', color: '#c7c3bb', fontSize: '0.875rem', letterSpacing: '1px', marginBlockStart: '1rem', textAlign: 'right'}}>
                            In the midst of the nft heat-wave all round the world, we are your very own entertainment company, emerging to take over the digital horizon. From comics, web series, merch and games to a super-charged blazing community filled with creativity and zeal, we are ready to zip tie your imaginations and weave a whole new world, hand together. 

                        </h1>
                    </motion.div>
                </Grid>
                <Grid item xs>
                    <Parallax speed={-10} style={{position: 'absolute', right: '7%'}}>
                        <h1 style={{opacity: 0.1, fontSize: '14rem', fontFamily: 'Mandalore', marginTop: '16rem', marginRight: '0rem', letterSpacing: '4px', color: 'inherit', textShadow: `-1px -1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, 1px 1px 0 #ffffff`}}>protocol</h1>
                    </Parallax>
                </Grid>
            </Grid>
        </motion.div>
    )
}

export default Vision