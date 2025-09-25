import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const convertCategory = (category: string) => {
  switch (category) {
    case "hombre":
      return "men's clothing";
    case "mujer":
      return "women's clothing";
    case "joyeria":
      return "jewelery";
    case "electronica":
      return "electronics";
  }
};

const ProductList = () => {
  const { category } = useParams<{ category: string | undefined }>();

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        if (category) {
          // The API does not provide an endpoint to fetch products by category directly.
          // For this reason, all products are fetched first and then filtered by category.
          // In a real-world application, the request would target the category-specific
          // endpoint to avoid fetching unnecessary data.
          const filteredProducts = data.filter(
            (product: Product) => product.category === convertCategory(category)
          );
          setProducts(filteredProducts);
        } else {
          setProducts(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, [category]);

  return (
    <main className="flex flex-col items-center pt-36 md:pt-40">
      <h1 className="w-7xl max-w-11/12 text-4xl md:text-5xl font-bold text-center md:text-left">
        Las mejores ofertas
      </h1>
      <section className="grid justify-items-center w-7xl max-w-11/12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10">
        {products.map((product) => {
          return (
            <div key={product.id} className="flex flex-col max-w-[424px]">
              <Link to={`/producto/${product.id}`}>
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
