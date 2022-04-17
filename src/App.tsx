import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { HomeScreen } from "./components/HomeScreen";
import { AboutMy } from "./components/AboutMy";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";

function App() {
  return (
    <>
      <Header />
      <HomeScreen />
      <AboutMy />
      <Experience />
      <Project />
      <GlobalStyle />
    </>
  );
}

export default App;
