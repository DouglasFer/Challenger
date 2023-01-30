import { useSelector } from "react-redux";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { RootState } from "../store";
import { CardShopping } from "./cardShopping";
import {
  ContainerModal,
  ContentModal,
  FooterModal,
  Products,
} from "./styles/modalStyle";

interface iModalClose {
  modalClose: () => void;
}

export const CartShoppingModal = ({ modalClose }: iModalClose) => {
  const store = useSelector((state: RootState) => state.store);
  const [shoppTotal, setShoppTotal] = useState(0);
  const listProductsInCart = store.addlistProducts;

  useEffect(() => {
    const sumShoppTotal = listProductsInCart.reduce(
      (acc, { price, countProduct }) => {
        return acc + Number(price) * Number(countProduct);
      },
      0
    );

    setShoppTotal(sumShoppTotal);
  }, [listProductsInCart]);

  return (
    <ContainerModal>
      <ContentModal>
        <header>
          <h3>Carrinho de compras</h3>
          <div>
            <p onClick={() => modalClose()}>x</p>
          </div>
        </header>
        <Products>
          <div className="overflowDiv">
            {listProductsInCart.map((productsInCart) => {
              return (
                <CardShopping
                  key={productsInCart.id}
                  productsInShopp={productsInCart}
                />
              );
            })}
          </div>
        </Products>
      </ContentModal>
      <FooterModal>
        <p>Total:</p>
        <p>
          {shoppTotal.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </FooterModal>
      <button>Finalizar Compra</button>
    </ContainerModal>
  );
};
