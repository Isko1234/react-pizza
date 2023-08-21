import React from "react";

import Categories from "../components/Categories";
import { setCategoryId } from "../redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";
import axios from "axios";
import PropTypes from "prop-types";
import Pagination from "../components/Pagination";
import { SearchHook } from "../App";

function Home() {
  const { searchInput } = React.useContext(SearchHook);
  const categoryNumber = useSelector((state) => state.filter.categoryId);
  console.log(categoryNumber);
  const [pizzas, setPizzas] = React.useState([]);
  const [isloading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState(1);
  // const [categoryNumber, setCategory] = React.useState(0);
  const [selectedMenu, setMenuItem] = React.useState({
    name: "популярноти(DESC)",
    property: "rating",
    order: "desc",
  });
  const dispatch = useDispatch();
  const onchangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const sortBy = selectedMenu.property;
  const category = categoryNumber > 0 ? `category=${categoryNumber}` : "";
  const order = selectedMenu.order;
  const search = searchInput ? `search=${searchInput}` : "";
  async function Loader() {
    try {
      const items = await axios.get(
        `https://64ad4a30b470006a5ec5b367.mockapi.io/items?page=${pageNumber}&limit=4&${category}&${search}&sortBy=${sortBy}&order=${order}`
      );
      setPizzas(items.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }
  React.useEffect(() => {
    setLoading(true);
    Loader();
  }, [categoryNumber, selectedMenu, searchInput, pageNumber]);

  const items = pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  const skel = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  return (
    <>
      <div className="content__top">
        <Categories value={categoryNumber} onclickCategory={onchangeCategory} />
        <Sort
          value={selectedMenu}
          onclickSort={(i) => {
            setMenuItem(i);
          }}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isloading ? skel : items}
        {error && <p className="text-red-800 font-bold">{error.message}</p>}
      </div>
      <Pagination onPageChange={(event) => setPageNumber(event)} />
    </>
  );
}

Home.propTypes = {
  searchInput: PropTypes.any.isRequired,
  setSearchInput: PropTypes.any.isRequired,
};
export default Home;
й;
