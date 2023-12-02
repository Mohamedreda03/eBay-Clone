"use client";

import MainLayout from "@/layouts/MainLayout";
import CarouselComp from "@/components/CarouselComp";
import Product from "@/components/Product";
import { IProduct } from "@/types/types";

export default function Home() {
  const products: IProduct[] = [
    {
      id: 1,
      title: "Brown Leather Bag",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      url: "https://picsum.photos/id/7",
      price: 2500,
    },
    {
      id: 2,
      title: "School Books",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      url: "https://picsum.photos/id/20",
      price: 1999,
    },
  ];
  return (
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-4">
          {products.map((product: IProduct) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
