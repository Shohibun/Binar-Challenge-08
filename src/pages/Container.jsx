import React from "react";

export default function ContainerUser() {
  return (
    <div className="container mb-5">
      <div className="p-5 custom-user-box">
        <h2 className="text-white font-weight-bold text-center mb-4 custom-user-head1">
          Sewa Mobil di (Lokasimu) Sekarang
        </h2>

        <p className="text-white text-center w-50 m-auto custom-user-font">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum et
          error tempore illo non dignissimos officiis eaque!
        </p>

        <section className="text-center mt-5 pt-3">
          <button className="bg-success font-weight-bold rounded text-white border-0 pt-2 pb-2 pl-3 pr-3 custom-user-font">
            Mulai Sewa Mobil
          </button>
        </section>
      </div>
    </div>
  );
}
