import React from 'react'
import { Link } from 'react-router-dom';
const Error = () => {
  return (
      <main>
          <div className="pg-header">
              <div className="px-[40px]">
                  <h1>404 Error</h1>
              </div>
          </div>
          <div className="px-[40px] mt-[30px]">
              <p>Page not found....</p>
              <div className="bg-[#1d4ed8] inline-block px-[10px] py-[6px] mt-6 text-white mb-[40px]">
                  <Link to="/" className="">
                      Go Back Homepage
                  </Link>
              </div>
          </div>
      </main>
  );
}

export default Error