import React, { useEffect, useState } from 'react';
import CategoryForm from './CategoryForm';
import Filter from './Filter';
import Navbar from './Navbar';
import ProductList from './ProductList';
import ProductsForms from './ProductsForms';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sort, setSort] = useState('latest');
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = sortDate(result);
    result = filterSelectedCategory(result);

    // Set products after filter
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  // Get values ​​from local
  useEffect(() => {
    const savedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const savedCategories =
      JSON.parse(localStorage.getItem('categories')) || [];

    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  // Set products values ​​locally
  useEffect(() => {
    if (products.length)
      localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Set categories values ​​locally
  useEffect(() => {
    if (categories.length)
      localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  // Receive sort value
  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  // Receive category value
  const selectCategoryHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Receive search value
  const searchHandler = (e) => {
    setSearchValue(e.target.value.trim().toLowerCase());
  };

  // Filtering according to search
  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  // Filtering according to sort
  const sortDate = (array) => {
    let sortedProducts = [...array];

    return sortedProducts.sort((a, b) => {
      if (sort === 'latest') {
        return new Date(a.createAt) > new Date(b.createAt) ? -1 : 1;
      } else if (sort === 'earliest') {
        return new Date(a.createAt) > new Date(b.createAt) ? 1 : -1;
      }
    });
  };

  // Filtering according to category
  const filterSelectedCategory = (array) => {
    if (!selectedCategory) return array;
    return array.filter((item) => item.categoryId === selectedCategory);
  };

  return (
    <div>
      <div className='bg-slate-800 min-h-screen overflow-auto h-screen'>
        <Navbar products={products} />
        <div className='container max-w-screen-sm mx-auto px-3'>
          <CategoryForm setCategories={setCategories} />
          <ProductsForms categories={categories} setProducts={setProducts} />
          <Filter
            products={products}
            onSearch={searchHandler}
            searchValue={searchValue}
            sortHandler={sortHandler}
            sort={sort}
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={selectCategoryHandler}
          />
          <ProductList
            products={filteredProducts}
            categories={categories}
            setProducts={setProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
