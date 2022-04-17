import { Container, Content, ContentButtons } from "./styles";

import linkedinImg from "../../assets/linkedin.svg";
import githubImg from "../../assets/github.svg";

export function HomeScreen() {
  return (
    <Container>
      <Content>
        <div>
          <span>Olá, eu sou</span>
          <h1>Pedro Makengo</h1>
          <p>Desenvolvedor Front-End </p>

          <ContentButtons>
            <a href="/">
              <img src={linkedinImg} alt="Linkedin - PedroMakengo" />
              Linkedin
            </a>
            <a href="/">
              <img src={githubImg} alt="Github - PedroMakengo" />
              Github
            </a>
          </ContentButtons>
        </div>
      </Content>
    </Container>
  );
}
