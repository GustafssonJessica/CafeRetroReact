import type { ReactElement } from "react"
import { FirstUnderTitleJuicy } from "./firstUnderTitleJuicy"
import { MainTitleJuicy } from "./mainTitleJuicy"
import { SectionJuicy } from "./menuSectionJuicy"
import { SecondUnderTitleJuicy } from "./secondUnderTitleJuicy"

export const JuicySection = () : ReactElement => {
return (
  <section className ="juicy">
  <MainTitleJuicy />
  <FirstUnderTitleJuicy />
  <SecondUnderTitleJuicy/>
  <SectionJuicy/>
    </section>
  
) 


}


