import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import properties from "@/data/properties.json";
import { propertyTypes } from "@/data/propertyTypes";

import styles from "./page.module.scss";

const PropertiesPage = () => {
  return (
    <>
      <section className={styles.header}>
        <p className={styles.eyebrow}>Rentals</p>
        <h1 className={styles.title}>Browse properties</h1>
        <p className={styles.count}>Showing {properties.length} rentals.</p>
      </section>

      <section className={styles.search}>
        <PropertySearchForm />
      </section>

      {/* Filtros solo visuales hasta que haya backend */}
      <section className={styles.filters} aria-label="Filter by type">
        <button
          type="button"
          className={`${styles.filter} ${styles.filterActive}`}
          aria-pressed="true"
        >
          All
        </button>
        {propertyTypes.map((type) => (
          <button
            key={type.value}
            type="button"
            className={styles.filter}
            aria-pressed="false"
          >
            {type.label}
          </button>
        ))}
      </section>

      <section className={styles.results}>
        {properties.length > 0 ? (
          <div className={styles.grid}>
            {properties.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        ) : (
          <p className={styles.empty}>No properties available.</p>
        )}
      </section>
    </>
  );
};

export default PropertiesPage;
