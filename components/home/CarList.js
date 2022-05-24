import Link from "next/link";

export default function CarListBrands() {
  return (
    <div className="bg-theme-gray-3">
      <div className="w-10/12 mx-auto flex justify-between p-10 pb-20 relative bg-white">
        <div>
          <h3 className="mb-3 text-xl font-bold text-black">Audi</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">Audi A1</Link>
            </li>
            <li>
              <Link href="/">Audi A3</Link>
            </li>
            <li>
              <Link href="/">Audi A4</Link>
            </li>
            <li>
              <Link href="/">Audi A6</Link>
            </li>
            <li>
              <Link href="/">Audi Q3</Link>
            </li>
            <li>
              <Link href="/">Mehr Audi Modelle</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-bold text-black">BMW</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">BMW 1er</Link>
            </li>
            <li>
              <Link href="/">BMW 3er</Link>
            </li>
            <li>
              <Link href="/">BMW 5er</Link>
            </li>
            <li>
              <Link href="/">BMW x1</Link>
            </li>
            <li>
              <Link href="/">BMW x3</Link>
            </li>
            <li>
              <Link href="/">Mehr BMW Modelle</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-bold text-black">VW</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">VW Caddy</Link>
            </li>
            <li>
              <Link href="/">VW Golf</Link>
            </li>
            <li>
              <Link href="/">VW Polo</Link>
            </li>
            <li>
              <Link href="/">VW Tiguan</Link>
            </li>
            <li>
              <Link href="/">VW Touran</Link>
            </li>
            <li>
              <Link href="/">Mehr VW Modelle</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-bold text-black">Mercedes</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">Mercedes A-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mercedes B-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mercedes C-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mercedes E-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mercedes S-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mehr Mercedes Modelle</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-xl font-bold text-black">Weitere Marken</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">Ford</Link>
            </li>
            <li>
              <Link href="/">Hyundai</Link>
            </li>
            <li>
              <Link href="/">Opel</Link>
            </li>
            <li>
              <Link href="/">Peugeot</Link>
            </li>
            <li>
              <Link href="/">Skoda</Link>
            </li>
            <li>
              <Link href="/">Mehr Marken</Link>
            </li>
          </ul>
        </div>
        <button className="absolute flex items-center right-10 bottom-6 font-bold">
          Nach Oben
          <img className="ml-4" src="/images/icons/top-btn.png" />
        </button>
      </div>
    </div>
  );
}
