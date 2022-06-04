/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faGear,
  faCalendar,
  faChevronUp,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function PembayaranMetodeSatuUser() {
  return (
    <>
      <div className="container custom-box my-4 p-3 m-auto border rounded shadow">
        <p className="font-weight-bold custom-font-3">Detail Pesenanmu</p>
        <div className="row">
          <div className="col-md-12">
            <div className="row align-items-center">
              <div className="col-md-3">
                <p className="custom-font-3">Tipe Driver</p>
              </div>
              <div className="col-md-3">
                <p className="custom-font-3">Tanggal</p>
              </div>
              <div className="col-md-3">
                <p className="custom-font-3">Waktu Jemput/Ambil</p>
              </div>
              <div className="col-md-3">
                <p className="custom-font-3">Jumlah Penumpang (Optional)</p>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-md-3">
                <p className="custom-font-4">Dengan Sopir</p>
              </div>
              <div className="col-md-3">
                <p className="custom-font-4">27 Mar 2022</p>
              </div>
              <div className="col-md-3">
                <p className="custom-font-4">10.00 WIB</p>
              </div>
              <div className="col-md-3">
                <p className="custom-font-4">-</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="border rounded px-4 py-4">
              <p className="font-weight-bold custom-font-3">
                Pilih Bank Transfer
              </p>

              <p className="custom-font-4">
                Kamu bisa membayar dengan transfer melalui ATM, Internet Banking
                atau Mobile Banking
              </p>

              <div className="d-flex justify-content-between">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="btn btn-light border custom-font-1 mr-2">BCA</span>
                    <span className="text-dark custom-font-1 pt-1">BCA Transfer</span>
                  </div>
                </div>
                <span><FontAwesomeIcon icon={faCheck} className=" mt-2 text-success text-right custom-size-aweseome" /></span>
              </div>
              <hr />
              
              <div className="d-flex justify-content-between">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="btn btn-light border custom-font-1 mr-2">BNI</span>
                    <span className="text-dark custom-font-1 pt-1">BNI Transfer</span>
                  </div>
                </div>
              </div>
              <hr />

              <div className="d-flex justify-content-between">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <span className="btn btn-light border custom-font-1 mr-2">Mandiri</span>
                    <span className="text-dark custom-font-1 pt-1">Mandiri Transfer</span>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="col-md-4 border rounded">
            <p className="font-weight-bold mt-4 custom-font-3">Nama/Tipe Mobil</p>

            <div>
              <span className="card-text mr-1 text-muted custom-font mr-2">
                <span>
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    className="custom-size-aweseome-1"
                  />
                </span>
                &nbsp;4 Orang
              </span>
              <span className="card-text mr-1 text-muted custom-font mr-2">
                <span>
                  <FontAwesomeIcon
                    icon={faGear}
                    className="custom-size-aweseome-1"
                  />
                </span>
                &nbsp;Manual
              </span>
              <span className="card-text text-muted custom-font mr-2">
                <span>
                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="custom-size-aweseome-1"
                  />
                </span>
                &nbsp;Tahun 2020
              </span>
            </div>

            <div className="row mt-5">
              <div className="col-md-6 text-left">
                <p className="custom-font-3">
                  Total &nbsp;
                  <span>
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="custom-size-aweseome-1"
                    />
                  </span>
                </p>
              </div>

              <div className="col-md-6 text-right">
                <p className="font-weight-bold custom-font-3">Rp 430.000</p>
              </div>
            </div>

            <p className="font-weight-bold custom-font-3">Harga</p>
            <div className="row">
              <div className="col-md-6 text-left">
                <ul>
                  <li className="custom-font-3">1 Mobil dengan sopir</li>
                </ul>
              </div>

              <div className="col-md-6 text-right">
                <p className="custom-font-3">Rp 430.000</p>
              </div>
            </div>

            <p className="font-weight-bold custom-font-3">Biaya Lainnya</p>
            <div className="row">
              <div className="col-md-6 text-left">
                <ul>
                  <li className="custom-font-3 mb-3">Pajak</li>
                  <li className="custom-font-3">Biaya makan sopir</li>
                </ul>
              </div>

              <div className="col-md-6 text-right">
                <p className="text-success custom-font-4">Termasuk</p>
                <p className="text-success custom-font-4">Termasuk</p>
              </div>
            </div>

            <p className="font-weight-bold custom-font-3">Belum Termasuk </p>
            <div className="row">
              <div className="col-md-12 text-left">
                <ul>
                  <li className="custom-font-3">Bensin</li>
                  <li className="custom-font-3">Tol dan parkir</li>
                </ul>
              </div>
            </div>

            <hr className="w-75" />

            <div className="row">
              <div className="col-md-6 text-left">
                <p className="font-weight-bold custom-font-3">Total</p>
              </div>

              <div className="col-md-6 text-right">
                <p className="font-weight-bold custom-font-3">Rp 430.000</p>
              </div>
            </div>

            <Link className="btn btn-success font-weight-bold w-100 mb-4 custom-font-4" to={"/pembayaran-dua-user"}>Bayar</Link>
          </div>
        </div>
      </div>
    </>
  );
}
