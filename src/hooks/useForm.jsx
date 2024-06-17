import { useState } from "react";
import emailjs from 'emailjs-com';

export const useForm = (initialForm, validateForm, closeModal) => {
  const [form, setForm] = useState(initialForm);
  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrores(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrores(validateForm(form));

    if (Object.keys(errores).length === 0) {
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
          const confirmacion = window.confirm(
            "¿Deseas programar otra recolección?"
          );
          if (confirmacion) {
            setForm(initialForm);
          } else {
            closeModal();
          }
          setResponse(true);
        });
    } else {
      return;
    }
  };

  return {
    form,
    errores,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
