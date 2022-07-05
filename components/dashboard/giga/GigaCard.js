import { useEffect, useState } from "react";

export default function GigaCard({
  title,
  desc,
  package1Title,
  package1Price,
  package2Title,
  package2Price,
  package3Title,
  package3Price,
  package4Title,
  package4Price,
}) {
  const [expanded, setExpanded] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selecedTitle, setSelecedTitle] = useState(package1Title);
  const [selecedPrice, setSelecedPrice] = useState(package1Price);
  const [adsModal, setAdsModal] = useState(false);

  useEffect(() => {
    if (selectedPackage == 1) {
      setSelecedTitle(package1Title);
      setSelecedPrice(package1Price);
    }
    if (selectedPackage == 2) {
      setSelecedTitle(package2Title);
      setSelecedPrice(package2Price);
    }
    if (selectedPackage == 3) {
      setSelecedTitle(package3Title);
      setSelecedPrice(package3Price);
    }
    if (selectedPackage == 4) {
      setSelecedTitle(package4Title);
      setSelecedPrice(package4Price);
    }
    if (selectedPackage) {
      setExpanded(false);
    }
  }, [selectedPackage]);

  return (
    <div
      className={`md:w-full group relative flex-1 p-4 rounded-md overflow-hidden text-theme-black-2 ${
        selectedPackage ? "bg-theme-gray-6" : "bg-white"
      } ease-linear duration-200 mt-4`}
    >
      <h3
        className={`text-15 font-bold ease-linear duration-200 ${
          selectedPackage ? "text-white" : ""
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-xs mb-2 ease-linear duration-200 ${
          selectedPackage ? "text-white" : ""
        }`}
      >
        {desc}
      </p>

      <div>
        <button
          onClick={() => setAdsModal(true)}
          className={`text-xs underline text-theme-blue ease-linear duration-200  ${
            selectedPackage ? "text-theme-yellow-2" : ""
          }`}
        >
          Wie sieht meine Anzeige aus?
        </button>
      </div>
      <button
        className={`text-xs font-bold mt-8 text-theme-blue mb-10 ease-linear duration-200 ${
          selectedPackage ? "text-theme-yellow-2" : ""
        }`}
      >
        Zum Warenkorb hinzufügen
      </button>
      <button
        onClick={() => setExpanded(true)}
        className={`absolute w-full flex items-center justify-between py-2 px-4 left-0 bottom-0 text-15 font-bold ease-linear duration-200 text-theme-black-2 ${
          selectedPackage ? "bg-theme-yellow-2" : "bg-theme-gray-5"
        } hover:bg-theme-yellow-2`}
      >
        <p>{selecedTitle}</p>
        <div className="flex items-center">
          <p className="mr-2">{selecedPrice} €</p>
          <img src="/images/icons/giga-card-expand.svg" />
        </div>
      </button>
      <div
        className={`absolute h-full w-full left-0 py-4 text-15 font-bold ease-linear duration-200 text-theme-black-2 bg-theme-yellow-2 ${
          expanded ? "bottom-0" : "-bottom-96"
        }`}
      >
        <div className="flex items-center justify-between pb-2 px-4">
          <h4>{title}</h4>
          <button onClick={() => setExpanded(false)}>
            <img src="/images/icons/giga-card-close.svg" />
          </button>
        </div>
        <div className="font-bold">
          {package1Title && (
            <button
              onClick={() => setSelectedPackage(1)}
              className="w-full font-bold flex items-center justify-between py-1 px-4 ease-linear duration-200 hover:bg-theme-gray-6 hover:text-theme-yellow-2 bg-theme-yellow-3"
            >
              <p>{package1Title}</p>
              <p>{package1Price} €</p>
            </button>
          )}
          {package2Title && (
            <button
              onClick={() => setSelectedPackage(2)}
              className="w-full font-bold flex items-center justify-between py-1 px-4 ease-linear duration-200 hover:bg-theme-gray-6 hover:text-theme-yellow-2 bg-theme-yellow-3"
            >
              <p>{package2Title}</p>
              <p>{package2Price} €</p>
            </button>
          )}
          {package3Title && (
            <button
              onClick={() => setSelectedPackage(3)}
              className="w-full font-bold flex items-center justify-between py-1 px-4 ease-linear duration-200 hover:bg-theme-gray-6 hover:text-theme-yellow-2 bg-theme-yellow-3"
            >
              <p>{package3Title}</p>
              <p>{package3Price} €</p>
            </button>
          )}
          {package4Title && (
            <button
              onClick={() => setSelectedPackage(4)}
              className="w-full font-bold flex items-center justify-between py-1 px-4 ease-linear duration-200 hover:bg-theme-gray-6 hover:text-theme-yellow-2 bg-theme-yellow-3"
            >
              <p>{package4Title}</p>
              <p>{package4Price} €</p>
            </button>
          )}
        </div>
      </div>
      {adsModal ? (
        <div className="fixed flex items-center justify-center z-10 top-0 left-0 h-screen w-screen">
          <div
            onClick={() => setAdsModal(false)}
            className="absolute z-10 top-0 left-0 h-full w-full bg-black bg-opacity-60"
          ></div>
          <div className="lg:p-4">
            <img
              className="relative z-30"
              src="/images/dealer-register-close.png"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
