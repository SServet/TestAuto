import { useEffect, useState } from "react";
import ListCard from "./Card";
import Pagination from "./Pagination";

export default function DealerListContainer() {
  const [cardView, setCardView] = useState("grid");
  const [sidebar, setSidebar] = useState(null);
  const [filterSlide, setFilterSlide] = useState(null);

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setCardView("grid");
    }
    if (window.innerWidth <= 767) {
      setFilterSlide("rating");
    }
  }, []);

  return (
    <div className="bg-theme-gray-3">
      <div className="lg:px-6 md:!px-0">
        <div className="w-10/12 lg:w-full max-w-ag-container mx-auto lg:pt-4 lg:px-4 px-8 bg-white pt-8 pb-12">
          <div className="w-full mb-8 lg:mb-4">
            <img src="/images/details-ad-1.png" className="w-full" />
          </div>
          <div className="flex md:flex-col">
            {/* LEFT
             SIDE
             CONTENTS */}
            <div className="w-250 md:!w-full lg:w-224">
              {filterSlide === 'checkboxes' ? null : 
              <div className="">
                <div className="p-4 rounded bg-theme-gray-4 md:rounded-b-none text-theme-black-2">
                  <h4 className="text-xl font-bold">1.212</h4>
                  <p className="text-sm lg:text-xs">REGISTRIERTE AUTOHÄNDLER</p>
                </div>
                <div className="mt-8 md:!mt-0 lg:mt-4 p-4 md:rounded-none md:bg-theme-gray-5 rounded bg-theme-gray-4 text-theme-black-2">
                  <h4 className="text-sm font-bold md:text-white">HÄNDLER SUCHEN</h4>
                  <div className="relative mt-2">
                    <input
                      className="w-full pl-10 pr-2 py-4 text-xs rounded border-2 border-theme-gray-2"
                      placeholder="FIRMENNAME"
                    />
                    <img
                      className="absolute top-4 left-3"
                      src="/images/icons/sd-search-icon.png"
                    />
                  </div>
                </div>
                <div className="mt-8 lg:mt-4 md:!mt-0 p-4 rounded  md:rounded-t-none bg-theme-gray-4 text-theme-black-2">
                  <h4 className="text-sm font-bold border-b-2 pb-1 border-theme-gray-2">
                    FILTERN NACH BEWERTUNG
                  </h4>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <div className="w-1/6">
                        <input
                          className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          name="5star"
                          value="5"
                          id="5star"
                        />
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                        </div>
                        <p className="text-xs ml-4">(58)</p>
                      </label>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-1/6">
                        <input
                          className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          name="4star"
                          value="4"
                          id="4star"
                        />
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="4star"
                      >
                        <div className="w-full flex justify-between">
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-g.png" />
                        </div>
                        <p className="text-xs ml-4">(38)</p>
                      </label>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-1/6">
                        <input
                          className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          name="3star"
                          value="3"
                          id="3star"
                        />
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="3star"
                      >
                        <div className="w-full flex justify-between">
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-g.png" />
                          <img src="/images/icons/sd-star-g.png" />
                        </div>
                        <p className="text-xs ml-4">(21)</p>
                      </label>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-1/6">
                        <input
                          className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          name="2star"
                          value="2"
                          id="2star"
                        />
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="2star"
                      >
                        <div className="w-full flex justify-between">
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-g.png" />
                          <img src="/images/icons/sd-star-g.png" />
                          <img src="/images/icons/sd-star-g.png" />
                        </div>
                        <p className="text-xs ml-4">(18)</p>
                      </label>
                    </div>
                    <div className="flex items-center mt-4">
                      <div className="w-1/6">
                        <input
                          className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                          type="checkbox"
                          name="1star"
                          value="1"
                          id="1star"
                        />
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="1star"
                      >
                        <div className="w-full flex justify-between">
                          <img src="/images/icons/sd-star-y.png" />
                          <img src="/images/icons/sd-star-g.png" />
                          <img src="/images/icons/sd-star-g.png" />
                          <img src="/images/icons/sd-star-g.png" />
                          <img src="/images/icons/sd-star-g.png" />
                        </div>
                        <p className="text-xs ml-4">(10)</p>
                      </label>
                    </div>
                  </div>
                  <button className="w-full flex justify-center py-3 mt-8 rounded-md bg-theme-yellow-2 border-2 border-theme-gray-3">
                    <img
                      className="mr-2"
                      src="/images/icons/filter-delete.png"
                    />
                    FILTER LÖSCHEN
                  </button>
                </div>
              </div>}
              {filterSlide === 'rating' ? null : 
              <div className="mt-8 lg:mt-4 p-4 rounded bg-theme-gray-4 text-theme-black-2">
                <h4 className="text-sm font-bold border-theme-gray-2">
                  FILTERN NACH STADT
                </h4>
                <div className="relative mt-2">
                  <input
                    className="w-full pl-10 pr-2 py-4 text-xs rounded border-2 border-theme-gray-2"
                    placeholder="SUCHEN"
                  />
                  <img
                    className="absolute top-4 left-3"
                    src="/images/icons/sd-search-icon.png"
                  />
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="w-1/6">
                      <input
                        className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        name="Wien"
                        value="Wien"
                        id="Wien"
                      />
                    </div>
                    <label
                      className="w-5/6 flex justify-between"
                      htmlFor="Wien"
                    >
                      Wien
                      <p className="text-xs ml-4">(58)</p>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-1/6">
                      <input
                        className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        name="Graz"
                        value="Graz"
                        id="Graz"
                      />
                    </div>
                    <label
                      className="w-5/6 flex justify-between"
                      htmlFor="Graz"
                    >
                      Graz
                      <p className="text-xs ml-4">(38)</p>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-1/6">
                      <input
                        className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        name="Linz"
                        value="Linz"
                        id="Linz"
                      />
                    </div>
                    <label
                      className="w-5/6 flex justify-between"
                      htmlFor="Linz"
                    >
                      Linz
                      <p className="text-xs ml-4">(21)</p>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-1/6">
                      <input
                        className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        name="Salzburg"
                        value="Salzburg"
                        id="Salzburg"
                      />
                    </div>
                    <label
                      className="w-5/6 flex justify-between"
                      htmlFor="Salzburg"
                    >
                      Salzburg
                      <p className="text-xs ml-4">(18)</p>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-1/6">
                      <input
                        className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        name="Klagenfurt"
                        value="Klagenfurt"
                        id="Klagenfurt"
                      />
                    </div>
                    <label
                      className="w-5/6 flex justify-between"
                      htmlFor="Klagenfurt"
                    >
                      Klagenfurt
                      <p className="text-xs ml-4">(10)</p>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-1/6">
                      <input
                        className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        name="Villach"
                        value="Villach"
                        id="Villach"
                      />
                    </div>
                    <label
                      className="w-5/6 flex justify-between"
                      htmlFor="Villach"
                    >
                      Villach
                      <p className="text-xs ml-4">(21)</p>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-1/6">
                      <input
                        className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        name="Wels"
                        value="Wels"
                        id="Wels"
                      />
                    </div>
                    <label
                      className="w-5/6 flex justify-between"
                      htmlFor="Wels"
                    >
                      Wels
                      <p className="text-xs ml-4">(18)</p>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <div className="w-1/6">
                      <input
                        className="form-check-input appearance-none h-5 w-5 border border-theme-gray rounded checked:bg-theme-gray-5 checked:border-theme-gray-2 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        type="checkbox"
                        name="Pölten"
                        value="Pölten"
                        id="Pölten"
                      />
                    </div>
                    <label
                      className="w-5/6 flex justify-between"
                      htmlFor="Pölten"
                    >
                      St. Pölten
                      <p className="text-xs ml-4">(10)</p>
                    </label>
                  </div>
                </div>
                <button className="w-full flex justify-center py-3 mt-8 rounded-md bg-white border-2 border-theme-gray-3">
                  <img className="mr-2" src="/images/icons/filter-delete.png" />
                  FILTER LÖSCHEN
                </button>
              </div>}
              <div className="hidden md:flex justify-center p-6">
                  <button onClick={() => setFilterSlide('rating')} className={`h-3 w-12 mx-1 border rounded-md border-theme-gray-2 ${filterSlide == 'rating' ? 'bg-theme-gray-5' : ''}`}></button>
                  <button onClick={() => setFilterSlide('checkboxes')} className={`h-3 w-12 mx-1 border rounded-md border-theme-gray-2 ${filterSlide == 'checkboxes' ? 'bg-theme-gray-5' : ''}`}></button>
                </div>
            </div>
            {/* RIGHT
             SIDE
             CONTENTS */}
            <div className="flex-1 lg:w-auto ml-8 lg:ml-4 md:!ml-0 md:mt-4">
              <div className="p-4 rounded bg-theme-gray-4 text-theme-black-2">
                <div className="flex text-xs text-10">
                  <div className="flex items-center">
                    ANZEIGEN:
                    <div className="relative">
                      <select className="ml-2 outline-none appearance-none  bg-transparent rounded border-2 py-2 pl-6 pr-8 border-theme-gray-2">
                        <option>12</option>
                        <option>16</option>
                        <option>20</option>
                      </select>
                      <img
                        className="absolute top-4 -mt-0.5 right-3"
                        src="/images/icons/sd-select-arrow.png"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end flex-1">
                    <p className="lg:hidden">SORTIEREN NACH :</p>
                    <div className="relative">
                      <select className="ml-2 outline-none appearance-none  bg-transparent rounded border-2 py-2 pl-6 pr-8 border-theme-gray-2">
                        <option>BESTE BEWERTUNG</option>
                        <option>BESTE BEWERTUNG</option>
                        <option>BESTE BEWERTUNG</option>
                      </select>
                      <img
                        className="absolute top-4 -mt-0.5 right-3"
                        src="/images/icons/sd-select-arrow.png"
                      />
                    </div>
                  </div>
                  <div className="flex items-center ml-24 lg:hidden">
                    <button onClick={() => setCardView("grid")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          id="grid_view_FILL0_wght500_GRAD0_opsz48"
                          d="M5.7,14.88V5.7h9.18v9.18Zm0,10.82V16.52h9.18V25.7ZM16.52,14.88V5.7H25.7v9.18Zm0,10.82V16.52H25.7V25.7ZM7.558,13.022h5.464V7.558H7.558Zm10.82,0h5.464V7.558H18.378Zm0,10.82h5.464V18.378H18.378Zm-10.82,0h5.464V18.378H7.558ZM18.378,13.022ZM18.378,18.378ZM13.022,18.378ZM13.022,13.022Z"
                          transform="translate(-5.7 -5.7)"
                          fill={cardView === "grid" ? "#fbb900" : "#555"}
                        />
                      </svg>
                    </button>
                    <button
                      className="ml-4"
                      onClick={() => setCardView("list")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          id="view_list_FILL0_wght500_GRAD0_opsz48"
                          d="M5.8,29.7V9.7h20v20ZM7.668,15.784h2.857V12.078H7.668Zm4.505,0H23.932V12.078H12.174Zm0,5.734H23.932V17.882H12.174Zm0,5.769H23.932V23.616H12.174Zm-4.505,0h2.857V23.616H7.668Zm0-5.769h2.857V17.882H7.668Z"
                          transform="translate(-5.8 -9.7)"
                          fill={cardView === "list" ? "#fbb900" : "#555"}
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className={`flex ${
                  cardView == "grid" ? "justify-between flex-wrap" : "flex-col"
                }`}
              >
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                {cardView == "list" ? (
                  <div className="w-full pt-8">
                    <img className="w-full" src="/images/details-ad-2.png" />
                  </div>
                ) : null}
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                {cardView == "list" ? (
                  <div className="w-full pt-8">
                    <img className="w-full" src="/images/details-ad-2.png" />
                  </div>
                ) : null}
                {cardView == "grid" ? (
                  <div className="w-full pt-8">
                    <img className="w-full" src="/images/details-ad-2.png" />
                  </div>
                ) : null}
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
              </div>
            </div>
          </div>
          {/* 
              PAGINATION
            */}
          <Pagination />
        </div>
      </div>
    </div>
  );
}
