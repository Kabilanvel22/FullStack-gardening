import React, { useEffect, useState } from 'react'
import "../../assets/css/Privacy.css"
import homeimage2 from "../../assets/img/carousel-2.jpg";

function Term() {

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
          <img src={homeimage2} alt='gardening' className="privacy-head-img" />
        </header>
        <main className="privacy-main">
          <div className="privacy-container">
            <div className="privacy-header">
              <div className="prvivacy-all">
                <div className="privact-info1">
                </div>
                <div className="privacy-info-text1">
                  <h1 className="privacy-header">
                    The Little Garden Terms And Condition
                  </h1>
                  <p className="privacy-para">
                    Welcome to LittleGarden, a platform dedicated to helping users grow and maintain beautiful gardens at home. By using this application, you agree to comply with the following terms and conditions:
                  </p>
                  <h3 className="privacy-header-sub">
                    Acceptance of Terms
                  </h3>
                  <p className="privacy-para">
                    By accessing or using LittleGarden, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. If you do not agree with any part of these terms, you may not use the application.
                  </p>
                  <h3 className="privacy-header-sub">
                    User Accounts
                  </h3>
                  <p className="privacy-para">
                    Registration: To access certain features of LittleGarden, you may need to create a user account. You agree to provide accurate and complete information during the registration process.

                    Security: You are responsible for maintaining the confidentiality of your account login information. You are also responsible for all activities that occur under your account.
                  </p>
                  <h3 className="privacy-header-sub">
                    Content and User Conduct
                  </h3>
                  <p className="privacy-para">
                    User-Generated Content: Users may contribute content such as images, text, or other materials. You retain ownership of your content, but by posting it, you grant LittleGarden a non-exclusive, royalty-free, worldwide, perpetual license to use, modify, and distribute your content.
                    Prohibited Content: You may not post content that is offensive, illegal, infringing on intellectual property rights, or violates the rights of others
                  </p>
                  <h3 className="privacy-header-sub">
                    <h3 className="privacy-header-sub">
                      How Do We Use Your Personal Information?
                    </h3>
                  </h3>
                  <p className="privacy-para">
                    Ownership: LittleGarden and its original content, features, and functionality are owned by [Your Company Name] and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    Use License: You may use LittleGarden for your personal, non-commercial use. You may not modify, reproduce, distribute, display, or create derivative works based on any portion of the application.
                  </p>
                </div>
                <div className="privact-info1">
                </div>
                <div className="privacy-info-text1">
                  <h3 className="privacy-header-sub">
                    Disclaimer of Warranties
                  </h3>
                  <p className="privacy-para">
                    LittleGarden is provided "as is" and without warranties of any kind, either expressed or implied.
                  </p>
                  <h3 className="privacy-header-sub">
                    Limitation of Liability
                  </h3>
                  <p className="privacy-para">
                    In no event shall LittleGarden or its affiliates be liable for any indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of this application.
                  </p>
                  <h3 className="privacy-header-sub">
                    Termination
                  </h3>
                  <p className="privacy-para">
                    LittleGarden may terminate or suspend your access to the application immediately, without prior notice or liability, for any reason whatsoever.
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

export default Term;