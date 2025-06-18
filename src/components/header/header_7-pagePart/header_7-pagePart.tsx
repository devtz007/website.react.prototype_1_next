'use client';
import Link from 'next/link';
import Image from 'next/image';

/* Import media */
import { LogIn, UserRoundPlus } from 'lucide-react';

/* Import custom components */

/* Import styles */
import styles from './header_7-pagePart.module.scss';

/**
 * A header component
 *
 * @example
 * ```tsx
 * <Header7PagePart />
 * ```
 */

const Header7PagePart: React.FC = () => {
  return (
    <header className={`${styles.header_7_pagePart} border_type_1`}>
      {/* Logo Section */}
      <Link href="/" className={`${styles.logo} icon_cont_type_1`}>
        {/* Logo image */}
        <Image
          src="/global/logo.svg"
          alt="Company Logo"
          width={600}
          height={300}
          className={styles.image}
          priority
        />
      </Link>

      {/* menus1PagePart_placeHolder */}
      <div className={styles.menus1PagePart_placeHolder}>
        {/* COMPONENT: Menus1PagePart */}
      </div>

      {/* Actions Section */}
      <div className={styles.actions}>
        {/* Login */}
        <Link className={`${styles.link} ${styles.link_login}`} href="/login">
          <div className={`${styles.icon} icon_cont_type_1`}>
            <LogIn color="rgb(var(--first-text-color, 255, 255, 255))" />
          </div>
          <div className={styles.text}>Login</div>
        </Link>

        {/*  Create account */}
        <Link
          className={`${styles.link} ${styles.link_signUp}`}
          href="/registration"
        >
          <div className={`${styles.icon} icon_cont_type_1`}>
            <UserRoundPlus color="rgb(var(--first-text-color, 255, 255, 255))" />
          </div>
          <div className={styles.text}>Create account</div>
        </Link>
      </div>
    </header>
  );
};

export default Header7PagePart;
