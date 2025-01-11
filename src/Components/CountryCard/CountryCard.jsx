import styles from './CountryCard.module.css';

export default function CountryCard({country}) {

  return <>
    <div className={styles.countryCard}>
      <img className={styles.countryFlag} src={country.flag} alt={country.abbr} />
      <h3>{country.name}</h3>
    </div>
  </>;
}
