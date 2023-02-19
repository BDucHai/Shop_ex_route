import React from "react";
import { Link } from "react-router-dom";
import PRODUCTS from "../data";
const Product = () => {
    return (
        <main>
            <div className="pg-header flex justify-between items-center">
                <div className="px-[40px]">
                    <h1>Products</h1>
                </div>
                <div className="px-[40px] flex">
                    <Link to="/">Home</Link>
                    <div className="px-2">/</div>
                    <div className="text-slate-500	">Products</div>
                </div>
            </div>
            <div className="content">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 md:px-[40px] px-[10px]">
                    {PRODUCTS.map((product, index) => (
                        <div className="card" key={index}>
                            <div className="h-[300px]">
                                <img src={product.image} alt="" className="w-full h-full onject-contain" />
                            </div>
                            <div className="bg-[#f5f5f5] py-3 text-center px-4">
                                <h2 className="text-[16px] font-semibold mb-3">{product.name}</h2>
                                <span className="text-[#444545]">{product.details}</span>
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        Price: <span className="font-bold">{product.price}</span>
                                    </div>
                                    <Link
                                        to={`${product.id}`}
                                        className="px-[6px] py-[4px] text-white bg-blue-700 flex items-center">
                                        DETAILS <i class="bx bx-right-arrow-alt mt-[3px]"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Product;
