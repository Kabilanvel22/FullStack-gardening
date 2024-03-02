import React from 'react'
import "../../assets/css/About.css"
import aboutGarden from "../../assets/img/about-img.png"
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function About() {
  return (
    <>
      <div className="about-container">
        <header className="about-head">
          <h3 className="about-head-info">
            Welcome <sapn className="about-head-span">To The </sapn>Little Garden !!!
          </h3>
          { /*<img src={aboutGarden} alt='gardening' className="about-head-img"/>*/}
        </header>
        <main className="about-main">
          <p className="about-para1">
            Thankyou for taking the time to explore this page.
          </p>
          <p className="about-para2">
            Here at The Home Garden, I aim to provide you with the confidence and inspiration to create your very own edible garden.
          </p>
          <p className="about-para3">
            On this page you will find fuss-free, easy to read guides on how to create and maintain your edible garden, everything from preparing your soil to harvesting your food.
          </p>
          <p className="about-para4">
            In addition, there are over 100 growing guides on an extensive range of fruits, vegetables and herbs. I have worked hard to ensure that these growing guides are comprehensive, yet succinct and easy to follow. There is something for everyone, no matter the size or location of your growing space.
          </p>
          <p className="about-para5">
            The ‘Kitchen and Garden’ section is updated weekly and features interesting garden hacks and advice, as well as creative ways to prepare your produce.
          </p>
          <p className="about-para6">
            The Pest, Disease & Beneficial Insects guides are effective tools to help you troubleshoot issues as they arise.
          </p>
          <p className="about-para7">
            If you’ve read the guides and still have some unanswered questions or find yourself needing a little guidance along the way, the handy ‘Ask a Question’ feature is here to help. I will do my very best to address any of your queries or concerns.
          </p>
          <p className="about-para8">
            Everyone should have the opportunity to grow food, even if it’s something as small as harvesting a sprig of parsley from your very own garden to bring to your table.
          </p>
          <p className="about-para9">
            I hope that you enjoy this website and look forward to helping you grow your love for gardening!
          </p>
          <h3 className="about-main-foot">
            Kabilan, at The Little Garden!
          </h3>
        </main>
      </div>
    </>
  )
}

export default About;