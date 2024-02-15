"use client";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import style from "./contact.module.css";
import InputComponent from "@/component/general/input";
import Button from "@/component/general/button";
import Grid from "@/component/general/grid";

const ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    lastname: Yup.string().required("required"),
    email: Yup.string().required("required"),
    message: Yup.string().required("required"),
  });

  return (
    <Formik
      initialValues={{
        search: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form className={style.contactForm}>
          <Grid no={1}>
            <Grid no={2}>
              <Field
                label={"name"}
                name="name"
                component={InputComponent}
                type="text"
                placeholder={"Name"}
              />
              <Field
                label={"lastname"}
                name="lastname"
                component={InputComponent}
                type="text"
                placeholder={"Lastname"}
              />
            </Grid>

            <Field
              label={"email"}
              name="email"
              component={InputComponent}
              type="text"
              placeholder={"Search By City"}
            />
            <Field
              name="message"
              label={"message"}
              component={InputComponent}
              type="text"
              isTextArea={true}
              placeholder={"Enter your email"}
            />
            <Button name={"Kerko"} type="main" submit={() => console.log()} />
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
