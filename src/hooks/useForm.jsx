import React, { useState } from "react";
import emailjs from 'emailjs-com';

export const useForm = (initialForm, validateForm, closeModal) => {
  const [form, setForm] = useState(initialForm);
  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [recaptchaToken, setRecaptchaTokens] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    //setErrores(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Por favor completa el ReCAPTCHA para poder enviar el formulario.");
      return;
    }

    setLoading(true);
    emailjs
      .sendForm(
        "service_3bgd05m",
        "template_0tsra3b",
        e.target,
        "jYCGvRGBv-9WkRRx4"
      )
      .then((res) => {
        setLoading(false);
        const confirmacion = window.confirm("¿Deseas programar otra recolección?");
        if (confirmacion) {
          setForm(initialForm);
        } else {
          setForm(initialForm);
          closeModal();
        }
        setResponse(true);
      })
      .catch((error) => {
        console.error("Error al enviar el formulario:", error);
        setLoading(false);
      });
  };

  return {
    form,
    setForm,
    errores,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    setRecaptchaTokens,
  };
};
