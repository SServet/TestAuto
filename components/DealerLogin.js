import Link from "next/link";
import Input from "./ui/Input";

export default function DealerLogin() {
  return (
    <>
      <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
        <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-4">
          <div className="w-1/2 lg:w-full mr-2 rounded-md bg-theme-gray-4 flex flex-col text-theme-black-2 text-15 md:text-xs lg:flex-col">
            <div className="p-6">
              <div className="mt-2">
              <h3 className="text-2xl md:text-xl font-bold">Händler Login</h3>
              <p className="mt-1">Um fortzufahren, musst du eingeloggt sein.</p>
            </div>

            <div className="mt-4">
              <Input placeholder="E-Mail-Adresse" inputType="email" />
              <Input placeholder="Passwort" inputType="password" />
              <div className="flex justify-between mt-2">
                <div className="flex items-center">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="stayLoggedIn"
                    name="stayLoggedIn"
                    value="stayLoggedIn"
                  />
                  <label htmlFor="stayLoggedIn">Eingeloggt bleiben</label>
                </div>
                <Link href="/reset-password">
                  <a className="text-theme-blue">Passwort vergessen?</a>
                </Link>
              </div>
              <div className="flex lg:flex-col lg:items-start items-end justify-between mt-6">
                <button className="inline-block px-14 py-3 border-2 rounded-lg border-theme-gray-3 bg-theme-gray-5 text-theme-black-2 text-lg font-bold ease-linear duration-300 hover:bg-black hover:text-white">
                  Einloggen
                </button>
                <Link href="/registration/user">
                  <div className="flex items-center mt-6 cursor-pointer">
                    <img
                      className="opacity-50 mr-2"
                      src="/images/icons/login-user.png"
                    />
                    <div>
                      <p>Du bist noch nicht registriert?</p>
                      <p className="text-theme-blue font-bold">
                        Jetzt neu registrieren
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            </div>
          </div>
          <div className="relative w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-2">
            <img className="w-full" src="/images/login-dealer.png" />
            <div className="absolute top-8 left-8">
              <p className="px-2 table text-black text-2xl bg-theme-yellow-2  font-bold">Mehr</p>
              <p className="px-2 table mt-1 text-black text-2xl bg-theme-yellow-2 font-bold">als nur eine</p>
              <p className="px-2 table mt-1 text-black text-2xl bg-theme-yellow-2 font-bold">Auto Suchmaschine.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
