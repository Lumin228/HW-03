import { useId, useState } from "react";
import { Formik, Field, Form } from 'formik';

import './App.css'

function App() {
  const [hasAccepted, setHasAccepted] = useState(false);

  const nameFirst = useId();

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
    console.log(evt.target.checked);
    
  };

  return (
    <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        level: 'neutral',
      }}
      onSubmit={async (values, actions) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(values);
        actions.resetForm()
        
      }}
    >
      <Form>
      <label htmlFor="asd">Service satisfaction level</label>
        <Field as="select" name="level" id="asd">
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>

        <label htmlFor={nameFirst}>First Name</label>
        <Field id={nameFirst} name="firstName" placeholder="Jane" />

        <label htmlFor="qweq">Message</label>
        <Field as="textarea" name="message" id="qweq" rows="5" />

        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  );
}

export default App
