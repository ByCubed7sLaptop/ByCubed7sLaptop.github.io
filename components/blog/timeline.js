import {useRef} from "react";

import styles from "./timeline.module.css";

export default function Timeline({events}) {
    const scrollRef = useRef(null);

    return (
        <div className={styles.timelineContainer}>
            <div ref={scrollRef} className={styles.timelineWrapper}>
                {events.map((event, index) => (
                    <div className={styles.timelineEvent}>
                        <div className={styles.timelineDot} />
                        <div className={styles.timelineCard}>
                            <p className={styles.timelineDate}>{event.date}</p>
                            <p className={styles.timelineTitle}>
                                {event.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.timelineLine} />
        </div>
    );
}
