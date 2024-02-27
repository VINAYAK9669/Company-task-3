import { useState } from "react";
import { CiMenuFries, CiSearch } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";

function Nav() {
  const [searchInput, setSearchInput] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav__section">
      <div className="searchbar">
        <CiSearch id="icon" strokeWidth={1} />
        <input type="text" value={searchInput} onChange={handleInputChange} />
      </div>
      {!showMenu ? (
        <CiMenuFries
          className="menu-button"
          onClick={toggleMenu}
          strokeWidth={2}
        />
      ) : (
        <HiXMark className="menu-button" onClick={toggleMenu} strokeWidth={2} />
      )}
      <ul className={showMenu ? "menu-visible" : "menu-hidden"}>
        <li>Categories</li>
        <li>Website Builders</li>
        <li>Today&#39;s Deals</li>
      </ul>
    </div>
  );
}

export default Nav;
