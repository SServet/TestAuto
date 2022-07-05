import Link from "next/link";
import FooterLinks from "./FooterLinks";

export default function Footer() {
  const links1 = [
    { linkTitle: "ANMELDEN", url: "#" },
    { linkTitle: "REGISTRIEREN", url: "#" },
    { linkTitle: "VORTEILE", url: "#" },
    { linkTitle: "PREISE", url: "#" },
    { linkTitle: "HILFE", url: "#" },
    { linkTitle: "WERBUNG", url: "#" },
  ];
  const links2 = [
    { linkTitle: "KONTAKT", url: "#" },
    { linkTitle: "JOBS", url: "#" },
    { linkTitle: "PRESSE", url: "#" },
    { linkTitle: "AGB", url: "#" },
    { linkTitle: "DSGVO", url: "#" },
    { linkTitle: "IMPRESSUM", url: "#" },
  ];
  const links3 = [
    { linkTitle: "FAHRZEUG HÄNDLER", url: "#" },
    { linkTitle: "KREDITVERMITTLER", url: "#" },
    { linkTitle: "VERSICHERUNGSMAKLER", url: "#" },
    { linkTitle: "ZULASSUNGSSTELLEN", url: "#" },
    { linkTitle: "WERKSTÄTTEN", url: "#" },
    { linkTitle: "AUTOAUFBEREITUNG", url: "#" },
  ];
  const links4 = [
    { linkTitle: "NOVA RECHNER", url: "#" },
    { linkTitle: "DIGITALE VIGNETTE", url: "#" },
    { linkTitle: "AUTOMARKEN", url: "#" },
    { linkTitle: "FAHRSCHULEN", url: "#" },
    { linkTitle: "KFZ VORSCHRIFTEN", url: "#" },
    { linkTitle: "KFZ KAUFVERTRAG", url: "#" },
  ];
  const links5 = [
    { linkTitle: "EGIGANT", url: "#" },
    { linkTitle: "AUTOGIGANT", url: "#" },
    { linkTitle: "IMMOGIGANT", url: "#" },
    { linkTitle: "GASTROGIGANT", url: "#" },
    { linkTitle: "HOSTINGGIGANT", url: "#" },
    { linkTitle: "GIGANT SHOP", url: "#" },
  ];
  return (
    <footer className="bg-theme-gray-3 lg:px-6 md:!px-0">
      <div className="w-10/12 max-w-ag-container lg:w-full mx-auto">
        <div className="flex md:flex-col justify-between bg-theme-gray-4 border-t border-theme-gray-5 p-6">
          <FooterLinks title="HÄNDLERBEREICH" links={links1} />
          <FooterLinks title="ÜBER UNS" links={links2} />
          <FooterLinks title="KOOPERATIONEN" links={links3} />
          <FooterLinks title="LINKS" links={links4} />
          <FooterLinks title="GIGANT WORLD" links={links5} />
        </div>
        <div className="flex justify-between md:flex-col lg:justify-around items-center xl:items-center px-6 py-4 md:py-8 bg-black">
          <div className="flex w-1/2 lg:w-auto md:mr-auto items-end lg:flex-col xl:items-center lg:items-start">
            <Link href="/">
              <div className="md:w-full">
                <img
                  className="cursor-pointer w-60 lg:mr-auto xl:w-32 2xl:w-40"
                  src="/images/icons/footer-logo.png"
                />
                <p className="text-xs font-bold text-white mt-2">
                  A COMPANY OF THE GIGANT GROUP
                </p>
              </div>
            </Link>
            <div className="flex flex-col justify-between lg:border-0 border-l border-footer-border lg:mr-auto lg:pt-4 ml-2 pl-2 text-white opacity-80 text-xs lg:ml-0 lg:pl-0">
              <div className="mb-4 xl:mb-2">
                <p>Aktuell. Gigantisch. Kostenlos.</p>
                <p>Newsletter abonnieren und immer informiert bleiben.</p>
              </div>
              <div className="mt-4 xl:mt-2">
                <input
                  className="p-2 bg-theme-gray-6 mr-3 rounded-md text-white placeholder:text-theme-gray-3"
                  placeholder="Deine E-Mail Adresse.."
                />
                <button className="p-2 rounded-md bg-theme-gray-3 border border-theme-gray-3 text-theme-gray-3">
                  ABONNIEREN
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-1/2 lg:w-auto md:mr-auto md:mt-10 pl-10 lg:pl-0 lg:flex-col lg:items-start">
            <div className="text-sm lg:mb-8 md:!mb-0 text-white opacity-80 xl:text-xs">
              <p>JETZT KOSTENLOS HERUNTERLADEN</p>
              <div className="flex mt-2 items-center">
                <img
                  className="w-32 mr-4 xl:w-24"
                  src="/images/icons/google-play.png"
                />
                <img
                  className="w-32 xl:w-24"
                  src="/images/icons/app-store.png"
                />
              </div>
            </div>
            <div className="md:items-start md:mt-8 mt-1">
              <img src="/images/icons/slogan.png" />
              <div className="flex mt-4">
                <button className="w-8 xl:w-8 rounded-full overflow-hidden opacity-40 hover:opacity-100 ease-linear duration-300">
                  <img src="/images/icons/facebook.png" />
                </button>
                <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden opacity-40 hover:opacity-100 ease-linear duration-300">
                  <img src="/images/icons/instagram.png" />
                </button>
                <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden opacity-40 hover:opacity-100 ease-linear duration-300">
                  <img src="/images/icons/youtube.png" />
                </button>
                <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden opacity-40 hover:opacity-100 ease-linear duration-300">
                  <img src="/images/icons/tiktok.png" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 pb-2 pt-1 text-white text-xs bg-black">
          <p>
            © COPYRIGHT 2022 | ALL RIGHTS RESERVED. IN COOPERATION WITH HGMEDIA
            ADVERTISING AGENCY.
          </p>
        </div>
      </div>
    </footer>
  );
}
