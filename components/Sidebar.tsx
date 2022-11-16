import React from "react";
import {useMediaQuery, screenBasedAttribute} from "../lib/mediaQuery";

const Sidebar = ({children}: any) => {

    let {screen_sm, screen_md, screen_lg, screen_xl, screens} = useMediaQuery()

    return (
        <div style={{display: screenBasedAttribute(screens, {
            screen_sm: 'none',
            screen_md: 'flex',
            screen_lg: 'flex',
            screen_xl: 'flex'
        }), gap: '18px', transform: 'rotate(-90deg) translateY(-900%)', position: 'fixed', top: '50%', zIndex: 99999}}>
            <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '1.8rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', opacity: 0.2}}>
                creators
            </h1>

            <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '1rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', opacity: 0.2}}>
            ◦
            </h1>

            <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '1.8rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', opacity: 0.2}}>
                starquest
            </h1>

            <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '1rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', opacity: 0.2}}>
            ◦
            </h1>
            
            <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '1.8rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', opacity: 0.2}}>
                vision
            </h1>

            <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '1rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', opacity: 0.2}}>
            ◦
            </h1>
            
            <h1 style={{fontFamily: 'Mandalore', textAlign: 'center', color: '#fff', fontSize: '1.8rem', marginBlock: '0rem', textTransform: 'lowercase', lineHeight: 0.78, letterSpacing: '2px', textShadow: '0 0 150px rgb(19 23 30 / 18%), 0 50px 32px rgb(19 23 30 / 12%)', opacity: 1}}>
                prologue
            </h1>
        </div>
    )
}

export default Sidebar