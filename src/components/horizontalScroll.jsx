import React, { useEffect, useRef } from 'react';
import styles from './horizontalScroll.module.css';

export default function HorizontalScroll({ style, children, speed }) {
    const scrollRef = useRef(null);

    speed = speed ? speed : 0.7;

    useEffect(() => {
        const el = scrollRef.current;

        let animationFrame;
        let nudge = 0;
        let mult = 1;

        const scroll = () => {
            if (!el) return;

            nudge += speed * mult

            el.scrollLeft = nudge;
            if (nudge >= el.clientWidth / 2 || nudge < 0) {
                nudge = Math.min(Math.max(nudge, 0), el.clientWidth / 2 - 1)
                mult *= -1;
            }

            animationFrame = requestAnimationFrame(scroll);
        };

        animationFrame = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrame);
    }, []);

    return (

        <div className={styles.scrollContainer} style={style} ref={scrollRef}>
            {[...children, ...children, ...children, ...children].map((item, index) => (
                <div className={styles.scrollItem} key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
};