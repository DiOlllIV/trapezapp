import React from 'react';
import { Link } from 'react-router-dom';
import './menuBar.scss';

const Menu = () => {
  return (
    <div className="menuBar">
      <hr />
      <hr />
      <h1 className="menuBar-head">
        Обирай меню для своїх потреб
      </h1>
      <p className="menuBar-paragraph">
        Більш детальна інформація в розділі меню
      </p>
      <div className="menuBar-section">
        <div className="menuBar-container">
          <h2 className="menuBar-container__head">Схуднення</h2>
          <p className="menuBar-container__about">1700-1900 кКал</p>
          <p className="menuBar-container__about">5-ти разове харчування</p>
          <p className="menuBar-container__option">При довгостроковому замовленні діє система знижок</p>    
          <p className="menuBar-container__option">Безкоштовна доставка</p>
          <Link to="/menu">
            <button className="menuBar-container__btn">Cпробувати</button>
          </Link>
        </div>
        <div className="menuBar-container">
          <h2 className="menuBar-container__head">Баланс</h2>
          <p className="menuBar-container__about">2100-2300 кКал</p>
          <p className="menuBar-container__about">5-ти разове харчування</p>
          <p className="menuBar-container__option">При довгостроковому замовленні діє система знижок</p>    
          <p className="menuBar-container__option">Безкоштовна доставка</p>
          <Link to="/menu">
            <button className="menuBar-container__btn">Cпробувати</button>
          </Link>
        </div>
        <div className="menuBar-container">
          <h2 className="menuBar-container__head">Набір маси</h2>
          <p className="menuBar-container__about">2700-2900 кКал</p>
          <p className="menuBar-container__about">5-ти разове харчування</p>
          <p className="menuBar-container__option">При довгостроковому замовленні діє система знижок</p>    
          <p className="menuBar-container__option">Безкоштовна доставка</p>
          <Link to="/menu">
            <button className="menuBar-container__btn">Cпробувати</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;