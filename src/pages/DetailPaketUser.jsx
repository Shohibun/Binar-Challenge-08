/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUserGroup,
  faGear,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router";
import axios from "axios";
import img from "../images/Infinity-1s-200px.svg";

export default function DetailPaket() {
  const params = useParams();
  console.log("ini params:", params);
  const [dataMobil, setDataMobil] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const responds = await axios
      .get(`https://rent-cars-api.herokuapp.com/admin/car/${params.id}`)
      .catch((err) => {
        console.log(err);
      });
    setDataMobil(responds.data);
    console.log(dataMobil);
    setLoading(false);
  };
  useEffect(() => {
    window.scroll(0, 0);
    //Langsung manggil dataMobil (hal pertama yang dilakukan)
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Memanggil fetchData sekali saja
  return (
    <>
      <div className="container custom-box my-4 p-3 border rounded shadow">
        <div className="row">
          <div className="col-md-12">
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
            </div>
            <div className="row align-items-center">
              <div className="col-md-3">
                <select
                  className="form-select form-control rounded px-2 border clickable"
                  aria-label="Default select example"
                >
                  <option defaultValue={{ value: "null" }}>Pilih Tipe Driver</option>
                  <option value="1" className="text-muted">
                    Dengan Sopir
                  </option>
                  <option value="2" className="text-muted">
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
                  <option value="1" className="text-muted">
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
        </div>
      </div>
      {loading === true ? (
        <>
          <div className="text-center">
            <img src={img} alt="" />
          </div>
        </>
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-8 border">
                <p className="font-weight-bold my-3">Tentang Paket</p>

                <p>Include</p>
                <ul>
                  <li>
                    Apa saja yang termasuk dalam paket misal derasi 12 jam{" "}
                  </li>
                  <li>Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>

                <p>Exclude</p>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <p className="font-weight-bold">Refund, Reschedule, Overtime</p>
                <ul>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya RP
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir 75.000/hari</li>
                  <li>
                    Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                    20.000/jam
                  </li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>

              <div className="col-md-4">
                <div className="card p-3 mb-4">
                  <img
                    src={`${dataMobil.image}`}
                    className="card-img-top"
                    alt="Mobil"
                  />
                  <div className="card-body">
                    <p className="card-text font-weight-bold">{dataMobil.name}</p>
                    <span className="card-text mr-1 text-muted">
                      <span>
                        <FontAwesomeIcon icon={faUserGroup} className="custom-size-aweseome" />
                      </span>
                      &nbsp;4 Orang
                    </span>
                    <span className="card-text mr-1 text-muted">
                      <span>
                        <FontAwesomeIcon icon={faGear} className="custom-size-aweseome" />
                      </span>
                      &nbsp;Manual
                    </span>
                    <span className="card-text text-muted ">
                      <span>
                        <FontAwesomeIcon icon={faCalendar} className="custom-size-aweseome" />
                      </span>
                      &nbsp;Tahun 2020
                    </span>
                    <div className="row mt-3">
                      <div className="row w-100">
                        <div className="col-md-6">
                          <p className="text-left pl-3">Total</p>
                        </div>
                        <div className="col-md-6">
                          <p className="font-weight-bold text-right">
                            Rp {dataMobil.price}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <span>
                          <Link
                            to="/pembayaran-satu-user"
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
            </div>
            <div className="d-flex justify-content-center mt-4">
              <Link to="/pembayaran-satu-user" className="btn btn-success w-25 py-2 text-center">
                Lanjutkan Pembayaran
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
