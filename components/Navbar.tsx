/* eslint-disable @next/next/no-img-element */

import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import React from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { useMediaQuery, screenBasedAttribute } from "../lib/mediaQuery";
import { useRouter } from "next/router";

enum Page {
    HOME = "home",
    CINEMATICS = "cinematics",
    STARQUEST = "starquest",
    SENTINELS = "sentinels",
}

type Props = {
    fixed: boolean;
    currentPage: Page;
};

const Navbar = (props: Props) => {
    let router = useRouter();

    return (
        <>
            <section
                data-scroll-section
                className={
                    "h-[70px] px-5 md:px-10 z-50 backdrop-blur-sm " +
                    (props.fixed ? "fixed top-0 w-full" : "")
                }
            >
                <div className='h-[70px] w-full grid grid-cols-2 md:grid-cols-3'>
                    {/* Left Side Text */}
                    <div className='hidden md:flex items-center'>
                        <h1 className='font-body font-extralight text-white uppercase text-xs tracking-wide md:tracking-wider'>
                            <span className='font-display opacity-100'>×</span>{" "}
                            ENTER THE HIDEOUTS
                        </h1>
                    </div>

                    {/* Logo */}
                    <div className='flex items-center md:justify-center'>
                        <img
                            alt='logo'
                            className='hidden md:block w-auto h-8 cursor-pointer opacity-70'
                            src={"/images/logov2.png"}
                        ></img>
                        <img
                            alt='logo-mobile'
                            className='block md:hidden w-auto h-20 cursor-pointer'
                            src={"/images/ATHER_white_logo.png"}
                        ></img>
                    </div>

                    <div className='hidden md:flex justify-end items-center mr-4 gap-10'>
                        {/* Menu */}
                        <div className='flex gap-4 text-white font-body text-xs tracking-wide md:tracking-wider'>
                            <p
                                className='cursor-pointer'
                                style={{
                                    opacity:
                                        props.currentPage === Page.HOME
                                            ? 1
                                            : 0.5,
                                }}
                                onClick={() => {
                                    router.push("/");
                                }}
                            >
                                HOME
                            </p>
                            <p
                                className='cursor-pointer'
                                style={{
                                    opacity:
                                        props.currentPage === Page.CINEMATICS
                                            ? 1
                                            : 0.5,
                                }}
                                onClick={() => {
                                    router.push("/cinematics");
                                }}
                            >
                                CINEMATICS
                            </p>
                            <p
                                className='cursor-pointer'
                                style={{
                                    opacity:
                                        props.currentPage === Page.STARQUEST
                                            ? 1
                                            : 0.5,
                                }}
                                onClick={() => {
                                    router.push("/starquest");
                                }}
                            >
                                STARQUEST
                            </p>
                            <p
                                className='cursor-pointer'
                                style={{
                                    opacity:
                                        props.currentPage === Page.SENTINELS
                                            ? 1
                                            : 0.5,
                                }}
                                onClick={() => {
                                    router.push("/sentinels");
                                }}
                            >
                                SENTINELS
                            </p>
                        </div>
                        {/* Socials */}
                        <div className='flex items-center gap-5'>
                            <img
                                className='hover:scale-110 mt-[2px] cursor-pointer h-auto w-4'
                                onClick={() => {
                                    window.open("https://discord.gg/ather");
                                }}
                                src='/images/discord.avif'
                                alt='discord'
                            />
                            <img
                                className='hover:scale-110 mt-[2px] cursor-pointer h-auto w-4'
                                onClick={() => {
                                    window.open(
                                        "https://twitter.com/atherverse"
                                    );
                                }}
                                src='/images/twitter.avif'
                                alt='twitter'
                            />
                            <img
                                className='hover:scale-110 mt-[2px] cursor-pointer h-auto w-4'
                                onClick={() => {
                                    window.open(
                                        "https://www.instagram.com/planetather/"
                                    );
                                }}
                                src='/images/instagram.svg'
                                alt='instagram'
                            />
                        </div>
                    </div>

                    {/* Menu */}
                    <div className='flex md:hidden items-center justify-end'>
                        <div className='flex items-center justify-center'>
                            <i className='gg-menu-right invert'></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;
export { Page };
