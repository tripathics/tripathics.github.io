"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const mainNavItems = [
  { url: "/", label: "Home" },
  { url: "/posts", label: "Posts" },
  { url: "/projects", label: "Projects" },
  { url: "/gallery", label: "Gallery" },
];

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle = ({ theme = "light", toggleTheme }: ThemeToggleProps) => {
  return (
    <button
      type="button"
      onClick={() => toggleTheme()}
      className={`theme-toggle ${theme}`}
      aria-label="Theme toggle button"
    >
      <svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        fill="currentcolor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Change theme</title>
        <g id="dark 1" clipPath="url(#clip0_1_2)">
          <g id="dark">
            <g id="inner">
              <path
                id="Vector"
                d="M125 75C97.3753 75 75 97.3753 75 125C75 152.624 97.3753 175 125 175C152.624 175 175 152.624 175 125C175 97.3753 152.624 75 125 75Z"
                fill="currentcolor"
              />
            </g>
            <g id="outer">
              <path
                id="Vector_2"
                d="M125 191.313C88.4173 191.313 58.687 161.583 58.687 125C58.687 88.4173 88.4173 58.687 125 58.687C161.583 58.687 191.313 88.4173 191.313 125C191.313 161.583 161.583 191.313 125 191.313ZM213.417 88.4173V36.5827H187.5H161.583L143.292 18.2913L125 0L88.4173 36.5827H36.5827V88.4173L0 125L36.5827 161.583V213.417H88.4173L125 250L161.583 213.417H213.417V161.583L250 125L213.417 88.4173Z"
                fill="currentcolor"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_2">
            <rect width="250" height="250" fill="currentcolor" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

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

interface NavigationProps {
  theme: string;
  toggleTheme: () => void;
}

const Navigation = ({ theme = "light", toggleTheme }: NavigationProps) => {
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
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
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
          <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
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
