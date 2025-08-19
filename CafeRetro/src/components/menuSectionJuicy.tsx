import type { ReactElement } from "react";
import { MenuSection } from "./menuSection";

export const SectionJuicy = (): ReactElement => {
  return (
    <MenuSection sectionClassName="blackbox">
      <div >
        <p> Branched Apricots</p>
        <p> € 4.20</p>
      </div>
      <div >
        <p>Deep Raspberries</p>
        <p>€ 3.50</p>
      </div>
      <div >
        <p>Smooth Oranges</p>
        <p>€ 6.50</p>
      </div>
    </MenuSection>
  );
};
