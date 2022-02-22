import {
  Container,
  Rule,
  CardHeader,
  CardBody,
  CardContent,
  CardFooter,
} from "./index";
import Button from "../Button/index.jsx";
import { FiClipboard, FiCalendar } from "react-icons/fi";

const Card = ({ header, body }) => {
  return (
    <Container>
      <CardHeader>
        <FiClipboard /> {header}
      </CardHeader>

      <Rule />

      <CardBody>
        <CardContent>
          <FiCalendar /> {body}
        </CardContent>
      </CardBody>

      <CardFooter>
        <Button type="button">Concluir</Button>
      </CardFooter>
    </Container>
  );
};

export default Card;
