/* custom components */
import Header7PagePart from '@/components/header/header_7-pagePart/header_7-pagePart';

/* styles */
import './page.scss';

/**
 * This component supports passing additional styles via props and displays a default label if none is provided.
 * @example
 * <RegistrationPage />
 */

const RegistrationPage: React.FC = () => {
  return (
    <div className="registration_page">
      <div className="width_wrapper">
        {/* COMPONENT: Header7PagePart */}
        <Header7PagePart />

        <div className="main_container_1">
          {/* Heading */}
          <div className="container_1">
            <h3>Create Your Account</h3>
          </div>

          <div className="container_2">
            <div className="Reg2PagePart_placeHolder"></div>
            <div className="login_info">
              <h2>JOIN OUR SECURITY NETWORK</h2>
              <p>
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

RegistrationPage.displayName = 'RegistrationPage';

export default RegistrationPage;
