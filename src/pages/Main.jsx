import React from "react";

export default function MainUser() {
  return (
    <div className="container py-5 my-5" id="service">
      <div className="row">
        <div className="col-md-7">
          <img
            className="custom-user-foto"
            src={require("../images/img_service.png")}
            alt="Service"
          />
        </div>

        <div className="col-md-5">
          <h4 className="font-weight-bold custom-user-huruf">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h4>

          <p className="mt-4 custom-user-font custom-color-user">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>

          <div className="custom-user-font">
            {/* &nbsp; untuk memberikan spasi  */}
            <p className="custom-color-user">
              <span className="p-1 rounded-circle custom-user-checklist">
                <img src={require("../images/Vector.png")} alt="Vector" />
              </span>
              &nbsp;Sewa Mobil Dengan Supir di Bali 12 Jam
            </p>
            <p className="custom-color-user">
              <span className="p-1 rounded-circle custom-user-checklist">
                <img src={require("../images/Vector.png")} alt="Vector" />
              </span>
              &nbsp;Sewa Mobil Lepas Kunci di Bali 24 Jam
            </p>
            <p className="custom-color-user">
              <span className="p-1 rounded-circle custom-user-checklist">
                <img src={require("../images/Vector.png")} alt="Vector" />
              </span>
              &nbsp;Sewa Mobil Jangka Panjang Bulanan
            </p>
            <p className="custom-color-user">
              <span className="p-1 rounded-circle custom-user-checklist">
                <img src={require("../images/Vector.png")} alt="Vector" />
              </span>
              &nbsp;Gratis Antar - Jemput Mobil di Bandara
            </p>
            <p className="custom-color-user">
              <span className="p-1 rounded-circle custom-user-checklist">
                <img src={require("../images/Vector.png")} alt="Vector" />
              </span>
              &nbsp;Layanan Airport Transfer / Drop In Out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
