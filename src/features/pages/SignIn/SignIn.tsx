import React, { useCallback } from "react";
import { FormikActions, FormikValues } from "formik";
import { useDispatch } from "react-redux";

// Components
import SignInForm from "./SignInForm";

// Thunks
import { loginThunk } from "store/thunks";

// Utils & constants
import { IInitialData } from "./constants";

import styles from "./styles.module.scss";

export const SignIn = (): JSX.Element => {
  const dispatch = useDispatch();
  const submitForm = useCallback(
    (values: IInitialData, actions: FormikActions<FormikValues>): void => {
      dispatch(loginThunk(values));
    },
    []
  );

  return (
    <div className={styles.wrapper}>
      <div className={`col ${styles.signInBlock}`}>
        <div className={styles.signInTo}>Sign in</div>
        <div className={styles.enterDetails}>Enter your details below</div>
        <SignInForm submitForm={submitForm} />
      </div>
      <div className={`col ${styles.colorBlock}`}></div>
    </div>
  );
};
