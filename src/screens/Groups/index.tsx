import Header from "@components/Header";
import Highlight from "@components/Highlight";
import { Container } from "./styles";

const Groups = () => {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
    </Container>
  );
};

export default Groups;
