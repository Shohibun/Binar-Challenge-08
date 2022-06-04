import { faClone, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

class PembayaranMetodeDuaUser extends React.Component {
  componentDidMount() {
    var countDownDate = new Date("June 19, 2022 13:00:00").getTime();
    setInterval(function () {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById("jam").innerHTML = hours;
      document.getElementById("menit").innerHTML = minutes;
      document.getElementById("detik").innerHTML = seconds;
    }, 1000);
  }

  render() {
    return (
      <div className="container">
      <div className="row mt-5">
        <div className="col-md-8">
          <div className="row px-4">
            <div className="col-md-12 border rounded">
              <div className="row align-items-center">
                <div className="col-md-9">
                  <p className="mt-4 font-weight-bold custom-font-3">
                    Selesaikanlah Pembayaran Sebelum
                  </p>
                  <p className="custom-font-3">
                    Rabu, 19 Jun 2022 jam 13.00 WIB
                  </p>
                </div>
                <div className="col-md-3">
                  <div className="row align-items-center">
                    <div className="custom-box-pink rounded">
                      <span id="jam">10</span>
                    </div>
                    &nbsp; : &nbsp;
                    <div className="custom-box-pink rounded">
                      <span id="menit">10</span>
                    </div>
                    &nbsp; : &nbsp;
                    <div className="custom-box-pink rounded">
                      <span id="detik">10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 mt-4 border rounded">
              <p className="mt-4 font-weight-bold custom-font-3">
                Lakukan Transfer Ke
              </p>

              <div className="row">
                <div className="col-md-1">
                  <button className="btn btn-light border custom-font-1">
                    BCA
                  </button>
                </div>

                <div className="col-md-11 pl-4">
                  <p className="custom-font-1">
                    BCA Tansfer <br /> a.n Binar Car Rental
                  </p>
                </div>
              </div>

              <form className="mb-4">
                <div className="form-group">
                  <label
                    htmlFor="NomorRekening"
                    className="text-muted custom-font-1"
                  >
                    Nomor Rekening
                  </label>
                  <div className="form-group has-search">
                    <FontAwesomeIcon
                      icon={faClone}
                      className="text-muted form-control-feedback"
                    />
                    <input
                      type="text"
                      className="form-control custom-font-1"
                      placeholder="Isi nomer rekening kamu"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label
                    htmlFor="NomorRekening"
                    className="text-muted custom-font-1"
                  >
                    Total Bayar
                  </label>
                  <div className="form-group has-search">
                    <FontAwesomeIcon
                      icon={faClone}
                      className="text-muted form-control-feedback"
                    />
                    <input
                      type="text"
                      className="form-control custom-font-1"
                      placeholder="Total Bayar"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-12 mt-4 border rounded">
              <p className="font-weight-bold custom-font-3 mt-4">
                Intruksi Pembayaran
              </p>
              <div className="row px-3">
                <div className="col-md-3 custom-border-b-green">
                  <p className="font-weight-bold custom-font-3 text-center">
                    ATM BCA
                  </p>
                </div>
                <div className="col-md-3 custom-border-b">
                  <p className="custom-font-3 text-center">M-BCA</p>
                </div>
                <div className="col-md-3 custom-border-b">
                  <p className="custom-font-3 text-center">BCA Klik</p>
                </div>
                <div className="col-md-3 custom-border-b">
                  <p className="custom-font-3 text-center">Internet Banking</p>
                </div>
              </div>
              <ul className="text-muted custom-font-4 mt-4 mb-4">
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>
                  Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
                  20.000/jam
                </li>
                <li>Tidak termasuk akomodasi penginapan</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 rounded">
          <div className="border rounded px-3">
            <p className="font-weight-bold custom-font-3">
              Konfirmasi Pembayaran
            </p>

            <p className="mt-4 custom-font-3">
              Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
              akan segera kami cek tunggu kurang lebih 10 menit untuk
              mendapatkan konfirmasi.
            </p>

            <p className="custom-font-3">Upload Bukti Pembayaran</p>

            <p className="custom-font-3">
              Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
              upload bukti bayarmu
            </p>

            <div className="container rounded custom-bg-upload">
              <p className="text-center my-5">
                <FontAwesomeIcon
                  icon={faImage}
                  className="text-dark custom-size-aweseome"
                />
              </p>
            </div>

            <Link className="btn btn-success font-weight-bold w-100 mb-4 mt-4 custom-font-4" to={"/pembayaran-tiga-user"}>
              Upload
            </Link>
          </div>
        </div>
      </div>
    </div>
    )
  }
};

export default PembayaranMetodeDuaUser;

// export default function PembayaranMetodeDuaUser() {
//   var countDownDate = new Date("June 19, 2022 13:00:00").getTime();
//   setInterval(function () {
//     var now = new Date().getTime();
//     var distance = countDownDate - now;
//     var hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("jam").innerHTML = hours;
//     document.getElementById("menit").innerHTML = minutes;
//     document.getElementById("detik").innerHTML = seconds;
//   }, 1000);
//   return (
//     <div className="container">
//       <div className="row mt-5">
//         <div className="col-md-8">
//           <div className="row px-4">
//             <div className="col-md-12 border rounded">
//               <div className="row align-items-center">
//                 <div className="col-md-9">
//                   <p className="mt-4 font-weight-bold custom-font-3">
//                     Selesaikanlah Pembayaran Sebelum
//                   </p>
//                   <p className="custom-font-3">
//                     Rabu, 19 Jun 2022 jam 13.00 WIB
//                   </p>
//                 </div>
//                 <div className="col-md-3">
//                   <div className="row align-items-center">
//                     <div className="custom-box-pink rounded">
//                       <span id="jam">10</span>
//                     </div>
//                     &nbsp; : &nbsp;
//                     <div className="custom-box-pink rounded">
//                       <span id="menit">10</span>
//                     </div>
//                     &nbsp; : &nbsp;
//                     <div className="custom-box-pink rounded">
//                       <span id="detik">10</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-12 mt-4 border rounded">
//               <p className="mt-4 font-weight-bold custom-font-3">
//                 Lakukan Transfer Ke
//               </p>

//               <div className="row">
//                 <div className="col-md-1">
//                   <button className="btn btn-light border custom-font-1">
//                     BCA
//                   </button>
//                 </div>

//                 <div className="col-md-11 pl-4">
//                   <p className="custom-font-1">
//                     BCA Tansfer <br /> a.n Binar Car Rental
//                   </p>
//                 </div>
//               </div>

//               <form className="mb-4">
//                 <div className="form-group">
//                   <label
//                     htmlFor="NomorRekening"
//                     className="text-muted custom-font-1"
//                   >
//                     Nomor Rekening
//                   </label>
//                   <div className="form-group has-search">
//                     <FontAwesomeIcon
//                       icon={faClone}
//                       className="text-muted form-control-feedback"
//                     />
//                     <input
//                       type="text"
//                       className="form-control custom-font-1"
//                       placeholder="Isi nomer rekening kamu"
//                     />
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <label
//                     htmlFor="NomorRekening"
//                     className="text-muted custom-font-1"
//                   >
//                     Total Bayar
//                   </label>
//                   <div className="form-group has-search">
//                     <FontAwesomeIcon
//                       icon={faClone}
//                       className="text-muted form-control-feedback"
//                     />
//                     <input
//                       type="text"
//                       className="form-control custom-font-1"
//                       placeholder="Total Bayar"
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//             <div className="col-md-12 mt-4 border rounded">
//               <p className="font-weight-bold custom-font-3 mt-4">
//                 Intruksi Pembayaran
//               </p>
//               <div className="row px-3">
//                 <div className="col-md-3 custom-border-b-green">
//                   <p className="font-weight-bold custom-font-3 text-center">
//                     ATM BCA
//                   </p>
//                 </div>
//                 <div className="col-md-3 custom-border-b">
//                   <p className="custom-font-3 text-center">M-BCA</p>
//                 </div>
//                 <div className="col-md-3 custom-border-b">
//                   <p className="custom-font-3 text-center">BCA Klik</p>
//                 </div>
//                 <div className="col-md-3 custom-border-b">
//                   <p className="custom-font-3 text-center">Internet Banking</p>
//                 </div>
//               </div>
//               <ul className="text-muted custom-font-4 mt-4 mb-4">
//                 <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
//                 <li>
//                   Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
//                   20.000/jam
//                 </li>
//                 <li>Tidak termasuk akomodasi penginapan</li>
//                 <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
//                 <li>
//                   Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
//                   20.000/jam
//                 </li>
//                 <li>Tidak termasuk akomodasi penginapan</li>
//                 <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
//                 <li>
//                   Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp
//                   20.000/jam
//                 </li>
//                 <li>Tidak termasuk akomodasi penginapan</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4 rounded">
//           <div className="border rounded px-3">
//             <p className="font-weight-bold custom-font-3">
//               Konfirmasi Pembayaran
//             </p>

//             <p className="mt-4 custom-font-3">
//               Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu
//               akan segera kami cek tunggu kurang lebih 10 menit untuk
//               mendapatkan konfirmasi.
//             </p>

//             <p className="custom-font-3">Upload Bukti Pembayaran</p>

//             <p className="custom-font-3">
//               Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa
//               upload bukti bayarmu
//             </p>

//             <div className="container rounded custom-bg-upload">
//               <p className="text-center my-5">
//                 <FontAwesomeIcon
//                   icon={faImage}
//                   className="text-dark custom-size-aweseome"
//                 />
//               </p>
//             </div>

//             <Link className="btn btn-success font-weight-bold w-100 mb-4 mt-4 custom-font-4" to={"/pembayaran-tiga-user"}>
//               Upload
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
