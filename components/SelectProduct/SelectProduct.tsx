import React from "react";

// components
import Image from "next/image";

// utils
import { BrowseCategory } from "@/utils/mockData";

function SelectProduct({ image, text }: BrowseCategory) {
  return (
    <div className="border border-gray-400 w-full py-4 flex flex-col items-center justify-center rounded-sm">
      <Image src={image?.src} alt="mobile-icon" width={100} height={100} />
      <p className="text-gray-700">{text}</p>
    </div>
  );
}

export default React.memo(SelectProduct);
