import React from "react";

export default function FeatureUser() {
  return (
    <div className="container" id="us">
      <h4 className="font-weight-bold mb-4">Why Us?</h4>

      <p className="mb-4 custom-user-font custom-color-user">Mengapa harus pilih Binar Car Rental?</p>

      <div className="row my-4">
        <div className="col-md-3 p-2">
          <div className="border rounded p-3">
            <img
              className="mt-2 mb-3"
              src={require("../images/icon_complete.png")}
              alt="Icon Complete"
            />

            <p className="font-weight-bold custom-color-user">Mobil Lengkap</p>

            <p className="custom-user-font custom-color-user">
              Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
              terawat
            </p>
          </div>
        </div>

        <div className="col-md-3 p-2">
          <div className="border rounded p-3">
            <img
              className="mt-2 mb-3"
              src={require("../images/icon_price.png")}
              alt="Icon Price"
            />

            <p className="font-weight-bold custom-color-user">Harga Murah</p>

            <p className="custom-user-font custom-color-user">
              Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
              mobil lain
            </p>
          </div>
        </div>

        <div className="col-md-3 p-2">
          <div className="border rounded p-3">
            <img
              className="mt-2 mb-3"
              src={require("../images/icon_24hrs.png")}
              alt="Icon 24hrs"
            />

            <p className="font-weight-bold custom-color-user">Layanan 24 Jam</p>

            <p className="custom-user-font custom-color-user">
              Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
              tersedia di akhir minggu
            </p>
          </div>
        </div>

        <div className="col-md-3 p-2">
          <div className="border rounded p-3">
            <img
              className="mt-2 mb-3"
              src={require("../images/icon_professional.png")}
              alt="Icon Professional"
            />

            <p className="font-weight-bold custom-color-user">Sopir Professional</p>

            <p className="custom-user-font custom-color-user">
              Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
              tepat waktu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
