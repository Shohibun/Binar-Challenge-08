import React from "react";

export default function JumbotronUser() {
  return (
    <section className="py-5 custom-user-section1">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-6 d-flex align-items-center justify-content-center custom-user-cover">
            <div>
              <h2 className="font-weight-bold custom-user-head1">
                Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
              </h2>

              <p className="custom-user-font custom-color-user">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas <br /> terbaik dengan harga terjangkau. Selalu siap
                melayani kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
              </p>

              <button className="bg-success font-weight-bold rounded text-white border-0 pt-2 pb-2 pl-3 pr-3 custom-user-font">
                Mulai Sewa Mobil
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
