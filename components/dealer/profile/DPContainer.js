import Map from "./Map";
import AdCard from "../../dashboard/overview/AdCard";
import Pagination from "../list/Pagination";

export default function DPContainer() {
  return (
    <div className="bg-theme-gray-3 lg:px-6 md:!px-0">
      <div className="w-10/12 lg:w-full max-w-ag-container mx-auto flex md:flex-col-reverse shadow-1">
        <div className="w-full p-6 bg-white">
          <div>
            <img
              className="w-full"
              src="/images/dealer-profile-breadcrumb-img.png"
            />
          </div>
          <div className="flex mt-6 md:flex-col">
            <div className="flex-1">
              <div className="flex items-center justify-between p-4 rounded-md bg-theme-gray-4">
                <div className="text-theme-black-2">
                  <h2 className="text-2xl md:text-lg font-bold">AUDI Österreich GmbH</h2>
                  <p className="text-15 md:text-xs">
                    Musterstrasse 12, 1010 Wien, Österreich
                  </p>
                </div>
                <div className="flex">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mr-1"
                  >
                    <img src="/images/icons/dp-facebook-icon.png" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1"
                  >
                    <img src="/images/icons/dp-instagram-icon.png" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1"
                  >
                    <img src="/images/icons/dp-youtube-icon.png" />
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1"
                  >
                    <img src="/images/icons/dp-tiktok-icon.png" />
                  </a>
                </div>
              </div>
              <div className="p-4 mt-6 text-theme-black-2 bg-theme-gray-4 rounded-md">
                <h2 className="text-2xl font-bold border-b-2 border-theme-gray-2 pb-1 mb-1">
                  ÜBER UNS
                </h2>
                <p className="text-15">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Recusandae modi tempora odit explicabo dicta qui, blanditiis
                  incidunt possimus natus a adipisci laborum fugit quaerat
                  perspiciatis reprehenderit expedita magni rerum voluptatum
                  numquam? Unde eius consectetur quaerat expedita deserunt quis
                  blanditiis ipsa, corporis mollitia vero modi adipisci ratione
                  voluptate enim voluptas, numquam totam perspiciatis iure?
                  Necessitatibus voluptates quod, velit in voluptas possimus
                  accusamus.
                </p>
              </div>
              <div className="h-96 w-full mt-6 google-map-container">
                <Map />
              </div>
              <div className="p-4 mt-10 bg-theme-gray-4 rounded-md">
                <div className="flex justify-between items-center pb-4 border-b border-theme-gray-2 text-theme-black-2">
                  <h2 className="text-2xl font-bold md:text-lg">UNSERE FAHRZEUGE</h2>
                  <div className="flex items-center">
                    <div className="flex items-center text-xs">
                      <p className="mr-3">ANZEIGEN</p>
                      <select className="border border-theme-gray-2 p-2 bg-theme-gray-4 rounded-md">
                        <option value="12">12</option>
                        <option value="8">8</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <AdCard />
                  <AdCard />
                  <AdCard />
                  <AdCard />
                  <AdCard />
                </div>
              </div>
              <Pagination wFull />
            </div>
            <div className="w-250 ml-6 md:w-full md:ml-0 md:mt-6">
              <div className="p-4 rounded-md bg-theme-gray-4 text-theme-black-2 text-15">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      id="call_FILL0_wght400_GRAD0_opsz48"
                      d="M20.063,21a11.238,11.238,0,0,1-5.052-1.25,17.339,17.339,0,0,1-7.76-7.76A11.238,11.238,0,0,1,6,6.938.925.925,0,0,1,6.938,6H9.854a.737.737,0,0,1,.51.2.921.921,0,0,1,.281.531l.563,2.625a1.5,1.5,0,0,1-.01.531.8.8,0,0,1-.219.406L8.9,12.4a17.3,17.3,0,0,0,2.615,3.375,14.45,14.45,0,0,0,3.281,2.437l1.979-2.042a1.152,1.152,0,0,1,.479-.323.963.963,0,0,1,.542-.031l2.479.542a.91.91,0,0,1,.729.9v2.813a.925.925,0,0,1-.937.938ZM8.271,11.25,9.958,9.542h0L9.479,7.25H7.25A7.171,7.171,0,0,0,7.5,9.031,16.793,16.793,0,0,0,8.271,11.25Zm11.479,8.5h0V17.521h0L17.6,17.083h0l-1.646,1.729a10.4,10.4,0,0,0,1.854.646A9.777,9.777,0,0,0,19.75,19.75Zm-3.792-.937ZM8.271,11.25Z"
                      transform="translate(-6 -6)"
                      fill="#555"
                    />
                  </svg>
                  <p className="ml-4">+43 987 654 3210</p>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                  >
                    <path
                      id="mail_FILL0_wght400_GRAD0_opsz48"
                      d="M5.125,20A1.153,1.153,0,0,1,4,18.875V9.125A1.153,1.153,0,0,1,5.125,8h12.75A1.153,1.153,0,0,1,19,9.125v9.75A1.153,1.153,0,0,1,17.875,20ZM11.5,14.338,5.125,10.156v8.719h12.75V10.156Zm0-1.125,6.3-4.088H5.219ZM5.125,10.156v0Z"
                      transform="translate(-4 -8)"
                      fill="#555"
                    />
                  </svg>
                  <p className="ml-4">support@example.com</p>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      id="public_FILL0_wght400_GRAD0_opsz48"
                      d="M11.5,19a7.3,7.3,0,0,1-2.925-.591,7.488,7.488,0,0,1-3.984-3.984,7.538,7.538,0,0,1,0-5.85A7.488,7.488,0,0,1,8.575,4.591a7.538,7.538,0,0,1,5.85,0,7.488,7.488,0,0,1,3.984,3.984,7.538,7.538,0,0,1,0,5.85,7.488,7.488,0,0,1-3.984,3.984A7.3,7.3,0,0,1,11.5,19Zm-.806-1.144V16.319a1.447,1.447,0,0,1-1.106-.487,1.632,1.632,0,0,1-.45-1.144v-.825L5.294,10.019a5.269,5.269,0,0,0-.131.741,7.255,7.255,0,0,0-.037.741,6.277,6.277,0,0,0,1.584,4.256,6.045,6.045,0,0,0,3.984,2.1Zm5.512-2.025a6.213,6.213,0,0,0,1.247-2.016,6.493,6.493,0,0,0,.422-2.316,6.428,6.428,0,0,0-3.994-5.981v.337A1.632,1.632,0,0,1,13.431,7a1.447,1.447,0,0,1-1.106.488H10.694V9.119a.648.648,0,0,1-.253.525.881.881,0,0,1-.572.206H8.313V11.5H13.15a.658.658,0,0,1,.525.244.845.845,0,0,1,.206.563v2.381h.806a1.52,1.52,0,0,1,.956.319A1.586,1.586,0,0,1,16.206,15.831Z"
                      transform="translate(-4 -4)"
                      fill="#555"
                    />
                  </svg>
                  <p className="ml-4">www.example.com</p>
                </div>
              </div>
              <div className="text-center mt-6 p-4 rounded-md bg-theme-gray-4 text-theme-black-2 text-15">
                <div className="flex justify-center">
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#fbb900"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#fbb900"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#fbb900"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#fbb900"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#c3c3c3"
                      />
                    </svg>
                  </div>
                </div>
                <p className="my-2">4,9 / 27 Bewertungen</p>
                <button className="w-full p-2 border rounded-md font-bold bg-white border-theme-gray-2">
                  HÄNDLER BEWERTEN
                </button>
              </div>
              <div className="mt-6 p-4 rounded-md bg-theme-gray-4 text-theme-black-2 text-15">
                <h2 className="text-15 font-bold">NACHRICHT SENDEN</h2>
                <form className="pt-2 pb-2">
                  <input
                    className="w-full p-2 border rounded-md font-bold bg-white border-theme-gray-2"
                    placeholder="Vollständiger Name"
                  />
                  <input
                    className="w-full p-2 border rounded-md font-bold bg-white border-theme-gray-2 mt-4"
                    placeholder="Ihre E-Mail eingeben"
                  />
                  <textarea
                    className="w-full h-36 resize-none p-2 border rounded-md font-bold bg-white border-theme-gray-2 mt-4"
                    placeholder="Ihre Nachricht"
                  ></textarea>
                  <button className="w-full p-2 border rounded-md font-bold bg-white border-theme-gray-2 mt-2">
                    NACHRICHT SENDEN
                  </button>
                </form>
              </div>
              <div className="flex w-full rounded-md bg-theme-gray-6 mt-6 shadow-md">
                  <button className="w-1/4 p-2 pb-0 flex items-center justify-center border-r border-theme-gray-2">
                    <img src="/images/icons/dp-phone.png" />
                  </button>
                  <button className="w-1/4 p-2 pb-0 flex items-center justify-center border-r border-theme-gray-2">
                    <img src="/images/icons/dp-fav.png" />
                  </button>
                  <button className="w-1/4 p-2 pb-0 flex items-center justify-center border-r border-theme-gray-2">
                    <img src="/images/icons/dp-share.png" />
                  </button>
                  <button className="w-1/4 p-2 pb-0 flex items-center justify-center">
                    <img src="/images/icons/dp-report.png" />
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
