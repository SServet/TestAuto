import Link from "next/link";
import Input from "./ui/Input";
import InputSelect from "./ui/InputSelect";

export default function Registration() {
  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle", label: "Alle Marken" },
    { value: "marken", label: "Alle Marken" },
  ];
  return (
    <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
      <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col items-center bg-user-input">
        <div className="w-1/2 lg:w-3/4 md:!w-full lg:mx-auto md:px-6 px-10 pt-8 lg:py-12 pb-2">
          <Link href="/">
            <a className="absolute left-10 top-2 md:!left-6 lg:left-32 md:!pl-0 lg:pl-2 flex items-center text-black text-sm font-semibold opacity-60">
              <img className="w-6 pt-1 mr-2" src="/images/icons/go-back.png" />
              zurück zur Startseite
            </a>
          </Link>
          <h3 className="text-2xl text-gray-500 font-bold">
            Neu Registrienren
          </h3>
          <div className="flex justify-between items-center">
            <p className="">oder als bestehender User einloggen</p>
            <div className="flex">
              <div className="flex items-center mr-10">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="man"
                  name="man"
                  value="man"
                />
                <label htmlFor="man">Mann</label>
              </div>
              <div className="flex items-center">
                <input
                  className="w-4 h-4 mr-2"
                  type="checkbox"
                  id="woman"
                  name="woman"
                  value="woman"
                />
                <label htmlFor="woman">Frau</label>
              </div>
            </div>
          </div>

          <div className="mt-2">
            <div className="flex justify-between">
              <div className="w-1/2 mr-2">
                <Input label="Vorname" inputType="text" />
              </div>
              <div className="w-1/2 ml-2">
                <Input label="Nachname" inputType="text" />
              </div>
            </div>
            <Input label="E-Mail-Adresse" inputType="email" />
            <Input
              label="Passwort"
              inputType="passoword"
              sublabel="mind. 8 Zeichen, ein Groß- & Kleinbuchstabe und eine Ziffer"
            />
            <div className="flex justify-between items-end md:flex-col">
              <div className="w-1/2 md:!w-full mr-2 md:mr-0">
                <label className={`text-sm font-bold inline-block mb-1`}>
                  Geburtsjahr
                  <span className="font-sm font-medium">
                    (nur für dich sichtbar)
                  </span>
                </label>
                <InputSelect options={option1} placeholder="" regYear />
              </div>
              <div className="w-1/2 md:!w-full ml-2 h-14 flex text-xs flex-col justify-between pt-2">
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
            <div className="flex md:flex-col items-center mt-8">
              <img
                className="w-60 md:w-full md:mr-0 mr-2 md:mb-4"
                src="/images/icons/recapcha.png"
              />
              <button className="w-1/2 md:!w-full ml-2 inline-block py-3 border-2 rounded-lg border-black bg-theme-gray-2 text-white text-xl font-bold ease-linear duration-300 hover:bg-black">
                Neu registrieren
              </button>
            </div>

            <Link href="/registration/user">
              <div className="flex items-center mt-6 cursor-pointer">
                <img
                  className="opacity-50 mr-2"
                  src="/images/icons/login-user.png"
                />
                <div>
                  <p>Du bist noch nicht registriert?</p>
                  <p className="text-black font-bold">Jetzt neu registrieren</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/2 relative lg:w-3/4 md:!w-full lg:mx-auto md:px-6 lg:mb-12">
          <img className="w-full h-full" src="/images/reg-car.jpg" />
          <div className="absolute text-white font-bold  w-full items-center bottom-8">
            <div className="flex flex-col w-72 mx-auto">
               Sind Sie Händler?
            <Link href="/registration/dealer">
              <a className="w-full md:w-60 bg-theme-yellow-2 text-black text-center p-4 rounded-lg border-2 border-black">Als Händler registrieren</a>
            </Link>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
