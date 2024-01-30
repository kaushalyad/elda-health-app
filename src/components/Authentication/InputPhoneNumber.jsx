import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
function InputPhoneNumber({ value, setValue }) {
  return (
    <PhoneInput
      inputStyle={{ color: "black", height: "57px", background: "#f7fee7" }}
      containerStyle={{ margin: "20px" }}
      buttonStyle={{ height: "57px", background: "#f7fee7" }}
      dropdownStyle={{ height: "500px" }}
      country={"in"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="bg-lime-50"
    />
  );
}
export default InputPhoneNumber;
