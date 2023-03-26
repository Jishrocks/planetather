import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { TextScrambleProps } from "./types";
import { randomItem, nextItem } from "./utils";

const symbols: string[] = "!<>-_\\/[]{}—=+*^?#".split("");

const TextScramble = (props: TextScrambleProps) => {
    let letterSpeed = 5;
    let nextLetterSpeed = 100;
    let pauseTime = 1500;
    let paused = false;

    if (props.letterSpeed) {
        letterSpeed = props.letterSpeed;
    }

    if (props.nextLetterSpeed) {
        nextLetterSpeed = props.nextLetterSpeed;
    }

    if (props.pauseTime) {
        pauseTime = props.pauseTime;
    }

    if (props.paused) {
        paused = props.paused;
    }

    const [currentText, setCurrentText] = useState<string>(props.texts[0]);

    const initSymbols: string[] = Array(currentText.length)
        .fill(0)
        .map(() => randomItem(symbols));

    const [displayedText, setDisplayedText] = useState<string[]>(initSymbols);

    const leftIndexes: number[] = [];

    const defaultLeftIndexes = (): void => {
        currentText.split("").forEach((_, i) => {
            leftIndexes.push(i);
        });
    };

    let bakeLetterInterval: any = 0;
    let bakeTextInterval: any = 0;

    const bakeLetter = () => {
        bakeLetterInterval = setInterval(() => {
            if (!paused) {
                const updatedText: string[] = [];

                currentText.split("").forEach((_, i) => {
                    if (!leftIndexes.includes(i)) {
                        updatedText[i] = currentText[i];
                        return;
                    }

                    const randomSymbol = randomItem(symbols);
                    updatedText[i] = randomSymbol;
                });

                setDisplayedText(updatedText);
            }
        }, letterSpeed);
    };

    const bakeText = () => {
        defaultLeftIndexes();
        bakeLetter();

        bakeTextInterval = setInterval(() => {
            if (!paused) {
                if (leftIndexes.length === 0) {
                    clearInterval(bakeLetterInterval);
                    clearInterval(bakeTextInterval);

                    setTimeout(() => {
                        setCurrentText(nextItem(props.texts, currentText));
                        defaultLeftIndexes();
                    }, pauseTime);
                }

                leftIndexes.shift();
            }
        }, nextLetterSpeed);
    };
    const [inViewRef, inView] = useInView({ triggerOnce: true });
    useEffect(() => {
        if (!paused && inView) bakeText();
    }, [currentText, paused, inView]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div ref={inViewRef} className={props.className}>
            {displayedText}
        </div>
    );
};

export default dynamic(() => Promise.resolve(TextScramble), { ssr: false });
