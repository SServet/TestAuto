import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-theme-gray-3 lg:px-6 md:!px-0">
      <div className="w-10/12 max-w-ag-container lg:w-full mx-auto shadow-1">
        <div className="flex md:flex-wrap md:leading-5 items-center justify-center py-4 bg-theme-gray-3 text-sm lg:text-xs text-white">
          <p className="font-bold mr-2">HÄNDLER:</p>
          <p>ANMELDEN</p>
          <span className="inline-block mx-2">|</span>
          <p>REGISTRIEREN</p>
          <span className="inline-block mx-2">|</span>
          <p>VORTEILE</p>
          <span className="inline-block mx-2">|</span>
          <p>PARTNER</p>
          <span className="inline-block mx-2">|</span>
          <p>HILFE</p>
          <span className="inline-block mx-2">|</span>
          <p>RATGEBER</p>
          <span className="inline-block mx-2">|</span>
          <p>WERBUNG AUF AUTOGIGANT</p>
        </div>
        <div className="flex justify-between md:flex-col lg:justify-around items-center xl:items-center px-6 py-4 md:py-8 bg-black">
          <div className="flex w-1/2 lg:w-auto md:mr-auto items-end lg:flex-col xl:items-center lg:items-start">
            <Link href="/">
              <div>
                <img
                  className="cursor-pointer w-60 lg:mr-auto xl:w-32 2xl:w-40"
                  src="/images/icons/footer-logo.png"
                />
                <p className="text-xs font-bold text-white mt-2">A COMPANY OF THE GIGANT GROUP</p>
              </div>
            </Link>
            <div className="flex flex-col justify-center lg:border-0 border-l border-footer-border lg:mr-auto lg:pt-4 ml-2 pl-2 text-white opacity-80 text-sm lg:ml-0 lg:pl-0">
              <div className="mb-4 xl:mb-2">
                <p>UBER UNS | PRESSE | SITEMAP</p>
                <p>AGB | DSGVO | IMPRESSUM | KONTAKT</p>
              </div>
              <div className="mt-4 xl:mt-2">
                <p>@Copyright 2022 | ALLE Rechte vorbehalten.</p>
                <p>AUTOGIGANT in association with HGMEDIA</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-1/2 lg:w-auto md:mr-auto md:mt-10 pl-10 lg:pl-0 lg:flex-col lg:items-start">
            <div className="text-sm lg:mb-8 md:!mb-0 text-white opacity-80 xl:text-xs">
              <p>JETZT KOSTENLOS HERUNTERLADEN</p>
              <div className="flex mt-2  items-center">
                <img
                  className="w-32 mr-4 xl:w-24"
                  src="/images/icons/google-play.png"
                />
                <img className="w-32 xl:w-24" src="/images/icons/app-store.png" />
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
      </div>
    </footer>
  );
}
