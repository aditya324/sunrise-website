import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout'; // Import the Layout component

const App = () => {
  return (
    <div className='bg-[#F7F4EA]'>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as needed */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;