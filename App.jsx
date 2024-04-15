import React, { useState, useEffect } from 'react';
import SearchMeal from './searchmeal/searchmeal';
import RecipeHub from './recipehub/recipehub';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './llloog.png';
import image1 from './12355.webp';
import image2 from './wiwi.jpg';
import image3 from './img1.avif';
import image4 from './img2.jpg';
import image5 from './img5.jpg';
import image6 from './img7.png';
import backgroundImageUrl from './main_pagebannerbg.jpg'; 
import backgroundImageUrl2 from './Screenshot 2024-04-15 at 11.30.30 AM.png';
import useie from './useful.jpg';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const goToRecipeHub = () => {
    setCurrentPage('recipeHub');
  };

  const goToSearchMeal = () => {
    setCurrentPage('searchMeal');
  };
  const gotoabout =() =>{
    window.open('src/aboutus/aboutus.html', '_blank');
  }
  useEffect(() => {
    if (currentPage === 'recipeHub') {
      document.body.style.backgroundImage = `url(${backgroundImageUrl2})`;
      document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundImage = 'none';
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === 'searchMeal') {
      document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
      document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundImage = 'none';
    }
  }, [currentPage]);

  return (
    <div>
      <header>
        <img className="logo" src={logo} alt="logo" />
        <div className="nav-bar">
  <div className="nav-link" onClick={() => setCurrentPage('home')} style={{ backgroundColor: 'black' }}>Home</div>
  <div className="nav-link" onClick={goToRecipeHub} style={{ backgroundColor: 'black' }}>RecipeHub</div>
  <div className="nav-link" onClick={goToSearchMeal} style={{ backgroundColor: 'black' }}>Diet Plan</div>
  <div className="nav-link" onClick={gotoabout} style={{ backgroundColor: 'black' }}>About Us</div>
</div>
<a className="login" href="../src/login/login.html">
  <button className='nav-button' id="login">Login/SignUp</button>
</a>
</header>


      {currentPage === 'home' && (
        <>
          <section id="main" className="main" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
            <div className="header-content">
              <h2>Come Explore with us</h2>
              <div className="line"></div>
              <h1>Food made Easy</h1>
              <a href="#" className="btn-ctn">Learn More</a>
            </div>
          </section>
          <section id="main2" className="main2">
            <div className="title">
              <h1>Know More About Us</h1>
              <div className="line"></div>
            </div>
            <div className="row">
              <div className="col">
                <img src={image1} alt="img1" />
                <br />
                <h4>Hit your health goals in 1-2-3</h4>
                <p className="para">Track food, fitness & fasting. Tracking calories and macros made easy.</p>
                <br />
                <a href="#" className="btn-ctn">Learn More</a>
              </div>
              <div className="col">
                <img src={image2} alt="img2" />
                <br />
                <h4>Create Your Own recipes and store them</h4>
                <p className="para">Create your own recipes easily on our website. Customize ingredients and steps, then save your favorite dishes to access anytime.</p>
                <br />
                <a href="#" className="btn-ctn">Learn More</a>
              </div>
            </div>
          </section>
          <section id="explore" className="explore" style={{ backgroundImage: `url(${useie})` }}>
            <div className="heading">
              <h1>Too busy to plan?</h1>
              <div className="line"></div>
              <p className="par2">A magical new way to plan your meals. Groundbreaking organizing features designed to save time, customize your weekly meal plan based on your diet and eating habits. An innovative meal planning in 3 steps for mind-blowing simplicity.<br />.Meal Plans which offer balanced nutrition each and every week and can be easily customized to your personal tastes.</p>
              <br />
              <a href="#" className="btn-ctn">Learn More</a>
            </div>
          </section>
          <section className="tours">
            <div className="row">
              <div className="col content-col">
                <h1>Create Your Own recipes</h1>
                <div className="line"></div>
                <p>Create your own recipes easily on our website. Customize ingredients and steps, then save your favorite dishes to access anytime. Start cooking and saving today! Join our community and discover new recipes shared by others.
                </p>
                <a href="#" className="btn-ctn">Learn More</a>
              </div>
              <div className="col image-col">
                <div className="image-gallery">
                  <img src={image3} alt="img3" />
                  <img src={image4} alt="img4" />
                  <img src={image5} alt="img5" />
                  <img src={image6} alt="img6" />
                </div>
              </div>
            </div>
          </section>
          <section className="footer">
            <p>Privacy policy Terms Contact English</p>
            <p>© 2023 DietPlannerApp.com - Software for dietitians</p>
          </section>
        </>
      )}

      {currentPage === 'recipeHub' && <RecipeHub />}
      {currentPage === 'searchMeal' && <SearchMeal />}
    </div>
  );
}

export default App;
