"use client";

import { MenuItem } from "@/types/types";

const SubMenu = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Saved",
    },
    {
      id: 3,
      name: "Electronics",
    },
    {
      id: 4,
      name: "Motors",
    },
    {
      id: 5,
      name: "Fashion",
    },
    {
      id: 6,
      name: "Collectables and Art",
    },
    {
      id: 7,
      name: "Sports",
    },
    {
      id: 8,
      name: "Health & Beauty",
    },
    {
      id: 9,
      name: "Industrial Equipment",
    },
    {
      id: 10,
      name: "Home & Garden",
    },
    {
      id: 11,
      name: "dell",
    },
  ];

  return (
    <div id="SubMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-sm text-[#333333] px-2 h-8"
        >
          {menuItems.map((item: MenuItem) => (
            <li key={item.id} className="px-3 hover:underline cursor-pointer">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubMenu;
