import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

const Button = ({ title, type = "primary", ...rest }: Props) => {
  return (
    <Container type="primary" {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
