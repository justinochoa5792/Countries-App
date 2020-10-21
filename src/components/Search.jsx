import React, { useState } from "react";
import axios from "axios";
import "../App.css";

const Search = () => {
  const [term, setTerm] = useState("");
  const [country, setCountry] = useState([]);

  async function getCountries() {
    const response = await axios.get(
      `https://restcountries.eu/rest/v2/name/${term}`
    );
    console.log(response.data);
    setCountry(response.data);
  }
  function handleChange(e) {
    console.log(e.target.value);
    setTerm(e.target.value);
  }

  function handleSumbit(e) {
    e.preventDefault();
    getCountries();
  }
  return (
    <div className="form">
      <form onSubmit={handleSumbit}>
        <input
          className="input"
          type="text"
          placeholder="Enter a Country"
          onChange={handleChange}
        />
      </form>
      {country.map((Country) => {
        return (
          <ul>
            <img
              src={Country.flag}
              style={{ height: "50px", width: "80px" }}
              alt={Country.name}
            />
            <li>
              <h4>Country: </h4>
              {Country.name}
            </li>
            <li>
              <h4>Capital: </h4>
              {Country.capital}
            </li>
            <li>
              <h4>Borders: </h4>
              {Country.borders}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Search;
