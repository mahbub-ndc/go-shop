"use client";
import { updateQuantity } from "@/redux/features/cartSlice";
import { useAppDispatch } from "@/redux/hook";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const CartDetails = ({ product }: any) => {
  const dispatch = useAppDispatch();
  const handleQuantity = (type: string, id: string) => {
    const payload = { type, id };
    dispatch(updateQuantity(payload));
  };
  return (
    <>
      <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4 bg-white shadow-md  w-full px-5">
        <div className="flex items-center gap-4">
          <Image src={product.imageUrl} width={100} height={100} alt="image" />
          <h3 className="text-lg font-semibold text-green-700 truncate mb-2">
            {product.name}
          </h3>
          <p className="text-lg font-bold text-red-600">${product.price}</p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantity("decrement", product.id)}
            className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
          >
            <Minus size={18} />
          </button>
          <span className="text-lg font-semibold">{product.quantity}</span>
          <button
            onClick={() => handleQuantity("increment", product.id)}
            className="bg-green-700 text-white p-2 rounded-full hover:bg-green-800"
          >
            <Plus size={18} />
          </button>
        </div>
        <button
          // onClick={(e) => handleRemove(e, product.id)}
          className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </>
  );
};

export default CartDetails;
