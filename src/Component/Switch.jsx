import React from "react";

const Switch = ({ isChecked, handleCheckboxChange }) => {
  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div
            style={{
              background:
                "linear-gradient(360deg, #ffffff60 0%, #ffffff07 100%)",
            }}
            className={`box block h-9 w-[100px] rounded-full text-white text-xs  ${
              isChecked ? "pt-2.5 pl-4" : "pt-2.5 pl-13"
            }`}
          >
            {isChecked ? "Thai" : "English"}
          </div>
          <div
            className={`absolute left-2 top-1.5 flex h-[24px] w-[38px] items-center justify-center rounded-full bg-cover outline-2 outline-white transition ${
              isChecked
                ? "translate-x-[45px] bg-[url('/ThaiFlag.svg')]"
                : "bg-[url('/AmericaFlag.png')]"
            }`}
          ></div>
        </div>
      </label>
    </>
  );
};

export default Switch;
