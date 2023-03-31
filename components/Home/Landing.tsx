/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import scrollDown from "../../public/scroll-down.json";

import Tilt from "react-parallax-tilt";
import Image from "next/image";
import useConfigStore from "../../lib/stores/configStore";
import { useLocomotiveScroll } from "react-locomotive-scroll";

const Landing = ({ children }: any) => {
    const [showScrollNotifier, setShowScrollNotifier] = useState(true);

    const [logoRotatation, setLogoRotation] = useState(20);
    const [logoZoom, setLogoZoom] = useState(1);
    const [heroOpacity, setHeroOpacity] = useState(1);
    const [heroZoom, setHeroZoom] = useState(1);

    let config = useConfigStore();

    let { setShowStickyFooter } = useConfigStore();

    let { scroll, isReady } = useLocomotiveScroll();

    useEffect(() => {
        if (isReady) {
            scroll.on("scroll", ({ limit, scroll }) => {
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
                setLogoRotation(24 + scrollTop / 10);
                setHeroOpacity(1 - scrollTop / 600);
                setLogoZoom(1 + scrollTop / 1000);
                setHeroZoom(1 + scrollTop / 1500);
            });
        }
    }, [isReady, scroll, setShowStickyFooter]);

    return (
        <section
            data-scroll-section
            className='flex flex-col justify-center items-center h-screen md:h-[80vh] overflow-hidden md:overflow-visible'
        >
            <div
                data-scroll
                data-scroll-speed='3'
                className='absolute invisible md:visible z-10 pointer-events-none'
            >
                <div
                    style={{
                        transform: `perspective(500px) rotateX(${logoRotatation}deg) scale(${logoZoom})`,
                    }}
                >
                    <div
                        className={`w-[70rem] h-[50rem] xl:h-[70rem] mb-96 relative`}
                    >
                        <Image
                            alt=''
                            layout='fill'
                            objectFit='contain'
                            src='/images/ATHER_white_logo.png'
                        ></Image>
                    </div>
                </div>
            </div>

            <div
                data-scroll
                data-scroll-speed='-14'
                className='flex flex-col items-center bottom-0 z-10 pointer-events-none'
                style={{
                    opacity: heroOpacity,
                }}
            >
                <div
                    style={{ transform: `scale(${heroZoom})` }}
                    className='w-[80rem] max-w-none h-[90vh] xl:h-[110vh] mt-56 xl:mt-20 z-10 relative'
                >
                    <Image
                        alt=''
                        layout='fill'
                        objectFit='contain'
                        src='/images/sentinels/cascade2.png'
                    />
                </div>
            </div>

            <div
                className='hidden md:flex flex-col absolute justify-center items-center w-[100vw] mt-[34rem] transition-all duration-150 z-10'
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
