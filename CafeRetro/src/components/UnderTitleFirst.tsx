import type { ReactElement } from "react";

interface iFirstUnderTitleProps {
  title: string;
}

export const UnderTitleFirst = ({
  title, //kan vara hårkodat
}: iFirstUnderTitleProps): ReactElement => {
  return <h2 className="redbox first">{title}</h2>;
};
