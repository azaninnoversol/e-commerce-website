import { StaticImageData } from "next/image";
import { IMAGES } from "./resourses";

export type Href = "/" | "/contact-us" | "/about-us" | "/auth/register";

export interface NavItems {
  title: string;
  href: Href;
}

export const navItems: NavItems[] = [
  { title: "Home", href: "/" },
  { title: "Contact", href: "/contact-us" },
  { title: "About", href: "/about-us" },
  { title: "Register", href: "/auth/register" },
];

export interface Points {
  text: string;
  link: string;
}

export interface FooterItemsProps {
  title: string;
  points: Points[];
}

export const points: FooterItemsProps[] = [
  {
    title: "Support",
    points: [
      { text: "111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.", link: "#" },
      { text: "exclusive@gmail.com", link: "#" },
      { text: "+88015-88888-9999", link: "#" },
    ],
  },
  {
    title: "Account",
    points: [
      { text: "My Account", link: "#" },
      { text: "Login/Register", link: "#" },
      { text: "Cart", link: "#" },
      { text: "Wishlist", link: "#" },
      { text: "Shop", link: "#" },
    ],
  },
  {
    title: "Quick Link",
    points: [
      { text: "Privacy Policy", link: "#" },
      { text: "Terms Of Use", link: "#" },
      { text: "FAQ", link: "#" },
      { text: "Contact", link: "#" },
    ],
  },
];

export const goodsDropDown: Points[] = [
  {
    text: "Womans's Fashion",
    link: "/clothes/womans",
  },
  {
    text: "Man's Fashion",
    link: "/clothes/mans",
  },
  {
    text: "Electronics",
    link: "/electronics",
  },
  {
    text: "Home & Lifestyle",
    link: "/home-&-lifestyle",
  },
  {
    text: "Medicine",
    link: "/medicine",
  },
  {
    text: "Sports & Outdoor",
    link: "/sports-&-outdoor",
  },
  {
    text: "Baby & Toys",
    link: "/baby-&-toys",
  },
  {
    text: "Groceries & Pets",
    link: "/groceries-&-pets",
  },
  {
    text: "Health & Beauty",
    link: "/health-&-beauty",
  },
];

export interface BrowseCategory {
  image?: StaticImageData;
  text: string;
  type?: string;
}

export const browseCategory: BrowseCategory[] = [
  {
    text: "Phone",
    type: "phone",
    image: IMAGES.MobileIcon,
  },
  {
    text: "Computer",
    type: "computer",
    image: IMAGES.ComputerIcon,
  },
  {
    text: "Smart Watch",
    type: "watches",
    image: IMAGES.WatchIcon,
  },
  {
    text: "Camera",
    type: "camera",
    image: IMAGES.CameraIcon,
  },
  {
    text: "Headphone",
    type: "headphone",
    image: IMAGES.headPhoneIcon,
  },
  {
    text: "Gaming",
    type: "accessories",
    image: IMAGES.GameIcon,
  },
  {
    text: "Camera",
    type: "camera",
    image: IMAGES.CameraIcon,
  },
  {
    text: "Headphone",
    type: "headphone",
    image: IMAGES.headPhoneIcon,
  },
  {
    text: "Gaming",
    type: "accessories",
    image: IMAGES.GameIcon,
  },
  {
    text: "Camera",
    type: "camera",
    image: IMAGES.CameraIcon,
  },
  {
    text: "Headphone",
    type: "headphone",
    image: IMAGES.headPhoneIcon,
  },
  {
    text: "Gaming",
    type: "accessories",
    image: IMAGES.GameIcon,
  },
];
