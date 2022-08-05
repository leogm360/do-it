import api from "../../services/api";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";
import Card from "../../components/Card/index.jsx";
import { FiEdit2 } from "react-icons/fi";
import {
  Container,
  Header,
  TimeStamp,
  FormContainer,
  Board,
  TimeStampContainer,
} from "./index";
import { toast } from "react-toastify";

const Dashboard = ({ token, setToken }) => {
  const history = useHistory();

  const [tasks, setTasks] = useState([]);

  const taskSchema = yup.object().shape({
    description: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(taskSchema) });

  const onSubmitForm = async (data) => {
    const request = await api.post("/task", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (request.status !== 201) {
      toast.error("Não foi possível criar a tarefa, tente novamente!", {
        theme: "colored",
      });

      return;
    }

    toast.success("Tarefa criada com sucesso!", {
      theme: "colored",
    });

    getTasks();
  };

  const getTasks = async () => {
    const request = await api.get("/task", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        completed: false,
      },
    });

    const data = await request.data.data;

    if (request.status !== 200) {
      toast.error("Não foi possível listar as tarefas, tente novamente.");

      return;
    }

    const formatedTasksDate = data.map((task) => ({
      ...task,
      createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    }));

    setTasks(formatedTasksDate);
  };

  const handleTasksCompletion = async (id) => {
    const request = await api.put(
      `/task/${id}`,
      {
        completed: true,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (request.status !== 200) {
      toast.error("Não foi possível concluir a tarefa, tente novamente.", {
        theme: "colored",
      });

      return;
    }

    toast.success("Tarefa concluida com sucesso!", { theme: "colored" });

    getTasks();
  };

  const handleLogout = () => {
    localStorage.clear();

    toast.success("Logout efetuado com sucesso!", { theme: "colored" });

    setTimeout(() => {
      setToken("");

      history.push("/login");
    }, 5000);
  };

  useEffect(() => getTasks(), []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Container>
        <Header>
          <TimeStampContainer>
            <TimeStamp>
              {new Date().toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </TimeStamp>

            <Button colorSchema="white" onClick={() => handleLogout()}>
              logout
            </Button>
          </TimeStampContainer>

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
                  key={`${task._id}${task.owner}`}
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Card
                    key={`${task.description}${task.owner}`}
                    header={task.description}
                    body={task.createdAt}
                    id={task._id}
                    callback={handleTasksCompletion}
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
