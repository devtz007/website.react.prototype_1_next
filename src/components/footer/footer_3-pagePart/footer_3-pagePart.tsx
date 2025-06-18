/* footer_2-pagePart.tsx */
import { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* Import media */

//social
import { Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

/* Import styles */
import styles from './footer_3_pagePart.module.scss';

/* Define component prop types */
interface Props {
  infoP?: {
    footerMenus: {
      heading: string;
      item: {
        text: string;
        value: string;
        link: string;
      }[]; // Ensure item is always an array
    }[];
    logo?: {
      src: string;
      link: string;
      alt: string;
    };
    social: {
      icon: JSX.Element;
      linkHref: string;
    }[];
  };
}

const Footer3PagePart: React.FC<Props> = ({ infoP }) => {
  // Default footer content if no props are provided
  const defaultInfo = {
    footerMenus: [
      {
        heading: 'Explore',
        item: [
          {
            text: 'Browse Mentor',
            value: 'browse_mentor',
            link: '#',
          },
          {
            text: 'Become A Mentor',
            value: 'become_mentor',
            link: '#',
          },
          {
            text: 'Mentee Register',
            value: 'mentee_register',
            link: '#',
          },
        ],
      },
      {
        heading: 'About',
        item: [
          {
            text: 'Terms & Conditions',
            value: 'terms_conditions',
            link: '#',
          },
          {
            text: 'Privacy Policy',
            value: '',
            link: '#',
          },
          {
            text: 'Contact Us',
            value: '',
            link: '#',
          },
        ],
      },
      {
        heading: 'Social',
        item: [
          {
            text: 'Linkedin',
            value: 'linkedin',
            link: '#',
          },
          {
            text: 'Facebook',
            value: 'facebook',
            link: '#',
          },
          {
            text: 'X (Twitter)',
            value: 'x_twitter',
            link: '#',
          },
        ],
      },
    ],

    social: [
      {
        icon: <Linkedin color="green" />,
        linkHref: '#',
      },
      {
        icon: <Facebook color="green" />,
        linkHref: '#',
      },
      {
        icon: <Twitter color="green" />,
        linkHref: '#',
      },
      {
        icon: <Instagram color="green" />,
        linkHref: '#',
      },
    ],
  };

  // Use provided props or default values
  const info = infoP || defaultInfo;

  return (
    <div className={styles.footer_3_pagePart}>
      <div className={`${styles.width_wrapper} width_wrapper_type_1`}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Link
            href="/"
            className={`${styles.logoContainer} icon_container_type_1`}
          >
            {/* Logo image */}
            <Image
              src="/global/logo.svg"
              alt={'Company Logo'}
              width={100}
              height={50}
            />
          </Link>
          <div className={styles.social_content}>
            {info.social.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.linkHref}
                  className={`${styles.icon} icon_container_type_1`}
                >
                  {item.icon}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer Menus */}
        <div className={styles.menuContainer}>
          {info.footerMenus.map((menu, index) => (
            <div key={index} className={styles.menu}>
              <div className={styles.menuHeading}>{menu.heading}</div>
              <ul className={styles.menuList}>
                {menu.item.map((subItem, subIndex) => (
                  <li key={subIndex} className={styles.menuItem}>
                    <Link
                      href={subItem.link}
                      className={styles.menuLink}
                      data-value={subItem.value}
                    >
                      {subItem.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div className={styles.sub_footer}>
        <div className={`${styles.width_wrapper_2}`}>
          <Link href="#" className={styles.link}>
            @2024 PentestPilot. All Right Reserved
          </Link>
          <div className={styles.tac}>
            <Link href="#" className={styles.link}>
              Terms & Condition
            </Link>
            <Link href="#" className={styles.link}>
              Privacy Policy
            </Link>
            <Link href="#" className={styles.link}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer3PagePart.displayName = 'Footer3PagePart';

export default Footer3PagePart;
