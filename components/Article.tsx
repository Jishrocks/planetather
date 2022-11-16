import { motion, useAnimation } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {useMediaQuery, screenBasedAttribute} from "../lib/mediaQuery";

const Article = ({align, image, imageStyle, heading, subheading, description}) => {

    const animation = useAnimation()
    const [ref, inView] = useInView()

    let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

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
        style={{display: 'grid', gridTemplateColumns: '1fr 1fr', marginLeft: screenBasedAttribute(screens, {
            screen_sm: '0rem',
            screen_md: '4rem',
            screen_lg: '4rem',
            screen_xl: '4rem'
        }), marginRight: '4rem', marginTop: '5rem', marginBottom: '5rem', height: 'auto', zIndex: 2}}>
            

            <div style={{display: screenBasedAttribute(screens, {
                screen_sm: 'none', 
                screen_md: 'flex',
                screen_lg: 'flex',
                screen_xl: 'flex'
            }), order: align == 'left' ? 1 : 'unset', flexDirection: 'row', gap: 6, justifyContent: 'center', alignItems: 'center'}}>
                <img src={image} width={screenBasedAttribute(screens, {
                    screen_sm: '200px',
                    screen_md: '200px',
                    screen_lg: '300px',
                    screen_xl: '400px'
                })} style={imageStyle} alt="" />
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: align == 'left' ? 'end' : 'start', marginLeft: '5rem'}}>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-gradient'
                    style={{font: screenBasedAttribute(screens, {
                        screen_sm: '400 0.65rem/80% Mono',
                        screen_md: '400 0.75rem/80% Mono',
                        screen_lg: '400 0.8rem/80% Mono',
                        screen_xl: '400 0.9rem/80% Mono'
                    }), 
                    width: screenBasedAttribute(screens, {
                        screen_sm: '300px',
                        screen_md: '300px',
                        screen_lg: '480px',
                        screen_xl: '640px'
                    }),
                    letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        {subheading}
                </motion.h1>
                <motion.h1
                    ref={ref}
                    animate={animation}
                    transition={headingTransition}
                    initial={"hidden"}
                    variants={headingAnimationVariants}
                    className='text-gradient'
                    style={{font: screenBasedAttribute(screens, {
                        screen_sm: '400 4rem/80% FKScreamer',
                        screen_md: '400 4rem/80% FKScreamer',
                        screen_lg: '400 5rem/80% FKScreamer',
                        screen_xl: '400 6rem/80% FKScreamer'
                    }), 
                    width: screenBasedAttribute(screens, {
                        screen_sm: '300px',
                        screen_md: '300px',
                        screen_lg: '480px',
                        screen_xl: '640px'
                    }),
                    letterSpacing: '4px', textTransform: 'uppercase', marginBlock: 0}}>
                        {heading}
                </motion.h1>

                <motion.p className="content" style={{fontSize: screenBasedAttribute(screens, {
                    screen_sm: '14px',
                    screen_md: '14px',
                    screen_lg: '15px',
                    screen_xl: '16px'
                }), color: 'var(--palette-white)', 
                width: screenBasedAttribute(screens, {
                    screen_sm: '300px',
                    screen_md: '300px',
                    screen_lg: '480px',
                    screen_xl: '640px'
                }),
                fontFamily: 'Mono', lineHeight: '1.5', marginTop: '2.5rem'}}>
                {description}
                </motion.p>
            </div>
        </motion.div>
    )
}

export default Article