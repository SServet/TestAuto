import Router from "next/router";
import { useState, useEffect } from "react";

import Colors from "./Colors";
import DataLocation from "./DataLocation";
import Environment from "./Environment";
import Furnishing from "./Furnishing";
import Offer from "./Offer";
import UphosteryColor from "./UphosteryColor";
import VehicleCondition from "./VehicleCondition";

export default function SearchDetail() {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);
  return (
    <div className="bg-theme-gray-3">
      <div className="lg:px-6 md:!px-0">
        <div className="w-10/12 lg:w-full max-w-ag-container mx-auto lg:px-6 lg:pt-0 px-8 bg-user-input pt-6">
          <div className="pb-4 md:py-4">
            <button onClick={() => Router.back()} className="inline-flex">
              <img
                className="w-6 opacity-60"
                src="/images/icons/back-button.png"
              />
              Zurück
            </button>
            <h2 className="text-3xl font-bold text-theme-gray-2">
              Detailsuche
            </h2>
          </div>
        </div>
        <div className="w-10/12 lg:w-full max-w-ag-container mx-auto lg:px-6 lg:pt-0 px-8 bg-white pt-6">
          <DataLocation />
          <Furnishing />
          <Colors />
          <UphosteryColor />
          <VehicleCondition />
          <Environment />
          <Offer />
          <div className="relative">
            <div className="flex justify-center pt-6 pb-10 md:pb-16">
              <button className="w-2/6 md:w-full text-lg font-bold rounded-md p-4 bg-theme-yellow-2 text-black border-2 border-black">
                Suchen
              </button>
            </div>
            <button onClick={handleScrollUp} className="absolute flex items-center right-10 bottom-6 font-bold">
          Nach Oben
          <img className="ml-4" src="/images/icons/top-btn.png" />
        </button>
          </div>
        </div>
      </div>
    </div>
  );
}
