"use client";
import React from "react";

// components
import TextWithBorder from "@/components/TextWithBorder/TextWithBorder";
import Text from "@/components/Text/Text";
import SelectProduct from "@/components/SelectProduct/SelectProduct";

// Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BrowseCategory, browseCategory } from "@/utils/mockData";

function CategoriesSection() {
  return (
    <section id="category-section" className="py-10">
      <main className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <TextWithBorder text="Categories" />
          <div className="flex items-center justify-between">
            <Text text="Browse By Category" />

            <div className="flex items-center gap-2">
              <button className="custom-prev bg-gray-200 p-2 rounded-full cursor-pointer">
                <ChevronLeft size={32} />
              </button>
              <button className="custom-next bg-gray-200 p-2 rounded-full cursor-pointer">
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

          <div className="mt-2">
            <Swiper
              modules={[Navigation]}
              spaceBetween={40}
              slidesPerView={7}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
            >
              {browseCategory?.map((item: BrowseCategory, idx: number) => (
                <SwiperSlide key={idx || item.type} className="pb-1">
                  <SelectProduct {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </main>
    </section>
  );
}

export default React.memo(CategoriesSection);
