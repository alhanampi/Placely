import Link from "next/link";

import styles from "./OwnerCallout.module.scss";

const OwnerCallout = () => {
  return (
    <section className={styles.section}>
      <div className={styles.band}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>For property owners</p>
          <h2 className={styles.title}>Own a place? List it in minutes.</h2>
          <p className={styles.lead}>
            Reach people looking for nightly, weekly or monthly stays, and keep
            every inquiry in one inbox.
          </p>
        </div>
        <div className={styles.actions}>
          <Link href="/properties/add" className={styles.primary}>
            Add property
          </Link>
          <Link href="/properties" className={styles.secondary}>
            Browse properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OwnerCallout;
