import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";

import React from "react";

const Footer = ({children}: any) => {

    let isMobile = useMediaQuery('(max-width: 1200px)')

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 3, marginTop: '2rem'}}>
                <motion.img onClick={() => {
                    window.open("https://discord.gg/xjETANVKBe")
                }} whileHover={{scale: 1.1}} src="/images/discord.png" style={{marginTop: '2px', cursor: 'pointer'}} width={"18px"} height={"auto"} alt="discord" />
                <motion.img onClick={() => {
                    window.open("https://twitter.com/planetather")
                }} whileHover={{scale: 1.1}} src="/images/twitter.png" style={{cursor: 'pointer'}} width={"18px"} height={"auto"} alt="twitter" />
                <motion.img onClick={() => {
                    window.open("https://www.instagram.com/planetather/")
                }} whileHover={{scale: 1.1}} src="/images/instagram.svg" style={{cursor: 'pointer'}} width={"18px"} height={"auto"} alt="instagram" />
            </Box>
            <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2rem'}}>
                {/* <img style={{borderRadius: '10px'}} width={"40px"} height={"40px"} src="/images/stratos.webp" alt="stratos" /> */}
                <span style={{marginLeft: '0.5rem'}}>
                    <p style={{fontFamily: 'Regular', fontSize: '1rem', color: '#ffffff', lineHeight: 0}}>StratosLabs</p>
                    {/* <p style={{fontFamily: 'Medium', fontSize: '1rem', color: '#ffffff', lineHeight: '1px'}}>Labs</p> */}
                </span>
            </Box>
            <p style={{ marginTop: '1rem', marginBottom: '2rem', width: isMobile ? '80%' : '50%', color: 'rgb(199, 195, 187, 0.7)', fontSize: '0.9rem', fontFamily: 'Subheading', textAlign: 'center', wordBreak: 'keep-all'}}>© 2022 Stratos Labs Pvt. Ltd. Stratos Labs, PlanetAther, Ather, and any associated logos are trademarks, service marks, and/or registered trademarks of Stratos Labs, Pvt. Ltd.</p>
        </Box>
    )
}

export default Footer