import styled from "styled-components";

export const Container = styled.main`
  background: var(--color-primary);
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 20px 15px;

  @media only screen and (min-width: 1024px) {
    padding: 20px 60px;
  }
`;

export const TimeStampContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
  max-width: 532px;
`;

export const TimeStamp = styled.time`
  display: block;
  font-size: var(--body-1);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > button {
    width: 100%;
    max-width: 200px;
  }

  @media only screen and (min-width: 1024px) {
    align-items: flex-end;
    flex-direction: row;

    & > button {
      width: 100%;
      max-height: 60px;
    }
  }
`;

export const Board = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 20px;
  gap: 50px 50px;

  @media only screen and (min-width: 1024px) {
    justify-content: start;
    padding: 0 60px;
  }
`;
