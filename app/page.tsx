import Link from "next/link";

import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import OwnerCallout from "@/components/OwnerCallout";
import { propertyTypes } from "@/data/propertyTypes";

import styles from "./page.module.scss";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section className={styles.types}>
        <span className={styles.typesLabel}>Browse by type</span>
        {propertyTypes.map((type) => (
          <Link key={type.value} href="/properties" className={styles.chip}>
            {type.label}
          </Link>
        ))}
      </section>
      <HomeProperties />
      <OwnerCallout />
    </>
  );
};

export default HomePage;
