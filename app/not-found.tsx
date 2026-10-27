import Link from "next/link";
import { LuCircleAlert } from "react-icons/lu";

import styles from "./not-found.module.scss";

const NotFoundPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <LuCircleAlert aria-hidden="true" className={styles.icon} />
        <p className={styles.eyebrow}>Error 404</p>
        <h1 className={styles.title}>Page not found</h1>
        <p className={styles.lead}>
          The page you are looking for does not exist.
        </p>
        <Link href="/" className={styles.homeLink}>
          Go home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
