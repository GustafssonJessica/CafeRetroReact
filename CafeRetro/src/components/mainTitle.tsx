import type { ReactElement } from "react";

interface IMainTitleProps {
  title: string;
}

export const MainTitle = ({
  title,
}: IMainTitleProps): ReactElement => {
  return <h1 className="sectionName">{title}</h1>;
};
