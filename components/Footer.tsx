import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";

import styles from "./Footer.module.scss";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          <Image className={styles.logo} src={logo} alt="" />
          <span>Placely</span>
        </Link>
        <ul className={styles.links}>
          <li>
            <Link href="/properties">Properties</Link>
          </li>
          <li>
            {/* to do - redirect to a page with the project info and my resume */}
            <Link href="/credits">Credits</Link>
          </li>
        </ul>
        <p className={styles.copy}>
          &copy; {currentYear} Placely. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
