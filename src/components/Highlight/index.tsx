import { Container, SubTitle, Title } from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

const Highlight = ({ title, subtitle }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </Container>
  );
};

export default Highlight;
