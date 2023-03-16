import { motion, useAnimation } from "framer-motion";

import React, { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery, screenBasedAttribute } from "../lib/mediaQuery";
import Fade from "react-reveal/Fade";

type ArticleProps = {
    align: "left" | "right";
    image?: string;
    imageClass?: string;
    heading: string;
    subheading: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
};

const Article = (props: ArticleProps) => {
    let [content, setContent] = useState<any>(null);

    useEffect(() => {
        return setContent(props.children ? props.children : props.description);
    }, [props.children, props.description]);

    return (
        <section
            className={
                "grid grid-cols-1 xl:grid-cols-2 md:ml-16 mr-20 mt-20 mb-20 h-auto " +
                props.className
            }
        >
            <div
                className='flex flex-row gap-1 justify-center items-center'
                style={{ order: props.align == "left" ? 1 : "unset" }}
            >
                <div>
                    {props.image && (
                        <Fade>
                            <img
                                src={props.image}
                                className={
                                    props.imageClass
                                        ? `w-[60%] h-auto ml-auto mr-auto ` +
                                          props.imageClass
                                        : `w-[60%] h-auto ml-auto mr-auto`
                                }
                            />
                        </Fade>
                    )}
                </div>
            </div>

            <div>
                <div
                    className='flex flex-col ml-10 lg:ml-20'
                    style={{
                        alignItems: props.align == "left" ? "start" : "start",
                    }}
                >
                    <h1 className='text-white w-[300px] lg:w-[480px] xl:w-[640px] opacity-70 uppercase font-subheading text-3xl'>
                        {props.subheading}
                    </h1>
                    <div>
                        <h1 className='text-white font-display text-5xl lg:text-6xl uppercase'>
                            {props.heading}
                        </h1>
                    </div>

                    <p className='content text-white text-sm lg:text-md font-body mt-10 leading-7 w-[480px] xl:w-[640px]'>
                        {content}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Article;
