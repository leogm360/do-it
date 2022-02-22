import { Container } from "./index";

const Button = ({ children, colorSchema, fontSchema, ...rest }) => {
  return (
    <Container colorSchema={colorSchema} fontSchema={fontSchema} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
