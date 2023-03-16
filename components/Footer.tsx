import styled from "@emotion/styled";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useRouter } from "next/router";

import React from "react";

function FooterLink({ children, ...props }: any) {
    let router = useRouter();
    return (
        <h1
            className='font-display text-white text-xs cursor-pointer transition-all hover:opacity-60'
            onClick={() => {
                if (children === "DISCORD") {
                    window.open("https://discord.gg/ather", "_blank");
                } else if (children === "TWITTER") {
                    window.open("https://twitter.com/PlanetAtherNFT", "_blank");
                } else if (children === "INSTAGRAM") {
                    window.open(
                        "https://www.instagram.com/planetathernft",
                        "_blank"
                    );
                } else if (children === "LICENSE") {
                    router.push("/license");
                }
            }}
        >
            {children}
        </h1>
    );
}

const Footer = ({ children }: any) => {
    return (
        <section
            data-scroll-section
            className='hidden md:grid h-[18rem] mx-8 pb-4'
        >
            <div className='flex h-12 gap-16 justify-center items-center'>
                <FooterLink>DISCORD</FooterLink>
                <FooterLink>TWITTER</FooterLink>
                <FooterLink>INSTAGRAM</FooterLink>
                <FooterLink>LICENSE</FooterLink>
            </div>

            <div className='grid mt-10'>
                <div className='flex flex-col h-8 justify-center items-center opacity-50'>
                    <img
                        className='w-auto h-9 mix-blend-difference'
                        src={"/images/logov2.png"}
                    ></img>
                    <h1 className='font-body text-white text-lg'>ATHER</h1>
                </div>
            </div>

            <div className='flex flex-col items-center justify-end mx-8'>
                <p
                    className='mb-20 font-body text-xs text-center uppercase'
                    style={{ color: "rgb(199, 195, 187, 0.7)" }}
                >
                    © {new Date().getFullYear()} Stratos Labs Pvt. Ltd. All
                    rights reserved.
                </p>
            </div>
        </section>
    );
};

export default Footer;
