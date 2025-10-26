/* practice/page.tsx */

/* Import custom components */
import DemoSlice1PagePart from '@/components/demoSlice_1-pagePart/demoSlice_1-pagePart';

/* Import styles */
import './_page.scss';

/**
 * This component supports passing additional styles via props and displays a default label if none is provided.

 * @example
 * ```tsx
 * <Practice1Page />
 * ```
 */

const Practice1Page: React.FC = () => {
  return (
    <div className="practice_1_page page_type_1">
      <div className="width_wrapper_type_1">
        {/* COMPONENT: DemoSlice1PagePart */}
        <DemoSlice1PagePart />
      </div>
    </div>
  );
};

export default Practice1Page;
