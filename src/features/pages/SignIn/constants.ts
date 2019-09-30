import * as Yup from "yup";
import { FormikActions, FormikValues } from "formik";

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string().required()
});

export interface IInitialData {
  [key: string]: string;
  email: string;
  password: string;
}

export interface ISignInForm {
  submitForm: (
    values: IInitialData,
    actions: FormikActions<FormikValues>
  ) => void;
}

export const initialData: IInitialData = {
  email: "",
  password: ""
};
