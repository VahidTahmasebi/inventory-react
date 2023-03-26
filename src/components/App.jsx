import React from 'react';
import CategoryForm from './CategoryForm';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <div className='bg-slate-800 min-h-screen overflow-auto h-screen'>
        <Navbar />
        <div className='container max-w-screen-sm mx-auto'>
          <CategoryForm />
        </div>
      </div>
    </div>
  );
};

export default App;
