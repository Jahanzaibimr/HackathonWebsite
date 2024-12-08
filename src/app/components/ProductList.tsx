'use client'
import React, { useRef } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  // Create a ref to the scrollable container
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Function to scroll left by a fixed amount
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      // Scroll the container 300px to the left
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Function to scroll right by a fixed amount
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      // Scroll the container 300px to the right
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="py-6 w-full">

      {/* Arrow buttons for scrolling positioned above the product list */}
      <div className="flex justify-end mb-4">
        <button
          onClick={scrollLeft}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded shadow mx-2"
        >
          &#8592; {/* Left Arrow */}
        </button>
        <button
          onClick={scrollRight}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded shadow mx-2"
        >
          &#8594; {/* Right Arrow */}
        </button>
      </div>

      {/* Horizontal scroll container with hidden scrollbar */}
      <div
        ref={scrollContainerRef} // Attach the ref to the scroll container
        className="flex overflow-x-auto space-x-4 px-4 scrollbar-hide"
        style={{ maxWidth: "100%", overflowY: "hidden", scrollbarWidth: "none" }} // Hide the vertical scrollbar and ensure it fits
      >
        <div className="flex flex-nowrap space-x-4">
          {/* 5 visible product cards */}
          <ProductCard
            image="https://s.alicdn.com/@sc04/kf/H27373c61d9b44a3bb754457cdf9a07fcH.jpg_720x720q50.jpg"
            name="Mechanical Keyboard"
            price={49.99}
            oldPrice={69.99}
            reviews={85}
          />
          <ProductCard
            image="https://i.pinimg.com/736x/6e/7c/98/6e7c98fc2c3d79a2d6ddf8e4ff4cb564.jpg"
            name="Gaming Mouse"
            price={89.99}
            oldPrice={109.99}
            reviews={120}
          />
          <ProductCard
            image="https://de2wfhoo6xqi5.cloudfront.net/size/600/fb6/99b/4aad04567452548330ee07a466f5ac9c60.jpg"
            name="Comfort Chair"
            price={379.99}
            oldPrice={499.99}
            reviews={95}
          />
          <ProductCard
            image="https://img.freepik.com/premium-photo/logo-branding-gaming-monitor_1029476-308633.jpg"
            name="Gaming Monitor"
            price={149.99}
            oldPrice={199.99}
            reviews={65}
          />
          <ProductCard
            image="https://img.drz.lazcdn.com/static/pk/p/321b74be84c7befc1ed71e832a8ca28a.jpg_720x720q80.jpg"
            name="LED Desk Lamp"
            price={39.99}
            oldPrice={59.99}
            reviews={45}
          />
        </div>

        {/* Additional products */}
        <div className="flex flex-nowrap space-x-4">
          <ProductCard
            image="https://powerhouseexpress.com.pk/cdn/shop/files/BoostSonicWirelessHeadset-4.jpg?v=1706705136"
            name="Wireless Headset"
            price={69.99}
            oldPrice={89.99}
            reviews={75}
          />
          <ProductCard
            image="https://m.media-amazon.com/images/I/817VI3DpflL._AC_UF894,1000_QL80_.jpg"
            name="Gaming Chair"
            price={249.99}
            oldPrice={299.99}
            reviews={45}
          />
          {/* More products can be added dynamically as needed */}
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default ProductList;
