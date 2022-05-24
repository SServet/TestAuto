import InputSelect from "../ui/InputSelect";
import Pagination from "../ui/Pagination";
import DealerListCard from "./DealerListCard";

export default function DealerListContainer() {
  const option = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken", label: "Alle Marken" },
  ];
  return (
    <div className="bg-theme-gray-3">
    <div className="">
      <div className="w-10/12 mx-auto px-20 bg-white pt-6">
        <div className="flex justify-between items-center pb-6 py-6">
          <div className="w-4/5 flex items-center">
            <div className="mr-10">
              <h4 className="text-black font-bold">Autohändler:</h4>
              <p className="text-black">123456 Ergebnisse</p>
            </div>
            <div className="relative w-1/3 mr-4">
              <input
                className="w-full border border-slate-400 rounded-md px-4 py-1.5"
                placeholder="Welchen Händler suchen Sie?"
              />
              <button className="absolute right-2 top-2">
                <img src="/images/icons/dealer-search.png" />
              </button>
            </div>
            <div className="w-1/4 mr-4">
              <InputSelect
                styleType="row"
                options={option}
                placeholder="Alle Bundesländer"
              />
            </div>
            <button className="border border-slate-500 rounded md bg-gray-200 px-8 py-1.5 text-black font-bold">
              Jetzt suchen
            </button>
          </div>
          <div className="w-1/6 flex items-end justify-end text-sm text-gray-500 font-bold">
            <img src="/images/icons/dealer-location.png" />
            <p className="pb-2">zur Kartenansicht</p>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto bg-white pt-4">
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
        </div>
        <div>
          <Pagination />
        </div>
    </div>
    </div>
  );
}
