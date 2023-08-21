import style from "./Search.module.scss";
import icon from "../../assets/img/211652_close_icon.svg";
import PropTypes from "prop-types";
import { SearchHook } from "../../App";
import { useContext } from "react";

const Search = () => {
  const { searchInput, setSearchInput } = useContext(SearchHook);
  return (
    <div className={style.root}>
      <svg
        className={style.icon}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title />
        <g id="search">
          <path d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z" />
        </g>
      </svg>
      <input
        value={searchInput}
        onChange={(event) => {
          setSearchInput(event.target.value);
        }}
        placeholder="Поиск пицц..."
        className={style.input}
      />
      {searchInput && (
        <img
          src={icon}
          alt=""
          className={style.closeIcon}
          onClick={() => {
            setSearchInput("");
          }}
        />
      )}
    </div>
  );
};

Search.propTypes = {
  searchInput: PropTypes.any.isRequired,
  setSearchInput: PropTypes.any.isRequired,
};

export default Search;
