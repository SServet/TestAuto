import { useState } from "react";
import InputSelect from "../ui/InputSelect";
import { offer } from "./selectOptions";

export default function Offer() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-xs mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold text-15 text-theme-gray-2"
      >
        Angebotsdetails
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
          <div className="w-1/4 md:w-full md:mr-0 mr-20">
            <p className="mb-1 text-15">Online seit (mind.)</p>

            <InputSelect
              options={offer}
              placeholder={offer[1].label}
              regYear
            />
          </div>
          <div className="flex items-center cursor-pointer mt-4 md:w-full">
              <input
                className="form-check-input appearance-none h-6 w-6 border border-theme-slate rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="checkbox"
                name="MwSt. ausweisbar"
                value="MwSt. ausweisbar"
                id="MwSt. ausweisbar"
              />
              <label htmlFor="MwSt. ausweisbar">MwSt. ausweisbar</label>
            </div>
        </div>
      </div>
    </div>
  );
}
