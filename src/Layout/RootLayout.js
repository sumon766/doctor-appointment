/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HiX, HiMenuAlt1 } from "react-icons/hi";

import s from "./RootLayout.module.scss";
import NavContainer from "./NavContainer";

function RootLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAppointmentPage = location.pathname === "/appointment";

  return (
    <div className={isAppointmentPage ? "appointment-page" : ""}>
      <div className={s["root-wrapper"]}>
        <div className={s["toggle-mobile-menu"]}>
          {!mobileMenuOpen && (
            <span
              className={s["icon-wrapper"]}
              onClick={() => setMobileMenuOpen(true)}
            >
              <HiMenuAlt1 className={s.icon} />
            </span>
          )}
          {mobileMenuOpen && (
            <span
              className={s["icon-wrapper"]}
              onClick={() => setMobileMenuOpen(false)}
            >
              <HiX className={s.icon} />
            </span>
          )}
        </div>
        <div className={s["sere-main-nav-wrapper"]}>
          <NavContainer setMobileMenuOpen={setMobileMenuOpen} />
        </div>
        {mobileMenuOpen && (
          <div className={s["sere-mobile-nav-wrapper"]}>
            <NavContainer setMobileMenuOpen={setMobileMenuOpen} />
          </div>
        )}

        <div className={s["main-content"]}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
