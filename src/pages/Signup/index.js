import styled from "styled-components";
import imgBg from "../../assets/img/signup-bg.png";
import { Link as Anchor } from "react-router-dom";

export const Container = styled.main`
  display: flex;
  height: 100vh;
`;

export const Ilustration = styled.div`
  @media only screen and (min-width: 1024px) {
    flex: 1;
    background: url(${imgBg}) center no-repeat var(--color-secondary);
    background-size: contain;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  flex: 1;
  background: var(--color-primary);
  gap: 35px 0;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 360px;
  gap: 20px 0;

  & > div {
    width: 100%;
  }

  & > button {
    margin-top: 10px;
    width: 300px;
  }
`;

export const Paragraph = styled.p`
  font-size: var(--caption);
`;

export const Link = styled(Anchor)`
  color: var(--orange);

  :hover {
    filter: brightness(120%);
  }
`;
