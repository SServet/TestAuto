import Link from "next/link";
import Input from "./ui/Input";

export default function ResetPassword() {
  return (
    <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
      <div className="relative max-w-ag-container w-10/12 lg:w-full mx-auto flex lg:flex-col items-center bg-user-input">
        <div className="w-1/2 md:!w-full lg:w-full lg:px-10 p-16 lg:pb-6">
          <Link href="/">
            <a className="absolute left-16 lg:left-10 top-6 lg:top-4 flex items-center text-black text-sm font-semibold opacity-60">
              <img className="w-6 pt-1 mr-2" src="/images/icons/go-back.png" />
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
            <button className="inline-block md:w-full px-20 py-4 border-2 rounded-lg border-black bg-gray-600 text-white text-2xl font-bold ease-linear duration-300 hover:bg-black mt-10 lg:mt-0">
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
        <div className="w-1/2 lg:w-full">
          <img className="w-full h-full" src="/images/reset-password-car.jpg" />
        </div>
      </div>
    </div>
  );
}
