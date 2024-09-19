/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const FeaturedProducts = async () => {
  const res = await fetch("http://localhost:5000/api/products");

  const products = await res.json();
  console.log(products);
  return (
    <>
      <div className="text-center text-4xl py-10 font-bold">
        Featured Products
      </div>
      <div className="flex gap-6">
        {products?.data?.map((product: any) => (
          <div
            key={product._id}
            className="card bg-base-100 w-96 shadow-xl mb-10"
          >
            <figure>
              <Image
                src={product?.imageUrl}
                width={250}
                height={150}
                alt="product"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product?.name}
                <div className="badge badge-secondary">${product?.price}</div>
              </h2>
              <p>{product.category}</p>
              <div className="card-actions justify-end">
                <button>
                  <div className="badge badge-outline">Add to Cart</div>
                </button>
                <button>
                  <div className="badge badge-outline">View Product</div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
