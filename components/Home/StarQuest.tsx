import Grid from "@mui/material/Grid";
import { motion, useAnimation } from "framer-motion";

import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import { screenBasedAttribute, useMediaQuery } from "../../lib/mediaQuery";

import assetsStyles from '../../styles/assets.module.css'

const StarQuest = ({children}: any) => {

    const animation = useAnimation()
    const [ref, inView] = useInView()
    
    const viewRef = useRef(null)

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

    const topicAnimation = useAnimation()
    const topicAnimationVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }

    const transition = {
        type: 'spring',
        // delay: 0.7,
        duration: 1
    }

    let topics = [
        {name: 'Inspiration', description: 'We decided to bring back that spirit of creativity by creating a universe and making a whole new world of entertainment. But this time, you get to create the stories the way you want, just like how you once dreamt. Character building, storylines, trailers, web series, and fan-made videos are just a few to name. So Get high on your imaginations, cause you’ve got a whole new universe to build!'},
        
        {name: 'Community', description: 
        `        We are Atherians: We at Ather believe in greatness through collective creativity. Community is the priority. Work with us in paving an amazing universe like never before.

        The Movement: Shoutout to all the young talents, we urge you to be a part of our creator’s deck. Ather welcomes you aboard to join the movement. Application Process will commence post mint.  Good creative ideas that will be a part of the universe will get surprising grants through our special grant program.`},
        
        {name: 'Neural Networks', description: 
        `        Socials: Separated by borders and oceans, we are united with the power of decentralization. Twitter and Discord are the places where we ignite the magic.

        Character Development: Agility or Stealth, Power or Mystique, you get to create unique yet dynamic characters that will rule the universe. These characters will play an important role in defining how the story proceeds. `
        },

        {name: 'Physical World', description: 
        `Apparels and Wearables: Atherians are hipsters, and we dress like one. Drape wear defines us. Grab yours and wear it with pride. When the store opens, the inauguration event winner to receive drops.`
        },
    ]

    const [currentTopic, setCurrentTopic] = useState(topics[0])
    const [topicIndex, setTopicIndex] = useState(0)
    let interval = 300 // pixels

    const topicTransition = {
        type: 'spring',
        // delay: 0.7,
        duration: 1
    }

    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        topicAnimation.start('hiden').then(() => {
            setCurrentTopic(topics[topicIndex])
            topicAnimation.start('visile')
        })
    }, [topicIndex])

    useEffect(() => {
        console.log(scrollPercentage)
    }, [scrollPercentage])

    useEffect(() => {
        let eventListener = async() => {
            var scrollTop = document.documentElement.scrollTop
            if ((viewRef.current as any)) {
                let index = parseInt(((scrollTop - (viewRef.current as any).offsetTop) / interval) as any)

                let range = ((viewRef.current as any).offsetTop + (viewRef.current as any).offsetHeight - (interval * 2)) - (viewRef.current as any).offsetTop
                let progress = scrollTop - (viewRef.current as any).offsetTop
                let _scrollPercentage = parseInt((progress / range) * 100)
                
                if(_scrollPercentage >= 0 && _scrollPercentage <= 100) {
                    setScrollPercentage(_scrollPercentage)
                }

                if (topics[index]) {
                    setTopicIndex(index)
                }
            }
        }
        window.addEventListener('scroll', eventListener)
        if (inView) {
            topicAnimation.start('visible')
            animation.start("visible")
            return
        }

        return () => {
            window.removeEventListener('scroll', eventListener)
        }
    }, [inView])


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
        <div ref={viewRef} style={{height: `${(interval * topics.length) + ((interval * 2) + 100)}px`}}>
            <motion.div 
            transition={transition}
            ref={ref}
            variants={animationVariants}
            initial={"hidden"}
            animate={animation}
            style={{display: 'flex', marginLeft: screenBasedAttribute(screens, {
                screen_sm: '4rem',
                screen_md: '4rem',
                screen_lg: '4rem',
                screen_xl: '4rem'
            }), marginRight: '4rem', position: 'sticky', top: screenBasedAttribute(screens, {
                screen_sm: '10%',
                screen_md: '15%',
                screen_lg: '15%',
                screen_xl: '15%'
            }), marginTop: '5rem', marginBottom: '5rem', height: 'auto', zIndex: 2}}>

                <div style={{display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'left', alignItems: 'left', marginLeft: screenBasedAttribute(screens, {
                    screen_sm: '0',
                    screen_md: '5rem',
                    screen_lg: '5rem',
                    screen_xl: '5rem'
                })}}>
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
                            Around the cosmos - {scrollPercentage}%
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
                            Starquest
                    </motion.h1>

                    <motion.div animate={topicAnimation} transition={topicTransition} initial={'hidden'} variants={topicAnimationVariants} style={{display: 'flex', width: '100%', height: screenBasedAttribute(screens, {
                        screen_sm: '30rem',
                        screen_md: '25rem',
                        screen_lg: '25rem',
                        screen_xl: '25rem'
                    }), background: 'rgb(9, 9, 9)', border: `1px solid rgba(100, 100, 100, ${scrollPercentage}%)`, marginTop: '2.5rem', borderRadius: '10px'}}>
                        <motion.p className="content" style={{fontSize: screenBasedAttribute(screens, {
                            screen_sm: '14px',
                            screen_md: '14px',
                            screen_lg: '15px',
                            screen_xl: '16px'
                        }), color: 'var(--palette-white)', 
                        width: screenBasedAttribute(screens, {
                            screen_sm: 'auto',
                            screen_md: 'auto',
                            screen_lg: '640px',
                            screen_xl: '640px'
                        }),
                        fontFamily: 'Mono', lineHeight: '1.5', margin: '2.5rem'}}>

                        <span style={{font: screenBasedAttribute(screens, {
                            screen_sm: '400 1rem/80% Mono',
                            screen_md: '400 1rem/80% Mono',
                            screen_lg: '400 1.1rem/80% Mono',
                            screen_xl: '400 1.2rem/80% Mono'
                        }), letterSpacing: '2px', textTransform: 'uppercase'}}>{currentTopic.name}</span>
                        <br></br>
                        <br></br>
                        {currentTopic.description}
                        </motion.p>

                        <img style={{position: 'absolute', width: '35rem', height: '35rem', transform: 'translateY(-8rem) translateX(47.5vw)', transition: '0.25s opacity', opacity: screenBasedAttribute(screens, {
                            screen_sm: 0,
                            screen_md: 0,
                            screen_lg: 1,
                            screen_xl: 1
                        })}} src="https://cdn.discordapp.com/attachments/934914135613931593/1057384479267758110/Male_Dress_1.png" alt="" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default StarQuest