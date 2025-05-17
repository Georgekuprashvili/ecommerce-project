"use client";

import Image from "next/image";
import React from "react";
import { useCartStore } from "../../app/common/Store/useCartStore";

const CartDrawer = () => {
  const { items, updateQuantity, clearCart, total } = useCartStore();

  if (items.length === 0) return null;

  return (
    <div className="absolute top-24 right-8 w-[375px] bg-white rounded-lg shadow-xl z-50 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold">CART ({items.length})</h2>
        <button onClick={clearCart} className="text-sm underline text-gray-500">
          Remove all
        </button>
      </div>

      <div className="flex flex-col gap-6 max-h-[300px] overflow-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
                className="rounded"
              />
              <div>
                <p className="font-bold text-sm">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-[#D87D4A] px-2 py-1">
              <button
                className="text-amber-50 font-bold"
                onClick={() =>
                  updateQuantity(item.id, Math.max(1, item.quantity - 1))
                }
              >
                -
              </button>
              <span className="mx-1 text-sm text-amber-50 font-semibold">
                {item.quantity}
              </span>
              <button
                className="text-amber-50 font-bold"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🧮 TOTAL */}
      <div className="flex justify-between items-center font-bold mt-6 text-black text-lg">
        <p>TOTAL</p>
        <p>${total()}</p>
      </div>

      {/* ✅ CHECKOUT BUTTON */}
      <button
        onClick={() => (window.location.href = "/checkout")} // or use router.push
        className="w-full bg-[#D87D4A] text-white py-3 mt-6 font-bold text-sm tracking-[1px]"
      >
        CHECKOUT
      </button>
    </div>
  );
};

export default CartDrawer;
