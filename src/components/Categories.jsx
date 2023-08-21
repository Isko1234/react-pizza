// import React from "react";
import PropTypes from "prop-types";

export default function Categories({ value, onclickCategory }) {
  console.log(onclickCategory);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
  // function setActiveIndexer(index) {
  //   setActiveIndex(index);
  // }
  return (
    <div className="categories">
      <ul>
        {categories.map((title, index) => (
          <li
            key={index}
            onClick={() => onclickCategory(index)}
            className={value === index ? "active" : ""}
          >
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  value: PropTypes.any.isRequired,
  onclickCategory: PropTypes.any.isRequired,
};
