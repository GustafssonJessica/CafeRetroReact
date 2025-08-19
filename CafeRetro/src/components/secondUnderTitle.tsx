import type { ReactElement } from "react";

interface ISecondUnderTitle{
  className: string;
title: string;

}

export const SecondUnderTitle = ({className, title}: ISecondUnderTitle) : ReactElement => {
return <h2 className = {className}> {title} </h2>

}