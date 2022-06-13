import React, { ChangeEventHandler, FC } from "react";
import { Container, Label, Input, Message } from "./styled";

export interface PasswordFieldProps {
  id?: string;
  label?: string;
  error?: boolean;
  message?: string;
  hidden?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const PasswordField: FC<PasswordFieldProps> = ({
  id = "password",
  label,
  error,
  message,
  onChange,
  hidden,
}) => (
  <Container>
    {label && <Label htmlFor={id}>{label}</Label>}
    <Input
      error={error}
      type={hidden ? "password" : "text"}
      id={id}
      onChange={onChange}
      autoComplete="new-password"
      aria-invalid={error}
      aria-required="true"
      aria-describedby={message && `${id}-message`}
    />
    {message && (
      <Message error={error} id={`${id}-message`}>
        {message}
      </Message>
    )}
  </Container>
);

export default PasswordField;
