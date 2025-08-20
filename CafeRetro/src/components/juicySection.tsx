import type { ReactElement } from "react";
import { UnderTitleFirst } from "./UnderTitleFirst";
import { UnderTitleSecond } from "./UnderTitleSecond";
import { MainTitle } from "./MainTitle";
import { MenuSection } from "./MenuSection";

export const JuicySection = (): ReactElement => {
  return (
    <section className="juicy">
      <MainTitle title= "Juicy"/>
       <UnderTitleFirst
            title="Ripe fruit - freshly squeezed."
          />
      <UnderTitleSecond title= "It's as simple as that. Chunky or smooth - it's your choice" />
      <MenuSection>
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
    </section>
  );
};
