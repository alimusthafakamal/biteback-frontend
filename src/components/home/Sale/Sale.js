import React from "react";
import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../../assets/images/index";
import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-2/3">
        <Link className="relative inline-block" to="/shop">
          <Image className="md:w-full object-cover " imgSrc={saleImgOne} />

          <div className="absolute sm:w-3/4 w-2/4 left-10 sm:bottom-5 md:bottom-10 ">
            <h1
              className="md:my-2 sm:text-2xl md:text-3xl 
             text-black font-bold"
            >
              Fast Food Sale
            </h1>
            <h2 className="sm:my-4 md:my-6 sm:text-xl md:text-lg text-black">
              Up to{" "}
              <span className="mx-2 inline-block mx-auto sm:text-xl md:text-4xl font-bold ">
                30%
              </span>
              sale for all fast food
            </h2>
            <button className="mx-auto bg-black text-white font-semibold py-2 px-4  hover:bg-grey-800">
              Shop Now
            </button>
          </div>
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full">
          <Link className="relative inline-block" to="/shop">
            <Image className="h-full w-full object-cover" imgSrc={saleImgTwo} />
            <div className="absolute sm:w-3/4 w-2/4 left-10 sm:bottom-5 md:bottom-10 ">
              <h1
                className="md:my-2 sm:text-xl md:text-3xl 
             text-black font-bold"
              >
                Bread Sale
              </h1>
              <h2 className="sm:my-2 md:my-6 sm:w-1/2 md:w-full sm:text-sm md:text-lg text-black">
                Up to{" "}
                <span className="mx-2 inline-block mx-auto sm:text-xl md:text-4xl font-bold ">
                  50%
                </span>
                sale for all Bread
              </h2>
              <button className="mx-auto bg-black text-white font-semibold sm:py-1 md:py-2 sm:px-2 md:px-4  hover:bg-grey-800">
                Shop Now
              </button>
            </div>
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link className="relative inline-block" to="/shop">
            <Image
              className="h-full w-full object-cover"
              imgSrc={saleImgThree}
            />
            <div className="absolute sm:w-3/4 w-2/4 left-10 sm:bottom-5 md:bottom-10 ">
              <h1
                className="md:my-2 sm:text-xl md:text-3xl 
             text-black font-bold"
              >
                Burger Sale
              </h1>
              <h2 className="sm:my-2 md:my-6 sm:w-1/2 md:w-full sm:text-sm md:text-lg text-black">
                Up to{" "}
                <span className="mx-2 inline-block mx-auto sm:text-xl md:text-4xl font-bold ">
                  20%
                </span>
                sale for all Burger
              </h2>
              <button className="mx-auto bg-black text-white font-semibold sm:py-1 md:py-2 sm:px-2 md:px-4  hover:bg-grey-800">
                Shop Now
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
