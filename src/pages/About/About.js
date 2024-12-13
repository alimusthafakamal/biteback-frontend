import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { logo } from "../../assets/images";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <div className=" flex flex-col items-center pt-12 pb-2 px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 max-w-4xl w-full space-y-2">
            <h1 className=" text-base text-lightText mb-16 space-y-4">
              <img
                style={{ marginTop: "-52px", marginBottom: "84px" }}
                className="w-50"
                src={logo}
                alt="logoLight"
              />
              <p>
                <span className="text-primeColor mr-1 font-semibold text-lg">
                  Biteback
                </span>
                adalah aplikasi inovatif yang menghubungkan restoran, hotel, dan
                tempat makan lainnya dengan konsumen untuk menjual makanan
                berlebih yang masih layak konsumsi dengan harga yang lebih
                terjangkau. Aplikasi ini dirancang untuk mengurangi limbah
                makanan, memberikan kesempatan kepada konsumen untuk menikmati
                makanan berkualitas tinggi, sekaligus mendukung keberlanjutan
                lingkungan.
              </p>
              <p>
                Kami hanya bekerja sama dengan mitra yang telah melalui proses
                seleksi ketat dan memiliki standar kualitas tinggi. Kualitas
                makanan yang dijual melalui Biteback sepenuhnya menjadi tanggung
                jawab mitra kami, sehingga konsumen dapat merasa aman dan nyaman
                saat membeli. Melalui Biteback, pelanggan bisa mendapatkan
                makanan mewah dari restoran dan hotel bintang lima dengan harga
                yang jauh lebih murah, menciptakan pengalaman kuliner eksklusif
                yang dapat diakses oleh lebih banyak orang.
              </p>
              <p>
                Dengan tagline
                <span className="text-primeColor font-semibold text-lg mx-1 ">
                  "Save World, Save Money, and Safe Food"{" "}
                </span>{" "}
                Biteback memberikan solusi bagi masalah limbah makanan,
                menawarkan nilai lebih bagi restoran dan hotel, serta memberikan
                peluang investasi di sektor teknologi berkelanjutan yang
                menjanjikan.
              </p>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
                <p className="mt-3 text-gray-600">
                  Berkontribusi dalam penekanan limbah makanan dan mendukung
                  sepenuhnya program{" "}
                  <span className="font-semibold font-sm"> ZERO WASTE</span>.
                  kami menawarkan solusi praktis yang mendukung keberlanjutan
                  lingkungan dan ekonomid demi terjaganya bumi yang tetap hijau.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Our Features
                </h2>
                <ul className="mt-3 text-gray-600 list-disc list-inside">
                  <li> Mudah dan Fleksibel dalam penggunaan aplikasi.</li>
                  <li>Support pembayaran secara e-wallet/bank.</li>
                  <li>Bekerja sama dengan Brand Terpercaya.</li>
                  <li>24/7 untuk melayani customer tercinta.</li>
                </ul>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Why Choose Us
                </h2>
                <p className="mt-3 text-gray-600">
                  kami menyediakan makanan dari restoran dan hotel dengna harga
                  yang lebih terjangkau. Biteback bekerja sama dengan restoran
                  dan hotel yang sudah teruji dan terpercaya, sehingga kualitas
                  dan keamanan makanan yang dijual tetap terjamin.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  Join Us Today
                </h2>
                <p className="mt-3 text-gray-600">
                  Be part of our growing community and experience the future of
                  digital payments. Together, we can build a better, cashless
                  tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
