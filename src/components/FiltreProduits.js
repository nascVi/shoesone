import React from "react";
import { useContext } from "react";
import { ContextProduit } from "../context";
import Title from "./Title";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const FiltreProduits = ({ produits }) => {
  // react hooks
  const context = useContext(ContextProduit);
  // console.log(context);
  const {
    handleChange,
    type,
    price,
    minPrice,
    maxPrice,
    size,
    service,
    custom,
    stock
  } = context;

  // get unique types
  let types = getUnique(produits, "type");
  // add all
  types = ["-",...types];
  // map to jsx
  types = types.map((item, index) => {
    return <option key={index} value={item}>
      {item}
    </option>
  })
  // get unique types
  let stocks = getUnique(produits, "stock");
  // add all
  stocks = ["-", ...stocks];
  // map to jsx
  stocks = stocks.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  

  let sizeitems = getUnique(produits, "size");
  sizeitems = ["-", ...sizeitems]
  sizeitems = sizeitems.map((item, index) => (
    <option key={index} value={item}>
      {item[0]}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="chercher dans la boutique" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Collection</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
         {/* end of select type */}
        {/* Stock amount  */}
        <div className="form-group">
          <label htmlFor="stock">En stock</label>
          <select
            name="stock"
            id="stock"
            onChange={handleChange}
            className="form-control"
            value={stock}
          >
            {stocks}
          </select>
        </div>
        {/* end of Stock amount */}
        {/* product price */}
        <div className="form-group">
          <label htmlFor="price">Budjet €{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of product price*/}
        {/* size selection */}
        <div className="form-group">
          <label htmlFor="size">Par la taille</label>
          <select
            name="size"
            id="size"
            onChange={handleChange}
            className="form-control"
            value={size[[]]}
          >
            {sizeitems}
          </select>
        </div>
        {/* end of size0 selection */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="service"
              id="service"
              checked={service}
              onChange={handleChange}
            />
            <label htmlFor="service">Service</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="custom"
              checked={custom}
              onChange={handleChange}
            />
            <label htmlFor="custom">Custom</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};

export default FiltreProduits;
