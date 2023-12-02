"use client";
import CarItem from "@/components/CarItem";
import SimilarProducts from "@/components/SimilarProducts";
import MainLayout from "@/layouts/MainLayout";
import { IProduct } from "@/types/types";
import React from "react";

const page = () => {
  const product: IProduct = {
    id: 1,
    title: "Brown Leather Bag",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    url: "https://picsum.photos/id/7",
    price: 2500,
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto min-h-[300px] mb-8">
          <div className="my-4 text-2xl font-bold">Shopping cart</div>
          <div className="flex items-baseline relative justify-between gap-2">
            <div className="w-[65%]">
              <CarItem key={product.id} product={product} />
            </div>
            <div
              id="GoToCheckout"
              className="md:w-[33%] absolute top-0 right-0 m-2"
            >
              <div className="bg-white p-4 border">
                <button className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold p-3 rounded-full mt-4">
                  Go To Checkout
                </button>
                <div className="flex items-center justify-between mt-4 text-sm font-medium mb-1">
                  <div>Item (3)</div>
                  <div>$12.45</div>
                </div>
                <div className="flex items-center justify-between mb-4 font-medium text-sm">
                  <div>Shopping:</div>
                  <div>Free</div>
                </div>
                <div className="border border-gray-300" />
                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                  <div>Subtotal</div>
                  <div>$12.99</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilarProducts />
      </MainLayout>
    </>
  );
};

export default page;
