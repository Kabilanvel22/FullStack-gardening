import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});

  const handleClick = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Email is not valid';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setErrors({});

      // Show a success toast
      toast.success('Thanks For Subscribing Our Newsletter');
    }
  };

  const handleinsta = () => {
    window.open('https://www.instagram.com/');
  };

  const handletwit = () => {
    window.open('https://twitter.com/?lang=en');
  };

  const handleface = () => {
    window.open('https://facebook.com/');
  };

  return (
    <>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-web">
            <div className="footer-logo">
              <h3 className="fo-logo">LITTLE GARDEN</h3>
              <p className="footer-info">Nurturing Nature, One Plant at a Time</p>
              <p className="footer-infos">
                Our mission is simple: Nurturing Nature, One Plant at a Time. <br />We believe that even the smallest green space has the potential<br /> to blossom into a thriving oasis. From seasoned gardeners to<br /> those just starting their journey, Little Garden is here to inspire<br /> and support every step of the way. Join us in this collective<br /> effort to nurture nature and create vibrant, living landscapes that<br /> enrich our lives and the environment.
              </p>
            </div>
            <div className="footer-social">
              <h3 className="footer-follow">Follow us</h3>
              <i className="fab fa-instagram" id="footer-social-media" onClick={handleinsta}></i>
              <i className="fab fa-twitter" id="footer-social-media" onClick={handletwit}></i>
              <i className="fab fa-facebook" id="footer-social-media" onClick={handleface}></i>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-head">
              <div className="footer-nav">
                <h3 className="fo-nav-head">Useful Links</h3>
              </div>
              <div className="fo-naviga">
                <ul className="fo-naviga-link">
                  <Link to="/"> <li className="fo-ref">HOME</li></Link>
                  <Link to="/about"> <li className="fo-ref">ABOUT</li></Link>
                  <Link to="/contact"> <li className="fo-ref">CONTACT</li></Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-subscribe">
            <div className="footer-newsletter-head">
              <div className="footer-newsletter">
                <h3 className="fo-header">Subscribe</h3>
              </div>
              <div className="fo-subs-info">
                <p className="fo-subs-information">
                  Don’t miss to subscribe to our new feeds, kindly fill the form below.
                </p>
              </div>
              <div className="fo-news-form">
                <form className="fo-forms">
                  <input
                    className={`fo-mail ${errors.email ? 'error' : ''}`}
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)} // Handle email input
                  />
                  <button className="fo-mail-btn" onClick={handleClick}>
                    <i className="fab fa-telegram-plane" id="fo-mail-icon"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <div className="fo-copy-right">
            <h3 className="fo-rights">Copyright &copy; 2023, All Right Reserved</h3>
          </div>
          <div className="footer-route-link">
            <div className="fo-routeing">
              <ul className="fo-route-ul">
                <Link to="/"> <li className="fo-route-to">HOME</li></Link>
                <Link to="/privacy"> <li className="fo-route-to">PRIVACY POLICY</li></Link>
                <Link to="/faq"> <li className="fo-route-to">FAQ</li></Link>
                <Link to="/feedback"> <li className="fo-route-to">Feedback</li></Link>
                <Link to="/terms"> <li className="fo-route-to">Term And Condition</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
