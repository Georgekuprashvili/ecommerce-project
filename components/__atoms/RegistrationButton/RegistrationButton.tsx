import React from "react";
interface RegistrationButtonType {
  text: string;
}
function RegistrationButton({ text }: RegistrationButtonType) {
  return (
    <button
      className="w-[100%] p-[16px] cursor-pointer bg-[#201F24] rounded-[8px] text-white font-bold text-[14px]"
      type="submit"
    >
      {text}
    </button>
  );
}

export default RegistrationButton;