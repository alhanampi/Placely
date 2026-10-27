import Link from "next/link";
import properties from "@/data/properties.json";
import PropertyCard from "./PropertyCard";

import styles from "./HomeProperties.module.scss";

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Just listed</p>
        <h2 className={styles.title}>Recent properties</h2>
      </div>
      {recentProperties.length > 0 ? (
        <div className={styles.grid}>
          {recentProperties.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      ) : (
        <p className={styles.empty}>No properties available.</p>
      )}
      <div className={styles.more}>
        <Link href="/properties" className={styles.moreLink}>
          View all properties
        </Link>
      </div>
    </section>
  );
};

export default HomeProperties;
