import {
  Container,
  Ilustration,
  Section,
  Title,
  Form,
  Paragraph,
  Link,
} from "./index";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";

const Signup = () => {
  return (
    <Container>
      <Section>
        <Title>Login</Title>

        <Form>
          <Input name={"Email"} icon={FiMail} type="email" />

          <Input name={"Senha"} icon={FiLock} type="password" />

          <Button type="submit">Enviar</Button>
        </Form>

        <Paragraph>
          Não tem conta? <Link to="/signup">Faça seu cadastro</Link>
        </Paragraph>
      </Section>
      <Ilustration />
    </Container>
  );
};

export default Signup;
