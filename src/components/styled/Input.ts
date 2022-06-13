import styled from "@emotion/styled";

export const Input = styled.input<{ error?: boolean }>`
  border: 1px solid ${(props) => (props.error ? "#B60000" : "#4E555B")};
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 0.875rem;
`;
