/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUserGroup,
  faGear,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import img from "../images/Infinity-1s-200px.svg";

export default function HasilPencarian() {
  const [dataMobil, setDataMobil] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  const fetchData = async (tipeParams) => {
    setLoading(true);
    const responds = await axios
      .get("https://rent-cars-api.herokuapp.com/admin/car")
      .catch((err) => {
        console.log(err);
      });
    if (tipeParams == null) {
      setDataMobil(responds.data);
    } else {
      setDataMobil(responds.data.filter((obj) => obj.status === tipeParams));
    }

    setLoading(false);
  };
  const [tipe, setTipe] = useState(null);
  const tipeOnChange = (event) => {
    if (event.target) {
      setTipe(event.target.value);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    //Langsung manggil dataMobil (hal pertama yang dilakukan)
    if (params.tipe === "true") {
      fetchData(true);
    } else if (params.tipe === "false") {
      fetchData(false);
    } else {
      fetchData(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log(dataMobil);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Memanggil fetchData sekali saja
  return (
    <>
      <div className="container custom-box my-4 p-3 m-auto border rounded shadow">
        <div className="row">
          <div className="col-md-10">
            <div className="row align-items-center">
              <div className="col-md-3">
                <p className="custom-fs-p">Tipe Driver</p>
              </div>
              <div className="col-md-3">
                <p className="custom-fs-p">Tanggal</p>
              </div>
              <div className="col-md-3">
                <p className="custom-fs-p">Waktu Jemput/Ambil</p>
              </div>
              <div className="col-md-3">
                <p className="custom-fs-p">Jumlah Penumpang (Optional)</p>
              </div>
              <div className="col-md-3">
                <p className="custom-fs-p"></p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-3">
                <select
                  className="form-select form-control rounded px-2 border clickable"
                  onChange={tipeOnChange}
                  aria-label="Default select example"
                >
                  <option defaultValue={{ value: "null" }}>Pilih Tipe Driver</option>
                  <option value="true" className="text-muted">
                    Dengan Sopir
                  </option>
                  <option value="false" className="text-muted">
                    Tanpa Sopir (Lepas Kunci)
                  </option>
                </select>
              </div>
              <div className="col-md-3">
                <div className="inner-addon left-addon">
                  <input
                    type="date"
                    className="form-control px-2 clickable"
                    placeholder="Pilih Tanggal"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <select className="form-control rounded px-2 border custom clickable">
                  <option defaultValue={{ value: "1" }} className="text-muted">
                    08.00 WIB
                  </option>
                  <option value="2" className="text-muted">
                    09.00 WIB
                  </option>
                  <option value="2" className="text-muted">
                    10.00 WIB
                  </option>
                  <option value="2" className="text-muted">
                    11.00 WIB
                  </option>
                  <option value="2" className="text-muted">
                    12.00 WIB
                  </option>
                </select>
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-muted ml-2 custom-errspan custom-size-aweseome"
                />
              </div>
              <div className="col-md-3">
                <div className="inner-addon right-addon">
                  <input
                    type="text"
                    className="form-control px-2 clickable"
                    placeholder="Jumlah Penumpang"
                  />
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="text-muted custom-errspan custom-size-aweseome"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row align-items-center">
              <div className="col-md-12">
                <p className="custom-fs-p">&nbsp;</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-12 pt-3">
                <a
                  className="btn custom-btn-car font-weight-bold mr-2 unclickable"
                  href={`/hasil-pencarian-user/${tipe}`}
                >
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading === true ? (
        <>
          <div className="text-center">
            <img src={img} alt="" />
            Loading
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              {dataMobil?.map((pencarian) => {
                return (
                  <div className="col-md-4" key={pencarian.id}>
                    <div className="card p-3 mb-4">
                      <img
                        src={`${pencarian.image}`}
                        className="card-img-top"
                        alt="Mobil"
                      />
                      <div className="card-body">
                        <p className="card-text">{pencarian.name}</p>
                        <p className="card-text font-weight-bold text-dark">
                          {" "}
                          Rp {pencarian.price} / hari
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nesciunt dolor ea consequuntur. Adipisci quasi
                          dolore amet error fuga, qui molestiae temporibus,
                          dolores eveniet voluptate rem voluptatibus ad iste
                          magnam similique.
                        </p>
                        <p className="card-text">
                          <span className="text-muted">
                            <FontAwesomeIcon icon={faUserGroup} className="custom-size-aweseome" />
                          </span>
                          &nbsp;4 Orang
                        </p>
                        <p className="card-text">
                          <span className="text-muted">
                            <FontAwesomeIcon icon={faGear} className="custom-size-aweseome" />
                          </span>
                          &nbsp;Manual
                        </p>
                        <p className="card-text">
                          <span className="text-muted">
                            <FontAwesomeIcon icon={faCalendar} className="custom-size-aweseome" />
                          </span>
                          &nbsp;Tahun 2020
                        </p>
                        <div className="row">
                          <div className="col-12">
                            <span>
                              <Link
                                to={`/detail-paket-user/${pencarian.id}`}
                                className="btn btn-success w-100 py-2 text-center"
                              >
                                Pilih Mobil
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}
