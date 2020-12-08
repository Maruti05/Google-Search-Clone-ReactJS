import React from "react";
import { FaSistrix, FaMicrophone } from "react-icons/fa";
import { API_KEY, cx } from "../ApiKey";
import axios from "axios";
import ResultCard from "./ResultCard";
const Search = (props) => {
  const goBack = () => {
    props.history.push("/");
  };
  const [state, setState] = React.useState(
    props.location.state ? props.location.state : ""
  );
  const [results, setResults] = React.useState([]);
  const [info, setInfo] = React.useState("");
  const searchGoogle = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${cx}&q=${state}`
      );
      if (response) {
        setResults(response.data.items);
        setInfo(response.data.searchInformation);
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div className="search">
      <div className="search__form">
        <div className="search__form-logo">
          <img src="/images/small.png" alt="logo" onClick={goBack} />
        </div>
        <div className="search__form-input">
          <form className="home__form" onSubmit={searchGoogle}>
            <input
              type="text"
              className="home__input"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            />

            <FaSistrix className="search__icon" />
            <FaMicrophone className="microphone" />
          </form>
        </div>
      </div>
      <ResultCard results={results} info={info} />
    </div>
  );
};

export default Search;