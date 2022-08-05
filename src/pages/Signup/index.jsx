import api from "../../services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  Container,
  Ilustration,
  Section,
  Title,
  Form,
  Paragraph,
  Link,
} from "./index";

import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Redirect, useHistory } from "react-router-dom";

const Signup = ({ token }) => {
  const history = useHistory();

  const registerSchema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    email: yup
      .string()
      .required("Campo obrigatório!")
      .email("E-mail com formato inválido!"),
    password: yup
      .string()
      .required("Campo obrigatório!")
      .min(8, "A senha deve ter 8 digitos no mínimo!")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]/,
        "São necessarios letras, números e caracteres especiais!"
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório!")
      .oneOf([yup.ref("password")], "As senhas não coincidem!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });

  const onSubmitForm = (data) => {
    delete data.confirmPassword;

    api
      .post("/user/register", data)
      .then((response) => {
        toast.success(
          "Conta criada com sucesso! Você será direcionado ao login."
        );

        setTimeout(() => history.push("/login"), 5000);
      })
      .catch((error) =>
        toast.error("Erro ao criar conta! Tente novamente.", {
          theme: "colored",
        })
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
        <Ilustration />
        <Section>
          <Title>Cadastro</Title>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Form onSubmit={handleSubmit(onSubmitForm)}>
              <Input
                name={"Nome"}
                icon={FiUser}
                inputName={"name"}
                errors={errors}
                register={register}
                type="text"
              />

              <Input
                name={"Email"}
                icon={FiMail}
                inputName={"email"}
                errors={errors}
                register={register}
                type="email"
              />

              <Input
                name={"Senha"}
                icon={FiLock}
                inputName={"password"}
                errors={errors}
                register={register}
                type="password"
              />

              <Input
                name={"Confirmação da senha"}
                icon={FiLock}
                inputName={"confirmPassword"}
                errors={errors}
                register={register}
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
