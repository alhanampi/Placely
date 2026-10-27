import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  LuArrowLeft,
  LuBath,
  LuBedDouble,
  LuBookmark,
  LuCheck,
  LuMapPin,
  LuRuler,
  LuShare,
} from "react-icons/lu";

import properties from "@/data/properties.json";
import type { Property } from "@/types/property";

import styles from "./page.module.scss";

const PropertyPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const property: Property | undefined = properties.find((p) => p._id === id);

  if (!property) notFound();

  const images = property.images.slice(0, 4);
  const galleryClass = [
    styles.gallery1,
    styles.gallery2,
    styles.gallery3,
    styles.gallery4,
  ][images.length - 1];

  const rates = [
    { label: "Nightly", value: property.rates.nightly },
    { label: "Weekly", value: property.rates.weekly },
    { label: "Monthly", value: property.rates.monthly },
  ];
  const mainRate =
    rates.findLast((rate) => rate.value) ?? rates[rates.length - 1];
  const unit = { Nightly: "/night", Weekly: "/wk", Monthly: "/mo" }[
    mainRate.label
  ];

  const { street, city, state, zipcode } = property.location;
  const stats = [
    { icon: LuBedDouble, value: property.beds, label: "Beds" },
    { icon: LuBath, value: property.baths, label: "Baths" },
    {
      icon: LuRuler,
      value: property.square_feet.toLocaleString(),
      label: "Sqft",
    },
  ];

  return (
    <>
      <div className={styles.back}>
        <Link href="/properties" className={styles.backLink}>
          <LuArrowLeft aria-hidden="true" />
          <span>Back to properties</span>
        </Link>
      </div>

      <section className={`${styles.gallery} ${galleryClass}`}>
        {images.map((image, index) => (
          <div key={image} className={styles.galleryItem}>
            <Image
              src={`/images/properties/${image}`}
              alt={`${property.name}, photo ${index + 1}`}
              className={styles.galleryImage}
              fill
              priority={index === 0}
              sizes={index === 0 ? "(min-width: 768px) 60vw, 100vw" : "30vw"}
            />
          </div>
        ))}
      </section>

      <div className={styles.layout}>
        <div className={styles.main}>
          <section className={styles.panel}>
            <span className={styles.typePill}>{property.type}</span>
            <h1 className={styles.title}>{property.name}</h1>
            <p className={styles.address}>
              <LuMapPin aria-hidden="true" />
              <span>
                {street}, {city}, {state} {zipcode}
              </span>
            </p>
            <ul className={styles.stats}>
              {stats.map(({ icon: Icon, value, label }) => (
                <li key={label} className={styles.stat}>
                  <Icon aria-hidden="true" className={styles.statIcon} />
                  <div>
                    <p className={styles.statValue}>{value}</p>
                    <p className={styles.statLabel}>{label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>About this place</h2>
            <p className={styles.description}>{property.description}</p>
          </section>

          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>Rates and options</h2>
            <ul className={styles.rates}>
              {rates.map((rate) => (
                <li
                  key={rate.label}
                  className={`${styles.rate} ${rate === mainRate ? styles.rateMain : ""}`}
                >
                  <p className={styles.rateLabel}>{rate.label}</p>
                  <p
                    className={`${styles.rateValue} ${rate.value ? "" : styles.rateMissing}`}
                  >
                    {rate.value ? `$${rate.value.toLocaleString()}` : "N/A"}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.panel}>
            <h2 className={styles.panelTitle}>Amenities</h2>
            <ul className={styles.amenities}>
              {property.amenities.map((amenity) => (
                <li key={amenity} className={styles.amenity}>
                  <LuCheck aria-hidden="true" className={styles.amenityIcon} />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Mapa: placeholder hasta decidir Mapbox con el backend */}
          <section className={`${styles.panel} ${styles.mapPanel}`}>
            <div className={styles.map}>
              <LuMapPin aria-hidden="true" className={styles.mapIcon} />
              <span>
                {street}, {city}, {state}
              </span>
            </div>
          </section>
        </div>

        <aside className={styles.aside}>
          <section className={styles.panel}>
            <p className={styles.rateLabel}>{mainRate.label} rate</p>
            <p className={styles.asidePrice}>
              {mainRate.value ? `$${mainRate.value.toLocaleString()}` : "N/A"}
              <span className={styles.asideUnit}>{unit}</span>
            </p>
            <div className={styles.asideActions}>
              <button type="button" className={styles.buttonDark}>
                <LuBookmark aria-hidden="true" />
                <span>Bookmark</span>
              </button>
              <button type="button" className={styles.buttonOutline}>
                <LuShare aria-hidden="true" />
                <span>Share</span>
              </button>
            </div>
          </section>

          <form className={`${styles.panel} ${styles.contactForm}`}>
            <h2 className={styles.panelTitle}>Contact property manager</h2>
            <div className={styles.field}>
              <label htmlFor="name" className={styles.fieldLabel}>
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter your name"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email" className={styles.fieldLabel}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="phone" className={styles.fieldLabel}>
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className={styles.input}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="message" className={styles.fieldLabel}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Enter your message"
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.buttonAccent}>
              Send message
            </button>
          </form>
        </aside>
      </div>
    </>
  );
};

export default PropertyPage;
