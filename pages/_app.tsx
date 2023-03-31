import "../styles/globals.css";
import "css.gg/icons/all.css";
import "swiper/css";
import "swiper/css/pagination";

import React, { useEffect, useRef } from "react";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps}>
                <div
                    id='breakpoint-sm'
                    className='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden w-0 h-0'
                ></div>
                <div
                    id='breakpoint-md'
                    className='hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden w-0 h-0'
                ></div>
                <div
                    id='breakpoint-lg'
                    className='hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden w-0 h-0'
                ></div>
                <div
                    id='breakpoint-xl'
                    className='hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden w-0 h-0'
                ></div>
                <div
                    id='breakpoint-2xl'
                    className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block w-0 h-0'
                ></div>
            </Component>
        </>
    );
}

export default MyApp;
