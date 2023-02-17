import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase";


const Login = () => {
  const auth = getAuth(app);

  const initialValues = {
    email: "",
    password: "",
  };

 
  const onSubmit = (values) => {
    console.log("DATA", values);

    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
     
        const user = userCredential.user;
        localStorage.setItem("token", user.accessToken);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  };
  const schema = Yup.object().shape({
    email: Yup.string().required("Required").email("Invalid email format"),
    password: Yup.string()
      .required(" Required")
      .min(8, "Password must be at least 8 characters"),
  });
  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        <div className="login">
          <div className="form">
            <Form>
              <span>Login</span>
              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
                className="form-control inp_text"
                id="email"
              />
              <ErrorMessage name="email" />

              <Field
                type="password"
                name="password"
                placeholder="Enter password"
                className="form-control"
              />
              <ErrorMessage name="password" />

              <button type="submit">Login</button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default Login;
