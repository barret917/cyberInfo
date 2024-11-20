"use client";

import { NavLink } from "./ActiveClass";
import Link from "next/link";
import style from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";

export const Header = () => {
  const headerRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle(
          style.header_blurred,
          window.scrollY > 0
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  const closeSidebar = (link) => {
    setSelectedLink(link);
    setIsSidebarOpen(false);
  };

  return (
    <header ref={headerRef} className={style.header}>
      <Container>
        <div className={style.header_logo}>
          <Link href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              viewBox="0 0 3500 815.7"
              aria-labelledby="Cyber Info logomark"
              className="h-9 w-auto lg:block"
            >
              <title>Cyber Info Logomark</title>
              <path
                d="M972.72 226.28v-4.35c0-116.38 80.12-197.55 187.79-197.55 88.78 0 157.52 44.39 166.18 135.32h-73.04c-8.13-51.42-36.78-77.92-92.56-77.92-68.21 0-112.61 53.05-112.61 139.63v4.35c0 87.15 41.66 138.58 113.13 138.58 53.57 0 91.46-27.08 99.07-81.75h70.36c-11.39 93.08-77.39 140.2-169.43 140.2-121.26 0-188.9-77.39-188.9-196.45v-.05ZM1466.57 388.68 1354.54 134.3h70.89l75.25 182.39 69.26-182.39h63.86l-154.27 379.95h-64.43l51.42-125.56h.05ZM1734.08 371.89v45.44h-65.49V3.28h65.49v176.46c15.69-27.08 50.9-51.42 92.56-51.42 70.89 0 125.56 52.52 125.56 143.98v4.35c0 90.93-52.52 146.13-125.56 146.13-44.92 0-77.39-22.2-92.56-50.9Zm151.01-94.19v-4.36c0-62.81-32.48-93.61-75.24-93.61-45.49 0-77.92 30.85-77.92 93.61v4.36c0 63.33 30.85 93.08 78.5 93.08s74.72-32.48 74.72-93.08h-.05ZM1984.47 278.8v-4.35c0-87.68 60.08-146.13 140.73-146.13 70.36 0 133.7 41.66 133.7 142.88v18.94h-207.32c2.15 53.57 29.23 83.9 77.92 83.9 39.51 0 60.08-15.69 64.96-43.29h63.33c-9.18 59.55-57.35 92.03-129.92 92.03-83.32 0-143.4-54.68-143.4-143.98Zm209.47-32.48c-3.25-48.69-28.12-70.37-68.74-70.37s-66.01 26.5-72.51 70.37h141.25ZM2307.64 134.3h65.48v53.05c17.84-35.73 44.39-56.83 92.03-57.35v61.18c-57.35.52-92.03 18.94-92.03 79.02v147.23h-65.48V134.3Z"
                className="cls-1"
                fill="#fff"
              ></path>
              <path
                d="M2595.98 30.35h72.52v386.98h-72.52V30.35ZM2739.9 134.3h65.47v44.92c13.55-27.6 44.92-50.9 91.47-50.9 56.83 0 96.87 33 96.87 110.98v178.09h-65.5V245.28c0-42.76-17.31-62.23-56.3-62.23-36.79 0-66.59 22.72-66.59 67.64v166.7h-65.47V134.3h.05ZM3063.59 183.52h-38.41v-49.27h38.41V96.37c0-62.23 34.64-95.81 95.25-95.81 15.68 0 25.44 1.63 37.35 5.4v50.9c-7.55-2.73-17.84-4.88-29.75-4.88-26.5 0-37.35 17.32-37.35 41.66v40.61h64.43v49.27h-64.43v233.81h-65.5V183.52ZM3209.35 278.8v-4.35c0-87.68 62.23-146.13 145.62-146.13S3500 186.25 3500 272.83v4.35c0 88.2-62.23 145.61-145.62 145.61s-145.03-57.93-145.03-143.98Zm223.53-1.1v-3.78c0-58.45-29.22-94.19-77.92-94.19s-78.5 35.16-78.5 93.61v4.35c0 57.93 28.71 94.19 78.5 94.19s77.92-36.26 77.92-94.19Z"
                className="cls-2"
                fill="#b282f8"
              ></path>
              <path
                d="M812.46 2.75 609.34 205.87H203.12L406.23 2.75h406.23Z"
                className="cls-1"
                fill="#fff"
              ></path>
              <path
                d="M609.35 612.1 406.23 408.98 203.11 205.86 0 408.99l203.12 203.12 29.02 29.02 174.1 174.1h406.23L609.35 612.11Z"
                className="cls-1"
                fill="#fff"
              ></path>
            </svg>
          </Link>
        </div>

        <nav className={style.header_nav}>
          <ul>
            <li>
              <NavLink href="/" onClick={() => closeSidebar("/")}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" onClick={() => closeSidebar("/about")}>
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink href="/art" onClick={() => closeSidebar("/art")}>
                Статьи
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={style.header_social}>
          <Link href="#">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              aria-labelledby="Discord logo"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <title>Discord Logo</title>
              <path
                fillRule="evenodd"
                d="m40,12c0,0 -4.585,-3.588 -10,-4l-0.488,0.976c4.896,1.198 7.142,2.915 9.488,5.024c-4.045,-2.065 -8.039,-4 -15,-4s-10.955,1.935 -15,4c2.346,-2.109 5.018,-4.015 9.488,-5.024l-0.488,-0.976c-5.415,0.412 -10,4 -10,4c-0.013,0.026 -5,7.415 -5,22c4.978,4.978 14.688,5 14.688,5l1.812,-2.488c-3.772,-1.069 -6.182,-3.269 -8.2,-6c1.615,1.222 4.031,2.736 7.024,3.472c3.808,0.897 7.897,1.112 12.176,0c3.132,-0.775 5.628,-2.25 7.536,-3.472c-2.018,2.731 -4.428,4.931 -8.2,6l1.812,2.488c0,0 9.71,-0.022 14.688,-5c0,-14.585 -4.987,-21.974 -5,-22zm-25.5,18.5c-2.209,0 -4,-1.791 -4,-4s1.791,-4 4,-4s4,1.791 4,4s-1.791,4 -4,4zm19,0c-2.209,0 -4,-1.791 -4,-4s1.791,-4 4,-4s4,1.791 4,4s-1.791,4 -4,4z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-labelledby="youtube-logo-title"
              className="h-6 w-6"
            >
              <title id="youtube-logo-title">YouTube Logo</title>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 12 5 12 5s6.255 0 7.814.418ZM10 9v6l5-3-5-3Z"
              />
            </svg>
          </Link>
          <Link href="#">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-labelledby="Twitter logo"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <title>Twitter Logo</title>
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
            </svg>
          </Link>
        </div>
      </Container>

      <div className={style.menuButton} onClick={toggleSidebar}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          className={style.menuIcon}
        >
          <path d="M4 7h16M4 12h16M4 17h16"></path>
        </svg>
      </div>

      {isSidebarOpen && (
        <div className={style.sidebar}>
          <ul>
            <li>
              <NavLink href="/" onClick={() => closeSidebar("/")}>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink href="/about" onClick={() => closeSidebar("/about")}>
                О нас
              </NavLink>
            </li>
            <li>
              <NavLink href="/art" onClick={() => closeSidebar("/art")}>
                Статьи
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
