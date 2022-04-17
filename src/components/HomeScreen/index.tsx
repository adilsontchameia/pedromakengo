import { Container, Content, ContentButtons } from "./styles";

import linkedinImg from "../../assets/linkedin.svg";
import githubImg from "../../assets/github.svg";
import { Button } from "../button";

export function HomeScreen() {
  return (
    <Container>
      <Content>
        <div>
          <span>Olá, eu sou</span>
          <h1>Pedro Makengo</h1>
          <p>Desenvolvedor Front-End </p>

          <ContentButtons>
            <Button
              img={linkedinImg}
              text="Linkedin"
              color="primary"
              route="https://www.linkedin.com/in/pedro-makengo-32ab0a1a0/"
            />
            <Button
              img={githubImg}
              text="Github"
              color="secondary"
              route="https://github.com/PedroMakengo"
            />
          </ContentButtons>
        </div>
      </Content>
    </Container>
  );
}
