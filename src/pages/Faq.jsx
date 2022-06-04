import React from "react";
import useCollapse from 'react-collapsed';

export default function FaqUser() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <div className="container mt-5 pt-5" id="fq">
        <div className="row">
            <div className="col-md-6">
                <h4 className="font-weight-bold">
                    Frequently Asked Question
                </h4>

                <p className="mt-3 custom-user-font custom-color-user">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
            </div>
            <div className="col-md-6">
                <div id="accordion">
                    <div className="card mb-3">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button className="btn btn-light w-100" {...getToggleProps()}>
                                <span className="float-left custom-user-font">
                                  {isExpanded ? "Apa saja syarat yang dibutuhkan?" : "Apa saja syarat yang dibutuhkan?"}
                                </span> 
                                <span className="float-right"><img src={require("../images/fi_chevron-down.png")} alt="Down"/></span>
                            </button>
                          </h5>
                        </div>
                        <div {...getCollapseProps()}>
                          <div className="card-body custom-user-font">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.
                          </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button className="btn btn-light w-100" {...getToggleProps()}>
                            <span className="float-left custom-user-font">
                            {isExpanded ? "Berapa hari minimal sewa mobil lepas kunci?" : "Berapa hari minimal sewa mobil lepas kunci?"}
                            </span>
                            <span className="float-right"><img src={require("../images/fi_chevron-down-1.png")} alt="Down"/></span>
                          </button>
                        </h5>
                      </div>
                      <div {...getCollapseProps()}>
                        <div className="card-body custom-user-font">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button className="btn btn-light w-100" {...getToggleProps()}>
                            <span className="float-left custom-user-font">
                            {isExpanded ? "Berapa hari sebelumnya sabaiknya booking sewa mobil?" : "Berapa hari sebelumnya sabaiknya booking sewa mobil?"}
                            </span>
                            <span className="float-right"><img src={require("../images/fi_chevron-down-2.png")} alt="Down"/></span>
                          </button>
                        </h5>
                      </div>
                      <div {...getCollapseProps()}>
                        <div className="card-body custom-user-font">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, hic!
                        </div>
                      </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button className="btn btn-light w-100" {...getToggleProps()}>
                                <span className="float-left custom-user-font">
                                {isExpanded ? "Apakah Ada biaya antar-jemput?" : "Apakah Ada biaya antar-jemput?"}
                                </span>
                                <span className="float-right"><img src={require("../images/fi_chevron-down-3.png")} alt="Down"/></span>
                            </button>
                          </h5>
                        </div>
                        <div {...getCollapseProps()}>
                          <div className="card-body custom-user-font">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.
                          </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-header" id="headingOne">
                          <h5 className="mb-0">
                            <button className="btn btn-light w-100" {...getToggleProps()}>
                                <span className="float-left custom-user-font">
                                {isExpanded ? "Bagaimana jika terjadi kecelakaan?" : " Bagaimana jika terjadi kecelakaan?"}
                                </span>
                                <span className="float-right"><img src={require("../images/fi_chevron-down-4.png")} alt="Down"/></span>
                            </button>
                          </h5>
                        </div>
                        <div {...getCollapseProps()}>
                          <div className="card-body custom-user-font">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, asperiores.
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
