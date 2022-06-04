export default function CheckBoxItem({ title,wAuto }) {
  return (
    <div className={`${wAuto ? '': 'w-1/6 lg:w-auto md:!w-1/2'} flex items-center cursor-pointer md:pt-4`}>
      <input
        className="form-check-input appearance-none h-6 w-6 border border-theme-slate rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        name={title}
        value={title}
        id={title}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}
