import type { ReactElement } from "react";

interface ISecondUnderTitle {
  title: string;
}

export const UnderTitleSecond = ({
  title,
}: ISecondUnderTitle): ReactElement => {
  return <h2 className="redbox last"> {title} </h2>;
};
