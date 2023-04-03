/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

enum Page {
    HOME = "home",
    // CINEMATICS = "cinematics",
    STARQUEST = "starquest",
    SENTINELS = "sentinels",
    INTRODUCTION = "introduction",
    ORIGINALS = "originals programme",
}

type Props = {
    fixed: boolean;
    currentPage: Page;
    invisible?: boolean;
    forcedTransparent?: boolean;
};

const Navbar = (props: Props) => {
    let router = useRouter();

    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    return (
        <>
            {/* Mobile Menu */}
            <motion.div
                className={`absolute w-screen h-screen z-50 bg-black bg-opacity-90 md:invisible transition-opacity ${
                    mobileMenuVisible
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <div className='w-full h-full flex flex-col'>
                    <div className='h-[70px] w-full flex z-50'>
                        {/* Menu */}
                        <div className='flex md:hidden items-center justify-end w-full mr-5'>
                            <div
                                onClick={() => {
                                    setMobileMenuVisible(!mobileMenuVisible);
                                }}
                                className='flex items-center justify-center cursor-pointer'
                            >
                                <i className='gg-menu-right invert'></i>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-0 justify-center items-center w-full'>
                        <div className='flex justify-center items-center border border-white border-opacity-10 w-full h-24'>
                            <p
                                className='cursor-pointer text-white font-display text-md tracking-wide md:tracking-wider'
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
                        </div>
                        <div className='flex justify-center items-center border border-white border-opacity-10 w-full h-24'>
                            <p
                                className='cursor-pointer text-white font-display text-md tracking-wide md:tracking-wider'
                                style={{
                                    opacity:
                                        props.currentPage === Page.HOME
                                            ? 1
                                            : 0.5,
                                }}
                                onClick={() => {
                                    router.push("/introduction");
                                }}
                            >
                                INTRODUCTION
                            </p>
                        </div>
                        <div className='flex justify-center items-center border border-white border-opacity-10 w-full h-24'>
                            <p
                                className='cursor-pointer text-white font-display text-md tracking-wide md:tracking-wider'
                                style={{
                                    opacity:
                                        props.currentPage === Page.HOME
                                            ? 1
                                            : 0.5,
                                }}
                                onClick={() => {
                                    router.push("/starquest");
                                }}
                            >
                                STARQUEST
                            </p>
                        </div>
                        <div className='flex justify-center items-center border border-white border-opacity-10 w-full h-24'>
                            <p
                                className='cursor-pointer text-white font-display text-md tracking-wide md:tracking-wider'
                                style={{
                                    opacity:
                                        props.currentPage === Page.HOME
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
                    </div>
                </div>
            </motion.div>

            <section
                data-scroll-section
                style={{
                    transform: props.invisible
                        ? "translateY(-5rem)"
                        : "translateY(0rem)",
                }}
                className={
                    "h-[70px] px-5 md:px-10 z-50 " +
                    (props.fixed
                        ? "fixed top-0 w-full transition-all duration-500 delay-100 "
                        : " ") +
                    (!props.forcedTransparent && props.forcedTransparent != null
                        ? "bg-gradient-to-b from-black to-transparent "
                        : "bg-opacity-0 ") +
                    (props.invisible ? "pointer-events-none" : "")
                }
            >
                <div className='h-[70px] w-full flex z-50'>
                    {/* Logo */}
                    <div className='flex items-center w-[6rem]'>
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

                    <div className='hidden md:flex justify-end items-center xl:mr-4 gap-10 w-full'>
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
                                <span className='flex items-center h-full'>
                                    HOME
                                </span>
                            </p>
                            <p
                                className='cursor-pointer'
                                style={{
                                    opacity:
                                        props.currentPage === Page.INTRODUCTION
                                            ? 1
                                            : 0.5,
                                }}
                                onClick={() => {
                                    router.push("/introduction");
                                }}
                            >
                                <span className='flex items-center h-full'>
                                    INTRODUCTION
                                </span>
                            </p>
                            {/* <p
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
                                <span className='flex items-center h-full'>
                                    CINEMATICS
                                </span>
                            </p> */}
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
                                <span className='flex items-center h-full'>
                                    STARQUEST
                                </span>
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
                                <span className='flex items-center h-full'>
                                    SENTINELS
                                </span>
                            </p>

                            {/* {Menu} */}
                            {/* <div className='group opacity-100 transition-all duration-300'>
                                <p className='cursor-pointer'>
                                    <span
                                        style={{
                                            opacity: [
                                                Page.INTRODUCTION,
                                                Page.ORIGINALS,
                                            ].includes(props.currentPage)
                                                ? 1
                                                : 0.5,
                                        }}
                                        className='flex items-center uppercase'
                                    >
                                        {[
                                            Page.INTRODUCTION,
                                            Page.ORIGINALS,
                                        ].includes(props.currentPage)
                                            ? props.currentPage
                                            : "MORE"}
                                        <i className='navbar-icon gg-chevron-down'></i>
                                    </span>
                                </p>

                                <div
                                    style={{
                                        transform: "translateX(-50%)",
                                    }}
                                    className='absolute hidden group-hover:flex flex-col items-center pt-4'
                                >
                                    <div className='w-40 rounded-md border border-white border-opacity-20 flex-col gap-3 p-3 uppercase bg-black bg-opacity-80'>
                                        <div
                                            onClick={() => {
                                                router.push("/introduction");
                                            }}
                                            className={`h-8 flex justify-start items-center transition-all cursor-pointer ${
                                                props.currentPage ===
                                                Page.INTRODUCTION
                                                    ? "opacity-100"
                                                    : "opacity-50 hover:opacity-80"
                                            }`}
                                        >
                                            INTRODUCTION
                                        </div>
                                        <div
                                            onClick={() => {
                                                router.push("/originals");
                                            }}
                                            className={`h-8 flex justify-start items-center transition-all cursor-pointer ${
                                                props.currentPage ===
                                                Page.ORIGINALS
                                                    ? "opacity-100"
                                                    : "opacity-50 hover:opacity-80"
                                            }`}
                                        >
                                            ORIGINALS PROGRAMME
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        {/* Socials */}
                        <div className='flex items-center gap-5'>
                            <img
                                className='hover:scale-110 transition-all mt-[2px] cursor-pointer h-auto w-4'
                                onClick={() => {
                                    window.open("https://discord.gg/ather");
                                }}
                                src='/images/discord.png'
                                alt='discord'
                            />
                            <img
                                className='hover:scale-110 transition-all mt-[2px] cursor-pointer h-auto w-4'
                                onClick={() => {
                                    window.open(
                                        "https://twitter.com/atherverse"
                                    );
                                }}
                                src='/images/twitter.png'
                                alt='twitter'
                            />
                            <img
                                className='hover:scale-110 transition-all mt-[2px] cursor-pointer h-auto w-4'
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
                    <div
                        onClick={() => {
                            setMobileMenuVisible(!mobileMenuVisible);
                        }}
                        className='flex md:hidden items-center justify-end w-full cursor-pointer'
                    >
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
