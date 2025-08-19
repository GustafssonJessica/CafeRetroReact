import type { ReactElement, ReactNode } from "react";

interface iMenuSectionProps{
sectionClassName: string;
children: ReactNode;

}

export const MenuSection = ({sectionClassName, children}: iMenuSectionProps) : ReactElement => {
return <section className = {sectionClassName}>
{children}
</section>

}