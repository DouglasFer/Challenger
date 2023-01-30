import { iProduct } from "./index";
import { ContainerCard, ContentCard } from "../bodyCards/styles/cardStyle";
import { useDispatch } from "react-redux";
import { countCart, productShopp } from "../store/store";
import Skeleton from "react-loading-skeleton";

export interface iCardsProps {
  product: iProduct;
  loading: boolean;
}
export interface iContentProduct {
  id: number;
  name: string;
  photo: string;
  price: number;
  countProduct: number;
}

export const Cards = ({ product, loading }: iCardsProps) => {
  const dispatch = useDispatch();

  const handleClick = (content: iContentProduct) => {
    dispatch(countCart());
    dispatch(productShopp(content));
  };

  return (
    <ContainerCard>
      {!loading ? (
        <Skeleton />
      ) : (
        <>
          <img src={product.photo} alt={product.name} className="imgProduct" />

          <ContentCard>
            <div className="titleProduct">
              <span>{product.name}</span>
              <div>
                <p>
                  R$
                  {product.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </div>
            <span className="textSize">{product.description}l</span>
          </ContentCard>

          <div className="btnBuy" onClick={() => handleClick(product)}>
            <img src="/images/shopping-bag.png" alt="sacola de compra" />
            <p>COMPRAR</p>
          </div>
        </>
      )}
    </ContainerCard>
  );
};
