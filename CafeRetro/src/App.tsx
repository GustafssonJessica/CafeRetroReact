import { Header } from "./components/Header";
import { Section } from "./components/section";
function App() {
  return (
    <>
      <Header />
      <Section
        className="hot"
        mainTitle="Hot"
        firstUnderTitle="Hot freshly ground
        black coffee or a cup of exqusitie tea?"
        secondUnderTitle="We give you
        that perfect cup every time."
        menuItems={
          <>
            <div>
              <p> Mocha Latte</p>
              <p> €7.50</p>
            </div>
            <div>
              <p>Caffe Formaggio</p>
              <p>€ 5.00</p>
            </div>
            <div>
              <p>Espresso</p>
              <p>€ 3.50</p>
            </div>
            <div>
              <p>Chai Verde Latte</p>
              <p>€ 5.50</p>
            </div>
          </>
        }
      ></Section>

      <Section
        className="juicy"
        mainTitle="Juicy"
        firstUnderTitle="Ripe fruit - freshly squeezed."
        secondUnderTitle="It's as simple as that. Chunky or smooth - it's your choice"
        menuItems={
          <>
            <div>
              <p> Branched Apricots</p>
              <p> € 4.20</p>
            </div>
            <div>
              <p>Deep Raspberries</p>
              <p>€ 3.50</p>
            </div>
            <div>
              <p>Smooth Oranges</p>
              <p>€ 6.50</p>
            </div>
          </>
        }
      ></Section>
    </>
  );
}

export default App;
