import React, { useState } from "react";

const CollectionInformationForm = ({
  form,
  handleChange,
  handleBlur,
  provinciasRecoleccion,
  cantonesRecoleccion,
  distritosRecoleccion,
  handleProvinciaRecoleccionChange,
  handleCantonRecoleccionChange,
  userInfo,
}) => {
  const [useUserInfo, setUseUserInfo] = useState(false);

  const handleCheckboxChange = () => {
    setUseUserInfo(!useUserInfo);
  };

  return (
    <>
      <label className="block text-gray-700 text-md font-bold mb-4 mt-10">
        Información de recolección
      </label>
      <div className="form-group mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmFor="fechaRecoleccion"
        >
          Fecha de Recolección
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fechaRecoleccion"
          type="date"
          name="fechaRecoleccion"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.fechaRecoleccion}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="horarioRecoleccion"
        >
          Horario
        </label>
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="horarioRecoleccion"
          name="horarioRecoleccion"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.horarioRecoleccion}
          required
        >
          <option value="">Seleccione su preferencia de horario</option>
          <option value="Entre 8:00 a.m - 12 m.d.">Entre 8:00 a.m - 12 m.d</option>
          <option value="Entre 12 m.d - 4:30 p.m">Entre 12 m.d - 4:30 p.m</option>
          <option value="A cualquier hora">A cualquier hora</option>
        </select>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="provinciaRecoleccion"
          >
            Provincia
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="provinciaRecoleccion"
            name="provinciaRecoleccion"
            value={form.provinciaRecoleccion}
            onBlur={handleBlur}
            onChange={(e) => handleProvinciaRecoleccionChange(e.target.value)}
            required
          >
            <option value="">Seleccionar provincia</option>
            {provinciasRecoleccion.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cantonRecoleccion"
          >
            Cantón
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cantonRecoleccion"
            name="cantonRecoleccion"
            value={form.cantonRecoleccion}
            onBlur={handleBlur}
            onChange={(e) => handleCantonRecoleccionChange(e.target.value)}
            required
          >
            <option value="">Seleccionar cantón</option>
            {cantonesRecoleccion.map((canton) => (
              <option key={canton} value={canton}>
                {canton}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="distritoRecoleccion"
          >
            Distrito
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="distritoRecoleccion"
            name="distritoRecoleccion"
            value={form.distritoRecoleccion}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar distrito</option>
            {distritosRecoleccion.map((distrito) => (
              <option key={distrito} value={distrito}>
                {distrito}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="barrioRecoleccion"
        >
          Barrio
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="barrioRecoleccion"
          type="text"
          name="barrioRecoleccion"
          placeholder="Ingrese el nombre del barrio"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.barrioRecoleccion}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="direccionRecoleccion"
        >
          Dirección Exacta
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="direccionRecoleccion"
          name="direccionRecoleccion"
          placeholder="Ingrese su dirección exacta"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.direccionRecoleccion}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="enlaceRecoleccion"
        >
          Enlace de ubicación
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="enlaceRecoleccion"
          type="text"
          name="enlaceRecoleccion"
          placeholder="Pegue el enlace de la ubicación (google maps o waze)"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.enlaceRecoleccion}
        />
      </div>
      <label className="block text-gray-700 text-md font-bold mb-4 mt-10">
        Información contacto para recolección
      </label>
      <div className="form-group mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="useUserInfo"
        >
          Usar información de usuario
        </label>
        <input
          type="checkbox"
          id="useUserInfo"
          checked={useUserInfo}
          onChange={handleCheckboxChange}
        />
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombreRecoleccion"
          >
            Nombre
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombreRecoleccion"
            type="text"
            name="nombreRecoleccion"
            placeholder="Ingrese el nombre de la persona para recolección"
            onBlur={handleBlur}
            onChange={handleChange}
            value={useUserInfo ? userInfo.nombre : form.nombreRecoleccion}
            disabled={useUserInfo}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="apellidoRecoleccion"
          >
            Apellido
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellidoRecoleccion"
            type="text"
            name="apellidoRecoleccion"
            placeholder="Ingrese el apellido de la persona para recolección"
            onBlur={handleBlur}
            onChange={handleChange}
            value={useUserInfo ? userInfo.apellido : form.apellidoRecoleccion}
            disabled={useUserInfo}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="telefonoRecoleccion"
          >
            Número Telefóno / Celular
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefonoRecoleccion"
            type="tel"
            name="telefonoRecoleccion"
            placeholder="Ingrese el número de contacto para la recolección"
            onBlur={handleBlur}
            onChange={handleChange}
            value={useUserInfo ? userInfo.celular : form.telefonoRecoleccion}
            disabled={useUserInfo}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="correoRecoleccion"
          >
            Correo
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="correoRecoleccion"
            type="email"
            name="correoRecoleccion"
            placeholder="Ingrese el correo de la persona para recolección"
            onBlur={handleBlur}
            onChange={handleChange}
            value={useUserInfo ? userInfo.correo : form.correoRecoleccion}
            disabled={useUserInfo}
            required
          />
        </div>
      </div>
    </>
  );
};

export default CollectionInformationForm;
