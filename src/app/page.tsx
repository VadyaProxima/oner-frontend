import Image from "next/image";
import Header from "@/Components/Header/Header";
import HeaderMenu from "@/Components/HeaderMenu";
import PromotionSlider from "@/Components/Promo";
import CategoryMenu from "@/Components/CategoryMenu";
import Card from "@/Components/Catalog/Card";
import Catalog from "@/Components/Catalog";
import Footer from "@/Components/Footer";
import Slide from "@/Components/Promo/Slide";
export default function Home() {
  return (
    <div>
    <Header />
    <HeaderMenu/>
    <PromotionSlider/>
    <CategoryMenu/>
    
    <Catalog/> 
    <Footer/>
    </div>
  );
}
