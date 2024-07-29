import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import UserInformationForm from "./forms/UserInformationForm";
import CollectionInformationForm from "./forms/CollectionInformationForm";
import DeliveryInformationForm from "./forms/DeliveryInformationForm";
import PackageInformationForm from "./forms/PackageInformationForm";

const initialForm = {
  cuenta: "",
  nombreUsuario: "",
  contra: "",
  nombre: "",
  apellido: "",
  empresa: "",
  telefono: "",
  celular: "",
  correo: "",
  correoFactura: "",
  fechaRecoleccion: "",
  horarioRecoleccion: "",
  provinciaRecoleccion: "",
  cantonRecoleccion: "",
  distritoRecoleccion: "",
  barrioRecoleccion: "",
  direccionRecoleccion: "",
  enlaceRecoleccion: "",
  nombreRecoleccion: "",
  apellidoRecoleccion: "",
  numeroRecoleccion: "",
  fechaEntrega: "",
  horarioEntrega: "",
  provinciaEntrega: "",
  cantonEntrega: "",
  distritoEntrega: "",
  barrioEntrega: "",
  direccionEntrega: "",
  enlaceEntrega: "",
  nombreEntrega: "",
  apellidoEntrega: "",
  numeroEntrega: "",
  paquetes: [
    {
      cantidad: "",
      peso: "",
      largo: "",
      ancho: "",
      alto: "",
      tipoPaquete: "",
      fragil: false,
    },
  ],
  dataRecoleccion: {
    provinciasRecoleccion: [],
    cantonesPorProvincia: {},
    distritosPorCanton: {},
  },
  dataEntrega: {
    provinciasEntrega: [],
    cantonesPorProvincia: {},
    distritosPorCanton: {},
  },
  observaciones: ""
};

