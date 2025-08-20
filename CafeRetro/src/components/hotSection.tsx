import type { ReactElement } from "react";
import { FirstUnderRubrik } from "./firstUnderTitleHot";
import { MainTitleHot } from "./mainTitleHot";
import { SecondUnderRubrik } from "./secondUnderTitleHot";
import { SectionHot } from "./menuSectionHot";

export const HotSection = (): ReactElement => {
  return (
    <section className="hot">
      <MainTitleHot />
      <div className="redbox-wrapper">
      <FirstUnderRubrik />
      <SecondUnderRubrik />
      </div>
      <SectionHot />
    </section>
  );
};
