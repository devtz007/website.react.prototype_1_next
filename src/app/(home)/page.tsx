/* Import styles */
import './_page.scss';

export const metadata = {
  title: 'Techjork IT Solutions Limited',
  description:
    'Techjork IT Solutions provides expert web development, cybersecurity, IT consulting, software solutions, help desk and tech support services.',
};

/**
 * This component supports passing additional styles via props and displays a default label if none is provided.
 
 * @param infoP - Pass info here
 * @example
 * ```tsx
 * <Home4Page />
 * ```
 */

const Home4Page: React.FC = () => {
  return (
    <div className="home_4_page page_type_1">
      {/* Width wrapper */}
      <div className="width_wrapper_type_1">
        <h1>Techjork IT Solutions Limited</h1>
      </div>
    </div>
  );
};

export default Home4Page;
