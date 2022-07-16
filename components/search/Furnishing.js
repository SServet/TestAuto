import { useState } from "react";
import CheckBoxItem from "./CheckBoxItem";

export default function Furnishing() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-xs border-b-2 mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold text-15 text-theme-gray-2"
      >
        Ausstattung
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${expanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${expanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        <div className="flex justify-between md:flex-wrap">
          <CheckBoxItem title="ABS" />
          <CheckBoxItem title="Allrad" />
          <CheckBoxItem title="Elektr. Fensterheber" />
          <CheckBoxItem title="Klimaautomatik" />
          <CheckBoxItem title="Multifunktionslenkrad" />
          <CheckBoxItem title="Sitzheizung" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Xenonscheinwerfer" />
          <CheckBoxItem title="Abstandstempomat" />
          <CheckBoxItem title="Anhängerkupplung" />
          <CheckBoxItem title="Klimaanlage" />
          <CheckBoxItem title="LED-Scheinwerfer" />
          <CheckBoxItem title="Navigationssytem" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Tempomat" />
          <CheckBoxItem title="2-Zonen-Klimaautomatik" />
          <CheckBoxItem title="3-Zonen-Klimaautomatik" />
          <CheckBoxItem title="4-Zonen-Klimaautomatik" />
          <CheckBoxItem title="4-Zonen-Klimaautomatik" />
          <CheckBoxItem title="Alarmanlage" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Alarmanlage" />
          <CheckBoxItem title="Ambientenbeleuchtung" />
          <CheckBoxItem title="Einparkhilfe Sensoren hinten" />
          <CheckBoxItem title="Beheizbares Lenkrad" />
          <CheckBoxItem title="Beheizbares Lenkrad" />
          <CheckBoxItem title="DAB-Radio" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Blendfreies Fernlicht" />
          <CheckBoxItem title="Bordcomputer" />
          <CheckBoxItem title="Bi-Xenon Scheinwerfer" />
          <CheckBoxItem title="E10-geeignet" />
          <CheckBoxItem title="Einparkhilfe Kamera" />
          <CheckBoxItem title="Armlehne" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Elektrische Heckklappe" />
          <CheckBoxItem title="Elektrische Sitze" />
          <CheckBoxItem title="ESP" />
          <CheckBoxItem title="Fernlichassistent" />
          <CheckBoxItem title="Gepäckraumabtrennung" />
          <CheckBoxItem title="Getönte Scheiben" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Induktionsladen (Handy)" />
          <CheckBoxItem title="Induktionsladen (Handy)" />
          <CheckBoxItem title="Kopfairbag" />
          <CheckBoxItem title="Laserlicht" />
          <CheckBoxItem title="LED-Tagefahrlicht" />
          <CheckBoxItem title="LED-Tagefahrlicht" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Lordosenstütze" />
          <CheckBoxItem title="Markise" />
          <CheckBoxItem title="MP3" />
          <CheckBoxItem title="Nachtsicht-Assistent" />
          <CheckBoxItem title="Nachtsicht-Assistent" />
          <CheckBoxItem title="Notrad" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Pannenkit" />
          <CheckBoxItem title="Pannenkit" />
          <CheckBoxItem title="Rechtslenker" />
          <CheckBoxItem title="Reichweitenverlängerer" />
          <CheckBoxItem title="Reserverad" />
          <CheckBoxItem title="Scheinwerfer-reinigung" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Schiebetür" />
          <CheckBoxItem title="Schiebetür" />
          <CheckBoxItem title="Seitenairbag" />
          <CheckBoxItem title="Sitzbelüftung" />
          <CheckBoxItem title="Skisack" />
          <CheckBoxItem title="Soundsystem" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Sportfahrwerk" />
          <CheckBoxItem title="Sportsitze" />
          <CheckBoxItem title="Spurhalteassistent" />
          <CheckBoxItem title="Standheizung" />
          <CheckBoxItem title="Tagfahrlicht" />
          <CheckBoxItem title="teilb. Rücksitzbank" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Totwinkel-Assistent" />
          <CheckBoxItem title="Traktionskontrolle" />
          <CheckBoxItem title="TV" />
          <CheckBoxItem title="USB" />
          <CheckBoxItem title="Voll-LED Scheinwerfer" />
          <CheckBoxItem title="W-Lan / Wifi Hotspot" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Windschott (Cabrio)" />
          <CheckBoxItem title="Winterreifen" />
          <CheckBoxItem title="Zentralverriegelung" />
          <CheckBoxItem title="Alufelgen" />
          <CheckBoxItem title="Airbag hinten" />
          <CheckBoxItem title="Allrad" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Android Auto" />
          <CheckBoxItem title="Apple CarPlay" />
          <CheckBoxItem title="Beheizbare Frontscheibe" />
          <CheckBoxItem title="Behindertengerecht" />
          <CheckBoxItem title="Berganfahrassistent" />
          <CheckBoxItem title="Biodiesel-umrüstung" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Bluetooth" />
          <CheckBoxItem title="CD" />
          <CheckBoxItem title="Dachreling" />
          <CheckBoxItem title="Einparkhilfe" />
          <CheckBoxItem title="Einparkhilfe selbst lenkendes System" />
          <CheckBoxItem title="Einparkhilfe Sensoren vorne" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Elektr. Sitzeinstellung hinten" />
          <CheckBoxItem title="Elektrische Seitenspiegel" />
          <CheckBoxItem title="Elektronische Parkbremse" />
          <CheckBoxItem title="Fahrerairbag" />
          <CheckBoxItem title="Freisprecheinrichtung" />
          <CheckBoxItem title="Geschwindigkeit-begrenzungsanlage" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Head-Up Display" />
          <CheckBoxItem title="Innenspiegel automatisch abblendend" />
          <CheckBoxItem title="Katalysator" />
          <CheckBoxItem title="Klimaautomatik" />
          <CheckBoxItem title="Kurvenlicht" />
          <CheckBoxItem title="Lederausstattung" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Lichtsensor" />
          <CheckBoxItem title="Luftfederung" />
          <CheckBoxItem title="Massagesitze" />
          <CheckBoxItem title="Müdigkeitswarnsystem" />
          <CheckBoxItem title="Musikstreaming integriert" />
          <CheckBoxItem title="Notbremsassistent" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Notrufsystem" />
          <CheckBoxItem title="Panormadach" />
          <CheckBoxItem title="Raucherpaket" />
          <CheckBoxItem title="Regensensor" />
          <CheckBoxItem title="Reifendruckkontrollsystem" />
          <CheckBoxItem title="Schaltwippen" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Schiebedach" />
          <CheckBoxItem title="Schiebetür links" />
          <CheckBoxItem title="Schlüssellose Zentralverriegelung" />
          <CheckBoxItem title="Servolenkung" />
          <CheckBoxItem title="Sitzheizung" />
          <CheckBoxItem title="Sommerreifen" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Spoiler" />
          <CheckBoxItem title="Sportpaket" />
          <CheckBoxItem title="Zentralverriegelung mit Fernbedienung" />
          <CheckBoxItem title="Winterpaket" />
          <CheckBoxItem title="Wegfahrsperre" />
          <CheckBoxItem title="Volldigitales Kombiinstrument" />
        </div>
        <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Verkehrszeichenerkennung" />
          <CheckBoxItem title="Umklappbarer Beifahersitz" />
          <CheckBoxItem title="Tuning" />
          <CheckBoxItem title="Touchscreen" />
          <CheckBoxItem title="Taxi oder Mietwagen" />
          <CheckBoxItem title="Start/Stop-Automatik" />
        </div>
        <div className="flex mt-8 md:mt-0 md:flex-wrap">
          <CheckBoxItem title="Stahlfelgen" />
          <CheckBoxItem title="Sprachsteuerung" />
        </div>
        <button className="font-bold py-8 text-xs flex items-center">
          <img className="w-6 opacity-80 mr-2" src='/images/icons/remove-minus-icon.png' />
          Ungenutzte Filter ausblenden
        </button>
      </div>
    </div>
  );
}
