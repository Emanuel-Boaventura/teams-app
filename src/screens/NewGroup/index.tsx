import Button from "@components/Button";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Content, Icon } from "./styles";

const NewGroup = () => {
  const [group, setGroup] = useState("");
  const { navigate } = useNavigation();

  function handleCreateGroup() {
    navigate("players", { group });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie uma turma para adicionar pessoas"
        />

        <Input placeholder="Nome da turma" onChangeText={setGroup} />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </Content>
    </Container>
  );
};

export default NewGroup;
