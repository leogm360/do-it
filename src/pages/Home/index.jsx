import { Container, Title, Span, Paragraph, ButtonsContainer } from "./index";
import Button from "../../components/Button/index.jsx";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Title>
        do<Span>.</Span>it
      </Title>

      <Paragraph>Organize-se de forma fácil e efetiva</Paragraph>

      <ButtonsContainer>
        <Button
          colorSchema={"white"}
          fontSchema={"roboto"}
          onClick={() => history.push("/signup")}
          type="button"
        >
          Cadastre-se
        </Button>

        <Button
          fontSchema={"roboto"}
          onClick={() => history.push("/login")}
          type="button"
        >
          Login
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Home;
