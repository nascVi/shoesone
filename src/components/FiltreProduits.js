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
  const {
    handleChange,
    type,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    service,
    custom,
    stock
  } = context;

  // get unique types
  let types = getUnique(produits, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let stockitems = getUnique(produits, "stock");
  stockitems = stockitems.map((item, index) => (
    <option key={index} value={item}>
      {item}
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
            {stockitems}
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
          <label htmlFor="price">Par La Taille</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of size selection */}
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
