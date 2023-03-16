/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next";

import Head from "next/head";

import Navbar, { Page } from "../components/Navbar";
import Footer from "../components/Footer";

import Landing from "../components/Home/Landing";
import Collection from "../components/Home/Collection";
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
    const [landingScrolled, setLandingScrolled] = useState(false);
    const [navbarOverflow, setNavbarOverflow] = useState(true);

    const [starquestOpen, setStarquestOpen] = useState(false);

    const [clipPath, setClipPath] = useState("");

    useEffect(() => {
        let eventListener = () => {
            var scrollTop = document.documentElement.scrollTop;
            if (scrollTop > 25) {
                setLandingScrolled(true);
            } else {
                setLandingScrolled(false);
            }

            if (scrollTop > 100) {
                setNavbarOverflow(false);
            } else {
                setNavbarOverflow(true);
            }
        };
        window.addEventListener("scroll", eventListener);
    }, [clipPath]);

    useEffect(() => {
        setClipPath("polygon(100% 0, 100% 88%, 0 100%, 0 12%)");
    }, []);

    let [transitionInViewRef, transitionInView] = useInView();
    let [transitionScale, setTransitionScale] = useState(1);
    let [transitionOffset, setTransitionOffset] = useState(undefined);
    let transitionRange = 1600;

    let router = useRouter();

    let containerRef = useRef(null);

    let [loreViewRef, loreInView] = useInView();
    let [starquestViewRef, starquestInView] = useInView();
    let [collectionViewRef, collectionInView] = useInView();
    let [creatorsViewRef, creatorsInView] = useInView();

    let config = useConfigStore();

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

                {/* <div className='absolute bg-red-100 h-[300vh] w-[100vw]' style={{clipPath: 'polygon(100% 0, 100% 95%, 0 100%, 0 0%)'}}></div>
				<div className='absolute h-[300vh] w-[100vw]' style={{background: 'linear-gradient(1turn, #8d1725 55%,transparent)', clipPath: 'polygon(100% 0, 100% 95%, 0 100%, 0 0%)'}}></div> */}
                {/* <div style={{position: 'absolute', background: '#8d1725', height: '20vh', width: '100vw', marginTop: '190vh', filter: 'blur(300px)', opacity: 0.8, transform: 'rotate(-4deg)'}}></div> */}

                <StickyFooter />

                <Sidebar />

                {/* <iframe style={{borderRadius: '12px', opacity: landingScrolled ? 0 : 1, transition: '0.25s all', position: 'fixed', width: '450px', zIndex: '1000', right: '28px', bottom: '-30px'}} src="https://open.spotify.com/embed/album/30WNa86MJsrzTlki1YHI6A?utm_source=generator" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> */}

                <LocomotiveScrollProvider
                    options={{ smooth: true }}
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

                        <div ref={loreViewRef} data-scroll-section>
                            <Article
                                className='pt-40'
                                align={"left"}
                                image={
                                    "https://media.discordapp.net/attachments/934914135613931593/1079144814077038812/Untitled_Artwork.png"
                                }
                                imageClass='pt-40 xl:pt-0'
                                heading={"The Lore"}
                                subheading={"01"}
                                description={
                                    `The Atherians, a powerful and mystical race, lived in harmony on the enchanted planet Ather.\n\n` +
                                    `However, a group attempted to extract the planet's core for energy, causing instability and the eventual doom of Ather.\n\n` +
                                    `In race to save their species, masterminds set out to find a new home and eventually discovered Earth.\n\n` +
                                    `The Atherians set out on a journey in search of a new home and after facing many atrocities of space, they finally landed on the surface of the mysterious planet Earth in the year 2017.\n\n` +
                                    `It's been 5 years since their arrival and they are still trying to explore and understand the new planet.`
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
                                heading={"Manifesto"}
                                subheading={"02"}
                                description={
                                    `Amidst NFT's bright and dazzling light, A firm doth rise with might and might. Decentralized, it brings a show, in digital realms, its fame doth grow.\n\n` +
                                    `Comics, series, and merchandise bold, Cosplays, games, a tale untold. With community's zeal and spirit rare, its mission to bring forth a world fair.\n\n` +
                                    `To weave a tapestry, with hands entwine, and zip the bounds of thy imagination's vine.\n\n` +
                                    `In this new world, our spirits shall converge, and creativity, passion, and zeal shall surge.`
                                }
                            ></Article>

                            <img
                                className='absolute mt-[38rem] lg:mt-[30rem] xl:mt-[13rem] left-0 right-0 m-auto xl:left-auto xl:-right-10 xl:w-[40rem] w-[60%]'
                                src='/images/manifestoHand.png'
                                alt=''
                            />
                        </div>

                        {/* Spreading the word landing */}
                        <section
                            data-scroll-section
                            className='flex h-[40rem] mt-40 mb-32 justify-center items-center'
                            style={{ WebkitClipPath: clipPath, clipPath }}
                        >
                            <div className='absolute flex flex-col justify-center items-center z-50'>
                                <h1 className='font-body text-gray text-xs lg:text-sm'>
                                    WE FEAR NO RULES
                                </h1>
                                <h1 className='font-display text-white text-6xl lg:text-8xl'>
                                    REVELATION
                                </h1>

                                <div
                                    onClick={() => {
                                        setStarquestOpen(true);
                                    }}
                                    className='cursor-pointer text-xs lg:text-sm text-white backdrop-blur-lg w-fit px-4 h-12 mt-10 rounded-md flex justify-center items-center font-body'
                                >
                                    WATCH NOW
                                </div>
                            </div>
                            <div>
                                <video
                                    className='max-w-none w-[300vw] h-auto relative brightness-50'
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
