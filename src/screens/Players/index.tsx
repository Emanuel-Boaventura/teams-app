import Button from "@components/Button";
import ButtonIcon from "@components/ButtonIcon";
import Filter from "@components/Filter";
import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Input from "@components/Input";
import ListEmpty from "@components/ListEmpty";
import PlayerCard from "@components/PLayerCard";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { FlatList } from "react-native";
import {
  Container,
  HeaderList,
  InputContainer,
  NumberOfPlayers,
} from "./styles";

type RouteParams = {
  group: string;
};

const Players = () => {
  const [team, setTeam] = useState("");
  const [players, setPlayers] = useState([]);

  const route = useRoute();
  const { group } = route.params as RouteParams;

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <InputContainer>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </InputContainer>

      <HeaderList>
        <FlatList
          data={["time a", "time b"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item == team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 50 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Excluir Turma" type="secondary" />
    </Container>
  );
};

export default Players;
