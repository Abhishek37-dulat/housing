import React, { useEffect, useRef, useState } from "react";
import { ChevronDownOutline } from "react-ionicons";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Navbar = () => {
  const [displaySearch, setDisplaySearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        searchInput.trim() === ""
      ) {
        setDisplaySearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchInput]);
  return (
    <div className="flex justify-between mt-8">
      <div>
        <h1 className="text-gray-800 font-bold">HOUSING</h1>
      </div>
      <div>
        {["About us", "Projects", "Agents", "Services", "Listings"]?.map(
          (item, index) => (
            <span key={index} className="bg-slate-100 p-2 rounded-md m-2">
              {" "}
              <a className="text-gray-600" href="#">
                {item}
              </a>
            </span>
          )
        )}

        {!displaySearch ? (
          <span
            className="bg-slate-100 p-2 rounded-md cursor-pointer hover:bg-gray-800 hover:text-white"
            onClick={() => setDisplaySearch(true)}
          >
            <SearchRoundedIcon />
          </span>
        ) : (
          <input
            ref={inputRef}
            className="w-32 sm:w-40 bg-slate-100 px-3 py-2 rounded-md text-sm outline-none focus:ring-2 focus:ring-gray-100 transition"
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            autoFocus
          />
        )}
      </div>
      <div>
        <span>
          <a className="text-gray-800 font-semibold m-2" href="#">
            Other services
          </a>
        </span>
        <span className="bg-slate-100 text-gray-800 p-2 rounded-md m-2 hover:bg-gray-800 hover:text-gray-100">
          <KeyboardArrowDownRoundedIcon />
          <a href="#">Contact us</a>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
