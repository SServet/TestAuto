export default function ListCard({ hgm, usrname, address, rating, cardView }) {
  return (
    <div className={`${cardView=='grid'? 'flex-col w-250 lg:w-224 md:!w-full':''} mt-8 lg:mt-4 p-4 border-2 transition duration-300 ease-linear hover:shadow-lg hover:border-theme-yellow-2 border-theme-gray-4 rounded bg-theme-gray-4 text-theme-black-2`}>
      <div className={`flex relative ${cardView=='grid'? 'flex-col':''}`}>
        <div className={`${cardView=='grid'? 'w-full':'w-1/2'}`}>
          <img className="md:w-full" src="/images/dl-card-1.png" />
        </div>
        <img
          className={`absolute ${cardView=='grid'? 'h-10 w-10 top-24 left-4 lg:top-20 lg:mt-1 lg:left-2 md:!top-36':'h-20 w-20 top-1/2 left-2/4 -mt-10 -ml-10'}`}
          src="/images/icons/list-card-circle.png"
        />
        <div className={`flex flex-col justify-between ${cardView=='grid'? 'w-full text-10':'w-5/12 ml-auto text-xs'}`}>
        <div className={`${cardView=='grid'? 'px-4 lg:px-2 my-4':''}`}>
            <div className="flex items-center mt-4">
              <img className="mr-3" src="/images/icons/sd-hgm-icon.png" />
              {hgm}
            </div>
            <div className="flex items-center mt-4">
              <img className="mr-3" src="/images/icons/sd-card-user.png" />
              {usrname}
            </div>
            <div className="flex items-center mt-4">
              <img className="mr-3" src="/images/icons/sd-card-adr.png" />
              {address}
            </div>
            <div className="flex items-center mt-4">
              <img className="mr-3" src="/images/icons/sd-card-rating.png" />
              {rating}
            </div>
          </div>
          <div className="flex justify-between">
            <button className={`${cardView=='grid'? 'px-1.5 pt-2 pb-1.5 text-9':'text-md p-3'} font-semibold rounded border transition-all ease-linear duration-300 hover:bg-theme-yellow-2 border-theme-gray-2 bg-white`}>PROFIL BESUCHEN</button>
            <button className={`${cardView=='grid'? 'px-1.5 pt-2 pb-1.5 text-9':'text-md p-3'} font-semibold rounded border transition-all ease-linear duration-300 hover:bg-theme-yellow-2 border-theme-gray-2 bg-white`}>NACHRICHT SENDEN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
