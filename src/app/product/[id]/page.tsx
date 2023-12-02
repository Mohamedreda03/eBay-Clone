"use client";

import SimilarProducts from "@/components/SimilarProducts";
import MainLayout from "@/layouts/MainLayout";
import { IProduct } from "@/types/types";

const product: IProduct = {
  id: 1,
  title: "Brown Leather Bag",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  url: "https://picsum.photos/id/7",
  price: 2500,
};

const page = ({ params }: { params: string }) => {
  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {product?.url ? (
              <img src={product?.url + "/280"} className="w-[40%] rounded-lg" />
            ) : (
              <div className="w-[40%]"></div>
            )}
            <div className="px-4 w-full">
              <div className="font-bold text-xl">{product?.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Brand New - Full Warranty
              </div>
              <div className="border-b py-1" />
              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Condition:{" "}
                  <span className="font-bold text-[17px] ml-2">New</span>
                </div>
                <div className="border-b py-1" />
                <div className="pt-3">
                  <div className="w-full flex items-center justify-between">
                    <div className="flex items-center">
                      Price:
                      {product?.price ? (
                        <div className="font-bold ml-2 text-[20px]">
                          ${(product?.price / 100).toFixed(2)}
                        </div>
                      ) : null}
                    </div>
                    <button className="text-white py-2 px-20 rounded-full cursor-pointer bg-[#3498c9]">
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div className="border-b py-1" />
                <div className="pt-3">
                  <div className="font-semibold pb-1">Discription:</div>
                  <div className="text-sm">{product?.description}</div>
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
