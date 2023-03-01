import styled from "@emotion/styled"
import { motion, useAnimation } from "framer-motion"
import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const StarQuest = ({children}: any) => {
    
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
            y: 150,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    const headingTransition = {duration: 1, type: 'spring'}

    const [glowing, setGlowing] = useState(false)

    return (
        <div className="flex flex-col h-screen w-screen items-center">
            <div className="flex flex-col justify-center items-center mt-40 z-30">
                <motion.h1
                ref={ref}
                animate={animation}
                transition={headingTransition}
                initial={"hidden"}
                variants={headingAnimationVariants}
                className="text-white font-body tracking-widest uppercase text-xs lg:text-sm"
                >
                    Thy collective belief of roadmaps being primitive.
                </motion.h1>
                <motion.h1
                ref={ref}
                animate={animation}
                transition={headingTransition}
                initial={"hidden"}
                variants={headingAnimationVariants}
                className="text-white font-display tracking-wide uppercase text-6xl lg:text-7xl"
                >
                Starquest
                </motion.h1>
            </div>


            <img
                style={{
                transform: "translate(-50%,-50%)",
                filter: glowing ? 'drop-shadow(0px 0px 100px #ffffff50)' : 'none',
                opacity: glowing ? 1 : 0.1,
                }}
                className="absolute w-[45vw] h-auto left-[50%] top-[50%] transition-all duration-1000"
                src="/images/starquestMap.png"
                alt="starquestMap"
            />

            <div style={{transform: 'translate(-49.6%, -52%)', aspectRatio: '2.15 / 1'}} className="absolute grid grid-rows-3 grid-cols-2 w-[65vw] h-auto left-[50%] top-[50%] z-10">
                <div className="flex items-center">
                    <motion.h1 
                    onHoverStart={() => {
                        setGlowing(true)
                    }} 
                    onHoverEnd={() => {
                        setGlowing(false)
                    }}
                    className="font-display text-2xl text-white ml-40 cursor-pointer">Vision</motion.h1>
                </div>
                <div className="flex items-center">
                    <motion.h1 
                    onHoverStart={() => {
                        setGlowing(true)
                    }} 
                    onHoverEnd={() => {
                        setGlowing(false)
                    }}
                    className="font-display text-2xl text-white ml-auto mr-52 cursor-pointer">IRL</motion.h1>
                </div>
                <div className="flex items-center">
                    <motion.h1 
                    onHoverStart={() => {
                        setGlowing(true)
                    }} 
                    onHoverEnd={() => {
                        setGlowing(false)
                    }}
                    className="font-display text-2xl text-white ml-4 cursor-pointer">Community</motion.h1>
                </div>
                <div className="flex items-center">
                    <motion.h1 
                    onHoverStart={() => {
                        setGlowing(true)
                    }} 
                    onHoverEnd={() => {
                        setGlowing(false)
                    }}
                    className="font-display text-2xl text-white ml-auto mr-2 cursor-pointer">Integration</motion.h1>
                </div>
                <div className="flex items-center">
                    <motion.h1 
                    onHoverStart={() => {
                        setGlowing(true)
                    }} 
                    onHoverEnd={() => {
                        setGlowing(false)
                    }}
                    className="font-display text-2xl text-white cursor-pointer">Neural Networks</motion.h1>
                </div>
                <div className="flex items-center">
                    <motion.h1 
                    onHoverStart={() => {
                        setGlowing(true)
                    }} 
                    onHoverEnd={() => {
                        setGlowing(false)
                    }}
                    className="font-display text-2xl text-white ml-auto mr-8 cursor-pointer">Collaboration</motion.h1>
                </div>
            </div>
        </div>
    )
}

export default StarQuest