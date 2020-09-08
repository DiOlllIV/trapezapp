import React, { useState } from 'react';

const DishesPropositions = (props) => {
  const [aboutIsClicked, setClickAbout] = useState(true);
  const [exmpleIsClicked, setClickExample] = useState(false);

  const {
    img, 
    depiction, 
    price, 
    description, 
    example,
  } = props.storage;

  const handleClickAbout = () => {
    setClickExample(false);
    setClickAbout(true);
  }

  const handleClickExample = () => {
    setClickExample(true);
    setClickAbout(false);
  }

  const exampleVisibility = exmpleIsClicked ? 
    {"display": "flex"} : {"display": "none"};
  const aboutVisibility = aboutIsClicked ? 
  {"display": "flex"} : {"display": "none"};

  const aboutBtnStyle = aboutIsClicked ?
    {
      "border": "1px solid red",
      "borderBottom": "2px solid black"
    } :
    {
      "borderBottom": "1px solid red"
    }
  const exampleBtnStyle = exmpleIsClicked ?
    {
      "border": "1px solid red",
      "borderBottom": "2px solid black"
    } :
    {
      "borderBottom": "1px solid red"
    }

  return (
    <div className="menu-tablet">
      <div className="menu-tablet__img">
        <img src={img} alt={depiction} />
      </div>
      <h1>{depiction}</h1>
      <h3>{price}</h3>
        <div className="menu-tablet__btns">
          <button className=" btn btn-about"
            style={aboutBtnStyle}
            onClick={handleClickAbout}
          >Опис</button>
          <button className="btn btn-example"
            style={exampleBtnStyle}
            onClick={handleClickExample}
          >Приклад</button>
        </div>
      <div className="menu-tablet__section">
        <div style={aboutVisibility}
          className="menu-tablet__section-about"
        >
          <span>{description.kcal}</span>
          <span>{description.about}</span>
        </div>
        <div style={exampleVisibility} 
          className="menu-tablet__section-example"
        >
          <span>
            <span>
              Сніданок:  
            </span>
            {example.breakfest}
          </span>
          <span>
            <span>
            Другий сніданок:
            </span>
            {example.secondBreakfest}
          </span>
          <span>
            <span>
              Обід:   
            </span>
            {example.lunch}
          </span>
          <span>
            <span>
              Полуденок:   
            </span>
            {example.midday}
          </span>
          <span>
            <span>
              Вечеря:   
            </span>
            {example.dinner}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DishesPropositions;