import React from 'react';
import './about.scss';

const About = () => {
  return (
    <div className="about">
      <h1>
        Як це працює?
      </h1>
      <div className="about-container">
        <div className="about-container__img">
          <img
            src="https://raw.githubusercontent.com/DiOlllIV/trapezapp/master/src/img/main_page.jpg" alt="program"
          />
        </div>
        <div className="about-container__description">
          <h3>1. Вибір програми</h3>
          <p>
            Консультуючись з нашим дієтологом ви обираєте програму, 
            на основі ваших вподобань ми розробляємо меню з урахуванням добової норми білків, 
            жирів, вуглеводів, клітковини, мікроелементів та мінералів.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-container__img">
          <img 
            src="https://raw.githubusercontent.com/DiOlllIV/trapezapp/master/src/img/main_page2.jpg" alt="cook"
          />
        </div>
        <div className="about-container__description">
          <h3>
            2. Приготування
          </h3>
          <p>
            Найкращий шеф-кухар готує для вас найсмачнішу, найвишуканішу їжу. 
            Широкий асортимент не повторюється на протязі тижня, 
            всі страви готуються виключно з найсвіжіших продуктів.
          </p>
        </div>
      </div>
      <div className="about-container">
        <div className="about-container__img">
          <img 
            src="https://raw.githubusercontent.com/DiOlllIV/trapezapp/master/src/img/main_page3.jpg" alt="delivery"
          />
        </div>
        <div className="about-container__description">
          <h3>
            3. Доставка
          </h3>
          <p>
            Ранкова доставка – проводиться з  8:00 до 11:00.
            Вечірня доставка – проводиться з 20:30 до 23:00.
            Зручний час доставки попередньо узгоджуйте при оформленні замовлення
          </p>
        </div>
      </div>
      <div className="about-team">
        <h3>
          Наша команда:
        </h3>
        <span>
          Шеф кухар
        </span>
        <span>
          Дієтолог
        </span>
        <span>
          Служба доставки
        </span>
      </div>
    </div>
  );
};

export default About;
