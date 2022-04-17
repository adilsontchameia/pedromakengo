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
];

export function Header() {
  return (
    <header>
      <h2>Portfolio</h2>
      <nav>
        {nav.map((item) => (
          <a href={item.route} key={item.id}>
            {item.text}
          </a>
        ))}
      </nav>
    </header>
  );
}
