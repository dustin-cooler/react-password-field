import styled from "@emotion/styled";

export const Message = styled.span<{ error?: boolean }>`
  color: ${(props) => (props.error ? "#B60000" : "#000000")};
  font-size: 0.875rem;
  line-height: 1.125rem;
  white-space: pre;
  padding: 0.125rem 0.25rem;
`;
