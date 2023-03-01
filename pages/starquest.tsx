/* eslint-disable react/no-unescaped-entities */
import { NextPage } from "next";
import React from "react";

const Starquest: NextPage = () => {

    let starquestTopics = ['Inspiration', 'Community', 'Neural Networks', 'Tangibles', 'Collaborations']

    return (
        <div>
            <img className="fixed w-[35rem] h-auto bottom-0 right-0" src="/images/atherian-transparent.png" alt="atherian" />
        </div>
    )
}

export default Starquest