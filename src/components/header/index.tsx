import { useSelector } from "react-redux";
import { RootState } from "../store";
import {
  CartHeader,
  ContainerHeader,
  ContentHeader,
} from "./styles/headerStyle";

interface iModalOpen {
  modalOpen: () => void;
}

export const Header = ({ modalOpen }: iModalOpen) => {
  const stock = useSelector((state: RootState) => state.store);
  return (
    <ContainerHeader>
      <ContentHeader>
        <p>
          <b>MKS</b> Sistemas
        </p>
        <CartHeader onClick={() => modalOpen()}>
          <img src="/images/carrinho.png" alt="Carrinho de compra" />
          <span>{stock.count}</span>
        </CartHeader>
      </ContentHeader>
    </ContainerHeader>
  );
};
