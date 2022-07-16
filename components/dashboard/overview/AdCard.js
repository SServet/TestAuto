export default function AdCard() {
  return (
    <div className="flex items-center p-4 group md:flex-col md:bg-white md:rounded-md md:mt-4">
      <div className="h-40 flex flex-col md:flex-row md:w-full md:h-auto justify-between rounded-tl-md rounded-bl-md md:rounded-bl-none md:rounded-tr-md bg-theme-gray-6 ease-linear duration-200 group-hover:shadow-md">
        <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-4">
          <img src="/images/icons/ads-card-eye.svg" />
        </button>
        <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-3 md:border-none border-y border-theme-gray-2">
          <img src="/images/icons/ads-card-fav.svg" />
        </button>
        <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-3">
          <img src="/images/icons/ads-card-share.svg" />
        </button>
      </div>
      <div className="md:w-full">
        <img className="md:w-full" src="/images/adcard-car-1.png" />
        {/* <div>

        </div> */}
      </div>
      <div className="h-40 flex flex-col justify-between p-3 flex-1 rounded-tr-md rounded-br-md border-l-4 border-none border-theme-gray-3 bg-white ease-linear duration-200 group-hover:shadow-md">
        <div className="flex justify-between items-center md:items-start">
          <div className="">
            <h4 className="text-lg md:text-base text-theme-black-2 mb-2">Lamborghini Huracán</h4>
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="20"
                viewBox="0 0 16 20"
              >
                <path
                  id="home_pin_FILL0_wght400_GRAD0_opsz48"
                  d="M13.25,14.75V10.125L16,8.3l2.75,1.825V14.75h-1.5v-3h-2.5v3ZM16,22.025a29.28,29.28,0,0,0,4.912-5.488A8.325,8.325,0,0,0,22.5,12.2a6.508,6.508,0,0,0-1.888-4.825A6.3,6.3,0,0,0,16,5.5a6.3,6.3,0,0,0-4.613,1.875A6.508,6.508,0,0,0,9.5,12.2a8.2,8.2,0,0,0,1.625,4.338A31.8,31.8,0,0,0,16,22.025ZM16,24a33.243,33.243,0,0,1-6.013-6.362A9.894,9.894,0,0,1,8,12.2a7.734,7.734,0,0,1,2.413-5.975,8.128,8.128,0,0,1,11.175,0A7.734,7.734,0,0,1,24,12.2a9.894,9.894,0,0,1-1.987,5.438A33.243,33.243,0,0,1,16,24Z"
                  transform="translate(-8 -4)"
                  fill="#0067b8"
                />
              </svg>
              <p className="ml-2 text-15 md:text-xs text-theme-blue">2700 Wiener Neustadt | Österreich</p>
            </div>
          </div>
          <h3 className="text-3xl md:text-lg md:flex-1 md:font-bold text-theme-black-2">46.200€</h3>
        </div>
        <div className="flex justify-between text-xs text-theme-black-2 md:flex-wrap md:justify-start">
          <div className="py-2 px-4 md:mr-4 border rounded-md md:mt-4 border-theme-gray-2">4.000 km</div>
          <div className="py-2 px-4 md:mr-4 border rounded-md md:mt-4 border-theme-gray-2">Automatik</div>
          <div className="py-2 px-4 md:mr-4 border rounded-md md:mt-4 border-theme-gray-2">2020</div>
          <div className="py-2 px-4 md:mr-4 border rounded-md md:mt-4 border-theme-gray-2">Benzin</div>
          <div className="py-2 px-4 md:mr-4 border rounded-md md:mt-4 border-theme-gray-2">125 PS</div>
        </div>
      </div>
    </div>
  );
}
