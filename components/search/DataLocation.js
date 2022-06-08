import { useState } from "react";
import InputSelect from "../ui/InputSelect";
import CheckBoxItem from "./CheckBoxItem";
import {
  marke1,
  marke2,
  karo,
  van1,
  van2,
  bis,
  bis1,
  bis2,
  bis3,
  land,
  umk,
  kraft,
  kilo,
  kilo2,
  leis,
  von,
  leis2,
  von2,
  getri,
  von4,
  bis4
} from "./selectOptions";

export default function DataLocation() {
  const [expanded, setExpanded] = useState(false);
  const [brandName, setBrandName] = useState(null);
  const [modelName, setModelName] = useState(null);


  return (
    <div className="text-xs border-b-2">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold md:pt-6 text-15 text-theme-gray-2"
      >
        Basisdaten & Standort
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${expanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${expanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        {/* Basisdaten & Standort */}
        <div className="flex items-end md:flex-col justify-between">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1 text-15">Marke</p>
            <InputSelect
              options={marke1}
              placeholder={marke1[1].label}
              onChange={(e) => setBrandName(e.value)}
              regYear
            />
          </div>
          {/* <div className="w-8"></div> */}
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1 text-15">Marke</p>
            <InputSelect
              options={marke2}
              placeholder={marke1[1].label}
              onChange={(e) => setModelName(e.value)}
              regYear
            />
          </div>
          {/* <div className="w-8"></div> */}
          <div className="md:w-full flex items-end justify-between md:flex-col">
            <div className="mr-8 md:mr-0 md:w-full">
              <p className="mb-1 text-15">Variante</p>
              <input
                className="w-52 md:w-full md:mb-3 border rounded-md border-theme-slate px-4 py-3"
                placeholder="z.B. Avantgarde, TDI, 320, usw. "
                type="text"
              />
            </div>
            {/* <div className="w-8"></div> */}
            <button className="border-2 md:w-full rounded-lg px-10 lg:px-4 py-3 bg-user-input border-slate-500 text-theme-gray-2">
              Alle Filter entfernen
            </button>
          </div>
        </div>
        {/* Add more brands/models */}
        <button className="text-black py-8 text-15 flex items-center">
          <img
            className="w-6 opacity-80 mr-2"
            src="/images/icons/add-plus-icon.png"
          />
          Weitere Marken/Modelle hinzufügen
        </button>
        {/* Select boxes */}
        <div className="flex justify-between md:flex-col">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1 text-15">Karosserieform</p>
            <InputSelect options={karo} placeholder={karo[1].label} regYear />
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end md:w-full md:mb-4">
            <div className="w-1/2">
              <p className="mb-1 text-15">Erstzulassung</p>
              <InputSelect
                options={van1}
                placeholder={van1[1].label}
                regYear
                classes="pr-4"
              />
            </div>
            <div className="w-1/2">
              <InputSelect options={bis1} placeholder={bis1[1].label} regYear />
            </div>
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end">
            <div className="w-1/2">
              <p className="mb-1 text-15">Preis</p>
              <InputSelect
                options={van2}
                placeholder={van2[1].label}
                regYear
                classes="pr-4"
              />
            </div>
            <div className="w-1/2">
              <InputSelect options={bis2} placeholder={bis2[1].label} regYear />
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-col mt-8">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1 text-15">Land</p>
            <InputSelect options={land} placeholder={land[1].label} regYear />
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end md:mb-4">
            <div className="w-full">
              <p className="mb-1 text-15">Stadt/PLZ</p>
              <div className="relative">
                <input
                  className="w-full border rounded-md border-theme-slate px-4 py-3"
                  placeholder="z.B. Avantgarde, TDI, 320, usw. "
                  type="text"
                />
                <button className="w-6 opacity-50 absolute right-2 bottom-2">
                  <img src="/images/icons/location-mark.png" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end">
            <div className="w-full">
              <p className="mb-1 text-15">Umkreis (km)</p>
              <InputSelect
                options={umk}
                placeholder={umk[1].label}
                regYear
                classes="pr-4"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 md:flex-col">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1 text-15">Kraftstoff</p>
            <InputSelect options={kraft} placeholder={kraft[1].label} regYear />
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end md:mb-4">
            <div className="w-1/2">
              <p className="mb-1 text-15">Kilometerstand</p>
              <InputSelect
                options={kilo}
                placeholder={kilo[1].label}
                regYear
                classes="pr-4"
              />
            </div>
            <div className="w-1/2">
              <InputSelect
                options={kilo2}
                placeholder={kilo2[1].label}
                regYear
              />
            </div>
          </div>
          <div className="w-5 md:hidden"></div>
          <div className="flex flex-1">
            <div className="">
              <p className="mb-1 text-15">Leistung</p>
              <InputSelect
                options={leis}
                placeholder={leis[1].label}
                regYear
                classes="pr-4 md:pr-0"
              />
            </div>
            <div className="w-5 md:hidden"></div>
            <div className="flex items-end flex-1">
              <div className="w-1/2">
                <p className="mb-1 text-15">von</p>
                <InputSelect
                  options={von}
                  placeholder={von[1].label}
                  regYear
                  classes="pr-4"
                />
              </div>
              <div className="w-1/2">
                <p className="mb-1 text-15">bis</p>
                <InputSelect options={bis} placeholder={bis[1].label} regYear />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 md:flex-col">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1 text-15">Getriebe</p>
            <InputSelect options={getri} placeholder={getri[1].label} regYear />
          </div>
          <div className="w-5"></div>
          <div className="flex-1 items-end md:mb-4">
            <p className="mb-1 text-15">Anzahl Türen</p>
            <div className="flex justify-between mt-3">
              <div className="flex items-center form-check form-check-inline">
                <CheckBoxItem title="Alle" wAuto />
              </div>
              <div className="flex items-center">
                <CheckBoxItem title="2/3" wAuto />
              </div>
              <div className="flex items-center">
                <CheckBoxItem title="4/5" wAuto />
              </div>
              <div className="flex items-center">
                <CheckBoxItem title="6/7" wAuto />
              </div>
            </div>
          </div>
          <div className="w-5 md:hidden"></div>
          <div className="flex flex-1 items-end">
            <div className="w-1/2">
              <p className="mb-1 text-15">Sitzplätze</p>
              <InputSelect
                options={von4}
                placeholder={von4? von4[1].label : ''}
                regYear
                classes="pr-4"
              />
            </div>
            <div className="w-1/2">
              <InputSelect options={bis4} placeholder={bis4[1].label} regYear />
            </div>
          </div>
        </div>
        <div className="w-1/3 pr-10 mt-8 md:w-full">
          <p className="mb-1 text-15">Verkäufer</p>
          <div className="flex justify-between mt-2">
            <div className="flex items-center form-check form-check-inline">
              <CheckBoxItem title="Alle" wAuto />
            </div>
            <div className="flex items-center">
              <CheckBoxItem title="Händler" wAuto />
            </div>
            <div className="flex items-center">
              <CheckBoxItem title="Privat" wAuto />
            </div>
          </div>
        </div>
        <div className="w-4/5 mt-8 md:w-full">
          <p className="mb-1 text-15">Fahrzeugzustand</p>
          <div className="flex justify-between mt-2 md:flex-wrap md:justify-start">
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Neu" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Gebraucht" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Oldtimer" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Jahreswagen" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Vorführfahrzeug" wAuto />
            </div>
            <div className="flex items-center md:mr-4">
              <CheckBoxItem title="Tageszulassung" wAuto />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
