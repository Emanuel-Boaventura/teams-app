import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { Container, InputContainer } from "./styles";

const Players = () => {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <InputContainer>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </InputContainer>

      <Filter title="Nome da turma" />
      <Filter title="Time A" />
    </Container>
  );
};

export default Players;
