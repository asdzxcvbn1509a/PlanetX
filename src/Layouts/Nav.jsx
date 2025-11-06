import React from "react";
import { Outlet } from "react-router-dom";
import NavLogo from "../assets/NavLogo.png";
import { Search } from "lucide-react";
import Switch from "../Component/Switch";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div
      className="h-[88px]"
      style={{
        background:
          "linear-gradient(180deg, #42327D 0%, #533F85 11%, #0F022D 80%)",
      }}
    >
      <div className="flex items-center h-full max-w-[1500px] justify-between mx-auto">
        <NavLink to="/">
          <img
            src={NavLogo}
            alt="NavLogo"
            className="w-[174px] h-[23px] cursor-pointer"
          />
        </NavLink>

        <div className="flex gap-[64.05px]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-xl text-white underline underline-offset-[6px] decoration-[4px]"
                : "text-xl text-white"
            }
          >
            หน้าหลัก
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-xl text-white underline underline-offset-[6px] decoration-[4px]"
                : "text-xl text-white"
            }
          >
            บริการ
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "text-xl text-white underline underline-offset-[6px] decoration-[4px]"
                : "text-xl text-white"
            }
          >
            เกี่ยวกับเรา
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-xl text-white underline underline-offset-[6px] decoration-[4px]"
                : "text-xl text-white"
            }
          >
            ติดต่อ
          </NavLink>
          <div className="flex my-auto">
            <input
              type="text"
              name=""
              id=""
              placeholder="ค้นหา"
              className="bg-white w-[238.71px] text-base pl-[15px] h-10 outline-none"
            />
            <button>
              <Search className="text-white bg-[#905BF4] w-10 h-10 p-2 cursor-pointer" />
            </button>
          </div>
          <Switch />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Nav;
