import {
  Container,
  LabelStyles,
  Span,
  ContainerInput,
  InputStyles,
} from "./index";

const Input = ({ name, icon: Icon, inputName, register, errors, ...rest }) => {
  return (
    <Container>
      <LabelStyles>
        {name}
        <Span>{!!errors[inputName] && ` - ${errors[inputName].message}`}</Span>
      </LabelStyles>

      <ContainerInput>
        <Icon />

        <InputStyles {...rest} {...register(inputName)} />
      </ContainerInput>
    </Container>
  );
};

export default Input;
