import React, { useState, useRef, useEffect } from "react";
import logo from "../Assets/logo.png";
import { Link, useForm } from "@inertiajs/react";

export default function Category() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white shadow-md flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-[30%] m-2" />
          <span className="text-gray-600 text-sm ml-2 cursor-pointer" onClick={() => window.location.href = "/Sellerdash"}>
            Seller View
          </span>
        </div>

        {/* Dropdown Navigation */}
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <button onClick={() => setOpen(!open)} className="p-2">
            <div className="grid grid-cols-3 gap-0.5 w-6 h-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className="w-1 h-1 bg-[#5a1c1c] rounded-full"></span>
              ))}
            </div>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-4 grid grid-cols-2 gap-4 z-50">
              <button
                className="flex flex-col items-center cursor-pointer focus:outline-none"
              >
                <Link href="/sellerdash" className="flex flex-col items-center">
                <div className="bg-[#7a0d0d] text-white rounded-full p-3 text-xl">🛍️</div>
                <span className="text-xs mt-1 text-center">Seller View</span>
                </Link>
              </button>

              <button
                className="flex flex-col items-center cursor-pointer focus:outline-none"
              >
                <Link href="/sellerorder" className="flex flex-col items-center">
                <div className="bg-[#1b6e0b] text-white rounded-full p-3 text-xl">📋</div>
                <span className="text-xs mt-1 text-center">My Orders</span>
                </Link>
              </button>

              <button
                className="flex flex-col items-center cursor-pointer focus:outline-none"
              >
                <Link href="/sellerproduct" className="flex flex-col items-center">
                <div className="bg-[#796008] text-white rounded-full p-3 text-xl">🏷️</div>
                <span className="text-xs mt-1 text-center">My Products</span>
                </Link>
              </button>

              <button
                className="flex flex-col items-center cursor-pointer focus:outline-none"
              >
                <Link href="/dashboard" className="flex flex-col items-center">
                    <div className="bg-[#0d1f7a] text-white rounded-full p-3 text-xl w-[48px] h-[48px]">🛒</div>
                    <span className="text-xs mt-1 text-center">Customer View</span>
                </Link>
              </button>

              <button
                className="flex flex-col items-center cursor-pointer focus:outline-none"
              >
                <Link href="/sellerlogin" className="flex flex-col items-center">
                  <div className="bg-gray-600 text-white rounded-full p-3 text-xl">↩️</div>
                  <span className="text-xs mt-1 text-center">Log Out</span>
                </Link>  
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 max-w-6xl mx-auto">
        {/* To Do List */}
        <div className="bg-white p-6 rounded shadow-md col-span-2">
          <h2 className="text-lg font-semibold mb-4">To Do List</h2>
          <div className="flex justify-between text-center">
            <div>
              <p className="text-xl font-bold">1</p>
              <p className="text-sm text-gray-600">To-Process Shipment</p>
            </div>
            <div>
              <p className="text-xl font-bold">1</p>
              <p className="text-sm text-gray-600">Processed Shipment</p>
            </div>
            <div>
              <p className="text-xl font-bold">1</p>
              <p className="text-sm text-gray-600">Order Delivered</p>
            </div>
          </div>
        </div>

        {/* Order Details */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">Order Details</h2>
          <a href="#" className="text-blue-600 font-medium">Check</a>
          <p className="text-sm text-gray-600">Specifies items, stock, and prices</p>
        </div>

        {/* Business Insights */}
        <div className="bg-white p-6 rounded shadow-md col-span-2">
          <h2 className="text-lg font-semibold mb-4">Business Insights</h2>
          <div className="flex justify-between text-center">
            <div>
              <p className="text-xl font-bold">₱150</p>
              <p className="text-sm text-gray-600">Sales</p>
              <p className="text-xs text-gray-500">30.00%</p>
            </div>
            <div>
              <p className="text-xl font-bold">3</p>
              <p className="text-sm text-gray-600">Orders</p>
              <p className="text-xs text-gray-500">30.00%</p>
            </div>
            <div>
              <p className="text-xl font-bold">4.8</p>
              <p className="text-sm text-gray-600">Ratings</p>
              <p className="text-xs text-gray-500">35.00%</p>
            </div>
          </div>
        </div>

        {/* My Products */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-lg font-semibold mb-2">My Products</h2>
          <a href="#" className="text-blue-600 font-medium">Add New Product</a>
          <p className="text-sm text-gray-600">Quickly stock up on school essentials.</p>
        </div>
      </div>
    </div>
  );
}
