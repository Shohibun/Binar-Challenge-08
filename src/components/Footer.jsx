import React from "react";

export default function FooterUser() {
  return (
    <div className="container mt-5 pt-5 pb-5 mb-3">
      <div className="row custom-user-font">
        <div className="col-md-4">
          <p className="custom-color-user">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>

          <p className="custom-color-user">binarcarrental@gmail.com</p>

          <p className="custom-color-user">081-233-334-808</p>
        </div>

        <div className="col-md-2">
          <p className="custom-color-user">Our services</p>

          <p className="custom-color-user">Why Us</p>

          <p className="custom-color-user">Testimonial</p>

          <p className="custom-color-user">FAQ</p>
        </div>

        <div className="col-md-3">
          <p className="custom-color-user">Connect with us</p>

          <span>
            <img
              className="pr-2 custom-user-gap"
              src={require("../images/icon_facebook.png")}
              alt="Facebook"
            />
            <img
              className="pr-2 custom-user-gap"
              src={require("../images/icon_instagram.png")}
              alt="Instagram"
            />
            <img
              className="pr-2 custom-user-gap"
              src={require("../images/icon_twitter.png")}
              alt="Twitter"
            />
            <img
              className="pr-2 custom-user-gap"
              src={require("../images/icon_twitter.png")}
              alt="Email"
            />
            <img
              className="pr-2 custom-user-gap"
              src={require("../images/icon_twitch.png")}
              alt="Twitch"
            />
          </span>
        </div>

        <div className="col-md-3">
          <p className="custom-color-user">Copyright Binar 2022</p>

          <p className="custom-user-logo"></p>
        </div>
      </div>
    </div>
  );
}
