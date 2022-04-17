import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { HomeScreen } from "./components/HomeScreen";
import { AboutMy } from "./components/AboutMy";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <HomeScreen />
      <AboutMy />
      <Experience />
      <Project />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
