/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

import Head from "next/head";

import Navbar, { Page } from "../components/Navbar";
import Footer from "../components/Footer";

import Landing from "../components/Home/Landing";
import Collection, { makeCollection } from "../components/Home/Collection";
import Creators from "../components/Home/Creators";
import StarQuest from "../components/Home/StarQuest";

import React, { useEffect, useRef, useState } from "react";
import StickyFooter from "../components/StickyFooter";
import Sidebar from "../components/Sidebar";

import Article from "../components/Article";

import Tilt from "react-parallax-tilt";

import Fade from "react-reveal/Fade";

import useMediaQuery from "@mui/material/useMediaQuery";

import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import useConfigStore from "../lib/stores/configStore";
import { Tab } from "../lib/stores/configStore";

import Image from "next/image";

function UnresponsiveHandler() {
    let isSupported = useMediaQuery(
        "(min-width: 500px) and (min-height: 500px)"
    );

    if (!isSupported) {
        return (
            <div className='z-[99999] fixed w-screen h-screen backdrop-blur-3xl bg-[#00000070] flex flex-col items-center justify-center'>
                <h1 className='text-6xl'>😔</h1>
                <h1 className='text-sm mt-5 text-white font-body uppercase'>
                    Please resize your screen
                </h1>
            </div>
        );
    }
    return <div></div>;
}

