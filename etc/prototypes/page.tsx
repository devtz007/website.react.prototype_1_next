/* (home)/page.tsx */
import type { Metadata } from 'next';

/* Import custom components */

/* Import media */

/* Import styles */
import './page.scss';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Techjork IT Solutions: Expert web development, software solutions, cybersecurity, IT consultancy, help desk and tech support by Mohaiminul Tazim.',
};
/**
 * This component supports passing additional styles via props and displays a default label if none is provided.
 
 * @param infoP - Pass info here
 * @example
 * ```tsx
 * <Prototype1Page />
 * ```
 */

const Prototype1Page: React.FC = () => {
  return (
    <div className="prototype_1_page page_type_1">
      <div className="width_wrapper_type_1">
        <div className="container_1 my_container_type_1">
          <div className="width_wrapper_type_2">
            <div className="sub_container_1_1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prototype1Page;
