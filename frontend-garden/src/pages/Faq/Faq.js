import React, { useEffect, useState } from 'react';
import "../../assets/css/Faq.css"
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import axios from 'axios';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

   
     
  useEffect(() => {
    const btns = document.querySelectorAll(".acc-btn");

    function accordion(index) {
      setOpenIndex(openIndex === index ? null : index);
    }

    btns.forEach((el, index) => el.addEventListener("click", () => accordion(index)));

    return () => {
      btns.forEach((el, index) => el.removeEventListener("click", () => accordion(index)));
    };
  }, []);
  return (
    <>
      <div className="faq-container">
        <div className="faq-head">
          <main class="card">
            <div class="hero">
              <img src="https://s3.amazonaws.com/prod_pm_avatars/publictemplates/64/meeting-questions.png" alt="section image" class="img" />
            </div>

            <h2 class="title">FAQ</h2>


            <div className="acc-container">
              <button className={`acc-btn ${openIndex === 0 ? 'is-open' : ''}`}>How often should your garden be watered?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 0 ? '1000px' : '0' }}>
                <p>Water is needed by plants to transport food and hormone from one part to another, transport minerals and oxygen from roots to leaves, maintain turgid pressure to keep the plant upright, expiration though leaf surface to maintain plant body temperature and most importantly for photosynthesis.</p>
              </div>

              <button className={`acc-btn ${openIndex === 1 ? 'is-open' : ''}`}>Why is well-drained soil so crucial for plant health?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 1 ? '1000px' : '0' }}>
                <p>A well-draining soil means loose coarse particles through which air can travel easily for the roots to absorb oxygen and transport it to the plant.</p>
              </div>

              <button className={`acc-btn ${openIndex === 2 ? 'is-open' : ''}`}>What is the optimum soil pH level for potting mixes?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 2 ? '1000px' : '0' }}>
                <p>
                  pH levels play an important role in plant health, as at certain pH levels the nutrient break down and its assimilation by plants happen better. A pH of 6.5 is just about right for most home gardens, since most plants thrive in the 6.0 to 7.0 (slightly acidic to neutral) range.</p>
              </div>

              <button className={`acc-btn ${openIndex === 3 ? 'is-open' : ''}`}>Is mulch the same as compost?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 3 ? '1000px' : '0' }}>
                <p>Mulch is dry leaves that is gathered and dried over autumn or summer and used to cover naked soil for two reasons; one, to prevent erosion and aid in the flourishing of beneficial micro fauna under the leaf blanket, and second, to seal in the ground moisture and regulate soil temperature during cold winters and hot summers.</p>
              </div>

              <button className={`acc-btn ${openIndex === 4 ? 'is-open' : ''}`}>What flowers are known to thrive in a shade garden?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 4 ? '1000px' : '0' }}>
                <p>Most indoor garden experience varying levels of shade and sun, and as sad as it may be, most flowering plants require direct sunlight to bloom. </p>
              </div>

              <button className={`acc-btn ${openIndex === 5 ? 'is-open' : ''}`}>Why is it important to prune your plants?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 5 ? '1000px' : '0' }}>
                <p>Pruning is one of the most important gardening activities. It removes dead and decaying organic matter from plants, promotes branching, makes space for new growth, and boosts overall plant health.</p>
              </div>

              <button className={`acc-btn ${openIndex === 6 ? 'is-open' : ''}`}>Why is it more important to fertilise potted plants?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 6 ? '1000px' : '0' }}>
                <p>
                  It is infinitely more important to fertilise potted plants as compared to plants that grow in the ground because, the plants in the ground have access to infinite source of nutrients. These ground nutrients are replenished on a daily basis though decay of organic matter, animal excreta, rains, and beneficial microflora and fauna in the soil.</p>
              </div>

              <button className={`acc-btn ${openIndex === 7 ? 'is-open' : ''}`}>Is it easy to grow microgreens?</button>
              <div className="acc-content" style={{ maxHeight: openIndex === 7 ? '1000px' : '0' }}>
                <p>It is fairly easy to grow microgreens, especially compared to other plants. All you need is good quality microgreen seeds, a loose growing medium and a flat and wide planter with drainage holes.</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}


export default Faq;
