import React from "react";
import Fade from 'react-reveal/Fade';
import { ParallaxProvider } from "react-scroll-parallax";
import useMediaQuery, { screenBasedAttribute } from "../lib/mediaQuery";

export default function Page({children, title, subtitle}: {children: React.ReactNode, title?: string, subtitle?: string}) {
    let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

    return (
        <ParallaxProvider>
            <div style={{marginLeft: '10rem', marginRight: '10rem', color: 'white'}}>
                <div style={{height: '15rem', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{position: 'absolute', marginTop: '2rem', fontFamily: 'GalderGlynn', fontSize: screenBasedAttribute(screens, {
                        screen_sm: '2rem',
                        screen_md: '3.5rem',
                        screen_lg: '4.5rem',
                        screen_xl: '5rem'
                    }), textTransform: 'uppercase', color: '#f7f7f7', textAlign: 'center', letterSpacing: '2px', lineHeight: 0.4}}>
                        <Fade bottom opposite cascade>
                            {title}
                            <span style={{fontFamily: 'Mono', marginTop: '-2rem', fontSize: screenBasedAttribute(screens, {
                                screen_sm: '0.6rem',
                                screen_md: '0.8rem',
                                screen_lg: '0.8rem',
                                screen_xl: '0.8rem'
                            }), color: 'rgba(255, 255, 255, 0.4)', 
                            marginBlock: 0}}>{subtitle}</span>
                        </Fade>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{borderTop: '1px solid rgba(255, 255, 255, 0.15)', width: `36vw`}}></div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100px', height: '100px', backgroundColor: 'rgba(255, 255, 255, 0.15)', clipPath: 'polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)'}}>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '98.5px', height: '98.5px', backgroundColor: '#050505', clipPath: 'polygon(0 0, 0 88%, 12% 100%, 100% 100%, 100% 12%, 88% 0)'}}>
                            <img style={{width: '48px', height: 'auto', position: 'absolute', overflow: 'visible'}} src="/images/logov2.png" alt="" />
                        </div>
                    </div>
                    <div style={{borderTop: '1px solid rgba(255, 255, 255, 0.15)', width: `36vw`}}></div>
                </div>

                <div style={{marginTop: '5rem'}}>
                    {children}
                </div>
            </div>
        </ParallaxProvider>
    )
}