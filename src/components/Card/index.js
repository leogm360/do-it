import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background: var(--white);
  border: 2px solid var(--color-secondary);
  border-radius: 10px;
  padding: 25px;
  width: 300px;
  height: 300px;
  gap: 15px 0;
`;

export const Rule = styled.hr`
  align-self: center;
  background: var(--color-secondary);
  margin: 0;
  padding: 0 5px;
  width: 100%;
  height: 1px;
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 100%;

  & > svg {
    stroke: var(--orange);
    margin-right: 5px;
    width: 24px;
    height: auto;
  }
`;

export const CardBody = styled.section`
  flex: 1;
`;

export const CardContent = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  width: 100%;

  & > svg {
    stroke: var(--orange);
    margin-right: 5px;
    width: 24px;
    height: auto;
  }
`;

export const CardFooter = styled.footer`
  & > button {
    width: 100%;
  }
`;
