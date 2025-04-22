"use client";

import React, { useState, useRef, useEffect } from "react";
import "./styles.scss";
import { linkItems } from "./links";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { usePathname } from 'next/navigation'
import Image from "next/image";

const Header = () => {
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);
    const hamburgerMenu = useRef(null);
    const mobileNavBar = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const toggleMobileMenuBar = () => {
        let hasOpenClass = null;

        if (hamburgerMenu.current) {
            (hamburgerMenu.current as HTMLElement).classList.toggle("openMenu");
        }

        if (mobileNavBar.current) {
            hasOpenClass = (mobileNavBar.current as HTMLElement).classList.contains("openMobileMenu");
        }

        if (!hasOpenClass) {
            setIsOpen(true);
            if (mobileNavBar.current) {
                (mobileNavBar.current as HTMLElement).classList.add("openMobileMenu");
                (mobileNavBar.current as HTMLElement).classList.add("isAnimating");
                (mobileNavBar.current as HTMLElement).classList.add("slideInLeft");
            }
        } else {
            setIsOpen(false);
            if (mobileNavBar.current) {
                (mobileNavBar.current as HTMLElement).classList.remove("openMobileMenu");
                (mobileNavBar.current as HTMLElement).classList.add("isAnimating");
                (mobileNavBar.current as HTMLElement).classList.add("slideOutLeft");
            }
        }
    };

    const removeAnimationClasses = () => {
        if (isOpen) {
            if (mobileNavBar.current) {
                (mobileNavBar.current as HTMLElement).classList.remove("isAnimating");
                (mobileNavBar.current as HTMLElement).classList.remove("slideInLeft");
            }
        } else {
            if (mobileNavBar.current) {
                (mobileNavBar.current as HTMLElement).classList.remove("isAnimating");
                (mobileNavBar.current as HTMLElement).classList.remove("slideOutLeft");
            }
        }
    };

    return (
        <header role="banner" className={["navigation", !isMobile ? "desktopParentNavigation" : ""].join(" ")}>
            <nav
                className="navbar navbar-expand-lg d-lg-none navbar-light mobileNavBar"
                role="navigation"
                aria-label="Primary Navigation">
                <div className="container-fluid d-lg-none">
                    <Link href="/"
                        className="navbar-brand mobileNavbarBrand">
                        <Image
                            src="/images/logo.png"
                            width={250}
                            height={100}
                            priority={true}
                            sizes="100vw"
                            style={{
                                height: 'auto'
                            }}
                            alt="milestone"
                        />
                    </Link>
                    <button ref={hamburgerMenu} className="hamburgerMenu" onClick={toggleMobileMenuBar}>
                        <span className="hamburgerMenuItem"></span>
                        <span className="hamburgerMenuItem"></span>
                        <span className="hamburgerMenuItem"></span>
                        <span className="hamburgerMenuItem"></span>
                    </button>
                </div>
            </nav>

            <div ref={mobileNavBar} className="mobileNavbarMenu" onAnimationEnd={() => removeAnimationClasses()}>
                <div className="mobileCtaButtons">
                    <Link
                        className="registerButton"
                        href={``}>
                        <Image
                            src="/icons/phone.svg"
                            width={20}
                            height={20}
                            priority={true}
                            sizes="100vw"
                            style={{
                                height: 'auto',
                            }}
                            alt="phone"
                        />
                        <p>XXX-XXX-XXXX</p>
                    </Link>
                    <Link
                        className="loginButton"
                        href={``}>
                        <Image
                            src="/icons/user.svg"
                            width={20}
                            height={20}
                            priority={true}
                            sizes="100vw"
                            style={{
                                height: 'auto',
                            }}
                            alt="phone"
                        />
                        <p>Login</p>
                    </Link>
                </div>
                <div className="mobileNavbarLinkContainer">
                    <ul className="navbar-nav">
                        {linkItems.map((item) => {
                            return <li className="nav-item mobileNavBarItem" key={item.text}>
                                <Link
                                    href={item.path}
                                    data-target={item.path}
                                    className={["nav-link", "mobileNavBarItemLink",
                                        pathname === "/" + item.path ? "mobileActive" : ""].join(" ")}>
                                    {item.text}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>

            {/* Desktop version */}
            <div className="desktopNavBar">
                <section className="navigation d-none d-lg-flex">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="desktopNavigation">
                                    <div className="leftSection">
                                        <Link href="/" className={["navbarBrand"].join(" ")}>
                                            <Image
                                                src="/images/logo.png"
                                                width={220}
                                                height={100}
                                                priority={true}
                                                sizes="100vw"
                                                style={{
                                                    height: 'auto',
                                                }}
                                                alt="milestone"
                                            />
                                        </Link>
                                    </div>
                                    <div className="navItemContainer">
                                        <ul className="navigationContent">
                                            {linkItems.map((item) => {
                                                return <li className="navigationList" key={item.text}>
                                                    <Link
                                                        href={item.path}
                                                        className={`navigationListItem ${pathname === "/" + item.path ? "desktopActive" : ""}`}>
                                                        {item.text}
                                                    </Link>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="rightSection">
                                        <div className="ctaButtons">
                                            <Link
                                                className="loginButton"
                                                target="_blank"
                                                href={``}>
                                                <Image
                                                    src="/icons/phone.svg"
                                                    width={20}
                                                    height={20}
                                                    priority={true}
                                                    sizes="100vw"
                                                    style={{
                                                        height: 'auto',
                                                    }}
                                                    alt="phone"
                                                />
                                                <p>XXX-XXX-XXXX</p>
                                            </Link>
                                            <Link
                                                className="registerButton"
                                                target="_blank"
                                                href={``}>
                                                <Image
                                                    src="/icons/user.svg"
                                                    width={20}
                                                    height={20}
                                                    priority={true}
                                                    sizes="100vw"
                                                    style={{
                                                        height: 'auto',
                                                    }}
                                                    alt="phone"
                                                />
                                                <p>Login</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
};

export default Header;