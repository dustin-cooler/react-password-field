import styled from "@emotion/styled";

export const Notification = styled.span<{ error?: boolean }>`
  color: ${(props) => (props.error ? "#B60000" : "#1C6630")};
  font-size: 1rem;
  font-weight: 700;
`;
