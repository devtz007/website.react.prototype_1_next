/* pageIntro_2-pagePart.tsx */
import React, { JSX } from 'react';
import Link from 'next/link';

/* Import media */
import { AArrowDown } from 'lucide-react';

/* Import styles */
import styles from './pageIntro_3-pagePart.module.scss';

/* Type definitions */
interface PageIntro3PagePartProps {
  headingType: keyof JSX.IntrinsicElements;
  headingText: string;
  list?: {
	icon?: JSX.Element;
	text: string;
  }[];
  linkText?: string;
  linkValue?: string;
  linkHref?: string;
}

interface Props {
  infoP?: PageIntro3PagePartProps;
}

/**
 * PageIntro3PagePart Component
 *
 * Displays an introduction section with a heading, list, and call-to-action link.
 *
 * @param infoP - Component properties
 *
 * @example
 * <PageIntro3PagePart
 *   infoP={{
 *     headingType: 'h2',
 *     headingText: 'Security Insights',
 *     list: [
 *       {
 *         icon: <AArrowDown color="blue" />,
 *         text: 'Scan infrastructure for known CVEs',
 *       },
 *       {
 *         icon: <AlertTriangle color="orange" />,
 *         text: 'Get real-time alerts for zero-day threats',
 *       },
 *     ],
 *     linkText: 'Start Scanning',
 *     linkValue: 'start_scan',
 *     linkHref: '/scan',
 *   }}
 * />
 */

const PageIntro3PagePart: React.FC<Props> = ({ infoP }) => {
  if (!infoP) return null;

  const { headingType, headingText, list, linkText, linkHref } = infoP;

  const HeadingTag: keyof JSX.IntrinsicElements = headingType;

  return (
	<div className={styles.pageIntro_3_pagePart}>
	  {/* Heading */}
	  {headingText &&
		React.createElement(
		  HeadingTag,
		  { className: `${styles.heading} heading` },
		  headingText,
		)}

	  {/* List */}
	  {Array.isArray(list) && list.length > 0 && (
		<div className={styles.list}>
		  <ul>
			{list.map((item, index) => (
			  <li key={index}>
				<div className={styles.icon}>
				  {item.icon || <AArrowDown color="red" />}
				</div>
				<div className={styles.text}>{item.text}</div>
			  </li>
			))}
		  </ul>
		</div>
	  )}

	  {/* Link */}
	  {linkText && linkHref && (
		<div className="button_content_type_1">
		  <Link href={linkHref} className={styles.call_to_action}>
			{linkText}
		  </Link>
		</div>
	  )}
	</div>
  );
};

export default PageIntro3PagePart;
