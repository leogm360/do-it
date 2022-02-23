import styled from "styled-components";

export const Container = styled.main`
  background: var(--color-primary);
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 60px 80px 0 80px;
`;

export const TimeStamp = styled.time`
  display: block;
  font-size: var(--body-1);
  margin-bottom: 25px;
`;

export const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;

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
