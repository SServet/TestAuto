import Link from "next/link";
import Router from "next/router";
import Input from "./ui/Input";

export default function ResetPassword() {
  return (
    <div className="bg-theme-gray-3 overflow-hidden">
      <div className="relative w-10/12 mx-auto flex items-center bg-user-input">
        <div className="w-1/2 p-16">
          <Link href="/">
            <a className="absolute left-16 top-10 flex items-center text-black text-sm font-semibold opacity-60">
              <img className="pt-1 mr-2" src="/images/icons/go-back.png" />
              zurück zur Startseite
            </a>
          </Link>
          <h3 className="text-2xl text-gray-500 font-bold">
            Passwort vergessen
          </h3>
          <p className="mt-1">Bitte gib hier deine E-Mail-Adresse ein.</p>
          <p>mit der du bei AUTOGIGANT registriert bist.</p>
          <p>
            An diese E-Mail-Adresse senden wir den Link zum Ändern des
            Passworts.
          </p>
          <div className="mt-6">
            <Input label="E-Mail-Adresse" inputType="email" />
            <button className="inline-block px-20 py-4 border-2 rounded-lg border-black bg-gray-600 text-white text-2xl font-bold ease-linear duration-300 hover:bg-black mt-10">
              Senden
            </button>
            <Link href="registration">
              <div className="flex items-center mt-6">
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
        <div className="w-1/2">
          <img className="w-full h-full" src="/images/reset-password-car.jpg" />
        </div>
      </div>
    </div>
  );
}
