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
import { motion } from "framer-motion";

const Signup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Container>
        <Ilustration />
        <Section>
          <Title>Cadastro</Title>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Form>
              <Input name={"Nome"} icon={FiUser} />

              <Input name={"Email"} icon={FiMail} type="email" />

              <Input name={"Senha"} icon={FiLock} type="password" />

              <Input
                name={"Confirmação da senha"}
                icon={FiLock}
                type="password"
              />

              <Button type="submit">Enviar</Button>
            </Form>
          </motion.div>

          <Paragraph>
            Já tem uma conta? Faça <Link to="/login">Login</Link>
          </Paragraph>
        </Section>
      </Container>
    </motion.div>
  );
};

export default Signup;
