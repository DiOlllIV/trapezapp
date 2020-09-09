import React from "react";
import Main from './components/Main';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import AboutUs from "./components/aboutUs/AboutUs";
import Menu from './components/menu/Menu';
import Contacts from './components/Contacts';
import Footer from "./components/footer/Footer";

const App = () => { 
  return (
      <BrowserRouter>
        <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={AboutUs} />
            <Route path="/menu" component={Menu} />
            <Route path="/contacts" component={Contacts} />
          </Switch>
        <Footer />
      </BrowserRouter>
  );
}
export default App;