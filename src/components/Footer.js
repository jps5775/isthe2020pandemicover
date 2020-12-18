import React from "react";
import { AiFillHeart } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="text-center small">
              <p style={{ margin: "5px" }}>
                Crafted with <AiFillHeart color="red" /> in Philadelphia, PA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