const Home: NextPage = () => {
    const [clipPath, setClipPath] = useState("");

    useEffect(() => {
        setClipPath("polygon(100% 0, 100% 88%, 0 100%, 0 12%)");
    }, []);

    let router = useRouter();

    let containerRef = useRef(null);

    const [loreViewRef, loreInView] = useInView();
    const [starquestViewRef, starquestInView] = useInView();
    const [collectionViewRef, collectionInView] = useInView();
    const [creatorsViewRef, creatorsInView] = useInView();

    const [stickyAnimationRef, stickyAnimationLoaded] = useInView();
    const [stickyAnimationOffset, setStickyAnimationOffset] =
        useState<any>(null);
    const [stickyAnimated, setStickyAnimated] = useState(false);

    let config = useConfigStore();

    const [forcedTransparentNavbar, setForcedTransparentNavbar] =
        useState(true);

    useEffect(() => {
        if (loreInView) {
            config.setCurrentSidebarTab(Tab.LORE);
        } else if (starquestInView) {
            config.setCurrentSidebarTab(Tab.STARQUEST);
        } else if (collectionInView) {
            config.setCurrentSidebarTab(Tab.COLLECTION);
        } else if (creatorsInView) {
            config.setCurrentSidebarTab(Tab.CREATORS);
        } else {
            config.setCurrentSidebarTab(Tab.NONE);
        }
    }, [loreInView, starquestInView, collectionInView, creatorsInView]);

    const [offsetTop, setOffsetTop] = useState(0);

    useEffect(() => {
        if (stickyAnimationLoaded && !stickyAnimationOffset) {
            setStickyAnimationOffset(offsetTop);
        }

        if (offsetTop >= stickyAnimationOffset && stickyAnimationOffset) {
            setStickyAnimated(true);
        } else if (
            offsetTop <= stickyAnimationOffset &&
            stickyAnimationOffset
        ) {
            setStickyAnimated(false);
        }

        if (offsetTop >= stickyAnimationOffset + 500 && stickyAnimationOffset) {
            setForcedTransparentNavbar(false);
        } else {
            setForcedTransparentNavbar(true);
        }
    }, [offsetTop, stickyAnimationLoaded, stickyAnimationOffset]);

    return (
        <>
            <Head>
                <title>Ather</title>
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

                {/* {Array.from({ length: 22 }, (_, i) => (
                    <link
                        key={i}
                        rel='preload'
                        as='image'
                        href={`/images/atherians/${i + 1}.png`}
                    />
                ))} */}

                <link rel='preload' as='font' href='/fonts/FFMark.woff2' />
                <link rel='preload' as='font' href='/fonts/subheading.woff2' />
            </Head>

            <div>
                <UnresponsiveHandler />
                {/* Landing background */}

                <div
                    className={
                        "absolute h-[300vh] w-[100vw] transition-colors duration-500 " +
                        (stickyAnimated ? "bg-black" : "bg-red-100")
                    }
                    style={{
                        clipPath: "polygon(100% 0, 100% 95%, 0 100%, 0 0%)",
                    }}
                ></div>
                <div
                    className={
                        "absolute h-[200vh] w-[100vw] duration-500 transition-opacity " +
                        (stickyAnimated ? "opacity-0" : "opacity-100")
                    }
                    style={{
                        background:
                            "linear-gradient(1turn, #8d1725 55%,transparent)",
                        clipPath: "polygon(100% 0, 100% 95%, 0 100%, 0 0%)",
                    }}
                ></div>
                {/* <div
                    style={{
                        position: "absolute",
                        background: "#8d1725",
                        height: "20vh",
                        width: "100vw",
                        marginTop: "190vh",
                        filter: "blur(300px)",
                        opacity: 0.8,
                        transform: "rotate(-4deg)",
                    }}
                ></div> */}

                <StickyFooter />

                <Sidebar />

                <Navbar
                    currentPage={Page.HOME}
                    fixed={true}
                    invisible={stickyAnimated ? false : true}
                    forcedTransparent={forcedTransparentNavbar}
                />
                {/* <iframe
                    style={{
                        borderRadius: "12px",
                        opacity: 1,
                        transition: "0.25s all",
                        position: "fixed",
                        width: "400px",
                        // height: "200px",
                        zIndex: "1000",
                        right: "28px",
                        bottom: "-30px",
                    }}
                    src='https://open.spotify.com/embed/album/30WNa86MJsrzTlki1YHI6A?utm_source=generator'
                    frameBorder='0'
                    allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                    loading='lazy'
                ></iframe> */}

                <LocomotiveScrollProvider
                    onUpdate={(scroll) => {
                        scroll.on("scroll", ({ limit, scroll }) => {
                            var scrollTop = scroll.y;
                            setOffsetTop(scrollTop);
                        });
                    }}
                    watch={[stickyAnimated]}
                    options={{
                        smooth: true,
                        tablet: { smooth: true },
                        smartphone: { smooth: true },
                    }}
                    containerRef={containerRef}
                    location={router.asPath}
                >
                    <main
                        id='scroll-container'
                        ref={containerRef}
                        data-scroll-container
                    >
                        <Navbar currentPage={Page.HOME} fixed={false} />

                        <Landing />

                        {/* Transition section */}
                        <div data-scroll-section>
                            <div
                                id='scroll-animation-container'
                                className='w-screen h-[150vh] flex justify-center align-center'
                            >
                                <div
                                    data-scroll
                                    data-scroll-sticky
                                    data-scroll-target='#scroll-animation-container'
                                    className='h-screen relative'
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <div
                                        id='sticky-animation-tracker'
                                        ref={stickyAnimationRef}
                                        className='absolute mt-[90vh]'
                                    ></div>

                                    <div
                                        style={{
                                            transform: `perspective(500px) rotateX(24deg)`,
                                        }}
                                        className='absolute mt-[90vh] w-screen'
                                    >
                                        <h1
                                            data-scroll
                                            data-scroll-speed='2'
                                            style={{
                                                opacity: loreInView ? 1 : 0,
                                            }}
                                            className='text-white uppercase font-display text-3xl lg:text-5xl text-center transition-opacity duration-500'
                                        >
                                            Welcome to the hideouts.
                                        </h1>
                                    </div>

                                    <div
                                        className='transition-all duration-500 delay-300'
                                        style={{
                                            borderTop:
                                                "1px solid rgba(255, 255, 255, 0.15)",
                                            width: stickyAnimated
                                                ? "36vw"
                                                : "0vw",
                                        }}
                                    ></div>
                                    <div
                                        className='transition-all duration-500'
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            width: "100px",
                                            height: "100px",
                                            scale: stickyAnimated ? "1" : "0",
                                            backgroundColor:
                                                "rgba(255, 255, 255, 0.15)",
                                            clipPath:
                                                "polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)",
                                        }}
                                    >
                                        <div
                                            className='duration-500 transition-colors'
                                            style={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "98.5px",
                                                height: "98.5px",
                                                backgroundColor: stickyAnimated
                                                    ? "#050505"
                                                    : "",
                                                clipPath:
                                                    "polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)",
                                            }}
                                        >
                                            <div className='w-[48px] h-[48px] absolute overflow-visible'>
                                                <Image
                                                    layout='fill'
                                                    objectFit='contain'
                                                    src='/images/logov2.png'
                                                    alt=''
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className='transition-all duration-500 delay-300'
                                        style={{
                                            borderTop:
                                                "1px solid rgba(255, 255, 255, 0.15)",
                                            width: stickyAnimated
                                                ? "36vw"
                                                : "0vw",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>

                        <div
                            className='z-10'
                            ref={loreViewRef}
                            data-scroll-section
                        >
                            <div className='absolute mt-40 transition-opacity opacity-40'>
                                <div
                                    style={{ transform: "translateX(-10rem)" }}
                                    className='absolute z-10 opacity-30'
                                >
                                    <div className='relative w-[100vh] h-[80vh]'>
                                        <Image
                                            layout='fill'
                                            objectFit='contain'
                                            src={"/images/sentinels/syke-h.png"}
                                        />
                                        <div
                                            style={{
                                                background:
                                                    "linear-gradient(to bottom, transparent, #000 90%)",
                                            }}
                                            className='absolute w-[300vh] h-[40vh] bottom-0'
                                        ></div>
                                    </div>
                                </div>
                                <div
                                    style={{ transform: "translateX(58vw)" }}
                                    className='absolute opacity-0 lg:opacity-80 transition-opacity duration-300'
                                >
                                    <div className='relative w-[100vh] h-[80vh]'>
                                        <Image
                                            layout='fill'
                                            objectFit='contain'
                                            src={
                                                "/images/sentinels/kayne-h.png"
                                            }
                                        />
                                        <div
                                            style={{
                                                background:
                                                    "linear-gradient(to bottom, transparent, #050505 90%)",
                                            }}
                                            className='absolute w-[100vh] h-[80vh]'
                                        ></div>
                                    </div>
                                </div>
                                <div className='opacity-70'>
                                    <AnimatedGradient animationDirection='left' />
                                </div>
                            </div>
                            <Article
                                className='pt-40'
                                align={"center"}
                                image={
                                    ""
                                    // "https://media.discordapp.net/attachments/1088084007041900586/1089632009309143101/Brushevil_Mysterious_planet_named_ather_wakanda_magical_technol_a605a605-0e92-4104-bf7b-1785244517b3.png"
                                }
                                imageClass='pt-40 xl:pt-0'
                                heading={"The Lore"}
                                subheading={"Around the Atherverse"}
                                description={
                                    `The Atherians, a powerful and mystical race, lived on an enchanted planet called Ather.\n\n` +
                                    `However, a faction attempted to extract the planet's core for energy, causing instability to the core and the eventual doom of Ather.\n\n` +
                                    `In a race to save their species, sentinels disbanded across the universe in search of a new home.\n\n` +
                                    `And just as all hopes had died, messages of a distant discovery drove them to a new planet unknown and unexplored. A planed named Earth.\n\n`
                                }
                            ></Article>
                        </div>

                        <StarQuest viewRef={starquestViewRef} />

                        <div
                            data-scroll-section
                            className='mb-[25rem] xl:mb-0 flex'
                        >
                            <Article
                                align={"left"}
                                className='pt-8'
                                imageClass='w-96 scale-150'
                                heading={"BELIEF"}
                                subheading={"The Atherian Creed"}
                            >
                                <div className='flex flex-col gap-10'>
                                    <p>
                                        Ather is built on the foundation of
                                        inclusivity, diversity, and creativity.
                                        <br />
                                        <br />
                                        We believe in the power of collective
                                        creativity where the community<br></br>
                                        has the ability to shape the direction
                                        and outcome of Ather through<br></br>
                                        fan theories and narratives.
                                        <br></br>
                                        <br></br>
                                        Our goal is to create a space for all
                                        internet comic-heads to vibe,<br></br>
                                        interact, and share their imaginations
                                        in creating a ComicVerse of their own.
                                        <br></br>
                                        <br></br>
                                        This is powered by "Collective Reality"
                                        a concept where the community shapes
                                        everything.
                                    </p>
                                </div>
                            </Article>

                            <img
                                data-scroll
                                data-scroll-speed='-2'
                                className='absolute mt-[44rem] lg:mt-[38rem] xl:mt-[17rem] left-0 right-0 m-auto xl:left-auto xl:-right-10 w-[70%] lg:w-[60%] xl:w-[40rem]'
                                src='/images/manifestoHand.png'
                                alt=''
                            />
                        </div>

                        {/* Spreading the word landing */}
                        <section
                            data-scroll-section
                            className='flex h-[95vh] mt-40 mb-32 justify-center items-center'
                            style={{ WebkitClipPath: clipPath, clipPath }}
                        >
                            <div className='absolute flex flex-col justify-center items-center z-50'>
                                <Fade bottom>
                                    <h1 className='font-body text-gray text-xs lg:text-sm'>
                                        WE FEAR NO RULES
                                    </h1>
                                    <h1 className='font-display text-white text-6xl lg:text-8xl'>
                                        REVELATION
                                    </h1>

                                    <div
                                        onClick={() => {
                                            window.open(
                                                "https://twitter.com/atherverse/status/1629114195995156481"
                                            );
                                        }}
                                        className='cursor-pointer text-xs lg:text-sm text-white backdrop-blur-lg w-fit px-4 h-12 mt-10 rounded-md flex justify-center items-center font-body'
                                    >
                                        WATCH NOW
                                    </div>
                                </Fade>
                            </div>
                            <div>
                                <video
                                    className='max-w-none w-auto h-[130vh] relative brightness-50'
                                    loop
                                    autoPlay
                                    muted
                                    src='/videos/revelation.mp4'
                                ></video>
                            </div>
                        </section>

                        <Collection viewRef={collectionViewRef} />

                        <Creators viewRef={creatorsViewRef} />

                        <Footer />
                    </main>
                </LocomotiveScrollProvider>
            </div>
        </>
    );
};

export default Home;
