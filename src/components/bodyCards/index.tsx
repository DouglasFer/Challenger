import { api } from "../../pages/api/api";
import React, { useEffect, useState } from "react";
import { Cards, iContentProduct } from "./cards";
import { BodyCard, ContentBodyCard } from "./styles/cardStyle";
import { Footer } from "../footer";

export interface iProduct {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: number;
  content: iContentProduct[];
  countProduct: number;
}
export const Store = () => {
  const [products, setProducts] = useState([] as iProduct[]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    api
      .get("products", {
        params: {
          page: 1,
          rows: 8,
          sortBy: "id",
          orderBy: "ASC",
        },
      })
      .then((resp) => {
        if (resp.status === 200) {
          setProducts(resp.data.products);
          setTimeout(() => {
            setLoading(true);
          }, 3000);
        }
      })
      .catch();
  }, []);

  return (
    <>
      <BodyCard>
        <ContentBodyCard>
          {products.length &&
            products.map((product) => {
              return (
                <Cards key={product.id} product={product} loading={loading} />
              );
            })}
        </ContentBodyCard>
      </BodyCard>
      <Footer />
    </>
  );
};
