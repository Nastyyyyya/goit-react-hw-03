import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import style from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9\s\-()+]*$/, "Must be a number")
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);

    actions.resetForm({ values: initialValues });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      {({ resetForm }) => (
        <Form className={style.form}>
          <label className={style.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={style.input}
            id={nameFieldId}
            type="text"
            name="name"
            autoComplete="name"
          />
          <ErrorMessage name="name" component="div" className={style.error} />

          <label className={style.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={style.input}
            id={numberFieldId}
            type="text"
            name="number"
            autoComplete="tel"
          />
          <ErrorMessage name="number" component="div" className={style.error} />

          <button className={style.button} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
