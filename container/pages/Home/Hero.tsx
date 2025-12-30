"use client";
import React from "react";

// Swiper CSS/JS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// mock data
import { goodsDropDown, Points } from "@/utils/mockData";
import { IMAGES } from "@/utils/resourses";

// next
import Image from "next/image";
import Link from "next/link";

// components
import Button from "@/components/Button/Button";

// icons
import { MoveRight } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="pb-10">
      <main className="container mx-auto flex flex-col md:flex-row gap-20">
        <div className="border-r border-r-gray-400 w-fit pr-18">
          <ul className="flex flex-col gap-3 pt-4">
            {goodsDropDown?.map((item: Points, idx: number) => (
              <li key={idx} className="text-lg font-normal text-black cursor-pointer hover:text-blue-600">
                <Link href={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[80%] pt-10 hero-pagination">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className="rounded-md"
          >
            <SwiperSlide>
              <HeroSlide
                icon={IMAGES.AppleIcon}
                title="iPhone 10 Series"
                discountText={
                  <>
                    Up to 60% <br /> off Voucher
                  </>
                }
                image={IMAGES.Iphone}
              />
            </SwiperSlide>

            <SwiperSlide>
              <HeroSlide
                icon={IMAGES.BagIcon}
                title="Womens Bag"
                discountText={
                  <>
                    Up to 40% <br /> off Voucher
                  </>
                }
                image={IMAGES.WomenBag}
              />
            </SwiperSlide>

            <SwiperSlide>
              <HeroSlide
                icon={IMAGES.NikeIcon}
                title="Mans Shoes"
                discountText={
                  <>
                    Up to 40% <br /> off Voucher
                  </>
                }
                image={IMAGES.ShoesImg}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </main>
    </section>
  );
}

export default React.memo(Hero);

interface HeroSlideProps {
  icon: any;
  title: string;
  discountText: string | React.JSX.Element;
  image: any;
}

const HeroSlide = ({ icon, title, discountText, image }: HeroSlideProps) => {
  return (
    <div className="bg-black h-90 flex items-start justify-between">
      <div className="py-10 px-20">
        <div className="flex items-center gap-3">
          <Image src={icon} alt="icon" width={30} height={30} />
          <p className="text-[#fafafa] text-lg">{title}</p>
        </div>

        <h1 className="text-white text-6xl leading-18">{discountText}</h1>

        <Button className="bg-transparent text-white underline font-light text-sm sm:text-lg md:text-2xl mt-4" rightIcon={<MoveRight size={30} />}>
          Shop Now
        </Button>
      </div>

      <Image
        src={image}
        alt={title}
        width={title?.includes("iPhone") ? 600 : 400}
        height={title?.includes("iPhone") ? 600 : 400}
        className="object-center object-cover"
      />
    </div>
  );
};
