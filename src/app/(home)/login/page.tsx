/* custom components */

import Header7PagePart from '@/components/header/header_7-pagePart/header_7-pagePart';

/* styles */
import './page.scss';

/**
 * This component renders the login page layout, wrapping the `Login2PagePart` component inside a styled container.
 *
 * @example
 * ```tsx
 * <LoginPage />
 * ```
 */
const LoginPage: React.FC = () => {
  return (
    <div className="login_page">
      <div className="width_wrapper">
        {/* COMPONENT: Header7PagePart */}
        <Header7PagePart />

        <div className="main_container_1">
          {/* Heading */}
          <div className="container_1">
            <h3>Customer Sign-in</h3>
          </div>

          <div className="container_2">
            <div className="Login2PagePart_placeHolder"></div>
            <div className="login_info">
              <h2>SEE WHAT HACKERS SEE</h2>
              <p style={{ textAlign: 'justify' }}>
                Blind spots in your attack surface create prime opportunities
                for adversaries. That's why we're offering you exclusive access
                to Surface Command, our attack surface management solution.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="background_image"></div>
    </div>
  );
};

export default LoginPage;
