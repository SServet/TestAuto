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
    padding: '6px'
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#fbb900" : "",
    "&:active": "#fbb90080",
  }),
};
export default function InputSelect({
  options,
  placeholder,
  styleType,
  regYear,
}) {
  const renderSelect = regYear ? (
    <Select
      instanceId="augigant"
      styles={styleType == "row" ? "" : style2}
      options={options}
      placeholder={<div className="text-gray-400">{placeholder}</div>}
      classNamePrefix='r-select s-1'
    />
  ) : (
    <Select
      instanceId="augigant"
      styles={styleType == "row" ? "" : style}
      options={options}
      placeholder={<div className="text-gray-400">{placeholder}</div>}
      classNamePrefix='r-select s-1'
    />
  );
  return renderSelect;
}
