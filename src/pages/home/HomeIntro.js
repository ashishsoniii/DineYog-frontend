import React from "react";
import "./HomeIntro.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-intro">
      {/* badge */}
      <div className="badge">
        <div className="badge-btn">Analysis</div>
      </div>
      {/* text */}

      <div className="home-textt">Powered By YogLabs</div>
      <div className="arrange-this-item">
        <div className="home-sub-small-textt">
          Analyse the Food Data with Power of DineYog's Algo! & Sell what
          customer want!
        </div>
      </div>
      <div className="home-textt-small-small-blured">
        Unveiling the All-Time Best Seller - Pizza!
      </div>

      <div className="cardssss">
        {/* card1  */}
        <div className="card1">
          <div className="card1-text">
            <div className="card1-text1">Matrix plot</div>
            <div className="card1-text2">
              Embark on a flavorful journey with a 17-category matrix plot,
              unearthing dining insights for both dine-in and dine-out
              experiences in this captivating food data analysis exploration.
            </div>
            <div className="btn-btn">
              <Link to="/matrix">
                <div className="btn-text">Explore</div>
              </Link>
            </div>
          </div>
        </div>

        {/* /card 2 */}
        {/* /card 2 */}
        {/* /card 2 */}
        {/* /card 2 */}
        <div className="card2">
          <div className="card1-text">
            <div className="card1-text1">Non Temporal</div>
            <div className="card1-text2">
              Experience a non-temporal analysis exploring profit vs. sales,
              dine-in vs. dine-out, and categorized item names, unveiling
              valuable insights into food categories and dining trends.
            </div>
            <div className="btn-btn">
              <Link to="/nonTemporal">
                <div className="btn-text">Explore</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <br />

      {/* card line2222222222222222222 */}
      {/* card line2222222222222222222 */}
      {/* card line2222222222222222222 */}
      {/* card line2222222222222222222 */}
      {/* card line2222222222222222222 */}

      <div className="cardssss">
        {/* card1  */}
        <div className="card2">
          <div className="card1-text">
            <div className="card1-text1">Temporal</div>
            <div className="card1-text2">
              Uncover the power of temporal analysis, an extension of
              non-temporal, delving into profit vs. sales, dine-in vs. dine-out,
              and categorized item names, showcasing data on a weekly, monthly,
              and daily basis.
            </div>
            <div className="btn-btn">
              <Link to="/nonTemporal">
                <div className="btn-text">Explore</div>
              </Link>
            </div>
          </div>
        </div>

        {/* /card 2 */}
        {/* /card 2 */}
        {/* /card 2 */}
        {/* /card 2 */}
        <div className="card1">
          <div className="card1-text">
            <div className="card1-text1">FPM</div>
            <div className="card1-text2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A et
              consequuntur omnis deleniti similique numquam. Ullam porro magni
              cumque incidunt.
            </div>
            <div className="btn-btn">
              <Link to="/FPM">
                <div className="btn-text">Explore</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cardssss">
        {/* card1  */}
        <div className="card2">
          <div className="card1-text">
            <div className="card1-text1">forcast Data</div>
            <div className="card1-text2">
              Uncover the power of temporal analysis, an extension of
              non-temporal, delving into profit vs. sales, dine-in vs. dine-out,
              and categorized item names, showcasing data on a weekly, monthly,
              and daily basis.
            </div>
            <div className="btn-btn">
              <Link to="/forcast">
                <div className="btn-text">Explore</div>
              </Link>
            </div>
          </div>
        </div>

        {/* /card 2 */}
        {/* /card 2 */}
        {/* /card 2 */}
        {/* /card 2 */}
      </div>

      {/* edcm */}
    </div>
  );
}

export default Home;
