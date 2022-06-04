import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function CariMobil() {
    const [tipe, setTipe] = useState(null);
    const tipeOnChange = (event) => { //
        if (event.target) {
            setTipe(event.target.value);
            console.log("Tipe:", tipe)
        }
    }
    return (
        <>
            <div className="container custom-box my-4 p-3 m-auto border rounded shadow">
                <div className="row">
                    <div className="col-md-10">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <p className="text-dark custom-fs-p">Tipe Driver</p>
                            </div>
                            <div className="col-md-3">
                                <p className="text-dark custom-fs-p">Tanggal</p>
                            </div>
                            <div className="col-md-3">
                                <p className="text-dark custom-fs-p">Waktu Jemput/Ambil</p>
                            </div>
                            <div className="col-md-3">
                                <p className="text-dark custom-fs-p">Jumlah Penumpang (Optional)</p>
                            </div>
                            <div className="col-md-3">
                                <p className="text-dark custom-fs-p"></p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <select className="form-select form-control rounded px-2 border clickable" onChange={tipeOnChange} aria-label="Default select example">
                                    <option defaultValue={{ value: "null" }}>Pilih Tipe Driver</option>
                                    <option value="true" className="text-muted">Dengan Sopir</option>
                                    <option value="false" className="text-muted">Tanpa Sopir (Lepas Kunci)</option>
                                </select>
                            </div>
                            <div className="col-md-3">
                                <div className="inner-addon left-addon">
                                    <input type="date" className="form-control px-2 clickable" placeholder="Pilih Tanggal"/>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <select className="form-control rounded px-2 border custom clickable">
                                    <option value="1" className="text-muted">08.00 WIB</option>
                                    <option value="2" className="text-muted">09.00 WIB</option>
                                    <option value="2" className="text-muted">10.00 WIB</option>
                                    <option value="2" className="text-muted">11.00 WIB</option>
                                    <option value="2" className="text-muted">12.00 WIB</option>
                                </select>
                                <FontAwesomeIcon icon={faClock} className="text-muted ml-2 custom-errspan custom-size-aweseome"/>
                            </div>
                            <div className="col-md-3">
                                <div className="inner-addon right-addon">
                                    <input type="text" className="form-control px-2 clickable" placeholder="Jumlah Penumpang"/>
                                    <FontAwesomeIcon icon={faUserGroup} className="text-muted custom-errspan custom-size-aweseome"/>
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
                                <Link className="bg-success m-auto font-weight-bold rounded text-white border-0 pt-2 pb-2 pl-3 pr-3 custom-user-font unclickable" to={`/hasil-pencarian-user/${tipe}`}>Cari Mobil</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
