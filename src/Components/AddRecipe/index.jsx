import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddRecipe.css";
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AddRecipe = () => {
  // const auth = getAuth()

  const initialValues = {
    title: "",
    url: "",
    imageUrl: "",
    publisher: "",
    prepTime: "",
    servings: "",
    ingredients1: "",
    ingredients2: "",
    ingredients3: "",
    ingredients4: "",
    ingredients5: "",
    ingredients6: "",
  };
  const RecipeSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    url: Yup.string().url().required("URL is required"),
    imageUrl: Yup.string().url().required("Image URL is required"),
    publisher: Yup.string().required("Publisher is required"),
    prepTime: Yup.number().required("Prep time is required"),
    servings: Yup.number().required("Servings is required"),
    ingredient: Yup.string().required(
      "Each ingredient must have 3 comma-separated values"
    ),
  });

  const onSubmit = (values) => {
    console.log("DATA", values);

    //   signInWithEmailAndPassword(auth, values.email, values.password)
    //     .then((userCredential) => {

    //       const user = userCredential.user;
    //       localStorage.setItem("token", user.accessToken);
    //       console.log(user);
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       alert(errorCode);
    //       alert(errorMessage);
    //     });
  };

  return (
    <div className="AddRecipe">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={RecipeSchema}
      >
        {() => (
          <Form>
            <div className="AllFields">
            <FontAwesomeIcon icon={faClose} className="CloseBtn"/>
              <div className="RecipeData">
                <h1 className="HeadingRecipe">Recipe Data</h1>
                <label htmlFor="title">Title</label>
                <Field name="title" placeholder="TEST23" />

                <label htmlFor="url">URL</label>
                <Field name="url" placeholder="TEST23" />

                <label htmlFor="imageUrl">Image URL</label>
                <Field name="imageUrl" placeholder="TEST23" />

                <label htmlFor="publisher">Publisher</label>
                <Field name="publisher" placeholder="TEST23" />

                <label htmlFor="prepTime">Prep time</label>
                <Field name="prepTime" type="number" placeholder="23" />

                <label htmlFor="servings">Servings</label>
                <Field name="servings" type="number" placeholder="23" />
              </div>
              <div className="Ingred">
              <h1 className="HeadingRecipe">Ingredients</h1>
                <label htmlFor="ingredients1">Ingredient 1</label>
                <Field name="ingredients1" placeholder="0.5,kg,Rice" />

                <label htmlFor="ingredients2">Ingredient 2</label>
                <Field name="ingredients2" placeholder="1,,Avocado" />

                <label htmlFor="ingredients3">Ingredient 3</label>
                <Field name="ingredients3" placeholder=",salt" />

                <label htmlFor="ingredients4">Ingredient 4</label>
                <Field
                  name="ingredients4"
                  placeholder="Quantity, Unit, Description"
                />

                <label htmlFor="ingredients5">Ingredient 5</label>
                <Field
                  name="ingredients5"
                  placeholder="Quantity, Unit, Description"
                />

                <label htmlFor="ingredients6">Ingredient 6</label>
                <Field
                  name="ingredients6"
                  placeholder="Quantity, Unit, Description"
                />
              </div>
            </div>
            <button type="submit" className="Upload">Upload (Disabled)</button>
          </Form>
        )}
      </Formik>
   
    </div>
  );
};
export default AddRecipe;
