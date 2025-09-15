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

  const [buttonText, setButtonText] = useState("Agregar al carrito");

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

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setButtonText("Producto agregado");
    setTimeout(() => setButtonText("Agregar al carrito"), 1000);
  };

  return (
    <main className="flex justify-center pt-40 pb-20">
      {!product ? (
        <p>Cargando...</p>
      ) : (
        <div className="flex flex-col lg:flex-row max-w-11/12 justify-center lg:gap-20">
          <div className="flex justify-center items-center rounded-md bg-gradient-to-b from-gray-700 to-gray-400 p-5">
            <img
              src={product.image}
              alt={`Imagen de ${product.title}`}
              className="size-96 lg:size-[460px] object-contain"
            />
          </div>
          <section className="flex flex-col w-[500px] max-w-full">
            <h1 className="py-2 text-4xl font-bold text-balance break-words">{product.title}</h1>
            <p className="pb-5 text-balance">{product.description}</p>
            <span className="text-3xl font-bold">{`$ ${product.price}`}</span>
            <p className="text-2xl">Hasta 6 cuotas de $ {(product.price / 6).toFixed(2)} sin interés</p>
            <p className="pb-5">Precio sin impuestos nacionales $ {(product.price * 0.82).toFixed(2)}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="h-14 w-full cursor-pointer rounded-md bg-gray-900 font-bold text-white hover:bg-gray-700 transition duration-200">
              {buttonText}
            </button>
            <Link
              to={"/carrito"}
              className="mt-2 mb-1 h-14 w-full rounded-md bg-gray-900 text-center leading-14 font-bold text-white hover:bg-gray-700 transition duration-200">
              Ir al carrito
            </Link>
            <p>Envío gratis a partir de $ 199</p>
          </section>
        </div>
      )}
    </main>
  );
};

export default ProductDetails;
