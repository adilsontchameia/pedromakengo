import { useState } from "react";
import { Container, Content, ContentTab } from "./styles";

export function Experience() {
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
            <div className="tab-content active">
              <div className="tab-row">
                <strong>Técnico de Informática</strong>
                <span>Nov 2020 - Atual</span>
              </div>
              <p>
                Trabalho 3 vezes por semana dando suporte aos demais
                departamento com as actividades informáticas, principalmente com
                a emissão de documentos digitais, neste momento estou
                trabalhando 100% focado com a emissão de documento.
              </p>
            </div>
          </div>
        </ContentTab>
      </Content>
    </Container>
  );
}
