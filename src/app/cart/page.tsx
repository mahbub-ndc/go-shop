"use client";

import CartDetails from "@/components/ProductCart/CartDetails";
import { useAppSelector } from "@/redux/hook";

const Cart = () => {
  const products = useAppSelector((store) => store.cart.products);
  console.log(products);
  return (
    <div className="container mt-10 mx-auto">
      <div>
        <div className="space-y-5 lg:mt-0 mt-5">
          {products.length ? (
            <>
              <div className="flex  justify-evenly">
                <div className="w-2/3">
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr className="font-bold">
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                        </tr>
                      </thead>
                    </table>
                  </div>

                  {products.map((product: any) => (
                    <CartDetails key={product.id} product={product} />
                  ))}
                </div>

                <div>
                  <h2>Order Summery</h2>
                </div>
              </div>
            </>
          ) : (
            <p className="text-2xl text-red-500">
              {" "}
              No Products found in the cart!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
