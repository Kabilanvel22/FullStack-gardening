import React, { useEffect, useState } from 'react'
import "../../assets/css/Privacy.css"
import NavBar from '../NavBar/NavBar';
import privacyGarden from "../../assets/img/about-img.png"
import homecome from "../../assets/img/homegar.png"
import Footer from '../Footer/Footer';

function Privacy() {

  const [scrollPosition, setScrollPosition] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const rotateX = scrollPosition * 0.1; // Adjust multiplier to control rotation
  const opacity = 1 - (scrollPosition * 0.001);

  const parallaxStyle = {
    transform: `perspective(1000px) rotateX(${rotateX}deg)`,
    opacity: opacity
  };

  return (
    <>
      <div className="privacy-container">
        <header className="privacy-head" style={parallaxStyle}>
          <h3 className="privacy-head-info">

          </h3>
          <img src={privacyGarden} alt='gardening' className="privacy-head-img" />
        </header>
        <main className="privacy-main">
          <div className="privacy-container">
            <div className="privacy-header">
              <div className="prvivacy-all">
                <div className="privact-info1">
                </div>
                <div className="privacy-info-text1">
                  <h1 className="privacy-header">
                    The Little Garden Privacy Policy
                  </h1>
                  <p className="privacy-para">
                    The Home Garden Au is committed to protecting your privacy while interacting with our content, products and services. This policy is limited to The Home Garden Au and not to third parties that may share this content.
                  </p>
                  <p className="privacy-para">
                    When you visit the Site, we automatically collect certain information privacy your device, including information privacy your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information privacy the internal pages that you view, what websites or search terms referred you to the Site, and information privacy how you interact with the Site. We refer to this automatically-collected information as “Device Information.”
                  </p>
                  <p className="privacy-para">
                    We collect Device Information using the following technologies:
                  </p>
                  <p className="privacy-para">
                    - “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier.
                  </p>
                  <p className="privacy-para">
                    -“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                  </p>
                  <p className="privacy-para">
                    - “Web beacons,” “tags,” and “pixels” are electronic files used to record information privacy how you browse the Site.
                  </p>
                  <p className="privacy-para">
                    Additionally when you make a purchase or attempt to make a purchase through the Site, we may collect certain information from you, including your name, billing address, shipping address, payment information, email address, and phone number. We refer to this information as “Order Information.”
                  </p>
                  <p className="privacy-para">
                    When we talk privacy “Personal Information” in this Privacy Policy, we are talking both privacy Device Information and Order Information.
                  </p>
                </div>
                <div className="privact-info1">
                </div>
                <div className="privacy-info-text1">
                  <h3 className="privacy-header-sub">
                    How Do We Use Your Personal Information?
                  </h3>
                  <p className="privacy-para">
                    We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
                  </p>
                  <p className="privacy-para">
                    Additionally, we use this Order Information to communicate with you; Screen our orders for potential risk or fraud.
                  </p>
                  <p className="privacy-para">
                    We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics privacy how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
                  </p>
                  <h3 className="privacy-header-sub">
                    Sharing Your Personal Information
                  </h3>
                  <p className="privacy-para">
                    We DO NOT share your Personal Information with third parties.
                  </p>
                  <p className="privacy-para">
                    We use Google Analytics to help us understand how our customers use the Site.
                  </p>
                  <p className="privacy-para">
                    We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.
                  </p>
                  <h3 className="privacy-header-sub">
                    Do Not Track
                  </h3>
                  <p className="privacy-para">
                    Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
                  </p>
                  <h3 className="privacy-header-sub">
                    Your Rights
                  </h3>
                  <p className="privacy-para">
                    You have the right to access personal information we hold privacy you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through our contact information.
                  </p>
                </div>
                <div className="privact-info1">
                </div>
                <div className="privacy-info-text1">
                  <h3 className="privacy-header-sub">
                    Data Retention
                  </h3>
                  <p className="privacy-para">
                    When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
                  </p>
                  <h3 className="privacy-header-sub">
                    Changes
                  </h3>
                  <p className="privacy-para">
                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                  </p>
                  <h3 className="privacy-header-sub">
                    Contact Us
                  </h3>
                  <p className="privacy-para">
                    For more information privacy our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@thehomegarden.com.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Privacy;