import * as Yup from "Yup";
 export const employeeSchema = Yup.object({
    name: Yup.string().required("Name is Mandatory yo fill"),
    email: Yup.string().email("Invalid email").required("Email is Mandatory"),
    password: Yup.string().min(6, "Min 6 characters to be entered").required("Password required")

 })