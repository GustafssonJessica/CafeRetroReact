import type { ReactElement } from "react";

export const Section = (): ReactElement => {
  return (
    <section className="blackbox">
      <div className="row">
        <p> mocha latte</p>
        <p> €7.50</p>
      </div>
      <div className="row">
        <p>Caffe Formaggio</p>
        <p>€ 5.00</p>
      </div>
      <div className="row">
        <p>Espresso</p>
        <p>€ 3.50</p>
      </div>
      <div className="row">
        <p>Chai Verde Latte</p>
        <p>€ 5.50</p>
      </div>
    </section>
  );
};
