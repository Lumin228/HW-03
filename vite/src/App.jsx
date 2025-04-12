import { useId, useState } from "react";
import { Formik, Field, Form } from 'formik';
import { LangSwitcher } from "./LoginForm";
import './App.css'

function App()  {
  const [lang, setLang] = useState("uk");

  return (
    <>
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
    </>
  );
};


export default App
