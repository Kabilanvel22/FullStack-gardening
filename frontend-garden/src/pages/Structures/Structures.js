import React from 'react'
import design1 from "../../assets/img/design1.jpg"
import design2 from "../../assets/img/design2.jpg"
import design3 from "../../assets/img/design3.jpg"
import design4 from "../../assets/img/design4.jpg"
import design5 from "../../assets/img/sign5.jpg"
import design6 from "../../assets/img/design6.jpg"
import design7 from "../../assets/img/sign7.jpg"
import design8 from "../../assets/img/design8.jpg"
import "../../assets/css/Structure.css"
import { useNavigate } from 'react-router-dom'

function Structures() {
  const nav = useNavigate();
  const handledesign = () => {
    nav("/visualise");
  }
  return (
    <>
      <div className="design-container">
        <div className="design-top-half">
          <section className="design-head">
            <div className="design-img-container">
              <div className="design-head-info">
                <h3 className="design-body-info">
                  Building an Edible Garden
                </h3>
              </div>
              <div className="design-body-para">
                <p className="design-plant-info">
                  Building a garden is a very rewarding experience and edible gardens in particular are a point of pride to most gardeners. Edible gardens can be designed to suit any style or ability and should always be designed in a way that is practical for the users.
                </p>
                <p className="design-plant-info">
                  If you are new to vegetable gardening, start small and focus on growing a handful of crops. Visit our 'Growing Guides' and select the 'Easy To Grow' option for more information. A small raised bed is the perfect way to get started as it is easy to set up and maintain. Most raised beds can be purchased from your local hardware store or nursery and come in flat packs, with pieces that slot together without the use of any tools.
                </p>
                <p className="design-plant-info">
                  Once you have the hang of gardening, you can expand your growing space by adding more raised beds or by starting an in-ground garden. If you have a small space to work with, then try container gardening, see our 'Small Scale Gardening' blog in the 'Kitchen & Garden' section for more information.
                </p>
                <p className="design-plant-info">
                  Site selection is another important consideration as most edible crops require a minimum of six to eight hours of sunlight each day in order to crop well. A full sun position is particularly important for fruiting crops such as eggplant, tomatoes, cucumbers, peppers and squash varieties. If your garden is on the shady side, there is still plenty you can grow including a large range of herbs and leafy greens! Visit our 'Growing Guides' and select the 'Shade Tolerant' option for more information.
                </p>
              </div>
            </div>
          </section>
          <section className="design-head-image">
            <div className="design-plant-img">
              <div className="design-img1">
                <img src={design1} alt='gardenDesign' className="design-img1-photo" />
              </div>
              <div className="design-img1">
                <img src={design2} alt='gardenDesign' className="design-img1-photo" />
              </div>
              <div className="design-img1">
                <img src={design3} alt='gardenDesign' className="design-img1-photo" />
              </div>
              <div className="design-img1">
                <img src={design4} alt='gardenDesign' className="design-img1-photo" />
              </div>
            </div>
          </section>
        </div>
        <div className="design-bottom-half">
          <section className="design-head">
            <div className="design-head-info">
              <h3 className="design-body-info1">
                Utilising Your Space
              </h3>
            </div>
            <div className="design-body-para">
              <p className="design-plant-info">
                Vertical gardening is a great way of utilising valuable growing space. Pumpkins, Melons, Gourds, Passion Fruit, Peas, Beans, Cucumbers, Indeterminate Tomato varieties and more, can be trained up a trellis or archway. Vertical gardening not only increases crop production but makes for a stunning feature in your garden, adding height and dimension to the space.
              </p>
              <p className="design-plant-info">
                If you have a small growing space, look for crops that offer repeat harvests and high yields for the amount of space required. Zucchini, Chard, Kale and Eggplant are heavy croppers that require very little space and are perfect for container gardening.
              </p>
              <p className="design-plant-info">
                Herbs and lettuces are also great crops to have around as they are used frequently in the kitchen. Think of all the recipes that require a little pinch of a herb that you don't always have on hand, or how many times you have wanted to make a side salad, but didn't have any lettuce. As these crops are used often, it's a good idea to strategically place them close to your kitchen for convenient access. Lighting is also a great feature in an edible garden as it makes for convenient late night dinner harvests.
              </p>
              <h3 className="design-plant-info1">
                Happy Gardening!
              </h3>
              <h3 className="design-virtual">Design the Garden By Own<span onClick={handledesign}>Click Here...</span></h3>
            </div>
          </section>
          <section className="design-head-img">
            <div className="design-plant-img">
              <div className="design-img2">
                <img src={design5} alt='gardenDesign' className="design-img2-photo" />
              </div>
              <div className="design-img2">
                <img src={design6} alt='gardenDesign' className="design-img2-photo" />
              </div>
              <div className="design-img2">
                <img src={design7} alt='gardenDesign' className="design-img2-photo" />
              </div>
              <div className="design-img2">
                <img src={design8} alt='gardenDesign' className="design-img2-photo" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default Structures


