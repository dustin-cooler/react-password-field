import styled from "@emotion/styled";

export const Button = styled.button<{ primary?: boolean }>`
  border: 0;
  line-height: 1;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  border-radius: 0.25rem;
  display: inline-block;
  color: #ffffff;
  background-color: ${props => props.primary ? "#007bff" : "#6c757d"};
  border: 1px solid ${props => props.primary ? "#007bff" : "#6c757d"};
  padding: 0.5rem 1.5rem;
  &:hover {
    background-color: ${props => props.primary ? "#0069d9" : "#5a6268"};
    border: 1px solid ${props => props.primary ? "#0062cc" : "#545b62"};
  }
  &:active {
    background-color: ${props => props.primary ? "#0062cc" : "#545b62"};
    border: 1px solid ${props => props.primary ? "#005cbf" : "#4e555b"};
  }
`;
