import styled from "styled-components";

export const Container = styled.button`
  font-family: ${(props) =>
    props.fontSchema === "roboto" ? "Roboto Mono" : "PT Serif"};
  font-size: var(--body-1);
  background: ${(props) =>
    props.colorSchema === "white" ? "var(--white)" : "var(--color-secondary)"};
  color: ${(props) =>
    props.colorSchema === "white" ? "var(--color-secondary)" : "var(--white)"};
  padding: 0.75rem 1.5rem;
  border: ${(props) =>
    props.colorSchema === "white"
      ? "2px solid var(--color-secondary)"
      : "2px solid transparent"};
  border-radius: 10px;
  transition: 0.5s;

  :hover {
    border: 2px solid var(--orange);
  }
`;
