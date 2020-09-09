import React from 'react';
import Iframe from 'react-iframe';
import './location.scss';

const Location = () => {
  return (
    <div className="location">
      <h1>м. Біла Церква</h1>
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73844.32595795102!2d30.083097950895656!3d49.79895808556978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d3423e37227b9d%3A0x84e311f8582cc6e8!2z0JHQtdC70LDRjyDQptC10YDQutC-0LLRjCwg0JrQuNC10LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgMDkxMDA!5e0!3m2!1sru!2sua!4v1599648346863!5m2!1sru!2sua"
        width="90%"
        height="400px"
        className="location-map"
      />
    </div>
  );
};

export default Location;
