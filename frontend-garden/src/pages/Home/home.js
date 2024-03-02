import React, { useEffect } from 'react';
import "../../assets/css/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {
  useEffect(() => {
    function addObserver(element, options) {
      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        }, options);
      });
      observer.observe(element);
    }

    function scrollTrigger(selector, options = {}) {
      let elements = document.querySelectorAll(selector);

      elements = Array.from(elements);

      elements.forEach(el => {
        addObserver(el, options);
      });
    }

    scrollTrigger('.bufferContent', {
      rootMargin: '-100px'
    });

    scrollTrigger('.artistList', {
      rootMargin: '-10px'
    });

    let isWatering = true;
  
    // Set up an interval to toggle between "Water the plant" and "Feed the plant" every 5 seconds
    const messageInterval = setInterval(() => {
      if (isWatering) {
        toast.info('Water the plant');
      } else {
        toast.info('Feed the plant');
      }
      isWatering = !isWatering; // Toggle between watering and feeding
    }, 20000);
  
    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(messageInterval);
    };


  }, []);
  return (
    <>
      <section className="parallax parallaxOne">
        <div className="overlay">
          <div className="scrollEl">
            <h1 className="home-heading">Make Your Home Like Garden</h1>
            <h1 className="home-heading1">Explore More</h1>
            <FontAwesomeIcon icon={faChevronDown} id="scroll" />
          </div>
        </div>
      </section>

      <section className="buffer">
        <div className="bufferContent">
          <img className="imgSmall animateImg" src="https://themewagon.github.io/gardener/img/about.jpg" alt="woman painting" />
          <div className="bufferTxt">
            <h2>We Make Your Home Like A Garden</h2>
            <p>
              Transforming your home into a garden is about more than just adding plants. It's about creating a sanctuary, a place of tranquility and natural beauty. It's about bringing the outdoors in, allowing nature to flourish within the walls of your own space. With careful design and nurturing, we turn houses into living, breathing gardens, where every corner radiates life and vitality.
            </p>
            <p>
              A home adorned with nature is a canvas of serenity and vitality, where every room tells a story of growth and life
            </p>
            <p>
              In the garden of life, a well-tended home is the most beautiful flower.
            </p>
            <p>
              In every corner of your home, let there be a touch of green, a breath of fresh air, and a glimpse of the garden that lies within. A garden in your home is a promise of growth, a testament to life's resilience, and a celebration of the beauty that surrounds us.
            </p>
            <Link to="/" className="btn">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="parallax parallaxTwo">
        <div className="artistSection">
          <h2>Our Home & Garden Tips</h2>

          <div className="artistList">
            <div className="artist">
              <img src="https://images.pexels.com/photos/974400/pexels-photo-974400.jpeg?auto=compress&cs=tinysrgb&w=600" alt="artist one" />
              <div className="artistInfo">
                <h3>Growing Guide</h3>
                <p>
                  Empower your green thumb with our comprehensive Growing Guide. From seed to harvest, unlock the secrets to cultivating thriving gardens and bountiful harvests
                </p>
                <Link to="/guides">Explore..</Link>
              </div>
            </div>

            <div className="artist">
              <img src="https://images.pexels.com/photos/4813265/pexels-photo-4813265.jpeg?auto=compress&cs=tinysrgb&w=600" alt="artist two" />
              <div className="artistInfo">
                <h3>Garden Design</h3>
                <p>
                  Elevate your outdoor space with our Garden Design expertise. From layout to plant selection, we craft spaces that harmonize beauty, functionality, and natural allure, tailored to your vision
                </p>
                <Link to="/structure">Explore..</Link>
              </div>
            </div>

            <div className="artist">
              <img src="https://images.pexels.com/photos/1054026/pexels-photo-1054026.jpeg?auto=compress&cs=tinysrgb&w=600" alt="artist three" />
              <div className="artistInfo">
                <h3>Maintain Garden</h3>
                <p>
                  Preserve the beauty and vitality of your garden with our expert Maintenance services. From pruning to pest control, we ensure your green haven thrives year-round, so you can enjoy its full splendor
                </p>
                <Link to="/maintain">Explore..</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-bottom-top">
        <div className="home-bottom">

          <section className="buffer">
            <div className="bufferContent">
              <img className="imgSmall animateImg" src="https://images.pexels.com/photos/4132369/pexels-photo-4132369.jpeg?auto=compress&cs=tinysrgb&w=600" alt="woman painting" />
              <div className="bufferTxt">
                <h2>Why Choosing Us!</h2>
                <h3>
                  Few Reasons Why People Choosing Us!
                </h3>
                <p>
                  With a passion for cultivating natural beauty and a commitment to excellence, our team stands out as the preferred choice for all your gardening needs
                </p>
                <p>
                  In horticulture, offering tailored solutions that cater to your unique preferences and requirements. Our client-centric approach ensures that your vision is at the forefront of every project, resulting in gardens that not only captivate the eye but also serve as serene retreats.
                </p>
                <p>
                  Through sustainable practices and meticulous attention to detail, we create outdoor spaces that harmonize with nature, leaving a positive impact on both aesthetics and the environment.
                </p>
                <p>
                  Join us in our journey towards greener, more vibrant landscapes, where every leaf, flower, and stone is thoughtfully placed for your utmost satisfaction.
                </p>
              </div>
            </div>
          </section>

          <section className="parallax parallaxTwo">
            <div className="artistSection">
              <h2>Our Client Home Garden</h2>
              <div className="artistList">
                <div className="artist">
                  <img src="https://images.pexels.com/photos/974400/pexels-photo-974400.jpeg?auto=compress&cs=tinysrgb&w=600" alt="artist one" />
                </div>

                <div className="artist">
                  <img src="https://images.pexels.com/photos/4813265/pexels-photo-4813265.jpeg?auto=compress&cs=tinysrgb&w=600" alt="artist two" />
                </div>

                <div className="artist">
                  <img src="https://images.pexels.com/photos/1054026/pexels-photo-1054026.jpeg?auto=compress&cs=tinysrgb&w=600" alt="artist three" />
                </div>
              </div>
            </div>
          </section>
          <section className="buffer">
            <div className="bufferContent">
              <div className="bufferTxt">
                <h2 className="home-foot-h3">The Complete Guide To Growing Food In Your Own Backyard</h2>
                <h3 className="home-foot-h3">
                  Suitable For Gardeners Worldwide
                </h3>
                <div className="home-foot-head">
                  <div>
                    <img src='https://www.thehomegarden.com/static/icons/bee.png' alt='bee' className="home-foot-img1" />
                    <h3 className="home-foot-info">ORGANIC GARDENING</h3>
                    <p className="home-foot-para">How to grow and maintain your own organic garden</p>
                  </div>
                  <div>
                    <img src='https://www.thehomegarden.com/static/icons/notes.png' alt='bee' className="home-foot-img2" />
                    <h3 className="home-foot-info">GROWING GUIDES</h3>
                    <p className="home-foot-para">Grow a variety of foods with our fuss-free growing guides</p>
                  </div>
                  <div className="home-foot-bottom">
                    <img src='https://www.thehomegarden.com/static/icons/question.png' alt='bee' className="home-foot-img3" />
                    <h3 className="home-foot-info">TROUBLESHOOTING</h3>
                    <p className="home-foot-para">Troubleshoot pests and diseases by using our handy charts and guides</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Home;
