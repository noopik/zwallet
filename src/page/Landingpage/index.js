import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AVAJessicaMera,
  AVARobert,
  AVASherina,
  ICBackgroundLandingPage,
  ICDownload,
  ICLock,
  ICTelp,
  IMAirBnB,
  IMApp1,
  IMapp2,
  IMCanon,
  IMDell,
  IMDropbox,
  IMHnM,
  IMMicrosoft,
} from '../../assets';
import { LandingPageStyles } from './Styled';
const Landingpage = () => {
  const history = useHistory();
  const actionLogin = () => {
    history.push('/username/dashboard');
  };
  return (
    <LandingPageStyles>
      <img className="bg-layer" src={ICBackgroundLandingPage} alt="ng" />
      <div className="heading-section">
        <nav>
          <div className="custom-container">
            <h1 className="logo">Zwallet</h1>
            <div className="btn-wrapper">
              <button className="button default" onClick={actionLogin}>
                Login
              </button>
              <button className="button filled">Sign Up</button>
            </div>
          </div>
        </nav>
        <header className="custom-container">
          <div className="right">
            <h1 className="title-section">
              Awesome App For Saving{' '}
              <span className="heading primary">Time.</span>
            </h1>
            <button className="button primary">Try It Free</button>
          </div>
          <aside>
            <div className="image-wrapper">
              <img src={IMApp1} about="zwallet1" alt="app" />
            </div>
          </aside>
        </header>
      </div>

      <section className="about-application">
        <div className="custom-container">
          <h1 className="title-section center">
            <span className="heading primary">About</span> the Application.
          </h1>
          <p className="paragraph">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
          <div className="service-wrapper">
            <div className="card item-service">
              <div className="icon-wrapper">
                <img className="icon" src={ICTelp} alt="Contact" />
              </div>
              <h2>24/7 Support</h2>
              <p className="paragraph">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="card item-service">
              <div className="icon-wrapper">
                <img className="icon" src={ICLock} alt="lock" />
              </div>
              <h2>Data Privacy</h2>
              <p className="paragraph">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
            <div className="card item-service">
              <div className="icon-wrapper">
                <img className="icon" src={ICDownload} alt="Download" />
              </div>
              <h2>Easy Download</h2>
              <p className="paragraph">
                Zwallet is 100% totally free to use it’s now available on Google
                Play Store and App Store.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="partners-section">
        <div className="custom-container">
          <aside className="left">
            <h1 className="title-section">
              100+ <span className="heading primary">Trusted </span>
              Partners.
            </h1>
            <p className="paragraph">
              We have reached global level and have 100+ brand partners around
              the globe.
            </p>
          </aside>
          <aside className="right">
            <div className="row">
              <div className="image-wrapper">
                <img src={IMAirBnB} alt="Icon AirBnB" />
              </div>
              <div className="image-wrapper">
                <img src={IMCanon} alt="Icon Canon" />
              </div>
              <div className="image-wrapper">
                <img src={IMDell} alt="Partner Dell" />
              </div>
            </div>
            <div className="row">
              <div className="image-wrapper">
                <img src={IMMicrosoft} alt="Microsoft" />
              </div>
              <div className="image-wrapper">
                <img src={IMDropbox} alt="Dropbox" />
              </div>
              <div className="image-wrapper">
                <img src={IMHnM} alt="HnM" />
              </div>
            </div>
          </aside>
        </div>
      </section>
      <section className="features-section">
        <div className="custom-container">
          <div className="left">
            <div className="image-wrapper">
              <img src={IMapp2} alt="zwallet app" />
            </div>
          </div>
          <div className="right">
            <h1 className="title-section center">
              All The <span className="heading primary">Great </span>
              Zwallet Features.
            </h1>
            <div className="card feature-item">
              <div className="title">
                <h3 className="number">1.</h3>
                <h3>Small Fee</h3>
              </div>
              <p className="paragraph">
                We only charge 5% of every success transaction done in Zwallet
                app.
              </p>
            </div>
            <div className="card feature-item">
              <div className="title">
                <h3 className="number">2.</h3>
                <h3>Data Secured</h3>
              </div>
              <p className="paragraph">
                All your data is secured properly in our system and it’s
                encrypted.
              </p>
            </div>
            <div className="card feature-item">
              <div className="title">
                <h3 className="number">3.</h3>
                <h3>User Friendly</h3>
              </div>
              <p className="paragraph">
                Zwallet come up with modern and sleek design and not
                complicated.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="users-section">
        <div className="custom-container">
          <h1 className="title-section center">
            What Users are <span className="heading primary">Saying.</span>
          </h1>
          <p className="paragraph">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </p>
          <div className="card-users-wrapper">
            <div className="card user">
              <div className="image-profile-wrapper">
                <img src={AVASherina} alt="user 1" />
              </div>
              <h2>Sherina Chaw</h2>
              <p className="paragrah">
                “I use this app since 2 years ago and this is the best app that
                I’ve ever use in my entire life”
              </p>
            </div>
            <div className="card user">
              <div className="image-profile-wrapper">
                <img src={AVAJessicaMera} alt="user 2" />
              </div>
              <h2>Jessica Mera</h2>
              <p className="paragrah">
                “I use Zwallet to manage all financial needs. It’s super easy to
                use and it’s 100% free app”
              </p>
            </div>
            <div className="card user">
              <div className="image-profile-wrapper">
                <img src={AVARobert} alt="user 1" />
              </div>
              <h2>Robert Chandler</h2>
              <p className="paragrah">
                “Since I’m using this app, I’m not going to move to another
                similar app. Thank you Zwallet!”
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="custom-container">
          <h1 className="logo">Zwallet</h1>
          <p className="text">
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </p>
          <div className="divider"></div>
          <div className="contact">
            <div>
              <p className="text">2020 Zwallet. All right reserved.</p>
            </div>
            <div className="contact-email">
              <p className="text">+62 5637 8882 9901</p>
              <p className="text">contact@zwallet.com</p>
            </div>
          </div>
        </div>
      </footer>
    </LandingPageStyles>
  );
};

export default Landingpage;
