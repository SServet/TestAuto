import { useState } from "react";
import Link from "next/link";
import Input from "./ui/Input";
import InputSelect from "./ui/InputSelect";

export default function Registration() {
  const [gender, setGender] = useState("");

  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle", label: "Alle Marken" },
    { value: "marken", label: "Alle Marken" },
  ];
  return (
    <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
      <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-4">
        <div className="w-1/2 lg:w-full relative before:lg:w-full mr-2 rounded-md flex flex-col text-theme-black-2 text-15 md:text-xs lg:flex-col">
          <div className="p-6 rounded-md bg-theme-gray-4">
            <Link href="/">
              <a className="absolute right-6 top-6 lg:top-4 flex flex-col items-end text-theme-blue text-xs">
                <p>zurück</p>
                <p className="mb-1">zur Startseite</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.116"
                  height="15"
                  viewBox="0 0 22.116 15"
                >
                  <path
                    id="keyboard_return_FILL0_wght400_GRAD200_opsz40"
                    d="M11.917,24.458l-7.5-7.5,7.5-7.5L13.659,11.2,9.171,15.718H24.052V10.669h2.48v7.5H9.171l4.488,4.488Z"
                    transform="translate(-4.417 -9.458)"
                    fill="#0067b8"
                  />
                </svg>
              </a>
            </Link>
            <div className="">
              <h3 className="text-2xl text-gray-500 font-bold">
                Neu Registrienren
              </h3>
              <div className="">
                <p className="mb-4">oder als bestehender User einloggen</p>
                <div className="flex">
                  <div
                    onClick={() =>
                      gender === "male" ? setGender("") : setGender("male")
                    }
                    className="flex items-center mr-10"
                  >
                    <input
                      className="w-4 h-4 mr-2 appearance-none border border-slate-300 bg-white blackChecked"
                      type="checkbox"
                      id="man"
                      name="man"
                      value="man"
                      checked={gender === "male" ? true : false}
                    />
                    <label htmlFor="man">Mann</label>
                  </div>
                  <div
                    onClick={() =>
                      gender === "female" ? setGender("") : setGender("female")
                    }
                    className="flex items-center"
                  >
                    <input
                      className="w-4 h-4 mr-2 appearance-none border border-slate-300 bg-white blackChecked"
                      type="checkbox"
                      id="woman"
                      name="woman"
                      value="woman"
                      checked={gender === "female" ? true : false}
                    />
                    <label htmlFor="woman">Frau</label>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="flex justify-between">
                  <div className="w-1/2 mr-2">
                    <Input placeholder="Vorname" inputType="text" />
                  </div>
                  <div className="w-1/2 ml-2">
                    <Input placeholder="Nachname" inputType="text" />
                  </div>
                </div>
                <Input placeholder="E-Mail-Adresse" inputType="email" />
                <Input
                  placeholder="Passwort"
                  inputType="password"
                  sublabel="mind. 8 Zeichen, ein Groß- & Kleinbuchstabe und eine Ziffer"
                />
                <div className="flex justify-between items-end md:flex-col">
                  <div className="w-1/2 md:!w-full mr-2 md:mr-0">
                    {/* <label className={`text-sm font-bold inline-block mb-1`}>
                  Geburtsjahr
                  <span className="font-sm font-medium">
                    (nur für dich sichtbar)
                  </span>
                </label> */}
                    <InputSelect
                      options={option1}
                      placeholder="Geburtsjahr (nur für dich sichtbar)"
                      regYear
                    />
                  </div>
                  <div className="w-1/2 md:!w-full ml-2 h-14 flex text-11 flex-col justify-between pt-2">
                    <div className="flex">
                      <input
                        className="w-4 h-4 mr-2"
                        type="checkbox"
                        id="newslater"
                        name="newslater"
                        value="newslater"
                      />
                      <label htmlFor="newslater">
                        Newsletter, Updates und Trends erhalten.
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
                <div className="flex md:flex-col items-center mt-6">
                  <img
                    className="w-60 md:w-full md:mr-0 mr-2 md:mb-4"
                    src="/images/icons/recapcha.png"
                  />
                  <button className="w-1/2 ml-2 inline-block px-8 py-3 border-2 rounded-lg border-theme-gray-3 bg-theme-gray-5 text-theme-black-2 text-lg font-bold ease-linear duration-300 hover:bg-black hover:text-white">
                    Neu registrieren
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex md:flex-col items-ceter mt-6 bg-theme-yellow-2 p-4 rounded-md text-sm">
            <button className="w-1/2 md:w-full mr-6 md:mr-0 md:mb-6 text-black text-xl font-bold px-4 py-2 rounded-md border border-theme-gray-3">
              Als Händler registrieren
            </button>
            <div>
              <p>Haben Sie Fragen?</p>
              <p>Wir helfen Ihnen gerne weiter.</p>
              <a
                href="/#"
                target="_blank"
                rel="noreferer"
                className="underline text-theme-blue"
              >
                Kontaktformular
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-2">
          <img className="w-full h-full" src="/images/reg-car.png" />
        </div>
      </div>
    </div>
  );
}
