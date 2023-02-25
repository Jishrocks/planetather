/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { NextPage } from "next";
import React from "react";
import Article from "../components/Article";
import Page from "../components/Page";
import useMediaQuery, { screenBasedAttribute } from "../lib/mediaQuery";

const License: NextPage = () => {

    let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()
    
    return (
        <>
            <Page title="License" subtitle="Legal stuff. An agreement between you and Stratos Labs">
                <motion.p className="content" style={{fontSize: screenBasedAttribute(screens, {
                    screen_sm: '14px',
                    screen_md: '14px',
                    screen_lg: '15px',
                    screen_xl: '18px'
                }), color: 'var(--palette-white)', 
                width: screenBasedAttribute(screens, {
                    screen_sm: '300px',
                    screen_md: '300px',
                    screen_lg: '480px',
                    screen_xl: '640px'
                }),
                fontFamily: 'Mono', lineHeight: '2', marginTop: '2.5rem', marginLeft: '10rem'}}>
                    This Ather NFT License Agreement (the "License") is a legally binding agreement entered into between Stratos Labs and you. When you acquire an Ather NFT, you own all personal property rights to the token underlying the Ather NFT (e.g., the right to freely sell, transfer, or otherwise dispose of that Ather NFT), but you do not own the associated artwork, brand, or other intellectual property associated with that Ather NFT, except for the specific licensed rights set forth below.
                </motion.p>

                <Article align={"left"} image={""} heading={"Definitions"} subheading={""} description={`"Stratos Labs", "us", "we" or "our" means Stratos Labs Inc and/or its affiliates.

"You" or "your" means a lawful owner of an Ather NFT.`}>

                </Article>

                <Article align={"left"} image={""} heading={"License Grant"} subheading={""} description={`Ather NFT Art License. For as long as you lawfully own your Ather NFT, and subject to your compliance with the terms of this License, we hereby grant you the following rights:
                    
- A non-exclusive, worldwide, royalty-free, license to use, reproduce, display, modify, and create derivative works of the Ather NFT Art for your Ather NFT for personal, non-commercial use (such as to display in your wallet, as a profile picture, to create a pixel-art version for use in a third-party platform)

- A non-exclusive, worldwide, royalty-free, sub-licensable (but only to service providers assisting you with a Commercial Use) license to use, copy, reproduce and display the Ather NFT Art for your Ather NFT for any Commercial Use. The license in this sub-section (2) does not include a right to create derivative works of the Ather NFT Art except as necessary to adapt and depict the Ather NFT Art in or on the goods or media created pursuant to this license, or as otherwise required in the "No Rights to Trademarks" Section below. But this license does permit you to mint and create new NFTs and NFT projects based on your Ather NFT Art for Ather NFTs that you own, as long as you don't use the Ather Trademarks on, or to promote, such new NFTs. From time to time, we may collaborate with third parties to create Ather NFTs which include artwork, images, works of authorship, logos, trademarks, service marks, or trade dress owned by a third party ("Third Party Content"). The license in this paragraph does not extend to any Ather NFT or Ather NFT Art that contains Third Party Content, and you may not use, copy, reproduce, display, create derivative works of, or create new NFTs based on such Third-Party Content, or any portion thereof, for any Commercial Use, unless we or the applicable third parties expressly provide our consent in writing or by public announcement.
                `}>

                </Article>
            </Page>
        </>
    )
}

export default License