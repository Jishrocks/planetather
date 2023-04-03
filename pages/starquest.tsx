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
import { useRouter } from "next/router";
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

const Starquest: NextPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            <Head>
                <title>Ather • StarQuest</title>
                <meta
                    name='description'
                    content="idk right now I'll change this later"
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property='og:url' content='https://example.com' />
                <meta property='og:type' content='website' />
                <meta property='og:title' content='Ather' />
                <meta property='og:description' content='undefined' />
                <meta property='og:image' content='' />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name='twitter:card' content='summary_large_image' />
                <meta property='twitter:domain' content='example.com' />
                <meta property='twitter:url' content='https://example.com' />
                <meta name='twitter:title' content='Ather' />
                <meta name='twitter:description' content='undefined' />
                <meta name='twitter:image' content='' />

                <link rel='icon' href='/favicon.ico' />
            </Head>

            <ParallaxProvider>
                <Navbar currentPage={Page.STARQUEST} fixed={true} />
                <div className='w-screen h-screen flex relative bg-[#000]'>
                    {/* <AnimatedGradient animationDirection='left' /> */}
                    <Swiper
                        onInit={(swiper) => {
                            let slideIndexes = {
                                vision: 0,
                                community: 1,
                                irl: 2,
                                integration: 3,
                                neural: 4,
                                collaborations: 5,
                            };
                            let predefinedSlide = localStorage.getItem(
                                "starquestPredefinedSlide"
                            );
                            setTimeout(() => {
                                if (predefinedSlide) {
                                    swiper.slideTo(
                                        slideIndexes[predefinedSlide],
                                        700
                                    );
                                    localStorage.removeItem(
                                        "starquestPredefinedSlide"
                                    );
                                }
                            }, 200);
                        }}
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
                        className='starquest'
                    >
                        <SwiperSlide>
                            <Slide
                                heading={"Vision"}
                                subheading={"01"}
                                description={[
                                    `Team Ather strives to create a space`,
                                    `for all the internet comic-heads to vibe, interact and share`,
                                    `their imaginations in creating a ComicVerse of their own.\n`,
                                    `This is powered by "Collective Reality", where`,
                                    `the community shapes everything.`,
                                    `We plan to ignite the Comics Pop culture across the internet,`,
                                    `hands together.`,
                                ].join("\n")}
                            ></Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide heading={"Community"} subheading={"02"}>
                                <div className='flex flex-col gap-10'>
                                    <div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            Collective Reality
                                        </div>
                                        <p className='mt-4'>
                                            We at Ather believe in greatness
                                            through collective creativity. It is
                                            you, who has the power to decide
                                            what happens next. This is where
                                            your characters and fan theories
                                            turn out to be in the actual story.
                                            Work with us in paving a fantastic
                                            universe like never before.
                                        </p>
                                    </div>
                                    <div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            Creator's Deck
                                        </div>
                                        <p className='mt-4'>
                                            Ciphering to all of the young
                                            talents across the globe.<br></br>
                                            We welcome you to be a part of our
                                            creator's deck.<br></br>
                                            The application process will
                                            commence post-mint.
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide heading={"IRL"} subheading={"03"}>
                                <div className='flex flex-col gap-10'>
                                    <div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            Atherian Lifestyle
                                        </div>
                                        <p className='mt-4'>
                                            Dope streetwear is our identity. We
                                            envision creating a line of merch
                                            that can determine the future of
                                            fashion. We envision linking digital
                                            tokens to physical items with the
                                            help of PBT technology.
                                        </p>
                                    </div>
                                    <div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            Events
                                        </div>
                                        <p className='mt-4'>
                                            From meetups to comic-cons and
                                            cosplays & parties, we are here to
                                            do it all. The community has a big
                                            hand in making all of this real.
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                heading={"Integration"}
                                subheading={"04"}
                                description={[
                                    `In our portal, we envision a place where every Atherian has a voice.`,
                                    `Every character you see in the gallery, has an identity.\n`,
                                    `When you visit your profile section through the portal, you'll get to see`,
                                    `how great of an Atherian you are, your achievements, and the exclusives`,
                                    `you own, including things IRL. [03 - Atherian Lifestyle]\n`,
                                    `We envision rankinq our Atherians through the Atherian Leaderboard`,
                                    `where every Atherian can compete for the throne of fame.`,
                                ].join("\n")}
                            ></Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                heading={"Neural Networks"}
                                subheading={"05"}
                            >
                                <div className='flex flex-col gap-10'>
                                    <div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            Socials
                                        </div>
                                        <p className='mt-4'>
                                            Twitter and Discord are the places
                                            where we ignite the magic.
                                        </p>
                                    </div>
                                    <div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            Character Development
                                        </div>
                                        <p className='mt-4'>
                                            Agility or Stealth, Power or
                                            Mystique, you get to create unique
                                            yet dynamic characters that will
                                            rule the universe. These characters
                                            will play an important role in
                                            defining how the story proceeds.
                                        </p>
                                    </div>
                                    <div>
                                        <div className='flex items-center justify-center border border-white border-opacity-20 uppercase font-body p-4 py-1 w-fit'>
                                            Graphic Novels
                                        </div>
                                        <p className='mt-4'>
                                            Whether you're a seasoned comic book
                                            enthusiast or a total newcomer to
                                            the world of comics, Ather will make
                                            you fall head over heels for the
                                            stories we have to tell.
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Slide
                                heading={"Collaborations"}
                                subheading={"06"}
                                description={[
                                    `We at Ather strive to break all the general norms`,
                                    `about what a Web3 brand should be.\n`,
                                    `We believe in building with the community through`,
                                    `collaborations with both individuals and businesses,`,
                                    `and by integrating our brand within`,
                                    `the entertainment industry.\n`,
                                    `We will set new boundaries.`,
                                ].join("\n")}
                            ></Slide>
                        </SwiperSlide>
                    </Swiper>
                    <div className='fixed'>
                        <div className='relative w-[100vw] h-[100vh]'>
                            <video
                                style={{ objectFit: "cover" }}
                                className='brightness-50 w-[100vw] h-[100vh]'
                                loop
                                autoPlay
                                muted
                                src='/videos/spaceship.mp4'
                            ></video>
                        </div>
                    </div>
                    <div className='fixed'>
                        <div
                            style={{
                                background:
                                    "linear-gradient(to right, #000 30%, transparent 100%)",
                            }}
                            className='w-[100vw] h-[100vh] opacity-80'
                        ></div>
                    </div>
                    {/* <img
                        className={
                            "fixed w-[35rem] h-auto bottom-0 right-0 z-50 transition-all " +
                            (activeIndex == 0 ? "opacity-100" : "opacity-0")
                        }
                        src='https://cdn.discordapp.com/attachments/934914135613931593/1085917025681019002/Untitled_Artwork.png'
                        alt='atherian'
                    />
                    <img
                        className={
                            "fixed w-[35rem] h-auto bottom-0 right-0 z-50 transition-all " +
                            (activeIndex == 1 ? "opacity-100" : "opacity-0")
                        }
                        src='https://cdn.discordapp.com/attachments/934914135613931593/1085931904840245248/Untitled_Artwork.png'
                        alt='atherian'
                    />
                    <img
                        className={
                            "fixed w-[35rem] h-auto bottom-0 right-0 z-50 transition-all " +
                            (activeIndex == 2 ? "opacity-100" : "opacity-0")
                        }
                        src='https://cdn.discordapp.com/attachments/934914135613931593/1085936564103815268/Untitled_Artwork.png'
                        alt='atherian'
                    />
                    <img
                        className={
                            "fixed w-[35rem] h-auto bottom-0 right-0 z-50 transition-all " +
                            (activeIndex == 3 ? "opacity-100" : "opacity-0")
                        }
                        src='https://cdn.discordapp.com/attachments/934914135613931593/1086367978070749204/Untitled_Artwork.png'
                        alt='atherian'
                    />
                    <img
                        className={
                            "fixed w-[35rem] h-auto bottom-0 right-0 z-50 transition-all " +
                            (activeIndex == 4 ? "opacity-100" : "opacity-0")
                        }
                        src='https://cdn.discordapp.com/attachments/934914135613931593/1086235770051899443/Untitled_Artwork.png'
                        alt='atherian'
                    />
                    <img
                        className={
                            "fixed w-[35rem] h-auto bottom-0 right-0 z-50 transition-all " +
                            (activeIndex == 5 ? "opacity-100" : "opacity-0")
                        }
                        src='https://media.discordapp.net/attachments/934914135613931593/1086664724583825418/Untitled_Artwork.png'
                        alt='atherian'
                    /> */}

                    <div className='fixed w-screen h-[2rem] lg:w-[2rem] lg:h-screen bottom-0 lg:left-0 flex flex-row lg:flex-col gap-2 items-center justify-center lg:ml-9 mt-16 px-24 lg:mt-0 lg:px-0'>
                        {Array(6)
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

export default Starquest;
