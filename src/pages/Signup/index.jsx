import {
  Container,
  Ilustration,
  Section,
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
      <Ilustration />
      <Section>
        <Form>
          <Input name={"Nome"} icon={FiUser} />

          <Input name={"Email"} icon={FiMail} />

          <Input name={"Senha"} icon={FiLock} />

          <Input name={"Confirmação da senha"} icon={FiLock} />

          <Button type="submit">Enviar</Button>
        </Form>

        <Paragraph>
          Já tem uma conta? Faça <Link to="/login">Login</Link>
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Signup;
