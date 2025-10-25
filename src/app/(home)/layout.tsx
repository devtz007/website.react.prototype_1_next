/* layout.tsx */

/* Import components */
import React, { Suspense } from 'react';
import SimpleBarWrapper from '@/clientSide_wrappers/simpleBar_wrapper';
import ScrollToComponentWrapper from '@/clientSide_wrappers/ScrollToComponentWrapper';

/* Import styles */
import styles from './layout.module.scss';

/**
 * Home3Layout component
 *
 * Defines the shell for the home route group, rendering a header, the route's
 * main content, and a footer with predefined menus.
 *
 * @param children - React children representing the page content for this layout.
 * @returns The composed layout with header, main and footer.
 */
const Home3Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${styles.home_3_layout} home_3_layout`}>
      {/* header */}

      <SimpleBarWrapper>
        {/* main content */}
        <main className={styles.home_main}>{children}</main>
        {/* footer */}
      </SimpleBarWrapper>
      <Suspense fallback={null}>
        <ScrollToComponentWrapper />
      </Suspense>
    </div>
  );
};

export default Home3Layout;
