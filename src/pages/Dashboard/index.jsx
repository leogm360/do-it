import { Container, Search, Paragraph, SearchContainer, Board } from "./index";
import { FiEdit2 } from "react-icons/fi";
import Input from "../../components/Input/index.jsx";
import Button from "../../components/Button/index.jsx";
import Card from "../../components/Card/index.jsx";

const Dashboard = () => {
  return (
    <Container>
      <Search>
        <Input name={"7 de maio de 2021"} icon={FiEdit2} />

        <Button type="submit">Adicionar</Button>
      </Search>

      <Board>
        <Card />

        <Card />

        <Card />

        <Card />

        <Card />

        <Card />
      </Board>
    </Container>
  );
};

export default Dashboard;
