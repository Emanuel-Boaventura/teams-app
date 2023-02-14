import Loading from "@components/Loading";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import Groups from "./src/screens/Groups";
import theme from "@theme/index";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Groups />
      {/* <Loading /> */}
    </ThemeProvider>
  );
  // return (
  // <ThemeProvider theme={theme}>
  //     {fontsLoaded ? <Groups /> : <Loading />}
  // </ThemeProvider>
  // );
}
