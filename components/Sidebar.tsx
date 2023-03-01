import React from "react";
import useSidebarStore from "../lib/stores/sidebarStore";

const Sidebar = ({children}: any) => {

    return (
        <div className="hidden fixed md:flex gap-2 z-50 rotate-180 ml-10 items-center justify-center" style={{writingMode: 'vertical-lr', height: 'calc(100% - 140px)'}}>
            <h1 className="font-display text-center text-white uppercase tracking-widest text-xs lg:text-md" style={{opacity: 0.2}}>
                creators
            </h1>

            <h1 className="font-display text-center text-white uppercase tracking-widest text-xs lg:text-sm" style={{opacity: 0.2}}>
            ◦
            </h1>

            <h1 className="font-display text-center text-white uppercase tracking-widest text-xs lg:text-md" style={{opacity: 0.2}}>
                collection
            </h1>

            <h1 className="font-display text-center text-white uppercase tracking-widest text-xs lg:text-sm" style={{opacity: 0.2}}>
            ◦
            </h1>
            
            <h1 className="font-display text-center text-white uppercase tracking-widest text-xs lg:text-md" style={{opacity: 0.2}}>
                starquest
            </h1>

            <h1 className="font-display text-center text-white uppercase tracking-widest text-xs lg:text-sm" style={{opacity: 0.2}}>
            ◦
            </h1>
            
            <h1 className="font-display text-center text-white uppercase tracking-widest text-xs lg:text-md" style={{opacity: 1}}>
                the lore
            </h1>
        </div>
    )
}

export default Sidebar