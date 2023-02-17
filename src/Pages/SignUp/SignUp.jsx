import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase";


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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div>
          <label htmlFor="firstname">Name</label>
          <Field type="text" id="firstName" name="fname" />
          <ErrorMessage name="fname" />
        </div>

        <div>
          <label htmlFor="emailAddress">Email </label>
          <Field type="text" id="emailAddress" name="emailaddress" />
          <ErrorMessage name="emailaddress" />
        </div>
        <br></br>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="text" id="password" name="pass" />
          <ErrorMessage name="pass" />
        </div>
        <div>
          <label htmlFor="confirmpass">Confirm Password </label>
          <Field type="text" id="confirmpass" name="confirmpass" />
          <ErrorMessage name="confirmpass" />
        </div>
        <br></br>

        <button type="submit">Sign Up</button>
      </Form>
    </Formik>
  );
};
export default SignUp;
