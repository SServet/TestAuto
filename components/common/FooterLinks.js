import { useEffect, useState } from "react";

export default function FooterLinks({ title, links }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 767) {
        setActive(true);
    }
  }, []);

  return (
    <div className="text-13 text-theme-black-2 md:py-2">
      <div
        className={`md:flex justify-between items-center md:border-b border-theme-gray-2 ${
          active ? "" : "pb-3"
        }`}
      >
        <button
          onClick={() => setActive(!active)}
          className={`hidden md:block font-bold ${active ? "mb-2" : "mb-0"}`}
        >
          {title}
        </button>
        <p
          className={`md:hidden font-bold ${active ? "mb-2" : "mb-0"}`}
        >
          {title}
        </p>
        {active ? (
          <img
            className="hidden md:block"
            src="/images/icons/footer-minus.png"
          />
        ) : (
          <img
            className="hidden md:block"
            src="/images/icons/footer-plus.png"
          />
        )}
      </div>

      {active ? (
        <ul className={`${active ? "pt-2" : ""}`}>
          {links &&
            links.map((link, i) => (
              <li key={i} className="py-1">
                <a href={link.url}>{link.linkTitle}</a>
              </li>
            ))}
        </ul>
      ) : null}
    </div>
  );
}
