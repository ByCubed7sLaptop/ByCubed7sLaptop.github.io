import React, { useEffect, useRef } from 'react';
import styles from './horizontalScroll.module.css';

function lerp(a, b, t) {
	return a + (b - a) * t;
}

export default function HorizontalScroll({ style, children, speed }) {
    const scrollRef = useRef(null);

    speed = speed ? speed : 0.7;

    useEffect(() => {
        const el = scrollRef.current;

        let animationFrame;
        let nudge = 0;
        let mult = 1;

        let min = 0;
        let max = el.clientWidth / 2;
        let margin = 0.1;
        let current = 0;

        const scroll = () => {
            if (!el) return;

            nudge += speed * mult

            if (nudge > max - margin || nudge < min + margin) {
                nudge = Math.min(Math.max(nudge, min), max)
                mult *= -1;
            }

            current = lerp(current, nudge, 0.05)

            el.scrollLeft = current;

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