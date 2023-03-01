import { motion, useAnimation } from "framer-motion";

import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import {useMediaQuery, screenBasedAttribute} from "../lib/mediaQuery";
import Fade from 'react-reveal/Fade';

type ArticleProps = {
    align: 'left' | 'right',
    image?: string,
    imageClass?: string,
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
        className="grid grid-cols-1 xl:grid-cols-2 md:ml-16 mr-20 mt-20 mb-20 h-auto">

            <div className="flex flex-row gap-1 justify-center items-center" style={{order: props.align == 'left' ? 1 : 'unset'}}>
                <Parallax translateY={['150px', '0px']}>
                    {props.image && 
                    <Fade>
                        <img src={props.image} className={props.imageClass ? props.imageClass : `w-[60%] h-auto ml-auto mr-auto`} alt="comics1" />
                    </Fade>
                    }
                </Parallax>
            </div>

            <Parallax translateY={['75px', '0px']}>
                <div className="flex flex-col ml-10 lg:ml-20" style={{alignItems: props.align == 'left' ? 'start' : 'start'}}>
                        <motion.h1
                            ref={ref}
                            animate={animation}
                            variants={animationVariants}
                            transition={transition}
                            initial={"hidden"}
                            className='text-white w-[300px] lg:w-[480px] xl:w-[640px] opacity-70 uppercase font-subheading text-3xl'>
                                {props.subheading}
                        </motion.h1>
                        <div>
                            <motion.h1
                                ref={ref}
                                animate={animation}
                                variants={animationVariants}
                                transition={transition}
                                initial={"hidden"}
                                className='text-white font-display text-5xl lg:text-6xl uppercase'>
                                    {props.heading}
                            </motion.h1>
                        </div>

                        <p className="content text-white text-sm lg:text-md font-body mt-10 leading-7 w-[480px] xl:w-[640px]">
                        {props.children ? props.children : props.description}
                        </p>
                </div>

            </Parallax>
        </motion.div>
    )
}

export default Article