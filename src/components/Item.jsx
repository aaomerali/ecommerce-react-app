import React from 'react'

function Item() {
  return (

    <div className="group  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        
        <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
            <img
            className="peer absolute top-0 right-0 h-full w-full object-cover transition-all hover:scale-110 "
            src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
            alt="product image"
            />
        </a>

        <div className="mt-4 px-5 pb-5">

            <a href="#">
                <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500 - Red</h5>
            </a>
            <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                    <span className="text-3xl font-bold text-slate-900">$499</span>
                    <span className="text-sm text-slate-900 line-through">$699</span>
                </p>
            </div>

            <button
            className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>
                Add to cart
            </button>
        </div>
    </div>

  )
}

export default Item