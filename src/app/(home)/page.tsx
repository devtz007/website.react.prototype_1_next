/* src/app/(home)/page.tsx */
import Image from 'next/image';

/* Import media */

/* Import custom components */
import Header7PagePart from '@/components/header/header_7-pagePart/header_7-pagePart';

/* Import styles */
import './page.scss';

/**
 * This component supports passing additional styles via props and displays a default label if none is provided.
 
 * @param infoP - Pass info here
 * @example
 * ```tsx
 * <Home3Page />
 * ```
 */

const Home3Page: React.FC = () => {
  return (
    <div className="home_3_page page_type_1">
      {/* vulnerability management solution */}
      <div className={`container_1 my_container_type_1`}>
        <div className="width_wrapper width_wrapper_type_2">
          {/* header */}
          <Header7PagePart />
          <div className="sub_container_1">
            {/* left content */}
            <div className="PageIntro2PagePart__placeHolder">
              {/* COMPONENT: PageIntro2PagePart */}
            </div>
            {/* right image */}
            <div className={`image_cont image_cont_type_1`}></div>
          </div>
        </div>
        <div className="round_shape_1"></div>
        <div className="round_shape_2"></div>
      </div>

      {/* company partners */}
      <div className="container_2 my_container_type_1">
        <div className="width_wrapper width_wrapper_type_2">
          <div className="SponsorCards1PagePart_placeHolder">
            {/* COMPONENT: SponsorCards1PagePart */}
          </div>
        </div>
      </div>

      {/* features */}
      <div className="container_3 my_container_type_1">
        <div className="width_wrapper width_wrapper_type_2">
          <div className="FeatureCards4PagePart_placeHolder">
            {/* COMPONENT: FeatureCards4PagePart */}
          </div>
        </div>
      </div>

      {/* why us*/}
      <div className="container_4 my_container_type_1">
        <div className="width_wrapper width_wrapper_type_2">
          <div className="PosterCards2PagePart_placeHolder">{/* why us */}</div>
        </div>
      </div>

      {/* about pentestpilot */}
      <div className="container_5 my_container_type_1">
        <div className="width_wrapper width_wrapper_type_2">
          <div className="About1PagePart_placeHolder">
            {/* COMPONENT: About1PagePart */}
          </div>
          <div className="image_cont image_cont_type_1"></div>
        </div>
        <div className={'bg1_image'}></div>
      </div>

      {/* customer quotes */}
      <div className="container_6 my_container_type_1">
        <div className="width_wrapper width_wrapper_type_2">
          {/* customer quotes */}
        </div>
      </div>

      {/* poster card */}
      <div className="container_7 my_container_type_1">
        <div className="width_wrapper width_wrapper_type_2">
          {/* COMPONENT: PosterCard3PagePart */}
        </div>
      </div>
    </div>
  );
};

Home3Page.displayName = 'Home3Page';

export default Home3Page;
