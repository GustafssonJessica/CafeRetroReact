import type { ReactElement } from "react"

interface IMainTitleProps {
  className: string;
  title: string;
}

export const MainTitle  = ({title, className}: IMainTitleProps) : ReactElement =>{
return <h1 className = {className}>
{title}
</h1>


}