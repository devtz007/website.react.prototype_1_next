/* src/app/layout.tsx */
import type { Metadata } from 'next';
import StoreProvider from '@/redux/provider';

/* Import Poppins font from Google Fonts with specific configurations */
import { Poppins, Montserrat } from 'next/font/google';

// Configure the Poppins font with desired weights, styles, subsets, and display options
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-poppins',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

const montserrat = Montserrat({
  weight: ['700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  variable: '--font-montserrat',
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
});

/* Import global stylesheet */
import '@/styles/globals.scss';

export const metadata: Metadata = {
  title: 'Techjork IT Solutions Limited',
  description:
    'Techjork IT Solutions Limited provides comprehensive digital services, including Web development, Cybersecurity, IT consulting, Tech support, Help desk services, Bug hunting, and Penetration testing. We specialize in creating modern, scalable, highly secure, and cost-effective digital solutions that help businesses enhance their online presence, improve operational efficiency, and safeguard critical assets.',
  keywords: [
    'Techjork',
    'Techjork IT Solutions',
    'Techjork IT Solutions Limited',
    'IT solutions',
    'IT services',
    'Tech support',
    'bug hunting',
    'penetration testing',
    'web development',
    'cybersecurity',
    'IT consulting',
    'help desk',
    'software development',
    'secure web applications',
  ],
  authors: [
    {
      name: 'Techjork IT Solutions Limited',
      url: 'https://www.techjork.com',
    },
  ],
  robots: 'index, follow',
  alternates: {
    canonical: 'https://www.techjork.com',
  },

  //Open Graph
  openGraph: {
    title: 'Techjork IT Solutions Limited',
    description:
      'Web development, Cybersecurity, IT consulting, Tech support, Help desk services, Bug hunting, and Penetration testing services by Techjork.',
    url: 'https://www.techjork.com',
    siteName: 'Techjork IT Solutions Limited',
    images: [
      {
        url: 'https://www.techjork.com/images/global/techjork_social_banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Techjork IT Solutions Limited - Secure, Scalable and Cost effective IT Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // X (Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'Techjork IT Solutions Limited',
    description:
      'Web development, Cybersecurity, IT consulting, Tech support, Help desk services, Bug hunting, and Penetration testing services by Techjork.',
    images: [
      {
        url: 'https://www.techjork.com/images/global/techjork_social_banner.jpg',
        width: 1200,
        height: 628,
        alt: 'Techjork IT Solutions Limited - Secure, Scalable and Cost effective IT Services',
      },
    ],
    site: '@tech_jork',
    creator: '@devtz007',
  },
  metadataBase: new URL('https://www.techjork.com'),
};

/**
 * RootLayout component
 *
 * Provides the top-level HTML and body wrappers, global store provider, global styles,
 * app-wide font variables, and the persistent sidebar shell. It also reads UI state to
 * control whether the sidebar is open.
 *
 * @param children - React children for the active route.
 * @returns The root application layout markup.
 */
const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
        <body>
          <aside></aside>

          <div className={`app_layout`}>{children}</div>
          {/* ✅ JSON-LD Schema for SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Techjork IT Solutions Limited',
                url: 'https://www.techjork.com',
                logo: 'https://www.techjork.com/images/global/h_logo.svg',
                sameAs: [
                  'https://www.facebook.com/techjork',
                  'https://www.linkedin.com/company/techjork',
                  'https://x.com/tech_jork',
                ],
                contactPoint: {
                  '@type': 'ContactPoint',
                  //telephone: '+880XXXXXXXXX',
                  contactType: 'customer support',
                  availableLanguage: 'en',
                },
              }),
            }}
          />
        </body>
      </html>
    </StoreProvider>
  );
};

export default RootLayout;
