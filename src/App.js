import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const showVisible = useSelector((state) => state.ui.cartVisible);
  return (
    <Layout>
      {showVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
