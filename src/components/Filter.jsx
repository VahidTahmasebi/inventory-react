import React from 'react';

const Filter = ({
  sortHandler,
  onSearch,
  sort,
  searchValue,
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div>
      <div className='flex items-center justify-between mb-6'>
        <label htmlFor='search-input' className='text-slate-400 text-lg'>
          search
        </label>
        <input
          type='text'
          name='search-input'
          id='search-input'
          className='bg-transparent rounded-xl border border-slate-500 text-slate-400'
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className='flex items-center justify-between'>
        <label htmlFor='sort-products' className='text-slate-400'>
          sort
        </label>
        <select
          name='sort-products'
          id='sort-products'
          className='bg-transparent rounded-xl border border-slate-500 text-slate-400 mb-4'
          value={sort}
          onChange={sortHandler}
        >
          <option className='bg-slate-500 text-slate-300' value=''>
            select a category
          </option>
          <option className='bg-slate-500 text-slate-300' value='latest'>
            latest
          </option>
          <option className='bg-slate-500 text-slate-300' value='earliest'>
            earliest
          </option>
        </select>
      </div>
      <div className='flex items-center justify-between'>
        <label htmlFor='sort-products' className='text-slate-400'>
          category
        </label>
        <select
          name='sort-products'
          id='sort-products'
          className='bg-transparent rounded-xl border border-slate-500 text-slate-400 mb-4'
          value={selectedCategory}
          onChange={onSelectCategory}
        >
          <option className='bg-slate-500 text-slate-300' value=''>
            all
          </option>
          {categories.map((category) => {
            return (
              <option
                className='bg-slate-500 text-slate-300'
                value={category.id}
                key={category.id}
              >
                {category.title}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
