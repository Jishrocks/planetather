/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import scrollDown from "../../public/scroll-down.json";

import Tilt from "react-parallax-tilt";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import useConfigStore from "../../lib/stores/configStore";

const Landing = ({ children }: any) => {
    const [showScrollNotifier, setShowScrollNotifier] = useState(true);

    const [logoRotatation, setLogoRotation] = useState(20);
    const [logoZoom, setLogoZoom] = useState(1);
    const [heroOpacity, setHeroOpacity] = useState(1);
    const [heroZoom, setHeroZoom] = useState(1);

    let config = useConfigStore();

    let { setShowStickyFooter } = useConfigStore();

    useEffect(() => {
        var scrollTop = config.offsetTop;
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
        setLogoRotation(24 + scrollTop / 10);
        setHeroOpacity(1 - scrollTop / 600);
        setLogoZoom(1 + scrollTop / 1000);
        setHeroZoom(1 + scrollTop / 1500);
    }, [config.offsetTop, setShowStickyFooter]);

    const [clipPath, setClipPath] = useState("");

    useEffect(() => {
        setClipPath("polygon(100% 0, 100% 88%, 0 100%, 0 12%)");
    }, []);

    return (
        <section
            data-scroll-section
            // data-scroll-sticky
            // data-scroll-target='#scroll-container'
            className='flex flex-col justify-center items-center h-screen md:h-[80vh] overflow-hidden md:overflow-visible'
        >
            <div
                data-scroll
                data-scroll-speed='3'
                className='absolute invisible md:visible'
            >
                <div
                    style={{
                        transform: `perspective(500px) rotateX(${logoRotatation}deg) scale(${logoZoom})`,
                    }}
                >
                    <img
                        className={`w-auto h-[50rem] xl:h-[70rem] mb-96`}
                        src='/images/ATHER_white_logo.png'
                    ></img>
                </div>
            </div>

            {/* <div className='absolute invisible md:visible mt-24'>
                <motion.img
                    className='w-auto h-[25rem] mb-24 md:transition-all md:duration-500'
                    src='/images/Atherians_Grouped.png'
                ></motion.img>
            </div> */}

            <div
                data-scroll
                data-scroll-speed='-14'
                className='flex flex-col items-center bottom-0'
                style={{
                    opacity: heroOpacity,
                }}
            >
                <img
                    style={{
                        transform: `scale(${heroZoom})`,
                    }}
                    className='w-auto max-w-none h-[90vh] xl:h-[110vh] mt-56 xl:mt-20 z-10'
                    src='/images/sentinels/cascade2.png'
                />
            </div>

            <div
                className='hidden md:flex flex-col absolute justify-center items-center w-[100vw] mt-[34rem] transition-all duration-150'
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
