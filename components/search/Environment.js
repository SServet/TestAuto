import { useState } from "react";
import InputSelect from "../ui/InputSelect";
import { schads, fahrzeu } from "./selectOptions";

export default function Environment() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-xs border-b-2 mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold text-15 text-theme-gray-2"
      >
        Umwelt
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${expanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${expanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        {/* Basisdaten & Standort */}
        <div className="flex items-center md:flex-col">
          <div className="w-1/4 md:w-full md:mr-0 md:mb-4 mr-20">
            <p className="mb-1 text-15">Schadstoffklasse (mind.)</p>
            <InputSelect
              options={schads}
              placeholder={schads[1].label}
              regYear
            />
          </div>
          {/* <div className="w-8"></div> */}
          <div className="w-1/4 md:w-full">
            <p className="mb-1 text-15">Fahrzeughalter (max.)</p>

            <InputSelect
              options={schads}
              placeholder={schads[1].label}
              regYear
            />
          </div>
          <div className="flex items-center md:w-full md:ml-0 cursor-pointer mt-4 ml-10">
              <input
                className="form-check-input appearance-none h-6 w-6 border border-theme-slate rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                name="Rußpartikelfilter"
                value="Rußpartikelfilter"
                id="Rußpartikelfilter"
              />
              <label htmlFor="Rußpartikelfilter">Rußpartikelfilter</label>
            </div>
        </div>
      </div>
    </div>
  );
}
