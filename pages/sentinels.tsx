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
            <Page title="Sentinels" subtitle="The might, the mystique, the protectors.">
                <div style={{display: 'flex', gap: '24px'}}>
                    <img style={{width: '45rem'}} src="/images/sentinels/cascade.png" alt="" />

                    <div style={{transform: 'translateX(-15rem)'}}>
                        <Article align={"left"} image={""} heading={"CASCADE"} subheading={""}></Article>
                    </div>
                </div>
            </Page>
        </>
    )
}

export default License