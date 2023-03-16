import React, { useEffect, useState } from "react";

import { useLocomotiveScroll } from "react-locomotive-scroll";
import useConfigStore from "../lib/stores/configStore";

const StickyFooter = () => {
    let { showStickyFooter } = useConfigStore();

    return (
        <section className='fixed bottom-0 w-full mb-6 z-50'>
            <div
                className='hidden md:grid z-50 w-auto'
                style={{
                    height: "1.875rem",
                    bottom: "1.875rem",
                    opacity: showStickyFooter ? 1 : 0,
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    gridTemplateColumns: "1fr 1fr",
                    marginLeft: "2.1875rem",
                    marginRight: "2.1875rem",
                    transition: "all 0.25s ease-in-out",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "left",
                        alignItems: "center",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "Mono",
                            color: "var(--palette-white)",
                            fontSize: "0.5625rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        Enter collective reality.
                    </h1>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "right",
                        alignItems: "center",
                    }}
                >
                    <h1
                        style={{
                            fontFamily: "Mono",
                            color: "var(--palette-white)",
                            fontSize: "0.5625rem",
                            letterSpacing: "1px",
                            textTransform: "uppercase",
                        }}
                    >
                        Only on Planetather.io
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default StickyFooter;
