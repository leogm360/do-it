import api from "../../services/api";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";

import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";
import Card from "../../components/Card/index.jsx";
import { FiEdit2 } from "react-icons/fi";
import { Container, Header, TimeStamp, FormContainer, Board } from "./index";
import { toast } from "react-toastify";

const Dashboard = ({ token }) => {
  const [tasks, setTasks] = useState([]);

  const taskSchema = yup.object().shape({
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(taskSchema) });

  const onSubmitForm = (data) => {
    api
      .post("/task", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Tarefa criada com sucesso!", {
          theme: "colored",
        });

        handleBoard();
      })
      .catch((error) => {
        toast.error("Não foi possível criar a tarefa, tente novamente!", {
          theme: "colored",
        });
      });
  };

  const handleCompletion = (id) => {
    const filteredTasks = tasks.filter((task) => task._id !== id);

    api
      .put(
        `/task/${id}`,
        {
          completed: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        toast.success("Tarefa concluida com sucesso!", { theme: "colored" });

        setTasks(filteredTasks);
      })
      .catch((error) =>
        toast.error("Não foi possível concluir a tarefa, tente novamente.")
      );
  };

  const handleBoard = () => {
    api
      .get("/task", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          completed: false,
        },
      })
      .then((response) => {
        const formatedTasks = response.data.data.map((task) => ({
          ...task,
          createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        }));

        setTasks(formatedTasks);
      })
      .catch((error) =>
        toast.error("Não foi possível listar as tarefas, tente novamente.")
      );
  };

  useEffect(() => {
    handleBoard();
  }, [tasks]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Container>
        <Header>
          <TimeStamp>
            {new Date().toLocaleString("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </TimeStamp>

          <FormContainer onSubmit={handleSubmit(onSubmitForm)}>
            <Input
              name={"Descrição da tarefa"}
              icon={FiEdit2}
              inputName={"description"}
              register={register}
              errors={errors}
              type="text"
            />

            <Button type="submit">Adicionar</Button>
          </FormContainer>
        </Header>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Board>
            {tasks.map((task) => {
              return (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card
                    key={task._id}
                    header={task.description}
                    body={task.createdAt}
                    id={task._id}
                    callback={handleCompletion}
                  />
                </motion.div>
              );
            })}
          </Board>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
