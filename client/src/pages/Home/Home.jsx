import React from 'react';
import { Navbar, Header, Footer } from '../../components';
import { Cart, Filter, Pagination } from '../../container';

const Home = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
</div>
      <Cart />
      <Filter />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Home;
