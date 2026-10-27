import { propertyTypes } from "@/data/propertyTypes";

import styles from "./page.module.scss";

const amenities = [
  "Wifi",
  "Full kitchen",
  "Washer & Dryer",
  "Free Parking",
  "Swimming Pool",
  "Hot Tub",
  "24/7 Security",
  "Wheelchair Accessible",
  "Elevator Access",
  "Dishwasher",
  "Gym/Fitness Center",
  "Air Conditioning",
  "Balcony/Patio",
  "Smart TV",
  "Coffee Maker",
];

const AddPropertyPage = () => {
  return (
    <>
      <section className={styles.header}>
        <p className={styles.eyebrow}>List a property</p>
        <h1 className={styles.title}>Add property</h1>
      </section>

      {/* Sin lógica de envío hasta que haya backend */}
      <form className={styles.form}>
        <fieldset className={styles.panel}>
          <legend className={styles.panelTitle}>Basics</legend>
          <div className={styles.field}>
            <label htmlFor="type" className={styles.label}>
              Property type
            </label>
            <select id="type" name="type" required className={styles.input}>
              {propertyTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              Listing name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="eg. Beautiful apartment in Miami"
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Add an optional description of your property"
              className={styles.input}
            />
          </div>
        </fieldset>

        <fieldset className={styles.panel}>
          <legend className={styles.panelTitle}>Location</legend>
          <div className={styles.grid}>
            <div className={`${styles.field} ${styles.fieldFull}`}>
              <label htmlFor="street" className={styles.label}>
                Street
              </label>
              <input
                id="street"
                name="location.street"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="city" className={styles.label}>
                City
              </label>
              <input
                id="city"
                name="location.city"
                type="text"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="state" className={styles.label}>
                State
              </label>
              <input
                id="state"
                name="location.state"
                type="text"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="zipcode" className={styles.label}>
                Zipcode
              </label>
              <input
                id="zipcode"
                name="location.zipcode"
                type="text"
                className={styles.input}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className={styles.panel}>
          <legend className={styles.panelTitle}>Details</legend>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="beds" className={styles.label}>
                Beds
              </label>
              <input
                id="beds"
                name="beds"
                type="number"
                min={0}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="baths" className={styles.label}>
                Baths
              </label>
              <input
                id="baths"
                name="baths"
                type="number"
                min={0}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="square_feet" className={styles.label}>
                Square feet
              </label>
              <input
                id="square_feet"
                name="square_feet"
                type="number"
                min={0}
                required
                className={styles.input}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className={styles.panel}>
          <legend className={styles.panelTitle}>Amenities</legend>
          <div className={styles.checks}>
            {amenities.map((amenity) => (
              <label key={amenity} className={styles.check}>
                <input
                  type="checkbox"
                  name="amenities"
                  value={amenity}
                  className={styles.checkbox}
                />
                <span>{amenity}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.panel}>
          <legend className={styles.panelTitle}>Rates</legend>
          <p className={styles.hint}>Leave blank if not applicable.</p>
          <div className={styles.grid}>
            {["Weekly", "Monthly", "Nightly"].map((rate) => (
              <div key={rate} className={styles.field}>
                <label
                  htmlFor={`rate-${rate.toLowerCase()}`}
                  className={styles.label}
                >
                  {rate}
                </label>
                <input
                  id={`rate-${rate.toLowerCase()}`}
                  name={`rates.${rate.toLowerCase()}`}
                  type="number"
                  min={0}
                  className={styles.input}
                />
              </div>
            ))}
          </div>
        </fieldset>

        <fieldset className={styles.panel}>
          <legend className={styles.panelTitle}>Seller info</legend>
          <div className={styles.grid}>
            <div className={styles.field}>
              <label htmlFor="seller_name" className={styles.label}>
                Name
              </label>
              <input
                id="seller_name"
                name="seller_info.name"
                type="text"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="seller_email" className={styles.label}>
                Email
              </label>
              <input
                id="seller_email"
                name="seller_info.email"
                type="email"
                required
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="seller_phone" className={styles.label}>
                Phone
              </label>
              <input
                id="seller_phone"
                name="seller_info.phone"
                type="tel"
                className={styles.input}
              />
            </div>
          </div>
        </fieldset>

        <fieldset className={styles.panel}>
          <legend className={styles.panelTitle}>Images</legend>
          <div className={styles.field}>
            <label htmlFor="images" className={styles.label}>
              Select up to 4 images
            </label>
            <input
              id="images"
              name="images"
              type="file"
              accept="image/*"
              multiple
              required
              className={styles.file}
            />
          </div>
        </fieldset>

        <div className={styles.actions}>
          <button type="submit" className={styles.submit}>
            Add property
          </button>
        </div>
      </form>
    </>
  );
};

export default AddPropertyPage;
