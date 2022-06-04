import {
  faCircleCheck,
  faDownload,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PDFDownloadLink } from "@react-pdf/renderer";
import React from "react";
import PDFFile from "../components/PDFFile";

export default function PembayaranMetodeTigaUser() {
  return (
    <div className="container">
      <p className="text-center mt-5">
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-success custom-size-aweseome-2"
        />
      </p>

      <p className="font-weight-bold text-center custom-font-3">
        Pembayaran Berhasil!
      </p>

      <p className="text-muted text-center custom-font-4">
        Tunjukkan invoice ini ke petugas BCR di titik temu.
      </p>

      <div className="mx-auto p-4 mt-5 border rounded custom-box-download">
        <div className="row">
          <div className="col-md-6 text-left">
            <p className="font-weight-bold custom-font-3">Invoice</p>
          </div>

          <div className="col-md-6 text-right">
            <PDFDownloadLink document={<PDFFile />} fileName="Binar Car Rental">
              {({ loading }) =>
                loading ? (
                  <button className="btn btn-outline-primary">
                    <span>
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="custom-font-5"
                      />
                    </span>
                    <span className="custom-font-5">
                      Loading document....
                    </span>
                  </button>
                ) : (
                  <button className="btn btn-outline-primary">
                    <span>
                      <FontAwesomeIcon
                        icon={faDownload}
                        className="custom-font-5"
                      />
                    </span>
                    <span className="custom-font-5">Unduh</span>
                  </button>
                )
              }
            </PDFDownloadLink>
          </div>
        </div>

        <p className="text-muted custom-font-4">*no invoice</p>

        <div className="container rounded custom-bg-upload">
          <p className="text-center my-5">
            <FontAwesomeIcon
              icon={faImage}
              className="text-dark custom-size-aweseome"
            />{" "}
            &nbsp;
            <span className="text-muted custom-font-1">PDF Viewer</span>
          </p>
        </div>
      </div>
    </div>
  );
}
