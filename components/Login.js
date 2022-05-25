import Link from "next/link";
import Input from "./ui/Input";

export default function Login() {
  return (
    <div className="bg-theme-gray-3 overflow-hidden">
      <div className="w-10/12 md:w-full mx-auto flex items-center bg-user-input">
        <div className="w-1/2 lg:w-3/4 md:!w-full lg:mx-auto md:p-10 p-16">
          <h3 className="text-2xl text-gray-500 font-bold">Einloggen</h3>
          <p className="mt-1">Um fortzufahren, musst du eingeloggt sein.</p>
          <div className="mt-6">
            <Input label="E-Mail-Adresse" inputType="email" />
            <Input label="Passwort" inputType="password" />
            <div className="flex justify-between mt-8">
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
                <a className="text-black">Passwort vergessen?</a>
              </Link>
            </div>
            <button className="inline-block px-20 py-4 border-2 rounded-lg border-black bg-gray-600 text-white text-2xl font-bold ease-linear duration-300 hover:bg-black mt-10">
              Einloggen
            </button>
            <Link href="registration">
              <div className="flex items-center mt-6">
                <img className="opacity-50 mr-2" src="/images/icons/login-user.png" />
                <div>
                  <p>Du bist noch nicht registriert?</p>
                  <p className="text-black font-bold">Jetzt neu registrieren</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-1/2 lg:hidden">
            <img className="w-full" src="/images/login-car.jpg" />
        </div>
      </div>
    </div>
  );
}
