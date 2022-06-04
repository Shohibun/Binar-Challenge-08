/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import OwlCarousel from "react-owl-carousel";

export default function TestimonialUser() {
  return (
    <div className="container-fluid mt-5 pt-5 mb-5 pb-4" id="test">
      <h4 className="font-weight-bold text-center">Testimonial</h4>

      <p className="text-center py-2 custom-user-font custom-color-user">
        Berbagai review positif dari para pelanggan kami
      </p>

      <OwlCarousel margin={5} loop nav>
          <div className="">
            <div className="row py-5 m-2 custom-user-testi">
              <div className="col-3 mt-4 pt-2">
                <img
                  className="w-75"
                  src={require("../images/img_photo-1.png")}
                  alt="Photo"
                />
              </div>

              <div className="col-9">
                <span>
                  <img
                    src={require("../images/Star 1.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 2.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 3.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 4.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 5.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                </span>

                <p className="custom-user-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  cum repellat nesciunt provident pariatur quibusdam at
                  voluptatem ad perspiciatis magni enim mollitia, tempore
                  eligendi omnis amet doloremque dolores exercitationem ullam!
                </p>

                <p className="font-weight-bold custom-user-font">
                  John Dee 32, Bromo
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="row py-5 m-2 custom-user-testi">
              <div className="col-3 mt-4 pt-2">
                <img
                  className="w-75"
                  src={require("../images/img_photo-2.png")}
                  alt="Photo"
                />
              </div>

              <div className="col-9">
                <span>
                  <img
                    src={require("../images/Star 1.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 2.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 3.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 4.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 5.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                </span>

                <p className="custom-user-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  cum repellat nesciunt provident pariatur quibusdam at
                  voluptatem ad perspiciatis magni enim mollitia, tempore
                  eligendi omnis amet doloremque dolores exercitationem ullam!
                </p>

                <p className="font-weight-bold custom-user-font">
                  John Dee 32, Bromo
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="row py-5 m-2 custom-user-testi">
              <div className="col-3 mt-4 pt-2">
                <img
                  className="w-75"
                  src={require("../images/img_photo-1.png")}
                  alt="Photo"
                />
              </div>

              <div className="col-9">
                <span>
                  <img
                    src={require("../images/Star 1.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 2.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 3.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 4.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                  <img
                    src={require("../images/Star 5.png")}
                    alt="Bintang"
                    className="d-inline-block pb-2 custom-user-star"
                  />
                </span>

                <p className="custom-user-font">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                  cum repellat nesciunt provident pariatur quibusdam at
                  voluptatem ad perspiciatis magni enim mollitia, tempore
                  eligendi omnis amet doloremque dolores exercitationem ullam!
                </p>

                <p className="font-weight-bold custom-user-font">
                  John Dee 32, Bromo
                </p>
              </div>
            </div>
          </div>
      </OwlCarousel>
    </div>
  );
}
