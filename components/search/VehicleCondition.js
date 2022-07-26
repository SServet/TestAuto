import { useState } from "react";
import InputSelect from "../ui/InputSelect";
import { fahrz, unfall } from "./selectOptions";

export default function VehicleCondition() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-xs border-b-2 mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold text-15 text-theme-gray-2"
      >
        Fahrzeugzustand
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${expanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${expanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        {/* Basisdaten & Standort */}
        <div className="flex items-end md:flex-col">
          <div className="w-1/4 lg:w-1/3 md:!w-full mr-20 md:mr-0 md:mb-4">
            <p className="mb-1 text-15">Fahrzeughalter (max.)</p>
            <InputSelect options={fahrz} placeholder={fahrz[1].label} regYear />
          </div>

          {/* <div className="w-8"></div> */}
          <div className="w-1/4 lg:w-1/3 md:!w-full relative">
            <p className="mb-1 text-15">Unfallfahrzeug</p>
            <InputSelect
              options={unfall}
              placeholder={unfall[1].label}
              regYear
            />
          </div>
        </div>
        <div className="flex md:flex-col mt-4">
          <div className="flex w-1/4 lg:w-1/3 md:!w-full md:flex-wrap justify-between mr-20">
            <div className="flex items-center cursor-pointer">
              <input
                className="form-check-input appearance-none h-6 w-6 border border-theme-slate rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                name="Nichtraucherfahrzeug"
                value="Nichtraucherfahrzeug"
                id="Nichtraucherfahrzeug"
              />
              <label htmlFor="Nichtraucherfahrzeug">Nichtraucherfahrzeug</label>
            </div>
            <div className="flex items-center cursor-pointer">
              <input
                className="form-check-input appearance-none h-6 w-6 border border-theme-slate rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                name="Garantie"
                value="Garantie"
                id="Garantie"
              />
              <label htmlFor="Garantie">Garantie</label>
            </div>
          </div>
          <div className="flex w-1/3 lg:w-1/2 md:!w-full justify-between">
            <div className="flex items-center cursor-pointer">
              <input
                className="form-check-input appearance-none h-6 w-6 border border-theme-slate rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                name="Scheckheftgepflegt"
                value="Scheckheftgepflegt"
                id="Scheckheftgepflegt"
              />
              <label htmlFor="Scheckheftgepflegt">Scheckheftgepflegt</label>
            </div>
            <div className="flex items-center cursor-pointer">
              <input
                className="form-check-input appearance-none h-6 w-6 border border-theme-slate rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                name="Herstellerzertifizierung"
                value="Herstellerzertifizierung"
                id="Herstellerzertifizierung"
              />
              <div>
                <label htmlFor="Herstellerzertifizierung">
                  Herstellerzertifizierung
                </label>
                <br />
                <span className="text-8">
                  (Technisch geprüfte Fahrzeuge mit Garantie)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
