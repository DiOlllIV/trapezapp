import React from 'react';
import './depiction.scss';

const Depiction = () => {
  return (
    <div className="depiction">
      <p className="depiction-paragraph">
        Ми - сервіс доставки здорового харчування в Білій Церкві, орієнтований на те, щоб зробити здорову їжу легкою та доступною. 
        Наша мета – змінити уявлення про те, що означає здорова їжа і допомогти нашим клієнтам досягти їхніх цілей та зберегти хороше самопочуття і здоров`я. 
        Також ми зосереджені на тому щоб заощадити ваш час який ви б витратили на покупки та приготування їжі. 
        Витрачайте більше часу на те, що любите, проводьте його з людьми, яких Ви любите.
      </p>
      <div className="depiction-section">
        <div className="depiction-container">
          <div className="depiction-container__img">
            <img
              src="http://bctrapeza.com.ua/wp-content/uploads/2020/08/22.png" alt="individual treatment"
            />
          </div>
          <span className="depiction-container__title">
            Індивідуальний підхід
          </span>
          <span className="depiction-container__about">
            Бажаєте стати стрункіше, займаєтесь спортом, 
            дотримуєтесь лікувальної дієти і цінуєте свій час? 
            Ми розробили власні програми харчування під ваші цілі!
          </span>
        </div>
        <div className="depiction-container">
          <div className="depiction-container__img">
            <img 
              src="http://bctrapeza.com.ua/wp-content/uploads/2020/08/21.png" alt="varied menu"
            /> 
          </div>
          <span className="depiction-container__title">
            Різноманітне меню
          </span>
          <span className="depiction-container__about">
            Професійні кухарі готують для вас смачні та корисні страви за меню, 
            що розроблене нашим дієтологом, шеф-кухарем та фітнес тренером
          </span>
        </div>
        <div className="depiction-container">
          <div className="depiction-container__img">
            <img 
              src="http://bctrapeza.com.ua/wp-content/uploads/2020/08/20.png" alt="delicious dishes"
            />
          </div>
          <span className="depiction-container__title">
            Смачні страви
          </span>
          <span className="depiction-container__about">
            Здорова їжа завжди поруч. Ви - активні, енергійні та продуктивні. 
            Почуваєтесь чудово, виглядаєте на всі 100% та встигаєте значно більше!
          </span>
        </div>
      </div>
    </div>
  );
};

export default Depiction;
