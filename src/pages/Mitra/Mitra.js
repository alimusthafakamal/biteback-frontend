import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import jco from "../../assets/images/mitra/jco.png";
import grandjatra from "../../assets/images/mitra/grandjatra.png";
import pangeran from "../../assets/images/mitra/pangeran.jpg";
import premiere from "../../assets/images/mitra/premiere.jpg";
import prime from "../../assets/images/mitra/prime.png";
import doven from "../../assets/images/mitra/doven.jfif";
import yumi from "../../assets/images/mitra/yumi.webp";
import vanhollan from "../../assets/images/mitra/vanhollan.png";
import viera from "../../assets/images/mitra/viera.jfif";

const Mitra = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  const partners = [
    {
      id: 1,
      name: "J.CO Donuts & Coffee",
      image: jco,
      description: "Jl. soebrantas no. km. 12.5 · (0761) 572161",
    },
    {
      id: 2,
      name: "Grand Jatra Hotel",
      image: grandjatra,
      description:
        "Jl. Tengku Zainal Abidin No.1, Kota Tinggi, Kec. Pekanbaru Kota, Kota Pekanbaru, Riau 28116",
    },
    {
      id: 3,
      name: "Hotel Pangeran",
      image: pangeran,
      description:
        " Jl. Jend. Sudirman No.371-373, Cinta Raja, Kec. Sail, Kota Pekanbaru, Riau 28126",
    },
    {
      id: 4,
      name: "The Premiere",
      image: premiere,
      description:
        "Jl. Jend. Sudirman No.389, Simpang Empat, Kec. Pekanbaru Kota, Kota Pekanbaru, Riau 28121",
    },
    {
      id: 5,
      name: "The Prime Park",
      image: prime,
      description:
        "Jl. Jend. Sudirman No.3, Simpang Tiga, Kec. Bukit Raya, Kota Pekanbaru, Riau",
    },
    {
      id: 6,
      name: "Vanhollan",
      image: vanhollan,
      description: "Jl. HR. Soebrantas No.195 · 0811-7686-476",
    },
    {
      id: 7,
      name: "D'Oven",
      image: doven,
      description:
        " Jl. Riau Kel No.82, Kp. Baru, Kec. Senapelan, Kota Pekanbaru, Riau 28154",
    },
    {
      id: 8,
      name: "Yumi Company",
      image: yumi,
      description:
        "Jl. SM Amin, Labuh Baru Barat, Kec. Tampan, Kota Pekanbaru, Riau",
    },
    {
      id: 9,
      name: "Viera Oleh-oleh",
      image: viera,
      description:
        "Jalan Bina Widya No.2, Simpang Baru, Kec. Tampan, Kota Pekanbaru, Riau 28291",
    },
  ];

  const highlightedNames = ["The Premiere"];

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Mitra" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="text-base text-lightText mb-2"></h1>
        <div className=" bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className={
                      highlightedNames.includes(partner.name)
                        ? "w-full"
                        : "w-48 h-48 object-cover justify-self-center mt-2"
                    }
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {partner.name}
                    </h2>
                    <p className="text-blue-500 cursor-pointer no-underline hover:underline text-sm">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mitra;
