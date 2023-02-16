import Button from "@components/Button";
import GroupCard from "@components/GroupCard";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ListEmpty from "@components/ListEmpty";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container } from "./styles";

const Groups = () => {
  const [groups, setGroups] = useState([
    "Galera da Dom",
    "povo da da da da da da ",
    "galera da igreja",
  ]);

  const { navigate } = useNavigation();

  function handleNewGroup() {
    navigate("new");
  }

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="jogue com a sua turma" />

      <FlatList
        data={groups}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Button
        title="Criar nova turma"
        type="secondary"
        onPress={handleNewGroup}
      />
    </Container>
  );
};

export default Groups;
