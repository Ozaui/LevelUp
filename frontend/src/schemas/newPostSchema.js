import * as Yup from "yup";

const FILE_SIZE = 5 * 1024 * 1024;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png", "video/mp4"];

export const newPostSchema = Yup.object({
  text: Yup.string()
    .min(15, "Your post is too short")
    .required("This area is required"),
  file: Yup.mixed()
    .test(
      "fileSize",
      "This file is too big",
      (value) => !value || value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "This file format is not supported",
      (value) => !value || SUPPORTED_FORMATS.includes(value.type)
    ),
});
