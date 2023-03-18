import React from "react";
import { Tab } from "../lib/stores/configStore";
import useConfigStore from "../lib/stores/configStore";

const Sidebar = ({ children }: any) => {
    let { currentSidebarTab } = useConfigStore();
    return (
        <div
            className='hidden fixed md:flex gap-2 z-50 rotate-180 ml-12 items-center justify-center'
            style={{ writingMode: "vertical-lr", height: "100%" }}
        >
            <h1
                className='font-display text-center text-white uppercase tracking-widest text-xs lg:text-md transition-all duration-200'
                style={{ opacity: currentSidebarTab == Tab.CREATORS ? 1 : 0.2 }}
            >
                creators
            </h1>

            <h1
                className='font-display text-center text-white uppercase tracking-widest text-xs lg:text-sm transition-all duration-200'
                style={{ opacity: 0.2 }}
            >
                ◦
            </h1>

            <h1
                className='font-display text-center text-white uppercase tracking-widest text-xs lg:text-md transition-all duration-200'
                style={{
                    opacity: currentSidebarTab == Tab.COLLECTION ? 1 : 0.2,
                }}
            >
                collection
            </h1>

            <h1
                className='font-display text-center text-white uppercase tracking-widest text-xs lg:text-sm transition-all duration-200'
                style={{ opacity: 0.2 }}
            >
                ◦
            </h1>

            <h1
                className='font-display text-center text-white uppercase tracking-widest text-xs lg:text-md transition-all duration-200'
                style={{
                    opacity: currentSidebarTab == Tab.STARQUEST ? 1 : 0.2,
                }}
            >
                starquest
            </h1>

            <h1
                className='font-display text-center text-white uppercase tracking-widest text-xs lg:text-sm transition-all duration-200'
                style={{ opacity: 0.2 }}
            >
                ◦
            </h1>

            <h1
                className='font-display text-center text-white uppercase tracking-widest text-xs lg:text-md transition-all duration-200'
                style={{ opacity: currentSidebarTab == Tab.LORE ? 1 : 0.2 }}
            >
                the lore
            </h1>
        </div>
    );
};

export default Sidebar;
