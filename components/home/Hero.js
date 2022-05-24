import InputSelect from "../ui/InputSelect";

export default function Hero() {
  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  const option2 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  const option3 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  const option4 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  return (
    <div className="bg-theme-gray-3">
      <div className="w-10/12 mx-auto relative">
        <img className="w-full" src="/images/hero.jpg" />
        <div className="w-2/3 absolute right-0 bottom-0 px-14">
          <div className="text-4xl font-bold px-2 mb-4">
            <h2 className="text-theme-yellow-2">EINFACH</h2>
            <h2 className="text-white">
              GIGANTISCH
              <span className="inline-block h-1.5 w-1.5 bg-theme-yellow ml-1"></span>
            </h2>
          </div>

          <div className="flex justify-between text-center uppercase text-white">
            <div className="px-2">
              <img className="mx-auto" src="/images/cars/limo.png" />
              <p>limousine</p>
            </div>
            <div>
              <img className="mx-auto" src="/images/cars/suv.png" />
              <p>suv gelÄndewagen</p>
            </div>
            <div>
              <img className="mx-auto" src="/images/cars/kombi.png" />
              <p>kombi family van</p>
            </div>
            <div>
              <img className="mx-auto" src="/images/cars/sports.png" />
              <p>sportwagen coupË</p>
            </div>
            <div>
              <img className="mx-auto" src="/images/cars/cabrio.png" />
              <p>carbio roadster</p>
            </div>
            <div>
              <img className="mx-auto" src="/images/cars/klein.png" />
              <p>kleinbus</p>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="w-1/4 pl-2">
              <InputSelect options={option1} placeholder={option1[1].label} />
            </div>
            <div className="w-1/4 pl-4">
              <InputSelect options={option2} placeholder={option2[1].label} />
            </div>
            <div className="w-1/4 pl-4">
              <InputSelect options={option3} placeholder={option3[1].label} />
            </div>
            <div className="w-1/4 pl-4">
              <InputSelect options={option4} placeholder={option4[1].label} />
            </div>
          </div>
          <div className="flex items-center mt-6 mb-2 pl-2 justify-between">
              <button className="w-1/4 text-left text-white underline text-xl">Erweiterte Suche</button>
              <button className="w-1/4 pl-4 text-center text-white underline text-xl">Filter zurücksetzen</button>
              <div className="w-4"></div>
              <button className="w-1/2 text-center py-3 border-black border-2 rounded-lg font-bold text-xl text-black bg-theme-yellow">Suchen</button>
          </div>
        </div>
      </div>
    </div>
  );
}
