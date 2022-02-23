import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column nowrap;
  background: var(--color-primary);
  height: 100vh;
`;

export const Title = styled.h1`
  font-family: "Roboto Mono";
  font-size: var(--title-1);
  font-weight: bold;
`;

export const Span = styled.span`
  color: var(--orange);
`;

export const Paragraph = styled.p`
  font-family: "PT Serif";
  font-size: var(--title-2);
  text-align: center;
  margin: 25px 0 65px 0;
  width: 580px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0 75px;

  & > button {
    width: 300px;
  }
`;
