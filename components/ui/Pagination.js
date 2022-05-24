import { useState } from "react";


export default function Pagination(){
    const [active, setActive] = useState(1);

    return (
        <div className="w-10/12 mx-auto relative py-6 px-4 bg-white">
            <div className="flex items-center justify-center">
                <button>
                    <img src='/images/icons/pagi-prev.png' />
                </button>
                <button onClick={() => setActive(1)} className={`px-2 py-1 mx-2 rounded-md ${active == 1 ? 'bg-gray-300 border border-slate-600' : ''}`}>1</button>
                <button onClick={() => setActive(2)} className={`px-2 py-1 mx-2 rounded-md ${active == 2 ? 'bg-gray-300 border border-slate-600' : ''}`}>2</button>
                <button onClick={() => setActive(3)} className={`px-2 py-1 mx-2 rounded-md ${active == 3 ? 'bg-gray-300 border border-slate-600' : ''}`}>3</button>
                <button onClick={() => setActive(4)} className={`px-2 py-1 mx-2 rounded-md ${active == 4 ? 'bg-gray-300 border border-slate-600' : ''}`}>4</button>
                <button onClick={() => setActive(5)} className={`px-2 py-1 mx-2 rounded-md ${active == 5 ? 'bg-gray-300 border border-slate-600' : ''}`}>5</button>
                <button onClick={() => setActive(6)} className={`px-2 py-1 mx-2 rounded-md ${active == 6 ? 'bg-gray-300 border border-slate-600' : ''}`}>6</button>
                <button onClick={() => setActive(7)} className={`px-2 py-1 mx-2 rounded-md ${active == 7 ? 'bg-gray-300 border border-slate-600' : ''}`}>7</button>
                <button onClick={() => setActive(8)} className={`px-2 py-1 mx-2 rounded-md ${active == 8 ? 'bg-gray-300 border border-slate-600' : ''}`}>8</button>
                <button onClick={() => setActive(9)} className={`px-2 py-1 mx-2 rounded-md ${active == 9 ? 'bg-gray-300 border border-slate-600' : ''}`}>9</button>
                <button>
                <img src='/images/icons/pagi-next.png' />
                </button>
            </div>
            <button className="absolute flex items-center right-4 top-8">
                Nach Oben
                <img className="ml-4" src="/images/icons/top-btn.png" />
            </button>
        </div>
    );
}