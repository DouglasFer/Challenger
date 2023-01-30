import Image from "next/image";
import { useDispatch } from "react-redux";
import { iProduct } from "../bodyCards";
import { ascProductShopp, descProductShopp, removeShopp } from "../store/store";
import {
  AmountProduct,
  ContainerCardShopp,
  ContentCardShopp,
} from "./styles/modalStyle";

interface iProductInShopp {
  productsInShopp: iProduct;
}

export const CardShopping = ({ productsInShopp }: iProductInShopp) => {
  const dispatch = useDispatch();

  return (
    <ContainerCardShopp>
      <div className="removeCardShopp">
        <p onClick={() => dispatch(removeShopp(productsInShopp))}>x</p>
      </div>
      <ContentCardShopp>
        <img
          src={productsInShopp.photo}
          alt={productsInShopp.name}
          className="imgShopp"
        />
        <p className="nameSize">{productsInShopp.name}</p>
        <div className="amount">
          <p>Qtd:</p>
          <AmountProduct>
            <p onClick={() => dispatch(descProductShopp(productsInShopp))}>
              - |
            </p>
            <p>{productsInShopp.countProduct}</p>
            <p onClick={() => dispatch(ascProductShopp(productsInShopp))}>
              | +
            </p>
          </AmountProduct>
        </div>
        <span className="price">
          Uni. R$
          {productsInShopp.price}
        </span>
      </ContentCardShopp>
    </ContainerCardShopp>
  );
};
