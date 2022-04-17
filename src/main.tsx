import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Server } from "miragejs";

import dtMoneyImg from "./assets/01-dtmoney.jpeg";
import neonBankImg from "./assets/02-neonbank.jpeg";
import hamburgariaImg from "./assets/03-hamburgaria.jpeg";
import xboxImg from "./assets/04-xbox.jpeg";

new Server({
  routes() {
    this.namespace = "api";

    this.get("/repository", () => {
      return {
        repositories: [
          {
            id: 1,
            avatar_url: `${dtMoneyImg}`,
            name: "Dt money",
            description: `É uma aplicação desenvolvida durante a jornada
             do ignite com o instrutor Diogo Fernandes onde é abordardo 
             sobre componentes, propriedades, styled-components e como 
             formatar uma moeda.`,
            language: "ReactJS, TypeScript, Styled-Components, Miragejs",
            html_url: "repo",
          },
          {
            id: 2,
            avatar_url: `${neonBankImg}`,
            name: "Neon",
            description: `Numa jornada de treinamentos com o ReactJS decidi
            testar as minhas capacidades criando components da UI apresentado
            por um amigo, o resultado foi a landing page da Nubank.`,
            language: "ReactJS, TypeScript, Styled-Components",
            html_url: "https://banco-neon.vercel.app/",
          },
          {
            id: 3,
            avatar_url: `${hamburgariaImg}`,
            name: "Hamburgaria",
            description: `Hamburgaria é uma site desenvolvido para praticar e 
            melhorar as minhas habilidades com flexbox e a semântica do HTML5, 
            neste projeto trabalhei muito com HTML5 e CSS3. Concluí o meu desafio com sucesso.`,
            language: "HTML5 e CSS3",
            html_url: "https://pedromakengo.github.io/Hamburgaria/",
          },
          {
            id: 4,
            avatar_url: `${xboxImg}`,
            name: "XBOX - Codelândia",
            description: `UI desafiante construída na comunidade Codelândia, 
            neste projeto trabalho o máximo do meu React e treino também a 
            responsividade, criando components 100% reutilizaveis e com clean code
            , tendo em conta o objetivo do desafio.`,
            language: "ReactJS, TypeScript, Styled-Components e Vite",
            html_url: "repo",
          },
        ],
      };
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
