"use client";
import React from "react";

// components
import ProductCard from "@/components/ProductCard/ProductCard";
import TextWithBorder from "@/components/TextWithBorder/TextWithBorder";
import Button from "@/components/Button/Button";
import Text from "@/components/Text/Text";

// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// icons
import { ChevronLeft, ChevronRight } from "lucide-react";

function TodaySale() {
  return (
    <section id="today-sale" className="py-10">
      <main className="container mx-auto border-b border-b-gray-300 pb-20">
        <div className="flex flex-col gap-y-4">
          <TextWithBorder text="Today's" />
          <div className="flex items-end justify-between gap-2">
            <div className="flex items-end gap-24">
              <Text text="Flash Sales" />
              <div className="flex items-end gap-5">
                <TextNumber title="Days" text={"02"} /> <span className="text-gray-400 text-4xl">:</span> <TextNumber title="Hours" text={"23"} />
                <span className="text-gray-400 text-4xl">:</span> <TextNumber title="Minutes" text={"19"} />
                <span className="text-gray-400 text-4xl">:</span> <TextNumber title="Seconds" text={"56"} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="custom-prev bg-gray-200 p-2 rounded-full cursor-pointer">
                <ChevronLeft size={32} />
              </button>
              <button className="custom-next bg-gray-200 p-2 rounded-full cursor-pointer">
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

          <div className="mt-8 pb-5">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={5}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
            >
              <SwiperSlide className="pb-1">
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="pb-1">
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="pb-1">
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="pb-1">
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="pb-1">
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="pb-1">
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="pb-1">
                <ProductCard />
              </SwiperSlide>
              <SwiperSlide className="pb-1">
                <ProductCard />
              </SwiperSlide>
            </Swiper>
          </div>

          <Button className="w-fit bg-red-500 text-white px-4 text-lg mx-auto mt-8">View All Product</Button>
        </div>
      </main>
    </section>
  );
}

export default React.memo(TodaySale);

const TextNumber = ({ title, text }: { title?: string; text?: string | number }) => {
  return (
    <div>
      <p className="font-medium text-xl text-gray-600">{title}</p>
      <h3 className="text-5xl font-medium">{text}</h3>
    </div>
  );
};
