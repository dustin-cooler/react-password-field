import React, { FC, FormEvent, useState } from "react";
import PasswordField from "./PasswordField";
import { ButtonContainer, Button, Container, ScreenReaderOnly, Notification } from "./styled";

export interface PasswordGroupProps {
  onSubmit?: (value: string) => void;
  formTestId?: string;
}

export enum ErrorMessage {
  LENGTH = "Password is too short.",
  UPPERCASE = "Password must contain one uppercase letter.",
  LOWERCASE = "Password must contain one lowercase letter.",
  NUMBER = "Password must contain one number.",
  SPECIAL = "Password must contain one special character.",
  MATCH = "Passwords must match.",
}

export const getPasswordErrors = (
  password: string | undefined
): string | undefined => {
  if (!password) {
    return ErrorMessage.LENGTH;
  }

  const messages: string[] = [];

  if (password.length < 6) {
    messages.push(ErrorMessage.LENGTH);
  }

  if (password.toUpperCase() === password) {
    messages.push(ErrorMessage.LOWERCASE);
  }

  if (password.toLowerCase() === password) {
    messages.push(ErrorMessage.UPPERCASE);
  }

  if (!/[0-9]/.test(password)) {
    messages.push(ErrorMessage.NUMBER);
  }

  if (!/[!@#$%^&*()_+={[}\]|:;"'<,>.-]/.test(password)) {
    messages.push(ErrorMessage.SPECIAL);
  }

  return messages.length ? messages.join("\n") : undefined;
};

const PasswordGroup: FC<PasswordGroupProps> = ({ onSubmit, formTestId }) => {
  const [newPasswordValue, setNewPasswordValue] = useState<string>();
  const [repeatPasswordValue, setRepeatPasswordValue] = useState<string>();
  const [newPasswordErrors, setNewPasswordErrors] = useState<string>();
  const [repeatPasswordErrors, setRepeatPasswordErrors] = useState<string>();
  const [textHidden, setTextHidden] = useState<boolean>(true);
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("submit");

    const newFieldErrors = getPasswordErrors(newPasswordValue);
    const repeatFieldErrors = newPasswordValue === repeatPasswordValue ? undefined : ErrorMessage.MATCH;

    setNewPasswordErrors(newFieldErrors);
    setRepeatPasswordErrors(repeatFieldErrors);
    
    if (!newFieldErrors && !repeatFieldErrors) {
      setSuccess(true);
      typeof onSubmit === "function" && onSubmit(newPasswordValue as string);
    } else {
      setSuccess(false);
    }
  };

  const hasErrors = Boolean(newPasswordErrors || repeatPasswordErrors);

  return (
    <form onSubmit={handleSubmit} data-testid={formTestId}>
      <Container gap="1rem">
        <ScreenReaderOnly aria-live="polite">
          Password {textHidden ? "hidden" : "visible"}.
        </ScreenReaderOnly>
        <PasswordField
          id="new-password"
          label="New Password"
          hidden={textHidden}
          onChange={({ target }) => setNewPasswordValue(target.value)}
          error={Boolean(newPasswordErrors)}
          message={newPasswordErrors}
        />
        <PasswordField
          id="repeat-password"
          label="Confirm Password"
          hidden={textHidden}
          onChange={({ target }) => setRepeatPasswordValue(target.value)}
          error={Boolean(repeatPasswordErrors)}
          message={repeatPasswordErrors}
        />
        <ButtonContainer>
          <p aria-live="polite">
            {success && <Notification>Password submitted successfully</Notification>}
            {hasErrors && <Notification error>Please correct the errors above</Notification>}
          </p>
          <Button
            type="button"
            role="switch"
            aria-label="Show password"
            aria-pressed={!textHidden}
            onClick={() => setTextHidden(!textHidden)}
          >
            <span aria-hidden="true">
              {textHidden ? "Show" : "Hide"}
            </span>
          </Button>
          <Button type="submit" primary>Submit</Button>
        </ButtonContainer>
      </Container>
    </form>
  );
};

export default PasswordGroup;