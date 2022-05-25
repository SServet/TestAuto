import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-theme-gray-3 lg:px-6 md:!px-0">
      <div className="w-10/12 lg:w-full mx-auto shadow-1">
        <div className="flex md:flex-wrap md:leading-5 items-center justify-center py-4 bg-theme-gray-3 text-sm lg:text-xs text-white">
          <p className="font-bold mr-2">HÄNDLER:</p>
          <p>ANMELDEN</p>
          <span className="inline-block mx-2">|</span>
          <Link href="/dealer">
          <p>REGISTRIEREN</p>
          </Link>
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
        <div className="flex justify-between md:flex-col lg:justify-around items-end xl:items-center px-6 py-4 md:py-8 bg-black">
          <div className="flex w-1/2 lg:w-auto md:mr-auto items-end lg:flex-col xl:items-center lg:items-start">
            <Link href="/">
              <img
                className="cursor-pointer w-60 lg:mr-auto xl:w-32 2xl:w-40"
                src="/images/icons/footer-logo.png"
              />
            </Link>
            <div className="flex flex-col justify-center lg:border-0 border-l border-white lg:mr-auto lg:pt-4 ml-2 pl-2 text-white opacity-80 text-sm lg:ml-0 lg:pl-0">
              <div className="mb-4 xl:mb-2">
                <p>UBER UNS | PRESSE | SITEMAP</p>
                <p>AGB | DSGVO | IMPRESSUM | KONTAKT</p>
              </div>
              <div className="mt-4 xl:mt-2">
                <p>@Copyright 2022 | ALLE Rechte vorbehalte.</p>
                <p>AUTOGIGANT in association with HGMEDIA</p>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between w-1/2 lg:w-auto md:mr-auto md:mt-10 pl-10 lg:pl-0 lg:flex-col lg:items-start">
            <div className="text-sm text-white opacity-80 xl:text-xs">
              <p>JETZT KOSTENLOS HERUNTERLADEN</p>
              <div className="flex mt-2  items-center">
                <img
                  className="mr-4 xl:w-24"
                  src="/images/icons/google-play.png"
                />
                <img className="xl:w-24" src="/images/icons/app-store.png" />
              </div>
            </div>
            <div className="md:items-start md:mt-8">
              <img src="/images/icons/slogan.png" />
              <div className="flex mt-2">
                <button className="w-12 xl:w-8 rounded-full overflow-hidden hover:opacity-70 ease-linear duration-300">
                  <img src="/images/icons/facebook.png" />
                </button>
                <button className="w-12 xl:w-8 ml-3 rounded-full overflow-hidden hover:opacity-70 ease-linear duration-300">
                  <img src="/images/icons/instagram.png" />
                </button>
                <button className="w-12 xl:w-8 ml-3 rounded-full overflow-hidden hover:opacity-70 ease-linear duration-300">
                  <img src="/images/icons/youtube.png" />
                </button>
                <button className="w-12 xl:w-8 ml-3 rounded-full overflow-hidden hover:opacity-70 ease-linear duration-300">
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
