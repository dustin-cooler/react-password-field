import { FC } from "react";
export interface PasswordGroupProps {
    onSubmit?: (value: string) => void;
    formTestId?: string;
}
export declare enum ErrorMessage {
    LENGTH = "Password is too short.",
    UPPERCASE = "Password must contain one uppercase letter.",
    LOWERCASE = "Password must contain one lowercase letter.",
    NUMBER = "Password must contain one number.",
    SPECIAL = "Password must contain one special character.",
    MATCH = "Passwords must match."
}
export declare const getPasswordErrors: (password: string | undefined) => string | undefined;
declare const PasswordGroup: FC<PasswordGroupProps>;
export default PasswordGroup;
