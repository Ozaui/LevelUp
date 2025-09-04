import styles from "../styles/pages/RegisterPage.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { registerPageSchema } from "../schemas/registerPageSchema";
import Avatar from "@mui/material/Avatar";

const Register = () => {
  const [selectedFileName, setSelectedFileName] = useState("");

  return (
    <div className={styles.register}>
      <Formik
        initialValues={{
          profilePicture: null,
          name: "",
          surname: "",
          nickname: "",
          password: "",
          confirmPassword: "",
          terms: false,
        }}
        validationSchema={registerPageSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ setFieldValue }) => (
          <Form className={styles.registerForm}>
            {/* Profile Picture */}
            <div className={styles.profilePicture}>
              <div className={styles.profilePictureContainer}>
                <input
                  id="profilePicture"
                  name="profilePicture"
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file =
                      event.currentTarget.files && event.currentTarget.files[0];
                    setFieldValue("profilePicture", file);
                    setSelectedFileName(file ? file.name : "");
                  }}
                  className={styles.FileInputHidden}
                />
                <label htmlFor="profilePicture" className={styles.UploadButton}>
                  {selectedFileName ? "Change Picture" : "Upload Picture"}
                </label>

                <ErrorMessage
                  name="profilePicture"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>
              <Avatar alt="Remy Sharp" src="" />
            </div>

            <div className={styles.TextFromArea}>
              {/* Name */}
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={styles.Text}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>

              {/* Surname */}
              <div>
                <Field
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  className={styles.Text}
                />
                <ErrorMessage
                  name="surname"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>

              {/* Nickname */}
              <div>
                <Field
                  type="text"
                  name="nickname"
                  placeholder="Nickname"
                  className={styles.Text}
                />
                <ErrorMessage
                  name="nickname"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>

              {/* Password */}
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={styles.Text}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>

              {/* Confirm Password */}
              <div>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={styles.Text}
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className={styles.ErrorMessage}
                />
              </div>
            </div>

            {/* Terms */}
            <div className={styles.Terms}>
              <Field type="checkbox" name="terms" />
              <label htmlFor="terms">I accept the user agreement.</label>
              <ErrorMessage
                name="terms"
                component="div"
                className={styles.ErrorMessage}
              />
            </div>

            <button type="submit" className={styles.SubmitButton}>
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
