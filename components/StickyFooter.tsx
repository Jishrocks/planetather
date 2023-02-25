import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"

const StickyFooter = () => {

    const [lastScrollTop, setScrollTop] = useState(0)
    const [showFooter, setShowFooter] = useState(false)

    useEffect(() => {
        let eventListener = () => {
            var scrollTop = document.documentElement.scrollTop
            if (scrollTop > 600) {
                setShowFooter(true)
            } else {
                setShowFooter(false)
            }
            setScrollTop(scrollTop)
        }
        window.addEventListener('scroll', eventListener)
    }, [lastScrollTop])
    
    return (
        <>
            <motion.div
            className="hidden md:grid"
            style={{
                height: '1.875rem', 
                width: 'auto', 
                bottom: '1.875rem',
                opacity: showFooter ? 1 : 0,
                position: 'sticky',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                gridTemplateColumns: '1fr 1fr',
                marginLeft: '2.1875rem',
                marginRight: '2.1875rem',
                transition: 'all 0.25s ease-in-out',
                zIndex: 999,
            }}>

                <div style={{display: 'flex', justifyContent: 'left', alignItems: 'center'}}>
                    <h1 style={{fontFamily: 'Mono', color: 'var(--palette-white)', fontSize: '0.5625rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Enter collective reality.</h1>
                </div>

                <div style={{display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
                    <h1 style={{fontFamily: 'Mono', color: 'var(--palette-white)', fontSize: '0.5625rem', letterSpacing: '1px', textTransform: 'uppercase'}}>Only on Planetather.io</h1>
                </div>
            </motion.div>
        </>
    )
}

export default StickyFooter