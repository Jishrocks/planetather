import React, { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Parallax } from "react-scroll-parallax";
import { useMediaQuery, screenBasedAttribute } from "../lib/mediaQuery";
import Fade from "react-reveal/Fade";
import TextScramble from "../lib/TextScramble";
import Image from "next/image";

type ArticleProps = {
    align: "left" | "center";
    image?: string;
    imageClass?: string;
    heading: string;
    subheading: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
};

const Article = (props: ArticleProps) => {
    const [content, setContent] = useState<any>(null);

    const [headingRef, headingInView] = useInView();

    useEffect(() => {
        return setContent(props.children ? props.children : props.description);
    }, [props.children, props.description]);

    return (
        <section
            className={
                "md:ml-16 mr-20 mt-20 mb-20 h-auto flex justify-center " +
                props.className
            }
        >
            <div ref={headingRef} data-scroll data-scroll-speed='2'>
                <Fade bottom>
                    <div
                        className={`flex flex-col w-full ${
                            props.align == "left" ? "ml-10 lg:ml-20" : ""
                        }`}
                        style={{
                            alignItems:
                                props.align == "left" ? "start" : "center",
                        }}
                    >
                        <h1
                            className={`text-white font-body tracking-widest uppercase text-xs lg:text-sm opacity-70 ${
                                props.align == "center" ? "text-center" : ""
                            }`}
                        >
                            <TextScramble
                                texts={[props.subheading]}
                            ></TextScramble>
                        </h1>
                        <Fade bottom>
                            <h1 className='text-white font-display text-5xl lg:text-6xl uppercase'>
                                {props.heading}
                            </h1>
                        </Fade>

                        <p
                            className={`content text-white text-sm lg:text-md font-body mt-10 leading-7 ${
                                props.align == "center"
                                    ? "text-center w-[480px] xl:w-[600px] xl:max-w-[840px]"
                                    : "w-[480px] xl:w-[600px] xl:max-w-[640px]"
                            }`}
                        >
                            {content}
                        </p>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Article;
