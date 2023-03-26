import React, { useState } from 'react';
import CategoryForm from './CategoryForm';
import Navbar from './Navbar';
import ProductsForms from './ProductsForms';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  return (
    <div>
      <div className='bg-slate-800 min-h-screen overflow-auto h-screen'>
        <Navbar />
        <div className='container max-w-screen-sm mx-auto'>
          <CategoryForm setCategories={setCategories} />
          <ProductsForms categories={categories} setProducts={setProducts} />
        </div>
      </div>
    </div>
  );
};

export default App;
