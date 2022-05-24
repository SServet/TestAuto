import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-theme-gray-3">
      <div className="w-10/12 mx-auto shadow-1">
        <div className="flex items-center justify-center py-4 bg-theme-gray-3 text-sm text-white">
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
        <div className="flex justify-between items-end px-6 py-4 bg-black">
          <div className="flex w-1/2">
            <Link href="/">
              <img className="cursor-pointer w-72 flex-1" src="/images/icons/footer-logo.png" />
            </Link>
            <div className="flex flex-col justify-center border-l border-white ml-2 pl-2 text-white opacity-80 text-sm">
              <div className="mb-4">
                <p>UBER UNS | PRESSE | SITEMAP</p>
                <p>AGB | DSGVO | IMPRESSUM | KONTAKT</p>
              </div>
              <div className="mt-4">
                <p>@Copyright 2022 | ALLE Rechte vorbehalte.</p>
                <p>AUTOGIGANT in association with HGMEDIA</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-white opacity-80">
            <p>JETZT KOSTENLOS HERUNTERLADEN</p>
            <div className="flex mt-2">
              <img className="mr-4" src="/images/icons/google-play.png" />
              <img src="/images/icons/app-store.png" />
            </div>
          </div>
          <div className="">
            <img src="/images/icons/slogan.png" />
            <div className="flex mt-2">
            <button className="w-12 h-12 rounded-full overflow-hidden hover:opacity-70 ease-linear duration-300">
                <img src="/images/icons/facebook.png" />
              </button>
              <button className="w-12 h-12 ml-3 rounded-full overflow-hidden hover:opacity-70 ease-linear duration-300">
                <img src="/images/icons/instagram.png" />
              </button>
              <button className="w-12 h-12 ml-3 rounded-full overflow-hidden hover:opacity-70 ease-linear duration-300">
                <img src="/images/icons/youtube.png" />
              </button>
              <button className="w-12 h-12 ml-3 rounded-full overflow-hidden hover:opacity-70 ease-linear duration-300">
                <img src="/images/icons/tiktok.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
