import { LuSearch } from "react-icons/lu";

import { propertyTypes } from "@/data/propertyTypes";

import styles from "./PropertySearchForm.module.scss";

const PropertySearchForm = () => {
  return (
    <form className={styles.form}>
      <div className={`${styles.field} ${styles.fieldWide}`}>
        <label htmlFor="location" className={styles.label}>
          Location
        </label>
        <input
          type="text"
          id="location"
          placeholder="City, state or zip"
          className={styles.control}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="property-type" className={styles.label}>
          Property type
        </label>
        <select id="property-type" className={styles.control}>
          <option value="All">All</option>
          {propertyTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className={styles.submit}>
        <LuSearch aria-hidden="true" />
        <span>Search</span>
      </button>
    </form>
  );
};

export default PropertySearchForm;
