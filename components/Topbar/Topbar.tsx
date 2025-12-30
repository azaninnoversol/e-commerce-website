import React from "react";

// components
import Button from "../Button/Button";

function Topbar() {
  return (
    <div className="bg-black w-full text-white py-2 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-center max-sm:gap-y-1 gap-2">
        <h3 className="font-normal text-center text-sm sm:text-base md:text-lg">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </h3>
        <Button className="bg-transparent underline text-sm sm:text-base md:text-lg">ShopNow</Button>
      </div>
    </div>
  );
}

export default React.memo(Topbar);
