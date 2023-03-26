/* eslint-disable @next/next/no-img-element */

import React from "react";
import { useRouter } from "next/router";

enum Page {
    HOME = "home",
    CINEMATICS = "cinematics",
    STARQUEST = "starquest",
    SENTINELS = "sentinels",
    INTRODUCTION = "introduction",
    ORIGINALS = "originals programme",
    DROPS = "drops",
    LICENSE = "license",
}

type Props = {
    fixed: boolean;
    currentPage: Page;
    invisible?: boolean;
    forcedTransparent?: boolean;
};

const Navbar = (props: Props) => {
    let router = useRouter();

    return (
        <>
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
                        ? "bg-black backdrop-blur-md bg-opacity-80"
                        : "bg-opacity-0")
                }
            >
                <div className='h-[70px] w-full flex'>
                    {/* Left Side Text */}
                    {/* <div className='hidden md:flex items-center'>
                        <h1 className='font-body font-extralight text-white uppercase text-xs tracking-wide md:tracking-wider'>
                            <span className='font-display opacity-100'>×</span>{" "}
                            ENTER THE HIDEOUTS
                        </h1>
                    </div> */}

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
                            <div
                                style={{
                                    opacity: [
                                        Page.INTRODUCTION,
                                        Page.ORIGINALS,
                                        Page.DROPS,
                                        Page.LICENSE,
                                    ].includes(props.currentPage)
                                        ? 1
                                        : 0.5,
                                }}
                                className='group opacity-50 hover:opacity-100 transition-all duration-300'
                            >
                                <p
                                    className='cursor-pointer'
                                    onClick={() => {
                                        router.push("/sentinels");
                                    }}
                                >
                                    <span className='flex items-center uppercase'>
                                        {[
                                            Page.INTRODUCTION,
                                            Page.ORIGINALS,
                                            Page.DROPS,
                                            Page.LICENSE,
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
                                    <div className='w-40 border border-white border-opacity-20 flex-col gap-3 p-3 uppercase bg-black bg-opacity-80'>
                                        <div
                                            style={{
                                                opacity:
                                                    props.currentPage ===
                                                    Page.INTRODUCTION
                                                        ? 1
                                                        : 0.5,
                                            }}
                                            onClick={() => {
                                                router.push("/introduction");
                                            }}
                                            className='h-8 flex justify-start items-center opacity-50 hover:opacity-100 transition-all cursor-pointer'
                                        >
                                            INTRODUCTION
                                        </div>
                                        <div
                                            style={{
                                                opacity:
                                                    props.currentPage ===
                                                    Page.ORIGINALS
                                                        ? 1
                                                        : 0.5,
                                            }}
                                            onClick={() => {
                                                router.push("/originals");
                                            }}
                                            className='h-8 flex justify-start items-center opacity-50 hover:opacity-100 transition-all cursor-pointer'
                                        >
                                            ORIGINALS PROGRAMME
                                        </div>
                                        <div
                                            style={{
                                                opacity:
                                                    props.currentPage ===
                                                    Page.DROPS
                                                        ? 1
                                                        : 0.5,
                                            }}
                                            onClick={() => {
                                                router.push("/drops");
                                            }}
                                            className='h-8 flex justify-start items-center opacity-50 hover:opacity-100 transition-all cursor-pointer'
                                        >
                                            DROPS
                                        </div>
                                        <div
                                            style={{
                                                opacity:
                                                    props.currentPage ===
                                                    Page.LICENSE
                                                        ? 1
                                                        : 0.5,
                                            }}
                                            onClick={() => {
                                                router.push("/license");
                                            }}
                                            className='h-8 flex justify-start items-center opacity-50 hover:opacity-100 transition-all cursor-pointer'
                                        >
                                            LICENSE
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                    <div className='flex md:hidden items-center justify-end w-full'>
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
