import styles from "./showOnScrollDown.module.css";
import { useEffect, useRef, useState } from "react";

export default function ShowOnScrollDown({style, children}) {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);
  const scrollAmount = 700;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      //console.log(lastScrollY.current, currentScrollY, scrollAmount)

      // Show header when scrolling down
      if (currentScrollY > lastScrollY.current && currentScrollY > scrollAmount) {
        setVisible(true);
        //console.log("setVisible true");
      }

      // Hide when back at the top
      if (currentScrollY <= scrollAmount) {
        setVisible(false);
        //console.log("setVisible false");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <header className={`${styles.header} ${visible ? styles.show : ""}`} style={styles} children={children}></header>
  );
}
