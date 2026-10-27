import Image from "next/image";
import Link from "next/link";
import {
  LuArrowRight,
  LuBath,
  LuBedDouble,
  LuHeart,
  LuMapPin,
  LuRuler,
} from "react-icons/lu";

import type { Property, PropertyRates } from "@/types/property";

import styles from "./PropertyCard.module.scss";

interface PropertyCardProps {
  property: Property;
}

const getRateDisplay = (rates: PropertyRates) => {
  if (rates.monthly)
    return { price: `$${rates.monthly.toLocaleString()}`, unit: "/mo" };
  if (rates.weekly)
    return { price: `$${rates.weekly.toLocaleString()}`, unit: "/wk" };
  if (rates.nightly)
    return { price: `$${rates.nightly.toLocaleString()}`, unit: "/night" };
};

const PropertyCard = ({ property }: PropertyCardProps) => {
  const rate = getRateDisplay(property.rates);
  const rateLabels = [
    property.rates.nightly && "Nightly",
    property.rates.weekly && "Weekly",
    property.rates.monthly && "Monthly",
  ].filter(Boolean);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={`/images/properties/${property.images[0]}`}
          alt={property.name}
          className={styles.image}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
        />
        <span className={styles.typePill}>{property.type}</span>
        <button
          type="button"
          className={styles.saveButton}
          aria-label="Save property"
        >
          <LuHeart aria-hidden="true" />
        </button>
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>
            {/* Link estirado: su ::after cubre toda la card */}
            <Link
              href={`/properties/${property._id}`}
              className={styles.cardLink}
            >
              {property.name}
            </Link>
          </h3>
          {rate && (
            <p className={styles.price}>
              {rate.price}
              <span className={styles.unit}>{rate.unit}</span>
            </p>
          )}
        </div>

        <p className={styles.location}>
          <LuMapPin aria-hidden="true" />
          <span>
            {property.location.city}, {property.location.state}
          </span>
        </p>

        <ul className={styles.stats}>
          <li>
            <LuBedDouble aria-hidden="true" /> {property.beds} beds
          </li>
          <li>
            <LuBath aria-hidden="true" /> {property.baths} baths
          </li>
          <li>
            <LuRuler aria-hidden="true" />{" "}
            {property.square_feet.toLocaleString()} sqft
          </li>
        </ul>

        <div className={styles.footer}>
          <ul className={styles.rates}>
            {rateLabels.map((label) => (
              <li key={label as string} className={styles.ratePill}>
                {label}
              </li>
            ))}
          </ul>
          <span className={styles.details} aria-hidden="true">
            <span>Details</span>
            <LuArrowRight />
          </span>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
