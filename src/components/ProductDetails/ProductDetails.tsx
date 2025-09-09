import styles from "./ProductDetails.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContext";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();

  const [product, setProduct] = useState<Product>();

  const { addToCart } = useCart();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [id]);

  return (
    <div className={styles.container}>
      {!product ? (
        <h2>Cargando...</h2>
      ) : (
        <>
          <img src={product.image} alt={`Imagen de ${product.title}`} className={styles.image} />
          <h2>{product.title}</h2>
          <span>{`$ ${product.price}`}</span>
          <p>{product.description}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
          <Link to={"/carrito"}>Ir al carrito</Link>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
