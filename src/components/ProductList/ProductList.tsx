import styles from "./ProductList.module.css";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main>
      <h1 className={styles.title}>E-commerce</h1>
      {products.map((product) => {
        return (
          <div className={styles.container}>
            <img src={product.image} alt={`Imagen de ${product.title}`} className={styles.image} />
            <h2>{product.title}</h2>
            <span>{`$ ${product.price}`}</span>
          </div>
        );
      })}
    </main>
  );
};

export default ProductList;
