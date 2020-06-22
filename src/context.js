import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

const ContextProduit = React.createContext();

export default class ProduitProvider extends Component {
  state = {
    produits: [],
    produitsOrdonnes: [],
    produitsTendance: [],
    loading: true,
    //
    type: "all",
    stock: 0,
    size: 0,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    // minSize: 0,
    // maxSize: 0,
    service: false,
    custom: false,
  };
  
getData = async () => {
  try {
    let response = await Client.getEntries({
    content_type: "shoesoneProduit",
    // order: "sys.createdAt"
    order: "fields.type"
    });
    let produits = this.formatData(response.items);

    let produitsTendance = produits.filter(produit => produit.featured === true);
    let maxPrice = Math.max(...produits.map(item => item.price));
    // let maxSize = Math.max(...produits.map(item => item.size[0]));
    
    this.setState({
      produits,
      produitsTendance,
      produitsOrdonnes: produits,
      loading: false,
      price: maxPrice,
      maxPrice,
      // maxSize
    });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData()
    // let rooms = this.formatData(items);
    // let featuredRooms = rooms.filter(room => room.featured === true);
    // //
    // let maxPrice = Math.max(...rooms.map(item => item.price));
    // let maxSize = Math.max(...rooms.map(item => item.size));
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   //
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize
    // });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let produit = { ...item.fields, images, id };
      return produit;
    });
    return tempItems;
  }
  getProduit = (slug) => {
    let tempProduits = [...this.state.produits];
    const produit = tempProduits.find((produit) => produit.slug === slug);
    return produit;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterProduits
    );
  };
  filtreProduits = () => {
    let {
      produits,
      type,
      stock,
      size,
      price,
      // minSize,
      // maxSize,
      service,
      custom
    } = this.state;

    let tempProduits = [...produits];
    // transform values
    // get stock
    stock = parseInt(stock);
    price = parseInt(price);
    size = parseInt(size);
    // filter by type
    if (type !== "all") {
      tempProduits = tempProduits.filter(produit => produit.type === type);
    }
    // filter by stock
    if (stock !== 1) {
      tempProduits = tempProduits.filter(produit => produit.stock >= stock);
    }
    // filter by price
    tempProduits = tempProduits.filter(produit => produit.price <= price);
    //filter by size
    if (size !== 1) {
      tempProduits = tempProduits.filter(produit => produit.size >= size);
    }
    //filter by service
    if (service) {
      tempProduits = tempProduits.filter(produit => produit.service === true);
    }
    //filter by custom
    if (custom) {
      tempProduits = tempProduits.filter(produit => produit.custom === true);
    }
    this.setState({
      produitsOrdonnes: tempProduits
    });
  };
  render() {
    return (
      <ContextProduit.Provider
        value={{
          ...this.state,
          getProduit: this.getProduit,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </ContextProduit.Provider>
    );
  }
}
const ProduitConsumer = ContextProduit.Consumer;

export { ProduitProvider, ProduitConsumer, ContextProduit };

export function withProduitConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProduitConsumer>
        {value => <Component {...props} context={value} />}
      </ProduitConsumer>
    );
  };
}
