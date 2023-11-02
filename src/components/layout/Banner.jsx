import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../../pages/Home/Featureproduct.css";
import "../../pages/Home/Home.css";
const Banner = () => {
  return (
    <>
      <div className="container" style={{marginTop:"25px"}}>
        <div class="gallery">
          <div style={{ position: "relative", cursor: "pointer", height:"400px" }}>
            <Link to="/product/63e44c993b623af4c66b1862">
              <img
                style={{ position: "absolute" }}
                src="/assets/banner/2583118798827a98990b096141eca9cd.jpg"
                alt=""
                height="100%"
                width="100%"
              />
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Banner;
