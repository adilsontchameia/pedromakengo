import { Container, Content, ImgContent, ContentDescrition } from "./styles";
import profileImg from "../../assets/profile.png";

import twitterImg from "../../assets/twitter.svg";
import twitchImg from "../../assets/twich.svg";
import youtubeImg from "../../assets/youtube.svg";
import figmaImg from "../../assets/figma.svg";

import curriculo from "../../assets/curriculo.pdf";

import curriculoImg from "../../assets/download-cloud.svg";
import emailImg from "../../assets/mail.svg";
import { Button } from "../button";

export function AboutMy() {
  return (
    <Container id="sobre">
      <Content>
        <ImgContent>
          <img src={profileImg} alt="" />
        </ImgContent>
        <ContentDescrition>
          <h2>Sobre mim</h2>
          <span>Luanda, Angola</span>
          <p>
            My name is 🤓 Pedro Makengo, I´m from Angola 🇦🇴 I´m A Computer
            Enginner, that has been working as Front-end developer since 2017.
          </p>

          <div className="social">
            <a href="#">
              <img src={twitterImg} alt="Twitter " />
            </a>
            <a href="#">
              <img src={twitchImg} alt="Twitter " />
            </a>
            <a href="#">
              <img src={youtubeImg} alt="Twitter " />
            </a>
            <a href="#">
              <img src={figmaImg} alt="Twitter " />
            </a>
          </div>

          <div className="buttons">
            <Button
              img={curriculoImg}
              route={curriculo}
              color="secondary"
              text="Currículo"
              download={curriculo}
            />
            <Button
              img={emailImg}
              route="mailto:pedromakengomiguel@gmail.com"
              color="primary"
              text="E-mail"
            />
          </div>
        </ContentDescrition>
      </Content>
    </Container>
  );
}
