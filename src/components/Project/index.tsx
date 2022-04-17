import { useEffect, useState } from "react";
import { Button } from "../button";
import { Container, Content, ContentRepository, Repository } from "./styles";

import linkImg from "../../assets/link.svg";
import { useRepository } from "../../hooks/useRepository";

export function Project() {
  const { repository } = useRepository();

  return (
    <Container>
      <Content>
        <h1>Projectos</h1>

        <ContentRepository>
          {repository.map((repo) => (
            <Repository key={repo.id}>
              <img src={repo.avatar_url} alt="" className="image-project" />
              <h2>{repo.name}</h2>
              <p>{repo.description}</p>
              <span>Tecnologias usadas no projeto</span> <br />
              <small>{repo.language} </small>
              <Button
                route={repo.html_url}
                text="Visualizar"
                color="secondary"
                img={linkImg}
              />
            </Repository>
          ))}
        </ContentRepository>
      </Content>
    </Container>
  );
}
