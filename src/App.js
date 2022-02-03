import React from "react";
import './css/style.css';
import FeatureSlider from "./Features/FeatureSlider";
import FeedbackForm from "./Feedback/FeedbackForm.jsx";

const features = {
  featureProps : [
    {featureCount : 'Первое', styles: {imageSt: {backgroundImage: 'url("./images/1.svg")'}}},
    {featureCount : 'Второе', styles: {imageSt: {backgroundImage: 'url("./images/2.svg")'}}},
    {featureCount : 'Третье', styles: {imageSt: {backgroundImage: 'url("./images/3.svg")'}}},
    {featureCount : 'Четвертое', styles: {imageSt: {backgroundImage: 'url("./images/4.svg")'}}},
  ]
};

const inputData = {
  formMethod : '../mailer.smart.php',
  formClassName : 'contact-form',
  inputs: [
    {type: 'text', placeholder : "Ваше имя",},
    {type: 'tel', placeholder : "Телефон",},
    {type: 'email', placeholder : "E-mail",},
  ]
}

function App() {
  return (
    <div>
    <header> 
      <div className="wrapper">
          <div className="header">      
            <a href="#"><div className="header-logo"></div></a>
          <div className="header-phonelink"><a  href="tel:7(962)556-1234">+7(962)556-1234</a></div>
        </div>
      </div>
    </header>
    <main>
      <div className="wrapper" >
        <div className="main">
          <h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
          <div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более.</div>
          <button className="btn main-btn"><span>Подробнее</span></button>
        </div>
      </div>
    </main>
    <section className="features">
        <div className="wrapper">
            <div className="features-wrapper">
                <h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
                <div className="features-subhead">О нас</div>
                <div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить.
                </div>
                <FeatureSlider user={features}/>
            </div>
        </div>
    </section>

    <section className="contact">
        <div className="wrapper">
            <div className="contact-wrapper">
              <h2 className="contact-title">Остались вопросы?</h2>
              <div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
                <FeedbackForm inputData={inputData}/>
                <div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.</div>
            </div>
        </div>
      </section>

      <footer>
        <div className="footer">
        <div class="footer-logo"></div>
            <div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
            <a href="tel:888" class="footer-phone"></a>
            <div className="footer-websurfer"><span class="footer-websurfer_build">Сделано</span> <a href="#">Ваше имя</a></div>
            <div className="footer-phonelink"><a href="tel:888">+7(962)556-1234</a></div>
        </div>
      </footer>
    </div>
  );
}
export default App;
