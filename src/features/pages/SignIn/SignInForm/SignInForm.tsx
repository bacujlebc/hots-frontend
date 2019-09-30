import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik, Field, ErrorMessage } from "formik";

// Utils & constants
import { initialData, SignInSchema, ISignInForm } from "../constants";

import styles from "./styles.module.scss";

export const SignInForm = ({ submitForm }: ISignInForm): JSX.Element => {
  return (
    <Formik
      initialValues={initialData}
      validationSchema={SignInSchema}
      onSubmit={submitForm}
    >
      {({ handleSubmit, errors, touched, isValid, validateForm }) => (
        <Form onSubmit={handleSubmit} onChange={() => (validateForm(), true)}>
          <Form.Group controlId="formEmail">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={`form-control ${errors.email &&
                touched.email &&
                "is-invalid"}`}
            />
            <ErrorMessage
              component="span"
              name="email"
              className="invalid-feedback"
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={`form-control ${errors.password &&
                touched.password &&
                "is-invalid"}`}
            />
            <ErrorMessage
              component="span"
              name="password"
              className="invalid-feedback"
            />
          </Form.Group>

          <Button
            className={styles.submitBtn}
            variant="primary"
            type="submit"
            disabled={!isValid}
          >
            <span>Sign In</span>
          </Button>

          <div className={styles.forgotPassword}>
            Forgot your password?{" "}
            <a href="http://google.com"> Reset password</a>
          </div>
        </Form>
      )}
    </Formik>
  );
};