const ProgramarRecoleccionForm = ({ closeModal }) => {
  const { form, setForm, handleSubmit, handleChange, handleBlur, setRecaptchaTokens } = useForm(
    initialForm,
    closeModal
  );
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  const [openModalCount, setOpenModalCount] = useState(0);

  useEffect(() => {
    const jsonFilePath = "src/assets/provincias-cantones-distritos.json";

    fetch(jsonFilePath)
      .then((response) => response.json())
      .then((jsonData) => {
        setForm((prevForm) => ({
          ...prevForm,
          dataRecoleccion: {
            provinciasRecoleccion: jsonData.provincias,
            cantonesPorProvincia: jsonData.cantonesPorProvincia,
            distritosPorCanton: jsonData.distritosPorCanton,
          },
          dataEntrega: {
            provinciasEntrega: jsonData.provincias,
            cantonesPorProvincia: jsonData.cantonesPorProvincia,
            distritosPorCanton: jsonData.distritosPorCanton,
          },
        }));
      })
      .catch((error) => {
        console.error("Error al cargar el archivo JSON:", error);
      });

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setForm]);

  const handleClickOutside = (event) => {
    if (event.target.closest(".bg-opacity-75") === null) {
      setShowCreateAccountModal(false);
    }
  };

  const handleRecaptchaChange = (token) => {
    setRecaptchaTokens(token);
  };

  const handleInicioSesion = () => {
    axios
      .post("url_de_tu_api_para_iniciar_sesion", {
        usuario: form.nombreUsuario,
        contraseña: form.contra,
      })
      .then((response) => {
        const userData = response.data;
        setForm((prevForm) => ({
          ...prevForm,
          nombre: userData.nombre,
          apellido: userData.apellido,
          empresa: userData.empresa,
          telefono: userData.telefono,
          celular: userData.celular,
          correo: userData.correo,
          correoFactura: userData.correoFactura,
        }));
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error);
      });
  };

  const agregarCampos = () => {
    setForm((prevForm) => ({
      ...prevForm,
      paquetes: [
        ...prevForm.paquetes,
        {
          cantidad: "",
          peso: "",
          largo: "",
          ancho: "",
          alto: "",
          tipoPaquete: "",
          fragil: false,
        },
      ],
    }));
  };

  const handleChangePaquete = (e, index, field) => {
    const { value } = e.target;
    setForm((prevForm) => {
      const paquetes = [...prevForm.paquetes];
      paquetes[index][field] = value;
      return { ...prevForm, paquetes };
    });
  };

  const handleFragileChange = (e, index) => {
    const { checked } = e.target;
    setForm((prevForm) => {
      const paquetes = [...prevForm.paquetes];
      paquetes[index].fragil = checked;
      return { ...prevForm, paquetes };
    });
  };

  const handleProvinciaRecoleccionChange = (selectedProvincia) => {
    setForm((prevForm) => ({
      ...prevForm,
      provinciaRecoleccion: selectedProvincia,
      cantonRecoleccion: "",
      distritoRecoleccion: "",
    }));
  };

  const handleCantonRecoleccionChange = (selectedCanton) => {
    setForm((prevForm) => ({
      ...prevForm,
      cantonRecoleccion: selectedCanton,
      distritoRecoleccion: "",
    }));
  };

  const handleProvinciaEntregaChange = (selectedProvincia) => {
    setForm((prevForm) => ({
      ...prevForm,
      provinciaEntrega: selectedProvincia,
      cantonEntrega: "",
      distritoEntrega: "",
    }));
  };

  const handleCantonEntregaChange = (selectedCanton) => {
    setForm((prevForm) => ({
      ...prevForm,
      cantonEntrega: selectedCanton,
      distritoEntrega: "",
    }));
  };

  const handleChangeCuenta = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      cuenta: value,
    }));
    setShowCreateAccountModal(value === "No");
  };

  const handleCreateAccount = () => {
    window.open("https://sistema.tranquiexpress.com/RegistroCliente", "_blank");
    setShowCreateAccountModal(false);
  };

  const handleContinueAsGuest = () => {
    setShowCreateAccountModal(false);
  };

  return (
    <form className="shake" onSubmit={handleSubmit}>
      <div className="flex lg:flex-row items-center w-auto h-[121px] bg-white">
        <img
          src="logo_tranqui.png"
          alt="Logo"
          className="md:w-[275px] md:h-[275px] w-[200px] h-[200px] mr-[-30px] ml-[-25px] md:ml-0 md:mr-[500px] mb-4 md:mb-0 flex-shrink-0"
        />
      </div>
      <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="cuenta"
        >
          ¿Ya tienes una cuenta?
        </label>
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cuenta"
          name="cuenta"
          value={form.cuenta}
          onBlur={handleBlur}
          onChange={handleChangeCuenta}
          required
        >
          <option value="">Selecciona una opción</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      {form.cuenta === "Si" && (
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombreUsuario"
          >
            Nombre de usuario
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombreUsuario"
            type="text"
            name="nombreUsuario"
            placeholder="Ingrese su nombre de usuario"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.nombreUsuario}
            required
          />
          <label
            className="block text-gray-700 text-sm font-bold mb-2 mt-4"
            htmlFor="contra"
          >
            Contraseña
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="contra"
            type="password"
            name="contra"
            placeholder="Ingrese su contraseña"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.contra}
            required
          />
          <div className="flex mt-4">
            <button
              type="button"
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleInicioSesion}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      )}

      <UserInformationForm
        form={form}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <CollectionInformationForm
        form={form}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleProvinciaRecoleccionChange={handleProvinciaRecoleccionChange}
        handleCantonRecoleccionChange={handleCantonRecoleccionChange}
        provinciasRecoleccion={form.dataRecoleccion.provinciasRecoleccion}
        cantonesRecoleccion={
          form.dataRecoleccion.cantonesPorProvincia[
            form.provinciaRecoleccion
          ] || []
        }
        distritosRecoleccion={
          form.dataRecoleccion.distritosPorCanton[form.cantonRecoleccion] || []
        }
        userInfo={form}
      />
      <DeliveryInformationForm
        form={form}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleProvinciaEntregaChange={handleProvinciaEntregaChange}
        handleCantonEntregaChange={handleCantonEntregaChange}
        provinciasEntrega={form.dataEntrega.provinciasEntrega}
        cantonesEntrega={
          form.dataEntrega.cantonesPorProvincia[form.provinciaEntrega] || []
        }
        distritosEntrega={
          form.dataEntrega.distritosPorCanton[form.cantonEntrega] || []
        }
        userInfo={form}
      />
      <PackageInformationForm
        paquetes={form.paquetes}
        handleChangePaquete={handleChangePaquete}
        handleFragileChange={handleFragileChange}
        agregarCampos={agregarCampos}
      />
    	<div className="w-full md:w-1/1 px-2 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="observaciones"
          >
            Observaciones
          </label>
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="observaciones"
            rows={4}
            name="observaciones"
            placeholder="Escriba observaciones adicionales si lo considera necesario"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.observaciones}
          />
        </div>
      <div className="flex mt-8">
        <ReCAPTCHA
          sitekey="6LcL8vgpAAAAAIme5VgGHfcIsaIG1m2yJh5liVE2"
          onChange={handleRecaptchaChange}
        />
      </div>
      <div className="form-submit mt-5">
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Enviar
        </button>
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
          onClick={closeModal}
        >
          Cancelar
        </button>
      </div>

      {showCreateAccountModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md relative">
            <div className="absolute top-0 left-0 w-full h-3 bg-orange-500"></div>
            <h2 className="text-2xl font-bold mb-4">Crear cuenta</h2>
            <p className="text-gray-700 mb-4">
              Creá tu cuenta y accedé a todos los beneficios.
            </p>
            <div className="items-center justify-center">
              <button
                type="button"
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
                onClick={handleCreateAccount}
              >
                ¡Quiero registrarme!
              </button>
              <button
                type="button"
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 my-2 rounded focus:outline-none focus:shadow-outline"
                onClick={handleContinueAsGuest}
              >
                Continuar como invitado
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-3 bg-orange-500"></div>
          </div>
        </div>
      )}
    </form>
  );
};

export default ProgramarRecoleccionForm;
