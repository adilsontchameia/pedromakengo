import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { HomeScreen } from "./components/HomeScreen";
import { AboutMy } from "./components/AboutMy";
import { Experience } from "./components/Experience";
import { Project } from "./components/Project";
import { Footer } from "./components/Footer";
import { RepositoryProvider } from "./hooks/useRepository";

function App() {
  return (
    <RepositoryProvider>
      <Header />
      <HomeScreen />
      <AboutMy />
      <Experience />
      <Project />
      <Footer />
      <GlobalStyle />
    </RepositoryProvider>
  );
}

export default App;
