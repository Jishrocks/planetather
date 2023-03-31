import { motion, useAnimation } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";

const StarQuest = ({ children, viewRef }: any) => {
    const animation = useAnimation();
    const [ref, inView] = useInView();

    const animationVariants = {
        hidden: {
            y: 50,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const transition = {
        type: "spring",
        // delay: 0.7,
        duration: 1,
    };

    useEffect(() => {
        if (inView) {
            animation.start("visible");
            return;
        }
    }, [animation, inView]);

    const headingAnimationVariants = {
        hidden: {
            y: 150,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    const subheadingAnimationVariants = {
        hidden: {
            y: 150,
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 0.7,
        },
    };

    let router = useRouter();

    const headingTransition = { duration: 1, type: "spring" };

    const [glowing, setGlowing] = useState(false);

    return (
        <section
            className='z-50'
            // style={{
            //     backgroundImage:
            //         "linear-gradient(0.99turn, #050505 80%, transparent 90%)",
            // }}
            ref={viewRef}
            data-scroll-section
        >
            <Fade bottom>
                <div className='flex relative flex-col h-[35rem] lg:h-[40rem] xl:h-[48rem] w-screen items-center'>
                    <div className='flex flex-col justify-center items-center mt-40 z-30'>
                        <motion.h1
                            ref={ref}
                            animate={animation}
                            transition={headingTransition}
                            initial={"hidden"}
                            variants={subheadingAnimationVariants}
                            className='text-white font-body tracking-widest uppercase text-xs lg:text-sm'
                        >
                            Thy collective belief of roadmaps being primitive.
                        </motion.h1>
                        <motion.h1
                            ref={ref}
                            animate={animation}
                            transition={headingTransition}
                            initial={"hidden"}
                            variants={headingAnimationVariants}
                            className='text-white font-display tracking-wide uppercase text-6xl lg:text-7xl'
                        >
                            Starquest
                        </motion.h1>
                    </div>

                    <img
                        style={{
                            transform: "translate(-50%,-50%)",
                            filter: glowing
                                ? "drop-shadow(0px 0px 100px #ffffff50)"
                                : "none",
                            opacity: glowing ? 1 : 0.1,
                            transition:
                                "opacity 1s ease-in-out, filter 1s ease-in-out",
                        }}
                        className='absolute mt-36 w-[45vw] xl:w-[40.5rem] h-auto left-[50%] top-[50%]'
                        src='/images/starquestMap.png'
                        alt='starquestMap'
                    />

                    <div
                        style={{
                            transform: "translate(-49.6%, -52%)",
                            aspectRatio: "2.65 / 1",
                        }}
                        className='mt-36 absolute grid grid-rows-3 grid-cols-2 w-[80vw] xl:w-[72rem] h-auto left-[50%] top-[50%] z-10'
                    >
                        <div className='flex items-center'>
                            <motion.h1
                                onHoverStart={() => {
                                    setGlowing(true);
                                }}
                                onHoverEnd={() => {
                                    setGlowing(false);
                                }}
                                onClick={() => {
                                    localStorage.setItem(
                                        "starquestPredefinedSlide",
                                        "vision"
                                    );
                                    router.push("/starquest");
                                }}
                                className='font-display text-sm xl:text-xl bg-black text-white ml-auto mr-[48%] cursor-pointer'
                            >
                                Vision
                            </motion.h1>
                        </div>
                        <div className='flex items-center'>
                            <motion.h1
                                onHoverStart={() => {
                                    setGlowing(true);
                                }}
                                onHoverEnd={() => {
                                    setGlowing(false);
                                }}
                                onClick={() => {
                                    localStorage.setItem(
                                        "starquestPredefinedSlide",
                                        "irl"
                                    );
                                    router.push("/starquest");
                                }}
                                className='font-display text-sm xl:text-xl bg-black text-white mr-auto ml-[48%] cursor-pointer'
                            >
                                IRL
                            </motion.h1>
                        </div>
                        <div className='flex items-center'>
                            <motion.h1
                                onHoverStart={() => {
                                    setGlowing(true);
                                }}
                                onHoverEnd={() => {
                                    setGlowing(false);
                                }}
                                onClick={() => {
                                    localStorage.setItem(
                                        "starquestPredefinedSlide",
                                        "community"
                                    );
                                    router.push("/starquest");
                                }}
                                className='font-display text-sm xl:text-xl bg-black text-white ml-auto mr-[59%] cursor-pointer'
                            >
                                Community
                            </motion.h1>
                        </div>
                        <div className='flex items-center'>
                            <motion.h1
                                onHoverStart={() => {
                                    setGlowing(true);
                                }}
                                onHoverEnd={() => {
                                    setGlowing(false);
                                }}
                                onClick={() => {
                                    localStorage.setItem(
                                        "starquestPredefinedSlide",
                                        "integration"
                                    );
                                    router.push("/starquest");
                                }}
                                className='font-display text-sm xl:text-xl bg-black text-white mr-auto ml-[58%] cursor-pointer'
                            >
                                Integration
                            </motion.h1>
                        </div>
                        <div className='flex items-center'>
                            <motion.h1
                                onHoverStart={() => {
                                    setGlowing(true);
                                }}
                                onHoverEnd={() => {
                                    setGlowing(false);
                                }}
                                onClick={() => {
                                    localStorage.setItem(
                                        "starquestPredefinedSlide",
                                        "neural"
                                    );
                                    router.push("/starquest");
                                }}
                                className='font-display text-sm xl:text-xl bg-black text-white ml-auto mr-[48%] cursor-pointer'
                            >
                                Neural Networks
                            </motion.h1>
                        </div>
                        <div className='flex items-center'>
                            <motion.h1
                                onHoverStart={() => {
                                    setGlowing(true);
                                }}
                                onHoverEnd={() => {
                                    setGlowing(false);
                                }}
                                onClick={() => {
                                    localStorage.setItem(
                                        "starquestPredefinedSlide",
                                        "collaborations"
                                    );
                                    router.push("/starquest");
                                }}
                                className='font-display text-sm xl:text-xl bg-black text-white mr-auto ml-[48%] cursor-pointer'
                            >
                                Collaborations
                            </motion.h1>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center w-screen mt-0'>
                    <div
                        onClick={() => {
                            router.push("/starquest");
                        }}
                        className='cursor-pointer text-xs lg:text-sm text-black bg-white backdrop-blur-lg w-fit px-4 h-12 mt-10 rounded-md flex justify-center items-center font-body'
                    >
                        EXPLORE STARQUEST
                    </div>
                </div>
            </Fade>
        </section>
    );
};

export default StarQuest;
