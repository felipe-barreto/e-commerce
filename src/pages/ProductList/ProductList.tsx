import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <main className="flex flex-col items-center pt-36 md:pt-40">
      <h1 className="w-7xl max-w-11/12 text-4xl md:text-5xl font-bold text-center md:text-left">
        Las mejores ofertas
      </h1>
      <section className="grid justify-items-center w-7xl max-w-11/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10">
        {products.map((product) => {
          return (
            <div key={product.id} className="flex flex-col max-w-[424px]">
              <Link to={`/productos/${product.id}`}>
                <div className="rounded-md bg-gradient-to-b from-gray-700 to-gray-400 p-5">
                  <img src={product.image} alt={`Imagen de ${product.title}`} className="size-96 object-contain" />
                </div>

                <h2 className="pt-2 font-bold text-balance">{product.title}</h2>
                <span className="font-bold">{`$ ${product.price}`}</span>
              </Link>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default ProductList;
