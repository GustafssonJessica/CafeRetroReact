import { FirstUnderRubrik } from "./components/firstUnderRubrik";
import { Header } from "./components/header";
import {MainTitle } from "./components/mainTitle";
import { SecondUnderRubrik } from "./components/secondUnderRubrik";
import { Section } from "./components/section";
function App() {
  return (
    <>
      <Header/>
      <section className ="hot">
      <MainTitle />
      <FirstUnderRubrik/>
      <SecondUnderRubrik/>
      <Section/>
      </section>
    </>
  );
}

export default App;
