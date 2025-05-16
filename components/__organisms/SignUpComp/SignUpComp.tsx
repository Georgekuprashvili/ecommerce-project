import React from "react";
import Link from "next/link";
import SignUpInputsDiv from "../../__molecules/SignUpInputsDiv/SignUpInputsDiv";
function SignUpComp() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center bg-[#F8F4F0]  max-[1100px]:flex-col max-[1100px]:justify-between">
      <div className="flex items-center justify-center max-w-[1440px] w-[100%] h-[100%] gap-[20px] max-[1100px]:justify-center px-[20px] ">
        <div className="max-w-[560px] w-[100%] bg-white mr-[150px] rounded-[12px] p-[32px] max-[1300px]:mr-[80px]  max-[1200px]:mr-[0px]">
          <h1 className="text-[32px] font-bold leading-[38.5px] text-[#201F24]">
            Sign Up
          </h1>
          <SignUpInputsDiv />
          <div className="flex w-[100%] items-center justify-center mt-[32px]">
            <p className=" leading-[21px] text-[#696868] text-[14px]">
              Already have an account?
            </p>
            <Link
              className="text-[#201F24] text-[14px] font-bold underline"
              href={"/LogIn"}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpComp;
