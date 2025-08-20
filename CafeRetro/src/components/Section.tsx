import type react from "react";

import type { ReactNode } from "react";
import { MainTitle } from "./MainTitle";
import { UnderTitleFirst } from "./UnderTitleFirst";
import { UnderTitleSecond } from "./UnderTitleSecond";
import { MenuSection } from "./MenuSection";

interface ISection{
className: string;
mainTitle: string;
firstUnderTitle: string;
secondUnderTitle: string;
menuItems: ReactNode;
}


export const Section = ({className, mainTitle, firstUnderTitle, secondUnderTitle, menuItems}: ISection) : react.ReactElement => {
return <section className= {className}>
<MainTitle title =  {mainTitle}/>
<UnderTitleFirst title = {firstUnderTitle}/>
<UnderTitleSecond title = {secondUnderTitle}/>
<MenuSection children = {menuItems}></MenuSection>
</section>  
}