/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React, { useEffect, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, EffectCoverflow, Mousewheel } from "swiper";
import Article from "../components/Article";
import { ParallaxProvider } from "react-scroll-parallax";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar, { Page } from "../components/Navbar";
import Head from "next/head";

import Image from "next/image";

type SlideProps = {
    className?: string;
    heading: string;
    subheading: string;
    description?: string;
    children?: React.ReactNode;
};

function Slide(props: SlideProps) {
    const animation = useAnimation();
    const [ref, inView] = useInView();

    const animationVariants = {
        hidden: {
            y: 150,
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

    let [content, setContent] = useState<any>(null);

    useEffect(() => {
        return setContent(props.children ? props.children : props.description);
    }, [props.children, props.description]);

    return (
        <div className='flex w-screen h-screen items-center'>
            <motion.div
                className={
                    "grid grid-cols-1 md:ml-16 mr-20 mt-20 mb-20 h-auto " +
                    props.className
                }
            >
                <div className='flex flex-col ml-10 lg:ml-20'>
                    <motion.h1
                        ref={ref}
                        animate={animation}
                        variants={animationVariants}
                        transition={transition}
                        initial={"hidden"}
                        className='text-white w-[300px] lg:w-[480px] xl:w-[640px] opacity-70 uppercase font-subheading text-3xl'
                    >
                        {props.subheading}
                    </motion.h1>
                    <div>
                        <motion.h1
                            ref={ref}
                            animate={animation}
                            variants={animationVariants}
                            transition={transition}
                            initial={"hidden"}
                            className='text-white font-display text-5xl lg:text-6xl uppercase'
                        >
                            {props.heading}
                        </motion.h1>
                    </div>

                    <p className='content text-white text-sm lg:text-md font-body mt-10 leading-7 w-[480px] xl:w-[640px]'>
                        {content}
                    </p>
                </div>
            </motion.div>
        </div>
    );
}

const Sentinels: NextPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Head>
                <title>Ather • Sentinels</title>
                <meta property='og:title' content='Ather' />
                <meta
                    name='og:description'
                    content="Ather is a brand owned by it's community. A community that empowers creative minds to bring their ideas to life. We ignite Comics Pop culture across the internet, hands together."
                />
                <meta
                    property='og:image'
                    content='https://planetather.io/_next/image?url=%2Fimages%2Father4.png&w=1920&q=40'
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta property='twitter:domain' content='planetather.io' />
                <meta property='twitter:url' content='https://planetather.io' />
                <meta name='twitter:title' content='Ather' />
                <meta
                    name='twitter:description'
                    content="Ather is a brand owned by it's community. A community that empowers creative minds to bring their ideas to life. We ignite Comics Pop culture across the internet, hands together."
                />
                <meta
                    name='twitter:image'
                    content='https://planetather.io/_next/image?url=%2Fimages%2Father4.png&w=1920&q=40'
                />

                <link rel='icon' href='/favicon.ico' />
            </Head>

            <ParallaxProvider>
                <Navbar currentPage={Page.SENTINELS} fixed={true} />
                <div className='w-screen h-screen flex relative bg-[#000] overflow-hidden'>
                    {/* <AnimatedGradient animationDirection={"left"} /> */}
                    <Swiper
                        speed={700}
                        mousewheel={{ releaseOnEdges: true }}
                        onSlideChange={(s) => {
                            setActiveIndex(s.activeIndex);
                        }}
                        pagination={{
                            renderBullet: (index, className) => {
                                return "";
                            },
                        }}
                        direction={"horizontal"}
                        // effect={"coverflow"}
                        style={{ width: "100%" }}
                        modules={[Pagination, EffectCoverflow, Mousewheel]}
                        className='starquest z-50'
                    >
                        <SwiperSlide>
                            <Slide heading={"Syké"} subheading={"01"}>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex gap-4 w-full'>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                ABILITY
                                            </span>
                                            <span className='ml-4'>
                                                THUNDER
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                WEAKNESS
                                            </span>
                                            <span className='ml-4'>TERRA</span>
                                        </div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                ORIGIN
                                            </span>
                                            <span className='ml-4'>ATHER</span>
                                        </div>
                                    </div>
                                    <p className='mt-0'>
                                        She walks with thunder in her step and
                                        fire in her eyes.
                                        <br />
                                        A fearless powerhouse who commands the
                                        skies <br />
                                        and inspires awe with her fierce and
                                        feisty nature.
                                    </p>
                                </div>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide heading={"Cascade"} subheading={"02"}>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex gap-4'>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                ABILITY
                                            </span>
                                            <span className='ml-4'>
                                                DARK ENERGY
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                WEAKNESS
                                            </span>
                                            <span className='ml-4'>NONE</span>
                                        </div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                ORIGIN
                                            </span>
                                            <span className='ml-4'>ATHER</span>
                                        </div>
                                    </div>
                                    <p className='mt-0'>
                                        He is the master of the unknown, a
                                        mysterious enigma with a <br />
                                        sharp wit and the power to manipulate
                                        the darkness, <br />
                                        always one step ahead in a game that
                                        only he fully understands.
                                    </p>
                                </div>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide heading={"KAYNE"} subheading={"03"}>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex gap-4'>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                ABILITY
                                            </span>
                                            <span className='ml-4'>
                                                INFERNO
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                WEAKNESS
                                            </span>
                                            <span className='ml-4'>AQUA</span>
                                        </div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            <span className='opacity-60'>
                                                ORIGIN
                                            </span>
                                            <span className='ml-4'>ATHER</span>
                                        </div>
                                    </div>
                                    <p className='mt-0'>
                                        With a heart of gold and a soul of fire,
                                        he stands strong, <br />
                                        wielding the power of flames to protect
                                        the innocent <br />
                                        and spread warmth to all he encounters.
                                    </p>
                                </div>
                            </Slide>
                        </SwiperSlide>
                    </Swiper>
                    <div
                        className={`fixed right-0 pointer-events-none transition-all bottom-0 xl:bottom-auto ${
                            activeIndex === 0 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className='w-[40rem] lg:w-[50rem] pointer-events-none max-w-none h-[90vh] xl:h-[110vh] mt-56 xl:mt-20 -z-0 relative opacity-30 lg:opacity-100'>
                            <Image
                                alt=''
                                layout='fill'
                                objectFit='contain'
                                className='pointer-events-none'
                                src='/images/sentinels/syke-h.png'
                            />
                            <div
                                style={{
                                    background:
                                        "linear-gradient(to bottom, transparent, #000 90%)",
                                }}
                                className='absolute w-[300vh] h-[70vh] bottom-0'
                            ></div>
                        </div>
                    </div>
                    <div
                        className={`fixed right-0 pointer-events-none transition-all bottom-0 xl:bottom-auto ${
                            activeIndex === 1 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className='w-[40rem] lg:w-[50rem] pointer-events-none max-w-none h-[90vh] xl:h-[110vh] mt-56 xl:mt-20 -z-0 relative opacity-30 lg:opacity-100'>
                            <Image
                                alt=''
                                layout='fill'
                                objectFit='contain'
                                className='pointer-events-none'
                                src='/images/sentinels/cascade-h.png'
                            />
                            <div
                                style={{
                                    background:
                                        "linear-gradient(to bottom, transparent, #000 90%)",
                                }}
                                className='absolute w-[300vh] h-[70vh] bottom-0'
                            ></div>
                        </div>
                    </div>
                    <div
                        className={`fixed right-0 pointer-events-none transition-all bottom-0 xl:bottom-auto ${
                            activeIndex === 2 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className='w-[40rem] lg:w-[50rem] pointer-events-none max-w-none h-[90vh] xl:h-[110vh] mt-56 xl:mt-20 -z-0 relative opacity-30 lg:opacity-100'>
                            <Image
                                alt=''
                                layout='fill'
                                objectFit='contain'
                                className='pointer-events-none'
                                src='/images/sentinels/kayne-h.png'
                            />
                            <div
                                style={{
                                    background:
                                        "linear-gradient(to bottom, transparent, #000 90%)",
                                }}
                                className='absolute w-[300vh] h-[70vh] bottom-0'
                            ></div>
                        </div>
                    </div>

                    <div className='fixed w-screen h-[2rem] lg:w-[2rem] lg:h-screen bottom-0 lg:left-0 flex flex-row lg:flex-col gap-2 items-center justify-center lg:ml-9 mt-16 px-24 lg:mt-0 lg:px-0'>
                        {Array(3)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className={
                                        "rounded-md bg-white transition-opacity w-full h-1 lg:w-1 lg:h-20 " +
                                        (activeIndex == i
                                            ? "opacity-100"
                                            : "opacity-20")
                                    }
                                ></div>
                            ))}
                    </div>
                </div>
            </ParallaxProvider>
        </>
        // <div>
        //
        // </div>
    );
};

export default Sentinels;
