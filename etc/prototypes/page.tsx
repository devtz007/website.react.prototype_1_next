/* src/app/(home)/page.tsx */
import Image from 'next/image';

/* Import media */

/* Import custom components */

/* Import styles */
import './page.scss';

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
      {/* vulnerability management solution */}
      <div className={`container_1 my_container_type_1`}>
        <div className="width_wrapper width_wrapper_type_2">
          <div className="sub_container_1">
            {/* left content */}
            <div className="PageIntro2PagePart__placeHolder">
              {/* COMPONENT: PageIntro2PagePart */}
            </div>
            {/* right image */}
            <div className={`image_cont image_cont_type_1`}></div>
          </div>
        </div>
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

Home4Page.displayName = 'Home4Page';

export default Home4Page;
