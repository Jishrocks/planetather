/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
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
    let [logoRef, logoInView] = useInView()

    const [showScrollNotifier, setShowScrollNotifier] = useState(true)

    const [logoRotatation, setLogoRotation] = useState(20)

    useEffect(() => {
        let eventListener = () => {
            var scrollTop = document.documentElement.scrollTop
            if (scrollTop > 25) {
                setShowScrollNotifier(false)
            } else {
                setShowScrollNotifier(true)
            }
            setLogoRotation(20 + (scrollTop / 10))
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

    const logoTransition = {duration: 1, type: 'spring'}

    return (
        <div className="flex flex-col justify-center items-center h-screen md:h-[80vh] overflow-hidden md:overflow-visible">
            <Parallax className="absolute invisible md:visible" translateY={['0px', '-400px']} opacity={[2, 0]} scale={[0.7, 1.4]}>
                <div style={{transform: `perspective(500px) rotateX(${logoRotatation}deg)`}}>
                    <motion.img
                        ref={logoRef}
                        initial={"hidden"}
                        animate={logoAnimation}
                        variants={logoAnimationVariants}
                        transition={logoTransition}
                        className={`w-auto h-[40rem] xl:h-[50rem] md:transition-all md:duration-500`}
                        src="/images/ATHER_white_logo.png"
                    ></motion.img>
                    {/* lg:h-[50rem] xl:h-[60rem] */}
                </div>
            </Parallax>

            <Parallax className="absolute invisible md:visible" translateY={['0px', '100px']}>
                <motion.img
                className="w-auto h-[25rem] mb-24 md:transition-all md:duration-500"
                src="/images/Atherians_Grouped.png"
                ></motion.img>
                {/* lg:h-[30rem]  */}
            </Parallax>

            <div className="flex flex-col items-center md:hidden">
                <img
                className="w-auto max-w-none h-[130vh] mt-80"
                src="/images/sentinels/kayne.png"
                />
            </div>
            
            <div className="hidden md:flex flex-col absolute justify-center items-center w-[100vw] mt-[36rem]">
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