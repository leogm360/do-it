import styled from "styled-components";

export const Container = styled.main`
  background: var(--color-primary);
`;

export const Search = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 90px;

  & > div {
    margin-right: 45px;
    width: 500px;
  }

  & > button {
    padding: 0.65rem 1.5rem;
    width: 250px;
  }
`;

export const Board = styled.section`
  display: flex;
  flex-flow: row wrap;
  margin-top: 100px;
  padding: 0 80px 100px 80px;
  gap: 75px 75px;
`;
