import { useState } from "react";
import ColorItem from "./ColorItem";

export default function Colors() {
    const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-xs border-b-2 mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold text-15 text-theme-gray-2"
      >
        Farbe
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${expanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${expanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
          <div className="">
                <p className="text-15 mb-6">Außenfarbe</p>
                <div className="flex justify-between md:flex-wrap">
                    <ColorItem title='Beige' bgColor='bg-farbe-beige' borderColor='border-farbe-beige' />
                    <ColorItem title='Blau' bgColor='bg-farbe-blue' borderColor='border-farbe-blue'/>
                    <ColorItem title='Schwarz' bgColor='bg-black' borderColor='border-black' />
                    <ColorItem title='Grün' bgColor='bg-farbe-green' borderColor='border-farbe-green' />
                    <ColorItem title='Orange' bgColor='bg-farbe-orange' borderColor='border-farbe-orange' />
                    <ColorItem title='Rot' bgColor='bg-farbe-red' borderColor='border-farbe-red' />
                </div>
                <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
                    <ColorItem title='Gold' bgColor='bg-farbe-golden' borderColor='border-farbe-golden' />
                    <ColorItem title='Braun' bgColor='bg-farbe-brown' borderColor='border-farbe-brown' />
                    <ColorItem title='Silber' bgColor='bg-farbe-silver' borderColor='border-farbe-silver' />
                    <ColorItem title='Gelb' bgColor='bg-farbe-yellow' borderColor='border-farbe-yellow' />
                    <ColorItem title='Bronze' bgColor='bg-farbe-bronze' borderColor='border-farbe-bronze' />
                    <ColorItem title='Violett' bgColor='bg-farbe-violet' borderColor='border-farbe-violet' />
                </div>
                <div className="flex mt-8 md:mt-0">
                    <ColorItem title='Grau' bgColor='bg-farbe-gray' borderColor='border-farbe-gray' />
                    <ColorItem title='Weiss' bgColor='bg-white' borderColor='border-white' blackChecked />
                </div>
                <p className="text-15 my-6">Lackierungsart</p>
                <div className="flex">
                    <ColorItem title='Metallic' bgColor='bg-white' borderColor='border-white' blackChecked />
                </div>

          </div>
      </div>
    </div>
  );
}
