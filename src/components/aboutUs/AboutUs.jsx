import React from 'react';
import './aboutUs.scss';

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUs-section">
        <div className="aboutUs-section__img">
          <img src="src/img/about_us-corner.jpg" alt=""/>
        </div>
        <div className="aboutUs-section__img">
          <img src="src/img/about_us-centre.jpg" alt=""/>
          <div className="aboutUs-section__stars">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="aboutUs-section__img">
          <img src="src/img/about_us-corner1.jpg" alt=""/>
        </div>
      </div>
      <p className="aboutUs-paragraph">
        Ми - сервіс доставки здорового харчування, 
        орієнтований на те, щоб зробити здорову їжу легкою та доступною. 
        Наша мета – змінити уявлення про те, що означає здорова їжа 
        і допомогти нашим клієнтам досягти їхніх цілей та зберегти хороше самопочуття і здоров`я. 
        Також ми зосереджені на тому щоб заощадити ваш час який ви б витратили на покупки та приготування їжі. 
        Витрачайте більше часу на те, що любите, проводьте його з людьми, яких Ви любите.
      </p>
    </div>
  );
};

export default AboutUs;