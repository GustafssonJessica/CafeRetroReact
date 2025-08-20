import type { ReactElement } from "react";
import { UnderTitleSecond } from "./UnderTitleSecond";

export function SecondUnderTitleJuicy(): ReactElement {
  return (
    <UnderTitleSecond 
      title= "It's as simple as that. Chunky or smooth - it's your choice."
    />
  );
}

//ett exempel på hur man inte ska göra. här har jag skapat en egen komponent(?) som bara innehåller 
//rad 6-9. det kan infogas direkt i section istället