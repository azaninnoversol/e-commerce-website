import { IMAGES } from "@/utils/resourses";
import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

function ProductCard() {
  return (
    <div className="min-h-auto h-auto rounded-sm relative shadow-sm w-full flex flex-col group">
      <div className="bg-[#F5F5F5] rounded-sm relative">
        <div className="bg-[#DB4444] px-2.5 w-fit text-white absolute top-2 left-2 font-light rounded-sm py-0.5">- 40%</div>

        <div className="bg-white p-1.5 absolute top-2 right-1 rounded-full cursor-pointer">
          <Heart size={25} />
        </div>

        <div className="bg-white p-1.5 absolute top-13 right-1 rounded-full cursor-pointer">
          <Eye size={25} />
        </div>

        <Image
          src={IMAGES.PsFive}
          alt="ps-five"
          width={250}
          height={250}
          className="p-5 w-full object-contain transition-all duration-300 group-hover:scale-75 ease-in-out"
        />

        <Button className="bg-black! text-white text-lg rounded-none overflow-hidden absolute bottom-0 left-0 w-full transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          Add To Cart
        </Button>
      </div>

      <div className="bg-white py-2 px-2 relative z-10">
        <h3 className="text-xl font-medium">HAVIT HV-G92 Gamepad</h3>
        <div className="flex items-center gap-3 pb-2">
          <h2 className="text-red-500 text-lg font-medium">$120</h2>
          <h2 className="text-gray-500 text-lg font-medium line-through">$160</h2>
        </div>
      </div>

      <div className="flex items-center gap-1 px-2 pb-2">
        <Star className="fill-yellow-500 stroke-amber-400" />
        <Star className="fill-yellow-500 stroke-amber-400" />
        <Star className="fill-yellow-500 stroke-amber-400" />
        <Star className="fill-yellow-500 stroke-amber-400" />
        <Star className="fill-yellow-500 stroke-amber-400" />
        <span className="text-gray-600 text-lg pl-2 font-medium">(88)</span>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);
