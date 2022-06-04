import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function JumbotronMobil() {
    return (
        <section className="custom-section2 py-5">
            <div className="container pt-4 d-flex justify-content-between">
                <div className="mt-4 align-middle d-flex justify-content-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <div>
                        <span className="font-weight-bold custom-font-3 pt-1">&nbsp; Tiket</span>
                        <p className="pl-2 text-dark custom-font-1">Order ID: xxxxxxxx</p>
                    </div>
                </div>
                <div className="mt-4 d-flex justify-content-center">
                    <div className="d-inline">
                        <div className="d-inline rounded-circle text-white custom-circle-section px-2 py-1 mr-1">
                            <span className="custom-font-6">1</span>
                        </div>
                        <span>Pilih Metode</span>
                    </div>
                    <div className="mx-3 timeline"></div>
                    <div className="d-inline mr-3">
                        <div className="d-inline rounded-circle text-white custom-circle-border custom-circle-section px-2 py-1 mr-1">
                            <span className="custom-font-6">2</span>
                        </div>
                        <span>Bayar</span>
                    </div>
                    <div className="mr-3 timeline"></div>
                    <div className="d-inline">
                        <div className="d-inline rounded-circle text-white custom-circle-border custom-circle-section px-2 py-1 mr-1">
                            <span className="custom-font-6">3</span>
                        </div>
                        <span>Tiket</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
