import React, { useState } from 'react';
import DishesPropositions from './DishesPropositions';
import { menuStorage } from '../../state';
import './menu.scss';

const Menu = () => {

  return (
    <div className="menu">
      <h1 className="menu-head">Меню</h1>
      <DishesPropositions
        storage={menuStorage.weight}
      />
      <DishesPropositions
        storage={menuStorage.slimming}
      />
      <DishesPropositions
        storage={menuStorage.balance}
      />
      <DishesPropositions
        storage={menuStorage.vegetarian}
      />
      <DishesPropositions
        storage={menuStorage.expressSlimming}
      />
    </div>
  )
};

export default Menu;
