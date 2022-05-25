import Link from "next/link";
import Input from "../ui/Input";
import InputSelect from "../ui/InputSelect";

export default function DealerRegistration() {
  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle", label: "Alle Marken" },
    { value: "marken", label: "Alle Marken" },
  ];
  const option2 = [
    { value: "Österreich", label: "Österreich" },
    { value: "Österreich2", label: "Österreich" },
    { value: "Österreich3", label: "Österreich" },
  ];
  const option3 = [
    { value: "Herr", label: "Herr" },
    { value: "Herr2", label: "Herr" },
    { value: "Herr3", label: "Herr" },
  ];
  const option4 = [
    { value: "+43", label: "+43" },
    { value: "+44", label: "+44" },
    { value: "+45", label: "+45" },
  ];
  return (
    <div className="bg-theme-gray-3 overflow-hidden">
      <div className="relative w-10/12 md:!w-full mx-auto flex items-center bg-user-input">
        <div className="w-1/2 md:!w-full lg:w-2/3 lg:mx-auto px-10 py-12 lg:pt-16">
          <Link href="/">
            <a className="absolute left-10 top-4 flex items-center text-black text-sm font-semibold opacity-60">
              <img className="pt-1 mr-2" src="/images/icons/go-back.png" />
              zurück zur Startseite
            </a>
          </Link>
          <h3 className="text-2xl text-gray-500 font-bold">
            Als Händler registrieren
          </h3>
          <div>
            <div className="w-1/2 md:w-2/3 md:pl-7 ml-auto flex justify-between mt-6">
              <p className="text-black font-bold">Firma</p>
              <p className="text-sm">*=Pflichtfelder</p>
            </div>
          </div>
          <div className="mt-4">
            <div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * Firmenname
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  Ergänzung
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  UID-Nr.
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                 * Straße und Hausnummer
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * PLZ
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * Stadt
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * Land
                </label>
                <div className="w-7/12">
                  <InputSelect options={option2} placeholder={option2[0].value} regYear />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  Internet-Adresse (URL)
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <h3 className="w-7/12 ml-auto text-2xl font-bold mt-8 mb-4">Ansprechpartner</h3>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  Anrede
                </label>
                <div className="w-3/12 md:w-7/12">
                  <InputSelect options={option3} placeholder={option3[0].value} regYear />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * Vorname
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * Nachname
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * E-Mail-Adresse
                </label>
                <input className="w-7/12 border rounded text-md p-3 border-slate-300" type='email' />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * Ländervorwahl
                </label>
                <div className="w-3/12 md:w-7/12">
                  <InputSelect options={option4} placeholder={option4[0].value} regYear />
                </div>
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * Festnetz
                </label>
                <input className="w-3/12 border rounded text-md p-3 border-slate-300" type='email' />
                <input className="w-4/12 ml-2 flex-1 border rounded text-md p-3 border-slate-300" type='email' />
              </div>
              <div className="flex items-center mb-2">
                <label className="w-5/12 text-right pr-4 text-sm font-bold inline-block">
                  * Mobil
                </label>
                <input className="w-3/12 border rounded text-md p-3 border-slate-300" type='email' />
                <input className="w-4/12 ml-2 flex-1 border rounded text-md p-3 border-slate-300" type='email' />
              </div>
            </div>

            <div className="flex justify-between items-end">
              <div className="w-7/12 ml-auto mt-3 h-14 flex text-xs flex-col md:w-full justify-between pt-2">
                <div className="flex">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="newslater"
                    name="newslater"
                    value="newslater"
                  />
                  <label htmlFor="newslater">
                    Nēwsletter, Updates and Trends und per E-Mail
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    value="privacy"
                  />
                  <label htmlFor="privacy">
                    Ich erkläre mich mit den AGB einverstanden
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-8 md:flex-col">
              <img className="w-1/2 md:w-full md:mr-0 md:mb-4 mr-2" src="/images/icons/recapcha.png" />
              <button className="w-1/2 md:w-full md:ml-0 ml-2 inline-block px-20 py-4 border-2 rounded-lg border-black bg-gray-600 text-white text-2xl font-bold ease-linear duration-300 hover:bg-black">
                Senden
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:hidden">
          <img className="w-full h-full" src="/images/dealer-reg-car.png" />
        </div>
      </div>
    </div>
  );
}
