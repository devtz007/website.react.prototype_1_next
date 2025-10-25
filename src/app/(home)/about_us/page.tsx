// about_1_page

/* Import components */

/* Import styles */
import './_page.scss';

export const metadata = {
  title: 'About Us',
  description:
    'Techjork IT Solutions: Expert web development, software solutions, cybersecurity, IT consultancy, help desk and tech support by Mohaiminul Tazim.',
};

/**
 * This component supports passing additional styles via props and displays a default label if none is provided.
 *
 * @example
 * ```tsx
 * <About1Page />
 * ```
 */

const About1Page: React.FC = () => {
  return (
    <div className="aboutUs_page page_type_1">
      <div className="width_wrapper_type_1">
        {/*CONTAINER: my_container_1  */}
        <div className="my_container_1 my_container_type_1">
          <h1>devtz007</h1>
        </div>
      </div>
    </div>
  );
};

export default About1Page;
