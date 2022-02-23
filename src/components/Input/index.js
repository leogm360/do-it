import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const LabelStyles = styled.div`
  text-align: left;
  font-size: var(--caption);
  margin-bottom: 5px;
`;

export const Span = styled.span`
  color: var(--red);
`;

export const ContainerInput = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  align-items: center;
  background: var(--white);
  border: 1px solid var(--color-secondary);
  border-radius: 10px;
  height: 50px;
  padding: 5px;
  gap: 0 5px;
  transition: 0.5s;

  :focus-within {
    border: 1px solid var(--orange);
    color: var(--orange);
  }
`;

export const InputStyles = styled.input`
  flex: 1;
  font-size: var(--body-1);
  font-family: var(--pt-serif);
  background: var(--white);
  width: 50px;
  padding: 0 10px;
  height: 100%;
  transition: 0.5s;

  :focus {
    outline: none;
    color: var(--orange);
  }

  :focus::placeholder {
    color: var(--orange);
  }

  ::placeholder {
    color: var(--grey);
    transition: 0.5s;
  }
`;
