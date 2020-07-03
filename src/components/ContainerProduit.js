import React from "react";
import { withProduitConsumer } from "../context";
import Loading from "./Loading";
import FiltreProduits from "./FiltreProduits";
import ListeProduits from "./ListeProduits";

function ContainerProduit({ context }) {
  const { loading, produitsOrdonnes, produits } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <FiltreProduits produits={produits} />
      <ListeProduits produits={produitsOrdonnes} />
    </>
  );
}

export default withProduitConsumer(ContainerProduit);
