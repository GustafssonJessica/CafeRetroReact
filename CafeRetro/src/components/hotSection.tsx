import type { ReactElement } from "react";
import { UnderTitleFirst } from "./UnderTitleFirst";
import { MainTitle } from "./MainTitle";
import { UnderTitleSecond } from "./UnderTitleSecond";
import { MenuSection } from "./MenuSection";

export const HotSection = (): ReactElement => {
  return (
    <section className="hot">
      <MainTitle title = "Hot"/>
      <div className="redbox-wrapper">
       <UnderTitleFirst
            title="Hot freshly ground black coffee or a cup of exqusitie tea?"
          />
          <UnderTitleSecond title = "We give you that perfect cup every time."/>
      </div>
      <MenuSection>
            <div>
              <p> Mocha Latte</p>
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
    </section>
  );
};

//Gör en section som är generell. det är i section som man skickar med en hel del info 
// till de olika komponenterna

//du kan hårdkoda classnamnet när det ändå är samma i ex secundUnderTitle