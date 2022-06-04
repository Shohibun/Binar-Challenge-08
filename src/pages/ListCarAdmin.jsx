/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faKey,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import img from "../images/Infinity-1s-200px.svg";
import ModalImage from "react-modal-image";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

export default function ListCar() {
  const [dataMobilAdmin, setDataMobilAdmin] = useState([]);
  const [loading, setLoading] = useState(false);
  const alert = useLocation();
  console.log("alert:", alert.state)

  const history = createHistory();
  if (
    history.location?.state?.status
  ) {
    const state = { ...history.location.state };
    delete state.status;
    history.replace({ ...history.location, state });
  }

  const getData = async () => {
    setLoading(true);

    const responds = await Axios.get(
      "https://rent-cars-api.herokuapp.com/admin/car"
    ).catch((err) => {
      console.log(err);
    });

    setDataMobilAdmin(responds.data);
    setLoading(false);
  };

  useEffect(() => {
    window.scroll(0, 0);
    getData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <p className="text-dark custom-font-1">
            <span className="font-weight-bold text-dark">Cars &gt; </span>List
            Car
          </p>
        </div>
      </div>

      {
        alert?.state?.status ? <div className="mx-auto bg-success text-center text-white py-2 border rounded w-25">Data Berhasil Disimpan</div> : ""
      }
      
      <div className="d-flex justify-content-between">
        <h6 className="font-weight-bold custom-font-2">List Car</h6>
        <Link className="btn text-white custom-add" to="/add-new-car-admin">
          + &nbsp; Add New Car
        </Link>
      </div>

      <div className="d-flex justify-content-start mb-4 mt-2">
        <button className="btn custom-btn-car custom-btn-car-active mr-2">
          All
        </button>
        <button className="btn custom-btn-car mr-2">Small</button>
        <button className="btn custom-btn-car mr-2">Medium</button>
        <button className="btn custom-btn-car mr-2">Large</button>
      </div>

      {loading === true ? (
        <>
          <div className="text-center">
            <img src={img} alt="" srcset="" />
            Loading
          </div>
        </>
      ) : (
        <>
          <div className="row">
            {dataMobilAdmin?.map((data) => {
              return (
                <div className="col-md-4">
                  <div className="card p-3 mb-4">
                    <ModalImage
                      small={`${data.image}`}
                      large={`${data.image}`}
                      className="card-img-top"
                      alt="Mobil"
                    />
                    <div className="card-body">
                      <p className="card-text custom-font-3">{data.name}</p>
                      <p className="card-text font-weight-bold text-dark">
                        {" "}
                        Rp {data.price} / hari
                      </p>
                      <p className="card-text custom-font-4">
                        <span>
                          <FontAwesomeIcon
                            icon={faKey}
                            className="custom-size-aweseome"
                          />
                        </span>
                        &nbsp;Start rent - Finish rent
                      </p>
                      <p className="card-text custom-font-4">
                        <span>
                          <FontAwesomeIcon
                            icon={faClock}
                            className="custom-size-aweseome"
                          />
                        </span>
                        &nbsp;Updated at 4 Apr 2022, 09.00
                      </p>
                      <div className="row">
                        <div className="col-6">
                          <span>
                            <a
                              href="#"
                              className="btn btn-outline-danger custom-font-4 w-100 py-2"
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="custom-size-aweseome"
                              />
                              &nbsp;Delete
                            </a>
                          </span>
                        </div>
                        <div className="col-6">
                          <span>
                            <a
                              href="#"
                              className="btn btn-success custom-font-4 w-100 py-2"
                            >
                              <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="custom-size-aweseome"
                              />
                              &nbsp;Edit
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
