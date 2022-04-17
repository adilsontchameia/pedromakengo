import { Container } from "./styles";

const nav = [
  {
    id: 1,
    route: "/",
    text: "Home",
  },
  {
    id: 2,
    route: "/",
    text: "Sobre mim",
  },
  {
    id: 3,
    route: "/",
    text: "Experiência",
  },
  {
    id: 4,
    route: "/",
    text: "Projectos",
  },
];

export function Header() {
  return (
    <Container>
      <h2>Portfólio</h2>
      <nav>
        {nav.map((item) => (
          <a href={item.route} key={item.id}>
            {item.text}
          </a>
        ))}
      </nav>
    </Container>
  );
}
