import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string()
    .min(3, "Minimum 3 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  mobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Enter valid 10 digit mobile number")
    .required("Mobile number is required"),

  address: Yup.string()
    .min(10, "Address too short")
    .required("Address is required"),

  message: Yup.string()
    .min(10, "Message should be at least 10 characters")
    .required("Message is required"),
});
