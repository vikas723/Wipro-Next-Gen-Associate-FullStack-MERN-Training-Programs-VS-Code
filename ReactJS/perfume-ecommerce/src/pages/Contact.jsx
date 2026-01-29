// const Contact = () => {
//   return (
//     <div className="p-20 text-center">
//       <h2 className="text-3xl font-bold text-purple-700">Contact Us</h2>
//       <p className="mt-4">Email: support@auraperfumes.com</p>
//       <p>Phone: +91 98765 43210</p>
//       <p>Location: Tamil Nadu, India</p>
//     </div>
//   );
// };

// export default Contact;



// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { contactSchema } from "../validation/contactSchema";
// import Button from "@mui/material/Button";

// const Contact = () => {
//   return (
//     <div className="max-w-5xl mx-auto p-10 mt-12 
//                 bg-gradient-to-br from-purple-100 via-purple-50 to-white
//                 rounded-2xl shadow-xl border border-purple-200">

//       <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
//         Contact Us
//       </h2>

//       <Formik
//         initialValues={{
//           name: "",
//           email: "",
//           mobile: "",
//           address: "",
//           message: "",
//         }}
//         validationSchema={contactSchema}
//         onSubmit={(values, { resetForm }) => {
//           console.log("Contact Form Data:", values);
//           alert("Message sent successfully!");
//           resetForm();
//         }}
//       >
//         <Form className="space-y-4">

//           {/* Name */}
//           <div>
//             <label className="block font-medium">Name</label>
//             <Field
//               name="name"
//               className="w-full border p-2 rounded"
//               placeholder="Enter your name"
//             />
//             <ErrorMessage
//               name="name"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block font-medium">Email</label>
//             <Field
//               name="email"
//               type="email"
//               className="w-full border border-purple-300 p-3 rounded-lg
//            focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your email"
//             />
//             <ErrorMessage
//               name="email"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           {/* Mobile */}
//           <div>
//             <label className="block font-medium">Mobile Number</label>
//             <Field
//               name="mobile"
//               className="w-full border border-purple-300 p-3 rounded-lg
//            focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter mobile number"
//             />
//             <ErrorMessage
//               name="mobile"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           {/* Address */}
//           <div>
//             <label className="block font-medium">Address</label>
//             <Field
//               name="address"
//               as="textarea"
//               rows="2"
//               className="w-full border border-purple-300 p-3 rounded-lg
//            focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your address"
//             />
//             <ErrorMessage
//               name="address"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block font-medium">Message</label>
//             <Field
//               name="message"
//               as="textarea"
//               rows="3"
//               className="w-full border border-purple-300 p-3 rounded-lg
//            focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Your message"
//             />
//             <ErrorMessage
//               name="message"
//               component="div"
//               className="text-red-500 text-sm"
//             />
//           </div>

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             variant="contained"
//             color="secondary"
//             fullWidth
//           >
//             Send Message
//           </Button>

//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default Contact;


import { Formik, Form, Field, ErrorMessage } from "formik";
import { contactSchema } from "../validation/contactSchema";

const Contact = () => {
  return (
    <div className="min-h-screen  flex justify-center items-center px-4 py-20">

      {/* Card */}
      <div className="bg-linear-to-br from-purple-100 via-purple-50 to-white w-full max-w-2xl rounded-2xl shadow-2xl p-10">

        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">
          Contact Us
        </h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            mobile: "",
            address: "",
            message: ""
          }}
          validationSchema={contactSchema}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            alert("Message sent successfully!");
            resetForm();
          }}
        >
          <Form className="space-y-5">

            {/* Name */}
            <div>
              <label className="font-semibold">Name</label>
              <Field
                name="name"
                placeholder="Enter your name"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email */}
            <div>
              <label className="font-semibold">Email</label>
              <Field
                name="email"
                placeholder="Enter your email"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Mobile */}
            <div>
              <label className="font-semibold">Mobile Number</label>
              <Field
                name="mobile"
                placeholder="Enter mobile number"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <ErrorMessage name="mobile" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Address */}
            <div>
              <label className="font-semibold">Address</label>
              <Field
                as="textarea"
                rows="2"
                name="address"
                placeholder="Enter your address"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <ErrorMessage name="address" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Message */}
            <div>
              <label className="font-semibold">Message</label>
              <Field
                as="textarea"
                rows="4"
                name="message"
                placeholder="Your message"
                className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <ErrorMessage name="message" component="p" className="text-red-500 text-sm mt-1" />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3 rounded-lg transition-all duration-300"
            >
              SEND MESSAGE
            </button>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
