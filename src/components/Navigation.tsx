"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const mainNavItems = [
  { url: "/", label: "Home" },
  { url: "/posts", label: "Posts" },
  { url: "/projects", label: "Projects" },
  { url: "/gallery", label: "Gallery" },
];

const NavLink = ({
  url,
  label,
  isActive,
  onNavigate,
}: {
  url: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
}) => {
  return (
    <li>
      <Link
        href={url}
        onClick={onNavigate}
        className={isActive ? "active" : undefined}
      >
        {label}
      </Link>
    </li>
  );
};

const Navigation = () => {
  const pathname = usePathname();

  const handleMenu = (type?: string) => {
    if (typeof document === "undefined") return;
    const navItems = document.getElementById("nav-exp-items");
    const menuBtns = [].slice.apply(
      document.getElementsByClassName("menu"),
    ) as HTMLElement[];

    if (type === "close") {
      navItems?.classList.remove("expand");
      menuBtns.forEach((btn) => {
        btn.classList.remove("open");
      });
      document.body.style.overflow = "auto";
    } else if (type === "open") {
      navItems?.classList.add("expand");
      menuBtns.forEach((btn) => {
        btn.classList.add("open");
      });
      document.body.style.overflow = "hidden";
    } else {
      navItems?.classList.toggle("expand");
      menuBtns.forEach((btn) => {
        btn.classList.toggle("open");
      });
      if (navItems?.classList.contains("expand")) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }
  };

  const closeMenu = () => handleMenu("close");

  const renderLinks = (isCollapsed: boolean) =>
    mainNavItems.map((item) => (
      <NavLink
        key={item.url}
        url={item.url}
        label={item.label}
        isActive={pathname === item.url}
        onNavigate={isCollapsed ? undefined : closeMenu}
      />
    ));

  const logo = (
    <div className="logo">
      <Link
        onClick={closeMenu}
        href="/"
        aria-label="Home"
        className={pathname === "/" ? "active" : undefined}
      >
        {`{ \\ `}
        <span id="logoDash">-</span>{" "}
      </Link>
    </div>
  );

  return (
    <nav className="nav-component">
      <div id="nav-bar">
        <div className="nav-header" id="nav-colapse-items">
          <ul>{renderLinks(true)}</ul>
          {logo}
          <button
            type="button"
            id="menu-btn"
            className="menu"
            onClick={() => handleMenu()}
            aria-label="Menu button"
          >
            <span className="menu-label" aria-hidden="true">
              CLOSE
            </span>
          </button>
          <ThemeToggle />
        </div>
      </div>
      <div id="nav-exp-items">
        <div className="nav-header">
          {logo}
          <button
            type="button"
            id="menu-btn"
            className="menu"
            onClick={() => handleMenu()}
            aria-label="Menu button"
          >
            <span className="menu-label" aria-hidden="true">
              CLOSE
            </span>
          </button>
          <ThemeToggle />
        </div>
        <ul>{renderLinks(false)}</ul>
        <div className="nav-footer">
          <p>© 2021-Present Chandrashekhar Tripathi</p>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
