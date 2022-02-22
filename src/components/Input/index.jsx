import { Container, LabelStyles, ContainerInput, InputStyles } from "./index";

const Input = ({ name, icon: Icon, ...rest }) => {
  return (
    <Container>
      <LabelStyles>{name}</LabelStyles>

      <ContainerInput>
        <Icon />

        <InputStyles {...rest} />
      </ContainerInput>
    </Container>
  );
};

export default Input;
