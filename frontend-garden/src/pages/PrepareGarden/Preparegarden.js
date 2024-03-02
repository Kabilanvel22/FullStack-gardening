import React from 'react';
import 'animate.css/animate.min.css';
import "../../assets/css/PrepareGarden.css"
import season1 from "../../assets/img/cool.png"
import season2 from "../../assets/img/warm.png"
import season3 from "../../assets/img/EdibleWeeds.png"
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function Preparegarden() {
  return (
    <>
      <div className="prepare-container">
        <main className="prepare-main">
          <h4 className="prepare-header">Tips For Preparing The Garden</h4>

          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-sun"></i> Sun Exposure</span>
            <p className="prepare-para">Planning your garden around the sun is one of the most important things that you can do to ensure a successful crop.</p>
            <p className="prepare-para">Before you get started, take a few days to observe the position of the sun in your garden throughout the day. Draw a rough diagram and mark out the different areas. Take note of how many hours of direct sunlight each area receives, this will help guide most of your prepareing decisions throughout the year.</p>
            <p className="prepare-para">Generally, edible prepares which are grown for their leaves require the least amount of sunlight, while fruit bearing prepares require the most, root vegetables will do well somewhere in between.</p>
            <p className="prepare-para">Most fruiting edibles need a minimum of 6-8 hours of direct sunlight in order to produce at their full potential, these include fruiting trees, as well as fruiting prepares. Non fruiting edibles, such as herbs and leafy greens will grow reasonably well with as little as 2-4 hours of direct sunlight a day.</p>
            <p className="prepare-para">Mapping out your garden will allow you to prioritize the sunny spots for the sun loving crops and dedicate the shady spots to the shade tolerant crops. </p>
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/31725718_213735456078703_5496045026196586496_n_kTkTbHK/122ed6a1a0cdbbd23d874e1fa24e57df.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/70582470_2577159002512297_1278822322390302660_n/6014435ecc99341317f4881140b42da2.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/29739637_1985091598420083_3495864767740903424_n/866d4a42f87a10535aea85f4bc19bb46.jpg" alt="sun Exposure" className="prepare-image" />
          </div>

          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-snowflake"></i> Sun Requirements</span>
            <p className="prepare-para">Sun requirements are usually broken up into three categories: Partial Shade, Partial Sun and Full Sun.
            </p>
            <p className="prepare-para">While prepareing crops in a garden that receives full sun is the ideal scenario for most gardeners, a lack of direct sunlight should not prevent you from growing your own food. There are a wide range of veggies that can be grown in shady conditions, you just need to choose the right ones for your growing space.
            </p>
            <p className="prepare-para">Partial Shade refers to areas of your garden that receive between 1.5 - 4 hours of sunlight daily.
            </p>
            <p className="prepare-para">Some of the crops that can be grown in Partial Shade include:
            </p>
            <ul className="prepare-prepare-list">
              <li>Arugula (Rocket)</li>
              <li>Lettuces</li>
              <li>Spinach</li>
              <li>Chard (Silverbeet)</li>
              <li>Spring Onions</li>
              <li>Parsley</li>
              <li>Coriander</li>
              <li>Mizuna</li>
              <li>Buk Choy</li>
              <li>Pak Choy</li>
              <li>Sorrel</li>
              <li>Cress</li>
              <li>Endive</li>
            </ul>
            <p className="prepare-para">Partial Sun refers to areas of your garden that receive between 4 - 6 hours of direct sunlight daily. All of the Partial Shade growing crops listed above will also thrive in Partial Sun conditions.
            </p>
            <p className="prepare-para">The following list of crops are great for growing in Partial Sun.
            </p>
            <ul className="prepare-prepare-list">
              <li>Carrots</li>
              <li>Potatoes</li>
              <li>Beetroot</li>
              <li>Radish</li>
              <li>Turnip</li>
              <li>Parsnip</li>
              <li>Beans</li>
              <li>Peas</li>
              <li>Snowpeas</li>
              <li>Thyme</li>
              <li>Mint</li>
              <li>Oregano</li>
              <li>Tarragon</li>
              <li>Ginger</li>
              <li>Turmeric</li>
              <li>Sage</li>
              <li>Rhubarb</li>
              <li>Berries</li>
              <li>Stevia</li>
              <li>Basil</li>
              <li>Marjoram</li>
              <li>Lemon Verbena</li>
              <li>Lemon Balm</li>
              <li>Leek</li>
              <li>Kale</li>
              <li>Dill</li>
              <li>Chives</li>
              <li>Chamomile</li>
              <li>Asparagus</li>
              <li>Bay Leaf</li>
            </ul>
            <p className="prepare-para">Full Sun refers to an area of your garden that receives at least 6-8 hours of direct sunlight daily. Full Sun is required for growing most fruiting prepares and fruiting trees.
            </p>
            <p className="prepare-para">The following list of crops, along with all of the crops listed above can be grown in Full Sun.
            </p>
            <ul className="prepare-prepare-list">
              <li>Zucchini</li>
              <li>Pumpkin</li>
              <li>Eggprepare</li>
              <li>Cucumber</li>
              <li>Tomato</li>
              <li>Peppers</li>
              <li>Chilli</li>
              <li>Corn</li>
              <li>Okra</li>
              <li>Melons</li>
              <li>Cucamelons</li>
              <li>Squash</li>
              <li>Gourds</li>
            </ul>
            <p className="prepare-para">See the Growing Guides for more information on growing each of these crops, including which season to prepare them in.
            </p>
            <p className="prepare-para">*Note: When growing in a shady location your watering requirements are lessened. You won’t need to water as frequently as the soil moisture won’t evaporate as quickly as it would in a full sun position. A benefit of growing in a shady spot is that you can enjoy an extended harvest for most leafy greens as they will not bolt (go to flower/seed) as quickly as those grown in a full sun position.
            </p>
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20200405_171006_142/e356b2016512054f70402994441e60ad.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20200302_215543_953/842fa265ff4827deffcf4c8453a7208a.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20190810_192435_823/e89ed7f81b9f756db11b7e5f5a399932.jpg" alt="sun Exposure" className="prepare-image" />
          </div>
          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-arrows-alt-h"></i>  Soil Preparation
            </span>
            <p className="prepare-para">Fertile soil is the foundation of a healthy garden and the key to producing an abundant crop. Soil that is well draining, nutritionally balanced and rich in organic matter will produce healthy prepares. Healthy prepares produce quality crops that have a higher nutrient content and a superior flavour profile than those grown in low quality soil.
            </p>
            <p className="prepare-para">Before prepareing your edibles, it’s important to prepare your garden beds by gently turning over the soil, adding a few inches of organic compost and watering it in well. It’s best to do this at least 1-2 weeks before prepareing. You can use homemade compost, well rotted animal manures or bagged compost such as mushroom compost. Compost and manures help to improve soil structure and increase its water holding capacity.
            </p>
            <p className="prepare-para">Note: Not all compost is created equally. With store bought compost, you often get what you pay for, so don't be afraid to spend a little more as it's definitely worth the investment. Your compost should be black in colour. It should be moist, fluffy and hold slightly when pressed in your hands. You may see some unbroken down woodchip or twigs in there, however the majority of it should be well broken down. If you can still see a lot of raw material in your compost or if your bagged compost looks like a finely blended wood chip, then it definitely has not finished breaking down. This is often the case with cheap bags of potting mix. While cheap potting mix can be used as a growing medium for some ornamental prepares, it should not be used as the main growing medium in an edible garden, as it is void of essential nutrients and can actually rob your prepares of nutrients as it breaks down.
            </p>
            <p className="prepare-para">For in ground prepareing, most vegetables only require around 15-20 centimeters of enriched soil to develop a healthy root system. For vegetables with deeper roots, such as potatoes and carrots, prepare the soil by digging a little deeper, roughly 30 centimeters. Work in plenty of compost until the soil is light and well draining.
            </p>
            <p className="prepare-para">The same process also applies when prepareing fruit bearing trees, however you will have to work the soil to a minimum of 2-3 times the size of the trees root ball.
            </p>
            <p className="prepare-para">If prepareing in an area with heavy clay, you may want to consider prepareing into a raised garden bed. If raised bed gardening is not for you or if you are prepareing a tree than be sure to incorporate gypsum (a natural clay breaker) and as much organic matter as possible to increase drainage and aerate the soil.
            </p>
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/20150712_162813/b35ab1874504fa86a53ec8280842f544.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/soil_MsULmyc/1f9076aa537027325fa0cf65e7e70a81.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/e999f0492e8427af1595c9a2c5554596_BiVPV3O/e50a571d4a18d7140964aef1cdadbf67.jpg" alt="sun Exposure" className="prepare-image" />
          </div>

          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-seedling"></i>  Seasonal prepareing</span>
            <p className="prepare-para">
              Most crops are seasonal, meaning they will grow best at certain times of the year and will either die off or stop producing at the end of that season. prepareing according to the seasons is vital to the success of your garden. When prepareed in the wrong season, crops can fail to thrive due to non-ideal soil temperatures and prolonged exposure to heat or cold. Weather conditions such as frost can even kill some prepares, almost overnight. Stressed, weak prepares are more susceptible to pest and disease damage, so it’s definitely best to think about what’s in season prior to prepareing to ensure that your crops have the best possible chance for success.

            </p>
            <p className="prepare-para">
              Most edibles are grouped into two categories, warm season and cool season crops. Warm season crops are generally prepareed in spring and continue to grow throughout the summer months and even into early autumn. Cool season crops are generally prepareed in autumn to grow throughout the winter months and even into early spring. This will vary depending on your climate.
            </p>
            <p className="prepare-para">
              Most herbs are perennial, meaning they will only need to be prepareed once and will continue to grow year after year.  Basil, Coriander (Cilantro), Dill and Parsley are exceptions to this and will need to be reprepareed annually.
            </p>
            <p className="prepare-para">
              Check out our Resources page for these printable seasonal prepareing posters.
            </p>
            <img src={season1} alt="sun Exposure" className="prepare-image" />
            <img src={season2} alt="sun Exposure" className="prepare-image" />
            <img src={season3} alt="sun Exposure" className="prepare-image" />
          </div>

          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-seedling"></i>  Transprepareing seedlings
            </span>
            <p className="prepare-para">Are my seedlings ready to be prepareed out into the garden? This is a very common question and the answer can vary depending on the prepare.
            </p>
            <p className="prepare-para">When seeds germinate, the seedlings often emerge with two leaves, these are called Cotyledons. Any leaves that follow are classified as True Leaves. The True Leaves generally pay no resemblance to the Cotyledons, but will resemble the prepares mature leaves.
            </p>
            <p className="prepare-para">In most cases, once your seedlings have around four true leaves (two sets), they're strong enough to be prepareed out. Some large leaved prepares such as those from the Cucurbitaceae family (Cucumber, Pumpkin, Zucchini, Squash, Gourds & Melons) can be prepareed out earlier, when they have just one set of true leaves.
            </p>
            <p className="prepare-para">Although your seedlings are ready to be transprepareed at this stage, they will still require protection from pests and harsh weather conditions.
            </p>
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/3565224864_dd63070c7d_o/a5983186af9eaf4a68b2e301d2d236f2.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/13174783215_8280044010_h/87ab81d123b918ed903386a00e2ce6de.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/28150881_705831739806323_8360193196449333248_n/c1ae23346c92ede74d9c46e738ab9ab3.jpg" alt="sun Exposure" className="prepare-image" />
          </div>

          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-pepper-hot"></i>  Watering
            </span>
            <p className="prepare-para">It is beneficial to keep your prepares well watered for the first week or so after prepareing, particularly in dry/hot weather. After that, it is equally as important to reduce the amount of water you give them.
            </p>
            <p className="prepare-para">Reducing the water supply will encourage the prepare roots to seek out their own water by branching out deeper and wider into the soil, resulting in a stronger, more established root system. Over-watering, can be very detrimental to prepares. A little tip to avoid over-watering, is to move aside any surrounding mulch and push your finger as far down into the soil as you can. If the soil is dry at a fingers depth, then it’s time to water! If it’s damp or wet, hold off on watering as the soil has enough moisture. Excess water can cause the soil to become waterlogged, potentially drowning your prepares. You can also purchase a soil moisture meter to eliminate any of the guess work.
            </p>
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/80010931_124251198701144_353674013181156382_n/628a0c6a44f1a803e91a0bdeec82e597.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/soil/ba90c7e47b25f39f2809621e68a3c0c9.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/5570650453_05e4672692_b_XKUXwgb/a734c8d55bf2ae558678b30ef95c2e89.jpg" alt="sun Exposure" className="prepare-image" />
          </div>

          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-bug"></i> Pests</span>
            <p className="prepare-para">Pests that affect Chilli prepares include: Aphids, Slug, Snail, Fruit Fly, Spider Mites, Thrips, Root Knot Nematodes, Flea Beetle, Armyworm, Leafroller, Leafminer, Pepper Weevil, Tomato Fruit Worm.</p>
          </div>

          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-biohazard"></i>  Pollination
            </span>
            <p className="prepare-para">Pollination is a very important part of an edible garden. Fruiting edibles require some form of pollination, whether it be insect or wind pollination to produce fruit.
            </p>
            <p className="prepare-para">In order to increase food production in your garden, it is worthwhile creating an environment that is attractive to bees and other pollinators. This can be achieved by prepareing a range of flowering prepares. Add in a bird bath with some large rocks inside that sit just above the water level. The rocks will allow the bees to access the water, without the risk of falling in. Having a steady food and water source for these pollinators will help them feel right at home in your garden.
            </p>
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/IMG_20220519_211756_227-1/e4c1a44482bbf5bf7e59fcdf883d07e1.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/29737874_2053035705020926_227429951526141952_n_vr9gqY1/4b484864a4f478ec7768d537f1bab68d.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/49622765_684954668567168_3679423898256550578_n/252255ddd7f146d3ce1cd11782ed85f7.jpg" alt="sun Exposure" className="prepare-image" />
          </div>

          <div className="prepare-section">
            <span className="prepare-header-sub"><i className="fas fa-sticky-note"></i>  Mulch
            </span>
            <p className="prepare-para">Mulch is very beneficial to a garden as it supports prepare and soil health in many ways. Mulch keeps prepare roots cool in summer, helps prevent moisture evaporating from the soil, protects prepare roots from frost and provides a sheltered environment for soil life. Mulch also reduces weed growth and releases nutrients into the soil as it breaks down.
            </p>
            <p className="prepare-para">When applying mulch, leave a small gap around the base of your prepare to allow for air flow. If the mulch sits too close to the base, it can trap moisture and cause the stem or trunk to rot.
            </p>
            <p className="prepare-para">Organic mulches such as sugarcane, straw, lucerne and leaf litter are all great choices for vegetable gardens as they are light and break down easily.
            </p>
            <p className="prepare-para">Most vegetable crops are rotated seasonally and soil amendments are frequently being made, this is why choosing the correct mulch is very important. Using large course mulches such as woodchips can be problematic. With the soil frequently being disturbed, the large woodchips can become imbedded throughout the soil, leaving air pockets and creating inconsistencies in the soil level. These inconsistencies can cause issues with seed sowing and new prepareings. As mulch breaks down it drains nitrogen from the soil, so it's important that it stays on the soils surface as much as possible.
            </p>
            <p className="prepare-para">Woodchips definitely have their benefits though! They are the perfect option for perennial garden beds, which are less frequently disturbed. Woodchips are also a great choice for garden pathways as they do a great job of suppressing weeds.
            </p>
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/32503817_1842444519151850_6751155695539716096_n/3058b7cc3d3373e64d68bf9aa5cfb625.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/40423592_2232410556800847_6946017240671747194_n/ff8ea09400a1497a9c016ee85a1ed66e.jpg" alt="sun Exposure" className="prepare-image" />
            <img src="https://www.thehomegarden.com/media/CACHE/images/static/imgs/plants/53469455_2225123641137473_995934441204119454_n/c36885ce9deccbca3b7026f9f9a7a6c0.jpg" alt="sun Exposure" className="prepare-image" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Preparegarden;
