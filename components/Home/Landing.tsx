import { TextScramble } from "../ScrambledText";
import { motion, useAnimation } from "framer-motion";

import React, { useEffect, useState } from "react";
import Lottie from 'react-lottie';
import scrollDown from '../../public/scroll-down.json'

import { useMediaQuery, screenBasedAttribute } from "../../lib/mediaQuery";
import { Parallax } from "react-scroll-parallax";
import { useInView } from "react-intersection-observer";

import Tilt from 'react-parallax-tilt';

const Landing = ({children}: any) => {

    let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

    let logoAnimation = useAnimation()
    let logoInView = useInView()

    const [showScrollNotifier, setShowScrollNotifier] = useState(true)

    useEffect(() => {
        let eventListener = () => {
            var scrollTop = document.documentElement.scrollTop
            if (scrollTop > 25) {
                setShowScrollNotifier(false)
            } else {
                setShowScrollNotifier(true)
            }
        }
        window.addEventListener('scroll', eventListener)
    }, [])

    useEffect(() => {
        if (logoInView) {
            logoAnimation.start("visible")
            return
        }
    }, [logoAnimation, logoInView])

    const logoAnimationVariants = {
        hidden: {
            y: 150,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    const logoTransition = {duration: 1.5, type: 'spring'}

    let [logoTiltScale, setLogoTiltScale] = useState(1)

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh', marginLeft: '0rem', overflow: 'visible'}}>
            <Parallax translateY={['0px', '-400px']} opacity={[2, 0]} scale={[0.7, 1.4]} style={{position: 'absolute', opacity: 1}}>
                <div style={{transform: 'perspective(500px) rotateX(20deg)'}}>
                    <motion.img
                        initial={"hidden"}
                        animate={logoAnimation}
                        variants={logoAnimationVariants}
                        transition={logoTransition}
                        style={{width: 'auto', height: '60rem'}}
                        src="/images/ATHER_white_logo.png"
                    ></motion.img>
                </div>
            </Parallax>

            <Parallax translateY={['0px', '100px']} style={{position: 'absolute', opacity: 1}}>
                <motion.img
                style={{width: 'auto', height: '30rem'}}
                src="/images/Atherians_Grouped.png"
                ></motion.img>
            </Parallax>
            
            
            {/* <motion.video
            autoPlay
            loop
            muted
            playsInline
            style={{width: 'auto', height: '100vh', position: 'absolute', opacity: 0.1}}
            // src="/images/imageedit_1_3446488580.png"
            src="/videos/landing.mp4"
            ></motion.video> */}
            
            {/* <motion.img
				style={{width: '130vw', position: 'absolute', transform: 'translateX(3rem) translateY(5rem)', opacity: 0.8}}
				src="/images/graffitti.png"
            ></motion.img> */}

            {/* <div style={{
                transform: screenBasedAttribute(screens, {
                    screen_sm: 'translateY(10rem)',
                    screen_md: '',
                    screen_lg: '',
                    screen_xl: ''
                }),
                fontSize: '7.5rem' 
            }}>
                <h1 style={{fontFamily: 'FKScreamer', fontSize: screenBasedAttribute(screens, {
                    screen_sm: '0.5em',
                    screen_md: '0.8em',
                    screen_lg: '1em',
                    screen_xl: '1.125em'
                }), opacity: 0.7, textAlign: 'center', color: '#fff', marginBlock: '0rem', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 0 100px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', lineHeight: 1}}>
                    we are
                </h1>
            </div>
            <div style={{
                transform: screenBasedAttribute(screens, {
                    screen_sm: 'translateY(10rem)',
                    screen_md: '',
                    screen_lg: '',
                    screen_xl: ''
                }),
                fontSize: '14rem',
                zIndex: 0,
            }}>
                <h1 style={{fontFamily: 'Mandalore', fontSize: screenBasedAttribute(screens, {
                    screen_sm: '0.5em',
                    screen_md: '0.8em',
                    screen_lg: '1em',
                    screen_xl: '1.125em'
                }), textAlign: 'center', color: '#fff', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', zIndex: 0}}>
                    <TextScramble text="ather"></TextScramble>
                </h1>
            </div> */}
            <div style={{display: screenBasedAttribute(screens, {
                screen_sm: 'flex',
                screen_md: 'flex',
                screen_lg: 'flex',
                screen_xl: 'flex'
            }), opacity: showScrollNotifier ? 1 : 0, transition: 'opacity 0.25s', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'absolute', width: '100vw', transform: screenBasedAttribute(screens, {
                screen_sm: 'translateY(22rem)',
                screen_md: 'translateY(23rem)',
                screen_lg: 'translateY(23rem)',
                screen_xl: 'translateY(23rem)'
            })}}>
				<Lottie
					style={{opacity: 1, filter: 'invert()'}}
					options={{animationData: scrollDown, autoplay: true, loop: true}}
					height={screenBasedAttribute(screens, {
                        screen_sm: 40,
                        screen_md: 50,
                        screen_lg: 50,
                        screen_xl: 50
                    })}
					width={screenBasedAttribute(screens, {
                        screen_sm: 40,
                        screen_md: 50,
                        screen_lg: 50,
                        screen_xl: 50
                    })}
				/>
				<h1 style={{fontFamily: 'Mono', color: 'silver', fontSize: screenBasedAttribute(screens, {
                    screen_sm: '0.5rem',
                    screen_md: '0.5625rem',
                    screen_lg: '0.5625rem',
                    screen_xl: '0.5625rem'
                }), marginBlock: 0, textTransform: 'uppercase', marginTop: '0.5625rem', letterSpacing: '0.5px'}}>Scroll to view more</h1>
			</div>
            {/* <motion.img
            style={{
                width: screenBasedAttribute(screens, {
                    screen_sm: '10rem',
                    screen_md: '18rem',
                    screen_lg: '25rem',
                    screen_xl: '50rem',
                }), 
                position: 'absolute', 
                marginLeft: screenBasedAttribute(screens, {
                    screen_sm: '0px',
                    screen_md: '500px',
                    screen_lg: '660px',
                    screen_xl: '-850px',
                }), 
                marginTop: screenBasedAttribute(screens, {
                    screen_sm: '0px',
                    screen_md: '310px',
                    screen_lg: '440px',
                    screen_xl: '560px'
                }),
                marginBottom: screenBasedAttribute(screens, {
                    screen_sm: '136px',
                    screen_md: '0px',
                    screen_lg: '0px',
                    screen_xl: '0px'
                }),
                filter: 'drop-shadow(-12px 12px 30px rgba(255, 255, 255, 0.05))',
                zIndex: 1}}
            src="https://cdn.discordapp.com/attachments/934914135613931593/1047966297297801226/Untitled_Artwork.png"
            >
            </motion.img> */}
            {/* <motion.img
            style={{
                width: screenBasedAttribute(screens, {
                    screen_sm: '10rem',
                    screen_md: '18rem',
                    screen_lg: '25rem',
                    screen_xl: '50rem',
                }), 
                position: 'absolute', 
                marginLeft: screenBasedAttribute(screens, {
                    screen_sm: '0px',
                    screen_md: '500px',
                    screen_lg: '660px',
                    screen_xl: '850px',
                }), 
                marginTop: screenBasedAttribute(screens, {
                    screen_sm: '0px',
                    screen_md: '310px',
                    screen_lg: '440px',
                    screen_xl: '560px'
                }),
                marginBottom: screenBasedAttribute(screens, {
                    screen_sm: '136px',
                    screen_md: '0px',
                    screen_lg: '0px',
                    screen_xl: '0px'
                }),
                filter: 'drop-shadow(-12px 12px 30px rgba(255, 255, 255, 0.05))',
                zIndex: 1}}
            src="https://media.discordapp.net/attachments/934914135613931593/1044196100652929034/Untitled_Artwork.png"
            >
            </motion.img> */}
            {/* <div style={{position: 'absolute', width: '400px', transform: 'translateY(10rem)'}}>
                <svg style={{filter: 'blur(300px)'}} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#F2F4F8" d="M40.4,-52.1C55.3,-44.8,72.4,-36.9,79.5,-23.8C86.5,-10.7,83.5,7.8,75,21.3C66.4,34.9,52.1,43.5,38.7,52.9C25.3,62.2,12.6,72.2,0.1,72C-12.4,71.8,-24.7,61.4,-36,51.4C-47.3,41.4,-57.5,31.7,-62,19.7C-66.4,7.8,-65,-6.4,-60.2,-19.1C-55.5,-31.7,-47.3,-42.7,-36.7,-51.5C-26,-60.2,-13,-66.6,-0.1,-66.4C12.7,-66.2,25.5,-59.4,40.4,-52.1Z" transform="translate(100 100)" />
                </svg>
            </div> */}
            {/* <motion.img
            style={{width: '50rem', position: 'absolute', marginLeft: '1020px', marginTop: '250px', filter: 'drop-shadow(-12px 12px 30px rgba(255, 255, 255, 0.7))'}}
            src="https://cdn.discordapp.com/attachments/934914135613931593/1040649571895873656/1.gif"
            >
            </motion.img> */}

            {/* <motion.img
            style={{width: '24rem', position: 'absolute', marginRight: '900px', marginTop: '400px', filter: 'drop-shadow(12px 12px 30px rgba(0, 0, 0, 0.3))'}}
            src="/images/salvo3.png"
            >
            </motion.img> */}
            
        </div>
    )
}

export default Landing