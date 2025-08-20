import type { ReactElement, ReactNode } from "react";

interface iMenuSectionProps{
children: ReactNode;

}

export const MenuSection = ({children}: iMenuSectionProps) : ReactElement => {
return <section className = "blackbox">
{children}
</section>

}
