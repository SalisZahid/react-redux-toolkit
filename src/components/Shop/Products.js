import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: 1,
    price: 3.99,
    title: "apple",
    description: "Apple the fruit, what more do you expect?",
  },
  {
    id: 2,
    price: 12.99,
    title: "earbuds",
    description: "Normal earbuds nothing special",
  },
  {
    id: 3,
    price: 10,
    title: "earplugs",
    description: "Earplugs, not buds..",
  },
  {
    id: 4,
    price: 4,
    title: "orange",
    description: "It's an orange",
  },
  {
    id: 5,
    price: 5,
    title: "USB Cable",
    description: "A cable to charge your Apple",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((products) => (
          <ProductItem
            key={products.id}
            id={products.id}
            title={products.title}
            price={products.price}
            description={products.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
