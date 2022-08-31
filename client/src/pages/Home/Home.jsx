import React from 'react';
import { Navbar, Header, Footer } from '../../components';
import { Cart, Filter, Pagination } from '../../container';
import "./home.css";
const Home = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
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
