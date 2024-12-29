import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import unicef from "../assets/LandingPage/unicef.svg";
import { ChevronDown, ChevronUp } from "lucide-react";

const Navbar = () => {
  const [mobileActiveSubmenu, setMobileActiveSubmenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [isClickOpen, setIsClickOpen] = useState(false);
  const [isExecutiveActive, setIsExecutiveActive] = useState(false);
  const submenuTimeoutRef = useRef(null);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = {
    Home: {},
    "About Us": {
      Column1: [
        "Chairperson's Message",
        "Goals and Objectives",
        "Strategies",
        "Legal Identities",
      ],
      Column2: [],
      Column3: [],
    },
    Program: {
      Column1: ["Microfinance"],
      Column2: [
        "Social Development",
        "Housing and Wash",
        "Poverty Alleviation",
        "Skill Development",
        "Alternative Energy",
        "Environment",
      ],
      Column3: ["Institutional Development", "AGM", "Voluntary Program"],
    },
    "Executive members": null,
    Partners: {},
    "Success Stories": {},
    Gallery: {},
    Contact: {},
    "Executive Committee": null,
  };

  const hasSubmenu = (item) => {
    return menuItems[item] && Object.keys(menuItems[item]).length > 0;
  };

  const handleMobileItemClick = (item) => {
    if (item === "Executive members") {
      setIsExecutiveActive(true);
      navigate("/executive-members");
    } else if (item === "Home") {
      setIsExecutiveActive(false);
      navigate("/");
    } else if (item === "Partners") {
      setIsExecutiveActive(false);
      navigate("/partners");
    } else if (item === "Success Stories") {
      setIsExecutiveActive(false);
      navigate("/success-stories");
    }
    else if (item === "Contact") {
      setIsExecutiveActive(false);
      navigate("/contact");
    }
    else if (item === "Executive Committee") {
      setIsExecutiveActive(false);
      navigate("/executive-committee");
    } else {
      setIsExecutiveActive(false);
    }

    setIsMenuOpen(false);
    setMobileActiveSubmenu(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        isClickOpen
      ) {
        setActiveSubmenu(null);
        setIsClickOpen(false);
        setIsExecutiveActive(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current);
      }
    };
  }, [isClickOpen]);

  useEffect(() => {
    setIsExecutiveActive(location.pathname === "/executive-members");
  }, [location]);

  const handleMouseEnter = (item) => {
    
    if (!isClickOpen) {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current);
      }
      setActiveSubmenu(item);
    }
  };

  const handleMouseLeave = () => {
    if (!isClickOpen) {
      submenuTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu(null);
      }, 200);
    }
  };

  const handleClick = (item, subItem = null, event) => {
    event.preventDefault();

    if (item === "Executive members") {
      setIsExecutiveActive(true);
      navigate("/executive-members");
    } else if (item === "Home") {
      setIsExecutiveActive(false);
      navigate("/");
    } else if (item === "Partners") {
      setIsExecutiveActive(false);
      navigate("/partners");
    } else if (item === "Success Stories") {
      setIsExecutiveActive(false);
      navigate("/success-stories");
    } else if (item === "Contact") {
      setIsExecutiveActive(false);
      navigate("/contact");
    } else if (item === "Executive Committee") {
      setIsExecutiveActive(false);
      navigate("/executive-committee");
    } else if (item === "Program") {
      setActiveSubmenu("Program");
      console.log(activeSubmenu ,
        menuItems[activeSubmenu],
        Object.keys(menuItems[activeSubmenu]).length > 0)
    } else if (item === "About Us") {
      setActiveSubmenu("About Us");
      console.log(activeSubmenu ,
        menuItems[activeSubmenu],
        Object.keys(menuItems[activeSubmenu]).length > 0)
    } else {
      setIsExecutiveActive(false);
    }
    if (subItem === "Social Development" || subItem === "Institutional Development") {
      return;
    }
    if (subItem) {
      const path = `/${item.toLowerCase().replace(/ /g, "-")}/${subItem
        .toLowerCase()
        .replace(/[']/g, "")
        .replace(/ /g, "-")}`;
      navigate(path);
      setActiveSubmenu(null);
      setIsClickOpen(false);
      setIsMenuOpen(false);
    } else if (menuItems[item] === null) {
      const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
      navigate(path);
      setActiveSubmenu(null);
      setIsClickOpen(false);
      setIsMenuOpen(false);
    } else {
      if (activeSubmenu === item && isClickOpen) {
        setActiveSubmenu(null);
        setIsClickOpen(false);
      } else {
        setActiveSubmenu(item);
        setIsClickOpen(true);
      }
    }
  };

  const MenuIcon = ({ isOpen, color = "white" }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {isOpen ? (
        <>
          <line x1="4" y1="4" x2="20" y2="20" stroke={color} strokeWidth="2" />
          <line x1="4" y1="20" x2="20" y2="4" stroke={color} strokeWidth="2" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" stroke={color} strokeWidth="2" />
          <line x1="3" y1="12" x2="21" y2="12" stroke={color} strokeWidth="2" />
          <line x1="3" y1="18" x2="21" y2="18" stroke={color} strokeWidth="2" />
        </>
      )}
    </svg>
  );

  const MainNavContent = () => (
    <div
      className={`${activeSubmenu === "Program" || activeSubmenu === "About Us"
        ? activeSubmenu
          ? "bg-black"
          : ""
        : ""
        }`}
    >
      <div className="flex items-center h-16 md:h-20 xl:h-24 2xl:h-28">


        <div className="hidden lg:flex items-center ">
          <div
            className="relative flex text-black items-center md:gap-2 lg:gap-4 xl:gap-10 2xl:gap-16"
            ref={navRef}
          >
            {Object.keys(menuItems).map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  onClick={(e) => handleClick(item, null, e)}
                  className={`transition-colors [font-smoothing:none] [-webkit-font-smoothing:none] [-moz-osx-font-smoothing:grayscale] duration-300 text-sm lg:text-lg xl:text-lg 2xl:text-xl font-archivo 
                    ${isExecutiveActive
                      ? "text-black"
                      : `${window.location.pathname === "/" || window.location.pathname === "/home"
                        ? "text-white"
                        : "text-black"
                      } hover:text-zinc-600`
                    }
                    ${activeSubmenu === "Program" || activeSubmenu === "About Us" ? "text-white" : ""}`}
                >
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 z-50"
            aria-label="Toggle menu"
          >
            <MenuIcon
              isOpen={isMenuOpen}
              color={`${window.location.pathname === "/" || window.location.pathname === "/home" ? "white" : "black"}`}
            />
          </button>
        </div>
      </div>
    </div>
  );

  const Submenu = ({ menuKey }) => {
    if (!menuItems[menuKey] || Object.keys(menuItems[menuKey]).length === 0) {
      return null;
    }

    if (menuKey === "About Us") {
      return (
        <div className="w-full p-8 pb-10 h-screen" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="max-w-5xl ml-[11rem]">
            <div className="col-span-1">
              {menuItems[menuKey]["Column1"].map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => handleClick(menuKey, item, e)}
                  className="block"
                >
                  <div className="py-2">
                    <span className="text-white hover:text-gray-500 font-inter tracking-widest text-xl">
                      {item}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full pb-[20px] h-screen" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
        <div className="grid grid-cols-3 gap-4 max-w-6xl xl:ml-[5rem]">
          {Object.entries(menuItems[menuKey]).map(([column, items]) => (
            <div key={column} className={` col-span-1`}>
              {items.map((item, index) => (
                <a
                  key={item}
                  href="#"
                  onClick={(e) => handleClick(menuKey, item, e)}
                  className="block"
                >
                  <div className={`${index === 0 ? "py-6" : "py-2"}`}>
                    <span
                      className={`text-white font-inter tracking-widest ${index === 0 ? "text-2xl" : "text-xl"
                        } font-light ${item === "Social Development" || item === "Institutional Development" ? "" : " hover:text-gray-400"} ${column == "Column1" ? "ml-[8rem]" : ""}`}
                    >
                      {item}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <nav
        className={`absolute w-full z-50 h-16 md:h-20 xl:h-24  ${window.location.pathname === "/" || window.location.pathname === "/home" ? "lg:mt-[0rem] " : "mt-[4rem] lg:mt-[4rem]"}   2xl:h-28 ${activeSubmenu === "Program" || activeSubmenu === "About Us"
          ? activeSubmenu
            ? "bg-black"
            : ""
          : ""
          }`}
      >
        <div className=" mx-auto flex items-center justify-end pr-4 lg:pr-0 lg:justify-center">
          <MainNavContent />
          {activeSubmenu &&
            menuItems[activeSubmenu] &&
            Object.keys(menuItems[activeSubmenu]).length > 0 && (
              <div
                className="absolute left-0 right-0 bg-black/80 transition-opacity duration-300 ease-in-out"
                style={{ top: '100%' }}
                onMouseEnter={() => handleMouseEnter(activeSubmenu)}
                onMouseLeave={handleMouseLeave}
              >
                <Submenu menuKey={activeSubmenu} />
              </div>
            )}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-black z-[9998] overflow-y-auto">
              <div className="relative min-h-screen px-6 pt-24 pb-8">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-18 right-6 text-white"
                  aria-label="Close menu"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line
                      x1="4"
                      y1="4"
                      x2="20"
                      y2="20"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <line
                      x1="4"
                      y1="20"
                      x2="20"
                      y2="4"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
                {Object.keys(menuItems).map((item) => (
                  <div key={item} className="mb-6">
                    <button
                      onClick={() => {
                        if (hasSubmenu(item)) {
                          setMobileActiveSubmenu(
                            mobileActiveSubmenu === item ? null : item
                          );
                        } else {
                          handleMobileItemClick(item);
                        }
                      }}
                      className="text-white text-2xl font-light tracking-wide w-full text-left flex items-center justify-between py-2"
                    >
                      {item}
                      {hasSubmenu(item) && (
                        <span className="ml-2">
                          {mobileActiveSubmenu === item ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </span>
                      )}
                    </button>
                    {mobileActiveSubmenu === item &&
                      menuItems[item] &&
                      Object.keys(menuItems[item]).length > 0 && (
                        <div className="ml-4 mt-2">
                          {Object.values(menuItems[item]).map((items) =>
                            items.map((subItem) => (
                              <button
                                key={subItem}
                                onClick={(e) => handleClick(item, subItem, e)}
                                className="text-white text-lg block w-full text-left my-2 p-2 hover:bg-gray-800 rounded"
                              >
                                {subItem}
                              </button>
                            ))
                          )}
                        </div>
                      )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;