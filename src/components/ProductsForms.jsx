import React, { useState } from 'react';

const ProductsForms = ({ categories, setProducts }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: '',
    quantity: false,
    categoryId: '',
  });

  //   Receive comparisons
  const changeHandler = ({ target }) => {
    setProductsFormData({ ...productsFormData, [target.name]: target.value });
  };

  const addProductForm = (e) => {
    e.preventDefault();

    if (productsFormData.title) {
      // Send values in state
      setProducts((prevState) => [
        ...prevState,
        {
          ...productsFormData,
          createAt: new Date().toISOString(),
          id: new Date().getTime(),
        },
      ]);
      // emptying the state
      setProductsFormData({ title: '', quantity: false, categoryId: '' });
    }
  };
  
  return (
    <div className='mb-6'>
      <h2 className='text-xl text-slate-300 font-bold mb-2'>Add New Product</h2>
      <form
        onSubmit={addProductForm}
        className='bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4 mb-4'
      >
        <div>
          <label htmlFor='product-title' className='block mb-1 text-slate-400'>
            Product title
          </label>
          <input
            type='text'
            name='title'
            id='product-title'
            placeholder='Product title...'
            className='bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full'
            onChange={changeHandler}
            value={productsFormData.title}
          />
        </div>
        <div>
          <label htmlFor='quantity' className='block mb-1 text-slate-400'>
            Quantity
          </label>
          <input
            type='number'
            name='quantity'
            id='quantity'
            placeholder='Quantity...'
            className='bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full'
            onChange={changeHandler}
            value={productsFormData.quantity}
          />
        </div>
        <div>
          <label
            htmlFor='product-category'
            className='block mb-1 text-slate-400'
          >
            Category
          </label>
          <select
            value={productsFormData.categoryId}
            onChange={changeHandler}
            name='categoryId'
            id='product-category'
            className='w-full bg-transparent rounded-xl border border-slate-500 text-slate-400 '
          >
            <option value='' className='bg-slate-500 text-slate-300'>
              Select a category...
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  value={category.id}
                  className='bg-slate-500 text-slate-300'
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className='flex items-center justify-between gap-x-4'>
          <button
            id='add-new-product'
            className='flex-1 bg-slate-500 text-slate-200 rounded-xl py-2'
            type='submit'
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForms;
