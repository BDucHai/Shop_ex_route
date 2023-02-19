import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PRODUCTS from "../data";

const SingleProduct = () => {

  const navigate = useNavigate();
  const { productId } = useParams();
  const singleProduct = PRODUCTS.find( singleProduct => singleProduct.id == parseInt(productId));
  const {id, name, price, image, details} = singleProduct;


  return (
      <main>
          <div className="pg-header flex justify-between items-center">
              <div className="md:px-[80px] px-[40px]">
                  <h1>{name}</h1>
              </div>
              <div className="md:px-[80px] px-[40px] flex">
                  <Link to="/">Home</Link>
                  <div className="px-2">/</div>
                  <Link to="/products">Products</Link>
                  <div className="px-2">/</div>
                  <div className="text-slate-500	">{name}</div>
              </div>
          </div>
          <div className="content flex md:px-[80px] px-[40px]">
              <div className="flex-1">
                  <img src={image} alt={name} className="w-full h-full object-contain" />
              </div>
              <div className="flex-[1.4] text-start ml-6">
                  <h2 className="text-[24px] font-semibold">{name}</h2>
                  <p className="font-bold mt-1 mb-4">{price}</p>
                  <p className="leading-[30px] mb-9">
                      {details} {details} {details} {details} {details}
                  </p>

                  <div className="flex justify-start">
                      <button
                          className="px-[8px] py-[4px] text-white bg-blue-700 flex items-center mr-6 rounded-full"
                          onClick={() => navigate(-1)}>
                          BACK
                      </button>
                      <button
                          className="px-[6px] py-[4px] text-white bg-blue-700 flex items-center mr-6"
                          onClick={() => navigate("/products")}>
                          Navigate to Products
                      </button>
                      <button
                          className="px-[8px] py-[4px] text-white bg-blue-700 flex items-center rounded-full"
                          onClick={() => navigate(`/products/${id + 1}`)}>
                          NEXT
                      </button>
                  </div>
              </div>
          </div>
      </main>
  );
}

export default SingleProduct