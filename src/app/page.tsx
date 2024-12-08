import React from 'react'
import Upperheader, { Header } from './components/header'
import CategoriesSidebar from './components/CategoriesSidebar'
import ProductCard from './components/ProductCard'
import ImageSlider from './components/ImageSlider';
import ProductList from './components/ProductList';
import CountdownStatic from './components/CountdownStatic';


export default function Home() {
  const sliderImages = [
    "https://www.xdrive.com.tr/Data/BlockUploadData/slider/img1/261/gaming-chairs-series-banner-1-en.webp?1695744580",
    "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/184688612/original/ef91eb2eeb0cee5579002e60a350d335df8e1909/do-professional-pc-gaming-banner.jpg",
    "https://dlcdnwebimgs.asus.com/gain/9F8C42DB-36CE-4003-95E1-94E92594127F/fwebp",
  ];

  

  return (
    <div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[2]17px] h-[344px] pt-9 pl-9 gap-[16px ">
          <CategoriesSidebar />
        </div>
        {/* Main Content */}
        <div className="w-3/4 p-4">
          <ImageSlider images={sliderImages} />
          
        </div>
        
      </div>
      <div className='ml-44 pt-14'>
      <div className='flex'>
      <button className='h-[40px] w-[20px] bg-red-500 ml-4'></button>
      <span className="  left-2 ml-6 font-bold text-red-500 size-13 px-2 py-1 rounded">Today's</span>
      </div>
      <div className='flex'>
      <h2 className="text-5xl  pt-8 ml-4 font-bold mb-3">Flash Sales</h2>
      <CountdownStatic />
      </div>


          <ProductList />
          </div>
    </div>
  );
}
