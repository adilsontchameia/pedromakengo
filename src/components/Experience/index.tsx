import { useState } from "react";
import { Container, Content, ContentTab } from "./styles";

export function Experience() {
  const [tab, setTable] = useState("tab1");
  return (
    <Container>
      <Content>
        <h1>Expiriência</h1>
        <ContentTab>
          <nav>
            <button className="active">Ordem dos Médicos</button>
            <button>Ellonet</button>
            <button>SNIR</button>
            <button>Freelance</button>
            <button>Desafios</button>
          </nav>
          <div className="tab">
            <div className="tab-content">
              <div className="tab-row">
                <strong>Técnico de Informática</strong>
                <span>Nov 2020 - Atual</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                tenetur, ex nostrum quis sed similique tempora dolorem labore
                incidunt officia fuga explicabo hic quam quo. Minima aliquam
                quia ea repellat.
              </p>
            </div>
          </div>
        </ContentTab>
      </Content>
    </Container>
  );
}
