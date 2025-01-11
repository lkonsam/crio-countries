import { useEffect, useState } from "react";
import { fetchCountries } from "../Api/Api";
import CountryCard from "../Components/CountryCard/CountryCard";
import styles from './Countries.module.css';

export default function Countries() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = fetchCountries();
    response.then((responseData) => setData(responseData));
  }, []);

  // console.log(data);

  return (
    <>
      <div className={styles.countryWrapper} >
        {data.length > 0 ? (
          data.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))
        ) : (
          <h1>No countries found</h1>
        )}
      </div>
    </>
  );
}
