import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

import styles from './layout.module.scss';

import Footer3PagePart from '@/components/footer/footer_3-pagePart/footer_3-pagePart';

/* Home3Layout component defines the layout structure of the homepage */
const Home3Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.home_3_layout}>
      {/* custom_scrollbar_1 class is used to apply custom scrollbar styles */}

      <div className="custom_scrollbar_1">
        {/* main content */}
        <main className={styles.home_main}>{children}</main>
        {/* footer */}
        <Footer3PagePart
          infoP={{
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
                icon: <Linkedin color="var(--second-text-color, #f5f5f5)" />,
                linkHref: '#',
              },
              {
                icon: <Facebook color="var(--second-text-color, #f5f5f5)" />,
                linkHref: '#',
              },
              {
                icon: <Twitter color="var(--second-text-color, #f5f5f5)" />,
                linkHref: '#',
              },
              {
                icon: <Instagram color="var(--second-text-color, #f5f5f5)" />,
                linkHref: '#',
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

Home3Layout.displayName = 'Home3Layout';

export default Home3Layout;
