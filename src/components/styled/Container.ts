import styled from "@emotion/styled";

export const Container = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  color: #000000;
  gap: ${(props) => props.gap || "0px"};
`;
