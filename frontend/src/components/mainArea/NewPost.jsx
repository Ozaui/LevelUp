import Avatar from "@mui/material/Avatar";
import style from "../../styles/components/MainArea.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { newPostSchema } from "../../schemas/newPostSchema";

const NewPost = () => {
  return (
    <div>
      {" "}
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
                type="text"
                name="text"
                placeholder="What's on your mind?"
                rows="4"
                className={style.TextArea}
              />
              <ErrorMessage
                name="text"
                component="div"
                className={style.ErrorMessage}
              />
            </div>

            <div>
              <input
                name="file"
                type="file"
                accept="image/*,video/mp4"
                onChange={(event) => {
                  setFieldValue("file", event.currentTarget.files[0]);
                }}
              />
              <ErrorMessage
                name="file"
                component="div"
                className={style.ErrorMessage}
              />
            </div>

            <button type="submit" className={style.SubmitButton}>
              Post
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewPost;
