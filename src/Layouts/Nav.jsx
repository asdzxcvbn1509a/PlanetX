import React, { useState } from "react";
import NavLogo from "../assets/NavLogo.webp";
import { Search, Menu, X } from "lucide-react";
import Switch from "../Component/Switch";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/services?search=${searchText}`);
    setShowSearch(false);
  };

  const [showSearch, setShowSearch] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div
        className="h-[88px] fixed top-0 left-0 w-full z-50 hidden xl:block"
        style={{
          background:
            "linear-gradient(180deg, #42327D 0%, #533F85 11%, #0F022D 80%)",
        }}
      >
        <div className="flex items-center h-full max-w-[1500px] justify-between mx-auto">
          <NavLink to="/">
            <img
              loading="lazy"
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
                aria-label
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                type="text"
                placeholder="ค้นหา"
                className="bg-white w-[238.71px] text-base pl-[15px] h-10 outline-none"
              />
              <button onClick={handleSearch}>
                <Search className="text-white bg-[#905BF4] w-10 h-10 p-2 cursor-pointer" />
              </button>
            </div>
            <Switch />
          </div>
        </div>
      </div>
      <div
        className="h-[72px] fixed top-0 left-0 w-full z-50 xl:hidden flex justify-between items-center px-[20px]"
        style={{
          background:
            "linear-gradient(180deg, #42327D 0%, #533F85 11%, #0F022D 80%)",
        }}
      >
        <div className="flex">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={33} color="white" />
            ) : (
              <Menu size={33} color="white" />
            )}
          </button>
        </div>
        <div className="flex md:gap-[24px] gap-[10px] items-center">
          <NavLink to="/">
            <img
              loading="lazy"
              src={NavLogo}
              alt="NavLogo"
              className="md:w-[140px] w-[74px] my-auto"
            />
          </NavLink>
          <button onClick={() => setShowSearch(!showSearch)}>
            <Search
              size={25}
              strokeWidth={2}
              className="bg-[#905BF4] p-[5px] text-white rounded-[3px]"
            />
          </button>
          {showSearch && (
            <div className="absolute top-18 left-0 bg-white w-full h-[100vh]">
              <input
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearch();
                }}
                aria-label
                placeholder="ค้าหา"
                type="text"
                className="w-full p-2 md:p-4 border text-base md:text-xl"
              />
            </div>
          )}
          <button className="text-white">English</button>
        </div>
      </div>
      {isOpen && (
        <div className="fixed top-[72px] left-0 w-full h-full z-[100] p-5 md:gap-4 gap-[25px] flex flex-col text-[#303030] xl:hidden animate-fadeIn bg-[#FAF2FB] md:text-xl">
          <NavLink to="/" onClick={() => setIsOpen(!isOpen)}>
            หน้าหลัก
          </NavLink>
          <hr />
          <NavLink to="/services" onClick={() => setIsOpen(!isOpen)}>
            บริการ
          </NavLink>
          <hr />
          <NavLink to="/about-us" onClick={() => setIsOpen(!isOpen)}>
            เกี่ยวกับเรา
          </NavLink>
          <hr />
          <NavLink to="/contact" onClick={() => setIsOpen(!isOpen)}>
            ติดต่อ
          </NavLink>
          <hr />
        </div>
      )}
    </div>
  );
};

export default Nav;
