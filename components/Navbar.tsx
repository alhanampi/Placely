"use client";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog, DropdownMenu } from "radix-ui";

import logo from "@/assets/images/logo.png";
import profileDefault from "@/assets/images/profile.png";

import { FaGoogle } from "react-icons/fa";
import { LuBell, LuMenu, LuX } from "react-icons/lu";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedin] = useState(false);

  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/properties", label: "Properties" },
    ...(isLoggedin ? [{ href: "/properties/add", label: "Add Property" }] : []),
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/">
          <Image className={styles.logo} src={logo} alt="" />
          <span>Placely</span>
        </Link>

        <nav aria-label="Main" className={styles.desktopNav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          {!isLoggedin && (
            <button type="button" className={styles.ctaButton}>
              <FaGoogle aria-hidden="true" />
              <span>Login or Register</span>
            </button>
          )}

          {isLoggedin && (
            <>
              <Link href="/properties/add" className={styles.ctaButton}>
                List a property
              </Link>
              <Link
                href="/messages"
                className={styles.iconButton}
                aria-label="Messages, 2 unread"
              >
                <LuBell aria-hidden="true" />
                {/* Replace with the actual number of notifications */}
                <span className={styles.badge}>2</span>
              </Link>

              <DropdownMenu.Root>
                <DropdownMenu.Trigger
                  className={styles.avatarButton}
                  aria-label="Open user menu"
                >
                  <Image
                    className={styles.avatar}
                    src={profileDefault}
                    alt=""
                  />
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                  <DropdownMenu.Content
                    className={styles.menu}
                    align="end"
                    sideOffset={8}
                  >
                    <DropdownMenu.Item asChild className={styles.menuItem}>
                      <Link href="/profile">Your Profile</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item asChild className={styles.menuItem}>
                      <Link href="/properties/saved">Saved Properties</Link>
                    </DropdownMenu.Item>
                    <DropdownMenu.Separator className={styles.menuSeparator} />
                    <DropdownMenu.Item className={styles.menuItem}>
                      Sign Out
                    </DropdownMenu.Item>
                  </DropdownMenu.Content>
                </DropdownMenu.Portal>
              </DropdownMenu.Root>
            </>
          )}

          <Dialog.Root
            open={isMobileMenuOpen}
            onOpenChange={setIsMobileMenuOpen}
          >
            <Dialog.Trigger
              className={`${styles.iconButton} ${styles.menuToggle}`}
              aria-label="Open main menu"
            >
              <LuMenu aria-hidden="true" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.sheetOverlay} />
              <Dialog.Content
                className={styles.sheet}
                aria-describedby={undefined}
              >
                <div className={styles.sheetHeader}>
                  <Dialog.Title className={styles.sheetTitle}>
                    Menu
                  </Dialog.Title>
                  <Dialog.Close
                    className={styles.iconButton}
                    aria-label="Close menu"
                  >
                    <LuX aria-hidden="true" />
                  </Dialog.Close>
                </div>
                <nav aria-label="Mobile" className={styles.sheetNav}>
                  {links.map((link) => (
                    <Dialog.Close asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`${styles.sheetLink} ${pathname === link.href ? styles.navLinkActive : ""}`}
                        aria-current={
                          pathname === link.href ? "page" : undefined
                        }
                      >
                        {link.label}
                      </Link>
                    </Dialog.Close>
                  ))}
                  {!isLoggedin && (
                    <button type="button" className={styles.sheetCta}>
                      <FaGoogle aria-hidden="true" />
                      <span>Login or Register</span>
                    </button>
                  )}
                  {isLoggedin && (
                    <>
                      <Dialog.Close asChild>
                        <Link href="/profile" className={styles.sheetLink}>
                          Your Profile
                        </Link>
                      </Dialog.Close>
                      <Dialog.Close asChild>
                        <Link
                          href="/properties/saved"
                          className={styles.sheetLink}
                        >
                          Saved Properties
                        </Link>
                      </Dialog.Close>
                      <button type="button" className={styles.sheetLink}>
                        Sign Out
                      </button>
                    </>
                  )}
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
