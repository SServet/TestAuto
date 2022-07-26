import { useState } from "react";
import Pagination from "../../dealer/list/Pagination";
import AdsCard from "./AdsCard";

export default function MyAds() {
  const [cardView, setCardView] = useState("list");
  const [cards, setCards] = useState(5);

  return (
    <>
      <div className="flex-1">
        <div className="rounded-md bg-theme-gray-4 p-4">
          <div className="border-b border-theme-gray-2 pb-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl xl:text-2xl font-bold text-theme-black-2">
                MEINE INSERATE
              </h2>
              {cards ? (
                <button className="flex items-center text-13 font-bold text-theme-blue">
                  <p className="mr-2">INSERAT AUFGEBEN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Icon_awesome-arrow-circle-right"
                      data-name="Icon awesome-arrow-circle-right"
                      d="M10.563.563a10,10,0,1,1-10,10A10,10,0,0,1,10.563.563ZM9.4,6.353l3.044,2.919H5.079a.965.965,0,0,0-.968.968v.645a.965.965,0,0,0,.968.968h7.363L9.4,14.772a.969.969,0,0,0-.016,1.383l.444.44a.964.964,0,0,0,1.367,0l5.351-5.347a.964.964,0,0,0,0-1.367L11.192,4.526a.964.964,0,0,0-1.367,0l-.444.44A.974.974,0,0,0,9.4,6.353Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#0067b8"
                    />
                  </svg>
                </button>
              ) : null}
            </div>
            <div className="flex items-end xl:items-center justify-between text-xs xl:text-10">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  className="xl:w-6"
                >
                  <g
                    id="Group_708"
                    data-name="Group 708"
                    transform="translate(-1274 -543)"
                  >
                    <rect
                      id="Rectangle_1115"
                      data-name="Rectangle 1115"
                      width="60"
                      height="60"
                      rx="5"
                      transform="translate(1274 543)"
                      fill="#c3c3c3"
                    />
                    <path
                      id="list_FILL0_wght400_GRAD0_opsz48"
                      d="M20.167,17.265V14H50.093v3.265Zm0,9.25V23.25H50.093v3.265Zm0,9.25V32.5H50.093v3.265Z"
                      transform="translate(1274.562 548.117)"
                      fill="#f1f2f3"
                    />
                    <g
                      id="Path_959"
                      data-name="Path 959"
                      transform="translate(1284 579)"
                      fill="#f1f2f3"
                    >
                      <path
                        d="M 3 5.5 C 1.621500015258789 5.5 0.5 4.378499984741211 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 C 4.378499984741211 0.5 5.5 1.621500015258789 5.5 3 C 5.5 4.378499984741211 4.378499984741211 5.5 3 5.5 Z"
                        stroke="none"
                      />
                      <path
                        d="M 3 1 C 1.897200107574463 1 1 1.897200107574463 1 3 C 1 4.102799892425537 1.897200107574463 5 3 5 C 4.102799892425537 5 5 4.102799892425537 5 3 C 5 1.897200107574463 4.102799892425537 1 3 1 M 3 0 C 4.65684986114502 0 6 1.34315013885498 6 3 C 6 4.65684986114502 4.65684986114502 6 3 6 C 1.34315013885498 6 0 4.65684986114502 0 3 C 0 1.34315013885498 1.34315013885498 0 3 0 Z"
                        stroke="none"
                        fill="#f1f2f3"
                      />
                    </g>
                    <g
                      id="Path_958"
                      data-name="Path 958"
                      transform="translate(1284 570)"
                      fill="#f1f2f3"
                    >
                      <path
                        d="M 3 5.5 C 1.621500015258789 5.5 0.5 4.378499984741211 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 C 4.378499984741211 0.5 5.5 1.621500015258789 5.5 3 C 5.5 4.378499984741211 4.378499984741211 5.5 3 5.5 Z"
                        stroke="none"
                      />
                      <path
                        d="M 3 1 C 1.897200107574463 1 1 1.897200107574463 1 3 C 1 4.102799892425537 1.897200107574463 5 3 5 C 4.102799892425537 5 5 4.102799892425537 5 3 C 5 1.897200107574463 4.102799892425537 1 3 1 M 3 0 C 4.65684986114502 0 6 1.34315013885498 6 3 C 6 4.65684986114502 4.65684986114502 6 3 6 C 1.34315013885498 6 0 4.65684986114502 0 3 C 0 1.34315013885498 1.34315013885498 0 3 0 Z"
                        stroke="none"
                        fill="#f1f2f3"
                      />
                    </g>
                    <g
                      id="Ellipse_76"
                      data-name="Ellipse 76"
                      transform="translate(1284 561)"
                      fill="#f1f2f3"
                      stroke="#f1f2f3"
                      strokeWidth="1"
                    >
                      <circle cx="3" cy="3" r="3" stroke="none" />
                      <circle cx="3" cy="3" r="2.5" fill="none" />
                    </g>
                  </g>
                </svg>
                <span className="w-px h-14 xl:h-6 bg-theme-gray-5 mx-6 xl:mx-2 block"></span>
                <h2 className="text-50 xl:text-3xl font-bold text-theme-black-2">
                  {cards ? cards : 0}
                </h2>
              </div>
              {cards ? (
                <>
                  <div className="flex items-center">
                    ANZEIGEN :
                    <div className="relative">
                      <select className="ml-2 outline-none appearance-none  bg-transparent rounded border-2 py-2 pl-6 pr-8 xl:pl-3 xl:pr-6 border-theme-gray-2">
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
                  <div className="flex items-center justify-end">
                    <p className="lg:hidden">SORTIEREN NACH :</p>
                    <div className="relative">
                      <select className="ml-2 outline-none appearance-none  bg-transparent rounded border-2 py-2 pl-6 pr-8 xl:pl-2 border-theme-gray-2">
                        <option>Preis: aufsteigend</option>
                        <option>Preis: aufsteigend</option>
                        <option>Preis: aufsteigend</option>
                      </select>
                      <img
                        className="absolute top-4 -mt-0.5 right-3"
                        src="/images/icons/sd-select-arrow.png"
                      />
                    </div>
                  </div>
                  <div className="flex items-center lg:hidden">
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
                </>
              ) : null}
            </div>
          </div>
          {cards ? (
            <div
              className={`${
                cardView == "grid" ? "flex flex-wrap justify-between" : ""
              }`}
            >
              <AdsCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/ads-card-1.png"
                cardView={cardView}
              />
              <AdsCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/ads-card-2.png"
                cardView={cardView}
              />
              {cardView == "grid" && (
                <AdsCard
                  title="Lamborghini Huracán"
                  price="45.520"
                  adNo="#123456789"
                  start="01/01/2020"
                  end="01/01/2020"
                  imgSrc="/images/ads-card-6.png"
                  cardView={cardView}
                />
              )}
              <AdsCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/ads-card-3.png"
                cardView={cardView}
              />
              <AdsCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/ads-card-4.png"
                cardView={cardView}
              />
              <AdsCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/ads-card-5.png"
                cardView={cardView}
              />
            </div>
          ) : (
            <div className="mt-6 mx-4 pb-12">
              <div className="flex items-center justify-between text-xl p-6 rounded-md text-white font-bold bg-theme-gray-6">
              <p>SIE HABEN NOCH KEINE INSERATE.</p>
              <button className="px-4 py-2 border rounded-md border-white">INSERAT AUFGEBEN</button>
              </div>
              <p className="text-15 font-bold text-center mt-10 text-theme-black-2">WERBEN SIE JETZT UND ERREICHEN SIE MILLIONEN VON KÄUFERN!</p>
            </div>
          )}
        </div>
        {cards ? <Pagination wFull /> : null}
      </div>
    </>
  );
}
