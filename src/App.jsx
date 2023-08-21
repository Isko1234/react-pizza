import React from "react";

import "./scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import "./App.css";

// import pizzas from './assets/pizzas.json';
export const SearchHook = React.createContext();
function App() {
  const [searchInput, setSearchInput] = React.useState("");
  // https://64ad4a30b470006a5ec5b367.mockapi.io/items
  return (
    <div className="wrapper">
      <SearchHook.Provider value={{ searchInput, setSearchInput }}>
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </SearchHook.Provider>
    </div>
  );
}

export default App;
