import { ButtonStyle } from "./styles";

interface ButtonProps {
  img?: string;
  text: string;
  color: "primary" | "secondary";
  route?: string;
  download?: string;
}

export function Button({ img, text, color, route, download }: ButtonProps) {
  return (
    <ButtonStyle id={color} href={route} download={download}>
      <img src={img} alt={text} />
      {text}
    </ButtonStyle>
  );
}
