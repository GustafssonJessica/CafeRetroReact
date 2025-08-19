import { Header } from "./components/header";
import { HotSection } from "./components/hotSection";
import { JuicySection } from "./components/juicySection";
function App() {
  return (
    <>
      <Header />
      <main>
        <HotSection />
      </main>
      <main>
        <JuicySection />
      </main>
    </>
  );
}

export default App;
