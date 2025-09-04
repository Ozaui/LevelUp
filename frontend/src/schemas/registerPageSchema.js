import * as Yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

export const registerPageSchema = Yup.object({
  profilePicture: Yup.mixed()
    .nullable()
    .notRequired()
    .test(
      "fileSize",
      "This file is too big",
      (value) => !value || (value && value.size <= FILE_SIZE)
    )
    .test(
      "fileFormat",
      "This file format is not supported",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
    ),
  name: Yup.string()
    .max(40, "Maximum 400 characters allowed")
    .required("This area is required"),
  surname: Yup.string()
    .max(40, "Maximum 400 characters allowed")
    .required("This area is required"),
  nickname: Yup.string()
    .max(40, "Maximum 400 characters allowed")
    .required("This area is required"),
  password: Yup.string()
    .min(8, "Şifre en az 8 karakter olmalı")
    .matches(/[0-9]/, "You must use numerical expression ")
    .matches(/[!@#$%^&*]/, "You must use special characters")
    .required("Password area is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Your password must match")
    .required("Confirm password area is required"),
  terms: Yup.boolean().oneOf(
    [true],
    "If you want to become a LevelUp! user, you must accept the user agreement."
  ),
});
