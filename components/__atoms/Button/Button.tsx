import React from "react";

interface ButtonInterface {
  text: string;
}
function Button({ text }: ButtonInterface) {
  return (
    <button className="bg-[#D87D4A] px-[29px] py-[15px] mt-[40px] text-[#FFFFFF] text-[13px] font-bold cursor-pointer hover:bg-[#FBAF85]">
      {text}
    </button>
  );
}

export default Button;
