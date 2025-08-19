import type { ReactElement } from "react";

interface iFirstUnderTitleProps{
className: string;
title: string;
}

export const FirstUnderTitle = ( {title, className}:iFirstUnderTitleProps) : ReactElement => {
return <h2 className = {className}>{title}</h2>
}
