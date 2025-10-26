/* prototype_1-pagePart.tsx */

/* Import custom component */

/* Import media */

/* Import styles */
import styles from './pageIntro_3-pagePart.module.scss';

/* Type definitions */
interface Prototype1PagePartProps {}

interface Props {
  infoP?: Prototype1PagePartProps;
}

/**
 * Displays an introduction section with a heading, list, and call-to-action link.
 *
 * @param infoP - Component properties
 * @example
 * ```tsx
 * <Prototype1PagePart
 *   infoP={{}}
 * />
 * ```
 * @returns The SVG representation of the WhatsApp icon.
 */

const Prototype1PagePart: React.FC<Props> = ({ infoP }) => {
  if (!infoP) return null;

  const { info1 } = infoP;

  return <div className={styles.prototype_1_pagePart}></div>;
};

export default Prototype1PagePart;
