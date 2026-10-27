"use client";
import { ClipLoader } from "react-spinners";

import styles from "./loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <ClipLoader color="var(--accent)" size={56} aria-label="Loading" />
    </div>
  );
};

export default Loading;
