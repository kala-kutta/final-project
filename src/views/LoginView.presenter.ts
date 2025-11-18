import { buttonController, textInputController } from "@/components/controllers";

export const usernameField = textInputController("username");
export function usernameFieldOnInput() {
  usernameField.clearError();
}

export const passwordField = textInputController("password");
export function passwordFieldOnInput() {
  passwordField.clearError();
}

export const loginButton = buttonController("login");

export function loginButtonOnClick() {
  usernameField.setError("Username is wrong");
  passwordField.setError("Password is wrong");
}
