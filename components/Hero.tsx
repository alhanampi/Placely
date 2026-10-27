import Image from "next/image";

import properties from "@/data/properties.json";
import PropertySearchForm from "./PropertySearchForm";

import styles from "./Hero.module.scss";

const Hero = () => {
  const highlight = properties[0];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.copy}>
          <span className={styles.badge}>
            Nightly, weekly or monthly rentals
          </span>
          <h1 className={styles.title}>Find a place that feels like yours.</h1>
          <p className={styles.lead}>
            Browse rentals, bookmark the ones you love, and message owners
            directly.
          </p>
        </div>
        <div className={styles.media}>
          <Image
            src={`/images/properties/${highlight.images[0]}`}
            alt={highlight.name}
            className={styles.image}
            fill
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
          />
          <div className={styles.floatingCard}>
            <p className={styles.floatingTitle}>{highlight.name}</p>
            <p className={styles.floatingMeta}>
              {highlight.location.city}, {highlight.location.state}
            </p>
          </div>
        </div>
      </section>

      <section className={styles.search}>
        <PropertySearchForm />
      </section>
    </>
  );
};

export default Hero;
