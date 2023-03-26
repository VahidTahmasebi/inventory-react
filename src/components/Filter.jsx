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
          Search
        </label>
        <input
          type='text'
          name='search-input'
          id='search-input'
          placeholder='Search title...'
          className='bg-transparent rounded-xl border border-slate-500 text-slate-400'
          value={searchValue}
          onChange={onSearch}
        />
      </div>
      <div className='flex items-center justify-between'>
        <label htmlFor='sort-products' className='text-slate-400'>
          Sort
        </label>
        <select
          name='sort-products'
          id='sort-products'
          className='bg-transparent rounded-xl border border-slate-500 text-slate-400 mb-4'
          value={sort}
          onChange={sortHandler}
        >
          <option className='bg-slate-500 text-slate-300' value=''>
            Select a category
          </option>
          <option className='bg-slate-500 text-slate-300' value='latest'>
            Latest
          </option>
          <option className='bg-slate-500 text-slate-300' value='earliest'>
            Earliest
          </option>
        </select>
      </div>
      <div className='flex items-center justify-between'>
        <label htmlFor='category-products' className='text-slate-400'>
          Category
        </label>
        <select
          name='category-products'
          id='category-products'
          className='bg-transparent rounded-xl border border-slate-500 text-slate-400 mb-4'
          value={selectedCategory}
          onChange={onSelectCategory}
        >
          <option className='bg-slate-500 text-slate-300' value=''>
            All
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
