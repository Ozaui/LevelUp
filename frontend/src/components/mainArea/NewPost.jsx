import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import style from "../../styles/components/MainArea.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { newPostSchema } from "../../schemas/newPostSchema";

const NewPost = () => {
  const [selectedFileName, setSelectedFileName] = useState("");
  return (
    <div className={style.NewPost}>
      <Avatar alt="Remy Sharp" src="" className={style.Avatar} />
      <Formik
        initialValues={{ text: "", file: null }}
        validationSchema={newPostSchema}
        onSubmit={(values) =>
          // Bu kısım ile backende gönderim yapıcaz.
          // Geçici console.log
          console.log(values)
        }
      >
        {({ setFieldValue }) => (
          <Form className={style.NewPostForm}>
            <div>
              <Field
                as="textarea"
                name="text"
                placeholder="What's on your mind?"
                rows="4"
                className={style.Text}
                maxLength={400}
              />

              <ErrorMessage
                name="text"
                component="div"
                className={style.ErrorMessage}
              />
            </div>
            <div className={style.FileAndSubmit}>
              <div className={style.UploadGroup}>
                <input
                  id="file"
                  name="file"
                  type="file"
                  accept="image/*,video/mp4"
                  onChange={(event) => {
                    const file =
                      event.currentTarget.files && event.currentTarget.files[0];
                    setFieldValue("file", file);
                    setSelectedFileName(file ? file.name : "");
                  }}
                  className={style.FileInputHidden}
                />
                <label htmlFor="file" className={style.UploadButton}>
                  Upload
                </label>
                <span className={style.FileName}>
                  {selectedFileName || "No file selected"}
                </span>
                <ErrorMessage
                  name="file"
                  component="div"
                  className={style.ErrorMessage}
                />
              </div>

              <button type="submit" className={style.SubmitButton}>
                Post
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPost;
