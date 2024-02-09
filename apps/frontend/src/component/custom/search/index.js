"use client";
import InputComponent from "../../general/input";
import Button from "../../general/button";
import style from "./search.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function Search() {
  const SearchSchema = Yup.object().shape({
    search: Yup.string().required("required"),
  });

  return (
    <Formik
      initialValues={{
        search: "",
      }}
      validationSchema={SearchSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={style.searchWrapper}>
          <Field
            name="search"
            component={InputComponent}
            type="text"
            placeholder={"Search By City"}
          />
          <Button name={"Kerko"} type="main" submit={() => console.log()} />
        </Form>
      )}
    </Formik>
  );
}
