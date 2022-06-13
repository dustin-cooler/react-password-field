import { ChangeEventHandler, FC } from "react";
export interface PasswordFieldProps {
    id?: string;
    label?: string;
    error?: boolean;
    message?: string;
    hidden?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
declare const PasswordField: FC<PasswordFieldProps>;
export default PasswordField;
