import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaChevronDown, FaEnvelope, FaPhoneAlt, FaTimes } from "react-icons/fa";

const serviceItems = [
  { label: "Residential Demolition", path: "/residential-demolition" },
  { label: "Commercial Demolition", path: "/commercial-demolition" },
  { label: "High-Rise Demolition", path: "/high-rise-demolition" },
  { label: "Industrial Demolition", path: "/industrial-demolition" },
  { label: "Asbestos Removal", path: "/asbestos-removal" },
  { label: "Recycling & Remediation", path: "/recycling-remediation" },
];

const simpleItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about-us" },
  { label: "Projects", path: "/projects" },
  { label: "Sectors", path: "/sectors" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact-us" },
];

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null);
  const [mobilePanels, setMobilePanels] = useState({
    services: false,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const desktopDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target)
      ) {
        setOpenDesktopDropdown(null);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setOpenDesktopDropdown(null);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    closeDesktopDropdown();
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const togglePanel = (panel) => {
    setMobilePanels((current) => ({
      ...current,
      [panel]: !current[panel],
    }));
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setMobilePanels({
      services: false,
    });
  };

  const closeDesktopDropdown = () => {
    setOpenDesktopDropdown(null);
  };

  const toggleDesktopDropdown = (dropdownName) => {
    setOpenDesktopDropdown((current) =>
      current === dropdownName ? null : dropdownName
    );
  };

  const handleNavLinkClick = () => {
    closeDesktopDropdown();
    closeMobileMenu();
  };

  const isActivePath = (path) => location.pathname === path;

  const getDesktopLinkClasses = (path) =>
    `text-sm font-semibold uppercase tracking-[0.16em] transition ${
      isActivePath(path) ? "text-amber-300" : "text-slate-200 hover:text-amber-300"
    }`;

  const getMobileLinkClasses = (path) =>
    `block rounded-2xl border px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] transition ${
      isActivePath(path)
        ? "border-amber-300/30 bg-amber-300/10 text-amber-200"
        : "border-white/8 bg-white/[0.03] text-slate-100 hover:border-white/15 hover:bg-white/[0.06] hover:text-amber-300"
    }`;

  const renderDropdown = (label, path, items, dropdownName) => (
    <div
      className="relative"
      ref={desktopDropdownRef}
      onMouseEnter={() => setOpenDesktopDropdown(dropdownName)}
      onMouseLeave={closeDesktopDropdown}
    >
      <div className="inline-flex items-center gap-2">
        <Link
          to={path}
          onClick={handleNavLinkClick}
          className={getDesktopLinkClasses(path)}
        >
          {label}
        </Link>
        <button
          type="button"
          onClick={() => toggleDesktopDropdown(dropdownName)}
          aria-expanded={openDesktopDropdown === dropdownName}
          aria-label={`Toggle ${label} menu`}
          className="inline-flex items-center text-slate-200 transition hover:text-amber-300"
        >
          <FaChevronDown
            className={`text-[10px] transition ${
              openDesktopDropdown === dropdownName ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`absolute left-1/2 top-full z-50 mt-4 w-[290px] -translate-x-1/2 rounded-3xl border border-white/10 bg-[#121a20]/98 p-4 shadow-[0_22px_50px_rgba(0,0,0,0.34)] transition-all duration-200 ${
          openDesktopDropdown === dropdownName
            ? "visible translate-y-1 opacity-100"
            : "invisible opacity-0"
        }`}
      >
        <div className="grid gap-2">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              onClick={closeDesktopDropdown}
              className="rounded-2xl border border-white/6 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-amber-300/20 hover:bg-white/5 hover:text-amber-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <nav className={`sticky top-0 z-50 border-b border-white/10 bg-[#10181d]/95 text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-md transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-3 py-3 md:py-4">
          <Link to="/" className="group flex min-w-0 items-center gap-3">
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-amber-300/20 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.28),rgba(8,16,21,0.96)_68%)] shadow-[0_14px_28px_rgba(0,0,0,0.28)] transition duration-300 group-hover:-translate-y-0.5 group-hover:border-amber-300/35 md:h-14 md:w-14">
              <span className="absolute inset-[3px] rounded-[14px] border border-white/8 bg-[#0b1318]/90" />
              <img
                src="https://i.ibb.co/Dg5vnzDy/Whats-App-Image-2025-09-12-at-4-46-14-PM-removebg-preview.png"
                alt="YN Demolition logo"
                className="relative h-9 w-auto drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] md:h-10"
              />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="truncate text-base font-black uppercase tracking-[0.16em] text-amber-300 md:text-lg">
                  YN Demolition
                </p>
                <span className="hidden rounded-full border border-amber-300/25 bg-amber-300/10 px-2 py-1 text-[9px] font-black uppercase tracking-[0.18em] text-amber-200 sm:inline-flex">
                  QLD
                </span>
              </div>
              <p className="truncate text-[10px] font-semibold uppercase tracking-[0.26em] text-slate-300 md:text-xs">
                Brisbane Demolition
              </p>
              <p className="hidden truncate text-[10px] font-medium tracking-[0.08em] text-slate-400 sm:block">
                Licensed demolition, civil and site clearance
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-4 xl:flex">
            <div className="flex items-center gap-5">
              <Link
                to="/"
                onClick={handleNavLinkClick}
                className={getDesktopLinkClasses("/")}
              >
                Home
              </Link>
              <Link
                to="/about-us"
                onClick={handleNavLinkClick}
                className={getDesktopLinkClasses("/about-us")}
              >
                About
              </Link>
              {renderDropdown("Services", "/services", serviceItems, "services")}
              <Link
                to="/projects"
                onClick={handleNavLinkClick}
                className={getDesktopLinkClasses("/projects")}
              >
                Projects
              </Link>
              <Link
                to="/sectors"
                onClick={handleNavLinkClick}
                className={getDesktopLinkClasses("/sectors")}
              >
                Sectors
              </Link>
              <Link
                to="/blog"
                onClick={handleNavLinkClick}
                className={getDesktopLinkClasses("/blog")}
              >
                Blog
              </Link>
              <Link
                to="/contact-us"
                onClick={handleNavLinkClick}
                className={getDesktopLinkClasses("/contact-us")}
              >
                Contact
              </Link>
            </div>

            <a
              href="tel:+610431270377"
              className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[0_14px_30px_rgba(249,115,22,0.35)] transition hover:from-orange-300 hover:to-orange-400"
            >
              <FaPhoneAlt />
              Call +61 0431 270 377
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex xl:hidden">
            <a
              href="tel:+610431270377"
              className="rounded-lg bg-orange-500 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_12px_24px_rgba(249,115,22,0.3)]"
            >
              Call Now
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-white"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <FaTimes className="text-sm" /> : <FaBars className="text-sm" />}
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+610431270377"
              className="rounded-lg bg-orange-500 px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-white"
            >
              Call
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 text-[11px] font-black uppercase tracking-[0.14em] text-white"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <FaTimes className="text-xs" /> : <FaBars className="text-xs" />}
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="absolute inset-x-0 top-full z-[70] border-t border-white/10 bg-[#081015]/95 shadow-[0_22px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl xl:hidden">
            <div className="max-h-[calc(100vh-78px)] overflow-y-auto px-4 pb-6 pt-4">
              <div className="mx-auto max-w-md space-y-4">
                <div className="rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top,rgba(245,158,11,0.12),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.28em] text-amber-300">
                        Brisbane Priority
                      </p>
                      <h3 className="mt-2 text-lg font-black uppercase tracking-[0.12em] text-white">
                        Fast Access Menu
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Reach services, projects, and quote actions quickly on mobile.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={closeMobileMenu}
                      aria-label="Close mobile menu"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200"
                    >
                      <FaTimes />
                    </button>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <a
                      href="tel:+610431270377"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-b from-orange-400 to-orange-500 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_14px_28px_rgba(249,115,22,0.3)]"
                    >
                      <FaPhoneAlt />
                      Call Now
                    </a>
                    <Link
                      to="/contact-us"
                      onClick={closeMobileMenu}
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 px-4 py-3 text-sm font-black uppercase tracking-[0.12em] text-cyan-100"
                    >
                      <FaEnvelope />
                      Get Quote
                    </Link>
                  </div>
                </div>

                <div className="grid gap-2">
                  {simpleItems.slice(0, 2).map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={getMobileLinkClasses(item.path)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/8 bg-white/[0.03] p-2">
                  <div className="flex items-center justify-between gap-3 px-3 py-2">
                    <Link
                      to="/services"
                      onClick={closeMobileMenu}
                      className={`text-left text-sm font-semibold uppercase tracking-[0.16em] transition ${
                        isActivePath("/services") ? "text-amber-300" : "text-slate-100 hover:text-amber-300"
                      }`}
                    >
                      Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => togglePanel("services")}
                      aria-expanded={mobilePanels.services}
                      aria-label="Toggle Services menu"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:text-amber-300"
                    >
                      <FaChevronDown
                        className={`text-[10px] transition ${
                          mobilePanels.services ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {mobilePanels.services ? (
                    <div className="grid grid-cols-1 gap-2 px-2 pb-2 sm:grid-cols-2">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.label}
                          to={item.path}
                          onClick={closeMobileMenu}
                          className={`rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                            isActivePath(item.path)
                              ? "border-amber-300/30 bg-amber-300/10 text-amber-200"
                              : "border-white/8 bg-white/5 text-slate-100 hover:text-amber-300"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="grid gap-2">
                  {simpleItems.slice(2).map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={closeMobileMenu}
                      className={getMobileLinkClasses(item.path)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="rounded-3xl border border-white/8 bg-white/[0.03] px-4 py-4">
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-slate-400">
                    Service Areas
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Brisbane, Logan, Ipswich, Gold Coast and nearby demolition enquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Navbar;
