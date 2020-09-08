import React from 'react';
import Header from './header/Header';
import Baner from './baner/Baner';
import Deciption from './depiction/Depiction';
import About from './about/About';
import MenuBar from './menuBar/MenuBar';
import Footer from './footer/Footer';

const Main = () => {
  return (
    <>
      <Baner />
      <Deciption />
      <About />
      <MenuBar />
    </>
  );
};

export default Main;