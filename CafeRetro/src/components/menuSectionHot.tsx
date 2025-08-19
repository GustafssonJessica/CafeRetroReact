import type { ReactElement } from "react";
import { MenuSection } from "./menuSection";

export const SectionHot = (): ReactElement => {
  return (
    <MenuSection sectionClassName="blackbox">
      <div>
        <p> mocha latte</p>
        <p> €7.50</p>
      </div>
      <div>
        <p>Caffe Formaggio</p>
        <p>€ 5.00</p>
      </div>
      <div>
        <p>Espresso</p>
        <p>€ 3.50</p>
      </div>
      <div>
        <p>Chai Verde Latte</p>
        <p>€ 5.50</p>
      </div>
    </MenuSection>
  );


};
