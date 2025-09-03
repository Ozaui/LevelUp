import * as Yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "video/mp4"];

export const newPostSchema = Yup.object({
  text: Yup.string()
    .min(15, "Your post is too short")
    .max(400, "Maximum 400 characters allowed")
    .required("This area is required"),
  file: Yup.mixed()
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
});
