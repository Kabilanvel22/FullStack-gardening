import React from 'react'
import homeimg from "../../assets/img/homes.jpg"
import "../../assets/css/Disclaimer.css"

function Disclaimer() {
  return (
    <>
      <div className="disclaim-container">
         <div className="disclaim-header">
             <img src={homeimg} alt='homeGarden' className="disclaim-img"/>
         </div>
         <div className="disclaim-info">
         <div className="disclaim-heinfo">
           <h3 className="disclaim-head">Disclaimer</h3>
           <p className="disclaim-para">
           The Little Garden Au reserves the right not to be held responsible for the topicality, correctness, completeness or quality of the information provided. Furthermore, the author is not liable for postings or messages published by users on discussion boards, forums or mail lists, and reserves the right to delete any material deemed inappropriate.
           </p>
           <p className="disclaim-para">
           By the use of this website and dealings with The Little Garden Au, you agree to indemnify The Little Garden Au and employees, directors and suppliers associated with The Little Garden Au, against all claims, losses expenses, damages and costs arising from the supply of goods, services or use of this website.
           </p>
           <p className="disclaim-para">
           The Little Garden Au does not warrant the accuracy or completeness of information and images provided, despite every reasonable attempt to do so.
           </p>
           </div>
         </div>
      </div>
    </>
  )
}

export default Disclaimer