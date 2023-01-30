import { useState } from "react";
import { Provider } from "react-redux";
import { Store } from "../components/bodyCards";
import { Header } from "../components/header";
import { CartShoppingModal } from "../components/modalCart";
import store from "../components/store";

export default function Home() {
  const [cartModalOpen, setCartModalOpen] = useState<false | true>(false);

  const modalOpen = () => {
    setCartModalOpen(true);
  };
  const modalClose = () => {
    setCartModalOpen(false);
  };

  return (
    <Provider store={store}>
      <Header modalOpen={modalOpen} />
      <Store />
      {cartModalOpen && <CartShoppingModal modalClose={modalClose} />}
    </Provider>
  );
}
