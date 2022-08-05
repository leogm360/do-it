import {
  Container,
  Ilustration,
  Section,
  Title,
  Form,
  Paragraph,
  Link,
} from "./index";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Redirect, useHistory } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";
import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";

const Login = ({ token, setToken }) => {
  const history = useHistory();

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("Formato de e-mail inválido!"),
    password: yup.string().required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onFormSubmit = (data) => {
    api
      .post("/user/login", data)
      .then((response) => {
        localStorage.clear();

        localStorage.setItem("@Doittoken", response.data.token);

        toast.success(
          "Login efetuado com sucesso! Você será redirecionado ao Dashboard em instantes!",
          { theme: "colored" }
        );

        setTimeout(() => {
          setToken(response.data.token);

          history.push("/user/dashboard");
        }, 5000);
      })
      .catch((error) =>
        toast.error("E-mail ou senhas inválidos!", { theme: "colored" })
      );
  };

  return token !== "" ? (
    <Redirect to="/user/dashboard" />
  ) : (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Container>
        <Section>
          <Title>Login</Title>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Form onSubmit={handleSubmit(onFormSubmit)}>
              <Input
                name={"Email"}
                icon={FiMail}
                inputName={"email"}
                register={register}
                errors={errors}
                type="email"
              />

              <Input
                name={"Senha"}
                icon={FiLock}
                inputName={"password"}
                register={register}
                errors={errors}
                type="password"
              />

              <Button type="submit">Enviar</Button>
            </Form>
          </motion.div>

          <Paragraph>
            Não tem conta? <Link to="/signup">Faça seu cadastro</Link>
          </Paragraph>
        </Section>
        <Ilustration />
      </Container>
    </motion.div>
  );
};

export default Login;
