import React from 'react'
import "../../assets/css/Seasoncrop.css"
import cool from "../../assets/img/cool.png"
import warm from "../../assets/img/warm.png"
import herb from "../../assets/img/herb.png"
import weed from "../../assets/img/EdibleWeeds.png"
import flower from "../../assets/img/EdibleFlowers.png"

function Seasoncrop() {
  return (
    <>
      <div className="crop-container">
        <div className="crop-head">
            <h3 className="crop-info">plant Chart</h3>
            <h3 className="crop-info1">The poster that may used plant the seed according to the season and the types that the want to plant</h3>
          <div className="crop-head-grid">
                <div className="crop-image">
                    <img src={cool} alt='Cool Season Plant'/>
                </div>
                <div className="crop-image">
                    <img src={warm} alt='warm Season Plant'/>
                </div>
                <div className="crop-image">
                    <img src={herb} alt="Herb Plant"/>
                </div>
                <div className="crop-image">
                    <img src={weed} alt="Edible Weed"/>
                </div>
                <div className="crop-image">
                    <img src={flower} alt="Edible Flower"/>
                </div>
            </div>
            </div>
      </div>
    </>
  )
}

export default Seasoncrop;