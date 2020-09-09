import React from 'react';
import './feedback.scss';

const Feedback = () => {
  return (
    <div className="feedback">
      <div className ="feedback-container">
        <h1>Контакти</h1>
        <hr/>
        <div className="feedback-container__icon"></div>
        <a href="+380685929618"
        >
          +38(068)592-96-18
        </a>
        <span>телефонуйте, або заповнюйте форму з Вашим питанням</span>
      </div>

      <form action=""
        className="form"
      >
        <div className="form-control">
            <label className="form-lable">Ваше имя</label>
            <input className="form-input" 
              type="text" id="name" name="name" 
              placeholder="Имя" required 
            />
        </div>
        <div className="form-control"
          style={{marginTop: "25px"}}
        >
          <label className="form-lable">Ваш номер телефона</label>
          <input className="form-input" 
            type="tel" id="phone" name="phone" 
            placeholder="+380 XX XXX XX XX" required 
          />
        </div>
        <div className="form-control"
          style={{marginTop: "25px"}}  
        >
          <label className="form-lable">Ваш Email</label>
          <input className="form-input" 
            type="email" id="email" name="email" 
            placeholder="example@mail.com" required 
          />
        </div>
        <div className="form-control"
          style={{marginTop: "25px"}}  
        >
          <label className="form-lable">Сообщение</label>
          <textarea rows="4" cols="50" 
            className="form-input"
            id="message" name="message"  
            form="usrform" required
            placeholder="Ваше сообщение..."
          >
          </textarea>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
