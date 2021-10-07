import React, { useEffect, useRef } from "react"

import { Link, useLocation } from "react-router-dom"
import Logo from "../assets/images/Logo-2.png"

const mainNav = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Catalogue",
    path: "/catalogue",
  },
  {
    name: "Accessories",
    path: "/accessories",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
]

function Header() {
  const { pathname } = useLocation()
  const activeNav = mainNav.findIndex((e) => e.path === pathname)

  const headerRef = useRef(null)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("shrink")
      } else {
        headerRef.current.classList.remove("shrink")
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__left">
            {mainNav.map((item, index) => (
              <div key={index} className={`header__menu__left__item header__menu__item ${index === activeNav ? "active" : ""}`}>
                <Link to={item.path}>
                  <span>{item.name}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__right__item header__menu__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <i className="bx bx-user"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
