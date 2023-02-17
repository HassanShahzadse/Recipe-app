import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase";
import './SignUp.css'

const auth = getAuth(app);
const initialValues = {
  fname: "",
  emailaddress: "",
  pass: "",
  confirmpass: "",
};
const onSubmit = (values) => {
  createUserWithEmailAndPassword(auth, values.emailaddress, values.pass)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
    });
};
const SignUp = () => {
  const validationSchema = Yup.object({
    fname: Yup.string().required("Required"),
    emailaddress: Yup.string()
      .email("Invalid email format")
      .required("Required"),
    pass: Yup.string()
      .matches(/(?=.*[0-9])/)
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmpass: Yup.string()
      .matches(/(?=.*[0-9])/)
      .min(8, "Password must be at least 8 characters")
      .label("confirm password")
      .required(),
  });
  return (
    <div className="SignUp">
      <div className="formSignup">
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="InputfieldsSignup">
      <span>Sign Up</span>
          <Field placeholder="Enter Name" type="text" id="firstName" name="fname" className="form-control"/>
          <ErrorMessage name="fname" />
 
          <Field placeholder="Enter E-Mail" type="text" id="emailAddress" name="emailaddress" className="form-control"/>
          <ErrorMessage name="emailaddress" />

          <Field placeholder="Enter Password" type="text" id="password" name="pass" className="form-control"/>
          <ErrorMessage name="pass" />

          <Field placeholder="Confirm Password" type="text" id="confirmpass" name="confirmpass" className="form-control"/>
          <ErrorMessage name="confirmpass" />


        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
    </div>
    </div>
  );
};
export default SignUp;
