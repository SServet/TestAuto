import { useState } from "react";

export default function Input({ label, inputType, sublabel }) {
  const [inType, setInType] = useState(inputType);

  return (
    <div className="mb-4">
      <label className={`text-sm font-bold inline-block ${sublabel ? '' : 'mb-2'}`}>{label}</label>
      {sublabel ? <p className="text-xs mb-2">{sublabel}</p>: null}
      <div className="relative">
        <input
          className="w-full border rounded text-md p-3 border-slate-300"
          type={inputType === 'password' ? inType : inputType}
        />
        {inputType === "password" ? (
          <button className="absolute right-3 top-3 mt-px opacity-50" onClick={() => inType === 'password' ? setInType("text") : setInType('password')}>
            {inType === 'password' ? <img className="w-6" src="/images/icons/eye-open.png" /> : <img className="w-6" src="/images/icons/eye-close.png" />}
          </button>
        ) : null}
      </div>
    </div>
  );
}
