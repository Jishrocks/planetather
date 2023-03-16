/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { TextScramble } from "../ScrambledText";
import { motion, useAnimation } from "framer-motion";

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import scrollDown from "../../public/scroll-down.json";

import Tilt from "react-parallax-tilt";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import useConfigStore from "../../lib/stores/configStore";

const Landing = ({ children }: any) => {
    const [showScrollNotifier, setShowScrollNotifier] = useState(true);

    const [logoRotatation, setLogoRotation] = useState(20);

    const { scroll, isReady } = useLocomotiveScroll();

    let { setShowStickyFooter } = useConfigStore();

    useEffect(() => {
        if (isReady) {
            let eventListener = ({ limit, scroll }) => {
                var scrollTop = scroll.y;
                if (scrollTop > 25) {
                    setShowScrollNotifier(false);
                } else {
                    setShowScrollNotifier(true);
                }
                if (scrollTop > 300) {
                    setShowStickyFooter(true);
                } else {
                    setShowStickyFooter(false);
                }
                setLogoRotation(20 + scrollTop / 10);
            };

            scroll.on("scroll", eventListener);
        }
    }, [scroll, isReady, setShowStickyFooter]);

    const [clipPath, setClipPath] = useState("");

    useEffect(() => {
        setClipPath("polygon(100% 0, 100% 88%, 0 100%, 0 12%)");
    }, []);

    return (
        <section
            data-scroll-section
            className='flex flex-col justify-center items-center h-screen md:h-[80vh] overflow-hidden md:overflow-visible'
        >
            {/* <div
                data-scroll
                data-scroll-speed='2'
                className='absolute invisible md:visible'
            >
                <div
                    style={{
                        transform: `perspective(500px) rotateX(${logoRotatation}deg)`,
                    }}
                >
                    <img
                        className={`w-auto h-[40rem] xl:h-[50rem] md:transition-all md:duration-500`}
                        src='/images/ATHER_white_logo.png'
                    ></img>
                </div>
            </div> */}

            <div
                className='flex h-[40rem] mt-40 mb-32 justify-center items-center'
                style={{ WebkitClipPath: clipPath, clipPath }}
            >
                <div className='absolute mb-24 flex flex-col justify-center items-center z-50'>
                    <div
                        style={{
                            transform: `perspective(500px) rotateX(24deg)`,
                        }}
                    >
                        <img
                            className={`w-auto h-[40rem] xl:h-[50rem] md:transition-all md:duration-500`}
                            src='/images/ATHER_white_logo.png'
                        ></img>
                    </div>
                </div>
                <div>
                    <video
                        className='max-w-none w-[190vw] lg:w-[150vw] xl:w-[125vw] h-auto relative brightness-50'
                        loop
                        autoPlay
                        muted
                        src='/videos/spread.mp4'
                    ></video>
                </div>
            </div>

            {/* <div className='absolute invisible md:visible'>
                <motion.img
                    className='w-auto h-[25rem] mb-24 md:transition-all md:duration-500'
                    src='/images/Atherians_Grouped.png'
                ></motion.img>
            </div> */}

            <div className='flex flex-col items-center md:hidden'>
                <img
                    className='w-auto max-w-none h-[130vh] mt-80'
                    src='https://cdn.discordapp.com/attachments/934914135613931593/1079063818505830410/Untitled_Artwork.png'
                />
            </div>

            <div
                className='hidden md:flex flex-col absolute justify-center items-center w-[100vw] mt-[22rem] transition-all duration-150'
                style={{
                    opacity: showScrollNotifier ? 1 : 0,
                }}
            >
                <Lottie
                    style={{ opacity: 1, filter: "invert()" }}
                    options={{
                        animationData: scrollDown,
                        autoplay: true,
                        loop: true,
                    }}
                    height={50}
                    width={50}
                />
                <h1 className='mt-2 text-white font-body uppercase text-[0.5625rem] tracking-wider opacity-50'>
                    Scroll to view more
                </h1>
            </div>
        </section>
    );
};

export default Landing;
