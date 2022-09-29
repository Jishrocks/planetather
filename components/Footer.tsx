import useMediaQuery from "@mui/material/useMediaQuery";

import React from "react";

const Footer = ({children}: any) => {

    let isMobile = useMediaQuery('(max-width: 1200px)')

    return (
        <div style={{height: '20rem', marginLeft: '2rem', marginRight: '2rem', display: 'grid', gridTemplateRows: '1fr 5rem'}}>
            <div style={{display: 'grid'}}>
                <div style={{display: 'flex', height: '2rem', justifyContent: 'center', alignItems: 'center'}}>
                    <img width={"auto"} height={"28px"} src={"/images/logov2.png"} style={{marginRight: '10px', cursor: 'pointer', mixBlendMode: 'difference'}}></img>
                    <h1 style={{fontFamily: 'FFMark', fontSize: '1.125rem'}}>Ather</h1>
                </div>

                
            </div>

            <div style={{display: 'flex', height: '3rem', gap: '7.5rem', justifyContent: 'center', alignItems: 'center', fontSize: '0.5rem'}}>
                <h1 style={{fontFamily: 'FFMark'}}>DISCORD</h1>
                <h1 style={{fontFamily: 'FFMark'}}>TWITTER</h1>
                <h1 style={{fontFamily: 'FFMark'}}>INSTAGRAM</h1>
                <h1 style={{fontFamily: 'FFMark'}}>PRIVACY POLICY</h1>
                <h1 style={{fontFamily: 'FFMark'}}>TERMS AND CONDITIONS</h1>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'end'}}>
                <p style={{ marginTop: '1rem', marginBottom: '3rem', color: 'rgb(199, 195, 187, 0.7)', fontSize: '0.5625rem', fontFamily: 'Mono', wordBreak: 'keep-all'}}>© 2022 Stratos Labs Pvt. Ltd. Stratos Labs, PlanetAther, Ather, and any associated logos are trademarks, service marks, and/or registered trademarks of Stratos Labs, Pvt. Ltd.</p>
            </div>
        </div>
    )
}

export default Footer