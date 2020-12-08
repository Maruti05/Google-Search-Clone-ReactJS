import React from 'react';
import './home.css';
import googlelogo from '../images/googlelogo.png';
import { FaSistrix, FaMicrophone } from 'react-icons/fa';
const Home = (props) => {
  const [state, setState] = React.useState('');
  const searchGoogle = (e) => {
    props.history.push({ pathname: '/search', state });
  };
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__logo">
          <img
            src="https://lh3.googleusercontent.com/proxy/8UvL_BAQtb6pYRDta9XEtTT6ZzGFc4YQCD1MVWJy12_mew0HLYj9VPIyvUwjZyd0MWcHbCBlg4ZBehB8JJBIGZanstydeja_AHPkWBZ6j6hpOJe06NU"
            alt="Logo"
            className="logo"
          />
        </div>
        <form className="home__form" onSubmit={searchGoogle}>
          <input
            type="text"
            className="home__input"
            onChange={(e) => setState(e.target.value)}
            value={state}
            required
          />
          <div className="home__group">
            <input type="submit" className="home__btn" value="Google Search" />
          </div>
          <FaSistrix className="search__icon" />
          <FaMicrophone className="microphone" />
        </form>
      </div>
    </div>
  );
};

export default Home;
