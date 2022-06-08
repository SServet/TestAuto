import Select from "react-select";

const style = {
  control: (base) => ({
    ...base,
    boxShadow: "none",
    border: "none",
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#fbb900" : "",
    "&:active": "#fbb90080",
  }),
};
const style2 = {
  control: (base) => ({
    ...base,
    boxShadow: "none",
    border: "1px solid slate",
    padding: '2px',
  }),
  menu: (styles, state) => ({
    ...styles,
    zIndex: 999
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#fbb900" : "",
    "&:active": "#fbb90080"
  }),
};
export default function InputSelect({
  options,
  placeholder,
  styleType,
  regYear,
  onChange
}) {
  const renderSelect = regYear ? (
    <Select
      instanceId="augigant"
      styles={styleType == "row" ? "" : style2}
      options={options}
      onChange={onChange}
      placeholder={<div className="text-gray-400">{placeholder}</div>}
      classNamePrefix='r-select s-1'
      menuPortalTarget={typeof window !== "undefined" ? document.querySelector('body') : ''}
    />
  ) : (
    <Select
      instanceId="augigant"
      styles={styleType == "row" ? "" : style}
      options={options}
      onChange={onChange}
      placeholder={<div className="text-gray-400">{placeholder}</div>}
      classNamePrefix='r-select s-1'
      menuPortalTarget={typeof window !== "undefined" ? document.querySelector('body') : ''}
    />
  );
  return renderSelect;
}
