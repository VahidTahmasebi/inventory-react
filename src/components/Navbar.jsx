import React from 'react';

const Navbar = ({ products }) => {
  return (
    <div className='h-14 flex items-center justify-center gap-x-4 bg-slate-700 mb-6 px-3'>
      <h1 className='text-xl font-bold text-slate-300'>
        Inventory App using tailwind & React
      </h1>
      <span className='flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 font-bold text-slate-300'>
        {products.length}
      </span>
    </div>
  );
};

export default Navbar;
