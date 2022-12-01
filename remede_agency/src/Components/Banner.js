import React from "react";

/**
 * Component Banner
 * The banner component is used to display the central image of the home page
 * and its text in absolute position
 */

const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner--txt">
          <h1 className="banner--txt--title">
            No fees. <br />
            No minimum deposit. <br />
            High interest rates
          </h1>
          <p className="banner--txt--content">
            Open a savings account with <br /> Argent Bank today!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
