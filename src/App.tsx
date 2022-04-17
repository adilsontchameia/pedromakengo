import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { HomeScreen } from "./components/HomeScreen";
import { AboutMy } from "./components/AboutMy";

function App() {
  return (
    <>
      <Header />
      <HomeScreen />
      <AboutMy />
      <GlobalStyle />
    </>
  );
}

export default App;
