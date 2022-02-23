import { Container, Search, Paragraph, SearchContainer, Board } from "./index";
import { FiEdit2 } from "react-icons/fi";
import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";
import Card from "../../components/Card/index.jsx";
import { motion } from "framer-motion";

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
    >
      <Container>
        <Search>
          <Input name={"7 de maio de 2021"} icon={FiEdit2} />

          <Button type="submit">Adicionar</Button>
        </Search>

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Board>
            <Card />

            <Card />

            <Card />

            <Card />

            <Card />

            <Card />
          </Board>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
