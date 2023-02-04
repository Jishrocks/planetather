import { motion, useAnimation } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import {useMediaQuery, screenBasedAttribute} from "../lib/mediaQuery";
import Fade from 'react-reveal/Fade';

type ArticleProps = {
    align: 'left' | 'right',
    image: string,
    imageStyle?: React.CSSProperties,
    heading: string,
    subheading: string,
    description?: string,
    children?: React.ReactNode
}

const Article = (props: ArticleProps) => {

    const animation = useAnimation()
    const [ref, inView] = useInView()

    let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

    const animationVariants = {
        hidden: {
            y: 150,
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

    return (
        <motion.div
        style={{display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: screenBasedAttribute(screens, {
            screen_sm: '0rem',
            screen_md: '4rem',
            screen_lg: '4rem',
            screen_xl: '5rem'
        }), marginRight: '5rem', marginTop: '5rem', marginBottom: '5rem', height: 'auto', zIndex: 2}}>
            

            <div style={{display: screenBasedAttribute(screens, {
                screen_sm: 'none', 
                screen_md: 'flex',
                screen_lg: 'flex',
                screen_xl: 'flex'
            }), order: props.align == 'left' ? 1 : 'unset', flexDirection: 'row', gap: 6, justifyContent: 'center', alignItems: 'center'}}>
                <Parallax translateY={['200px', '0px']}>
                    <Fade>
                        <motion.img
                        src={props.image} width={screenBasedAttribute(screens, {
                            screen_sm: '200px',
                            screen_md: '200px',
                            screen_lg: '300px',
                            screen_xl: '400px'
                        })} style={props.imageStyle} alt="" />
                    </Fade>
                </Parallax>
            </div>

            <Parallax translateY={['75px', '0px']}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: props.align == 'left' ? 'start' : 'start', marginLeft: '5rem'}}>
                        <motion.h1
                            ref={ref}
                            animate={animation}
                            variants={animationVariants}
                            transition={transition}
                            initial={"hidden"}
                            className='text-gradient-two'
                            style={{font: screenBasedAttribute(screens, {
                                screen_sm: '400 0.65rem/100% Antonio',
                                screen_md: '400 0.75rem/100% Antonio',
                                screen_lg: '400 0.8rem/100% Antonio',
                                screen_xl: '400 2rem/100% Antonio'
                            }), 
                            width: screenBasedAttribute(screens, {
                                screen_sm: '300px',
                                screen_md: '300px',
                                screen_lg: '480px',
                                screen_xl: '640px'
                            }),
                            letterSpacing: '2px', opacity: 0.7, textTransform: 'uppercase', marginBlock: 0}}>
                                {props.subheading}
                        </motion.h1>
                        <div>
                            <motion.h1
                                ref={ref}
                                animate={animation}
                                variants={animationVariants}
                                transition={transition}
                                initial={"hidden"}
                                className='text-gradient-two'
                                style={{font: screenBasedAttribute(screens, {
                                    screen_sm: '400 4rem/100% FKScreamer',
                                    screen_md: '400 4rem/100% FKScreamer',
                                    screen_lg: '400 5rem/100% FKScreamer',
                                    screen_xl: '400 4rem/100% GalderGlynn'
                                }), 
                                width: screenBasedAttribute(screens, {
                                    screen_sm: '300px',
                                    screen_md: '300px',
                                    screen_lg: '480px',
                                    screen_xl: '640px'
                                }),
                                letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                                    {props.heading}
                            </motion.h1>
                        </div>

                        <motion.p className="content" style={{fontSize: screenBasedAttribute(screens, {
                            screen_sm: '14px',
                            screen_md: '14px',
                            screen_lg: '15px',
                            screen_xl: '18px'
                        }), color: 'var(--palette-white)', 
                        width: screenBasedAttribute(screens, {
                            screen_sm: '300px',
                            screen_md: '300px',
                            screen_lg: '480px',
                            screen_xl: '640px'
                        }),
                        fontFamily: 'Mono', lineHeight: '2', marginTop: '2.5rem'}}>
                        {props.children ? props.children : props.description}
                        </motion.p>
                </div>

            </Parallax>
        </motion.div>
    )
}

export default Article