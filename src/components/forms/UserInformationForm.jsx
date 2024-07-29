import React from "react";

const UserInformationForm = ({ form, handleChange, handleBlur }) => {
  return (
    <>
      <label className="block text-gray-700 text-md font-bold mb-4 mt-10">
        Información de usuario
      </label>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            name="nombre"
            placeholder="Ingrese su nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.nombre}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellido">
            Apellido
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellido"
            type="text"
            name="apellido"
            placeholder="Ingrese su apellido"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.apellido}
            required
          />
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="empresa">
          Empresa
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="empresa"
          name="empresa"
          placeholder="Ingrese el nombre de la empresa"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.empresa}
          required
        />
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
            Teléfono
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefono"
            type="tel"
            name="telefono"
            placeholder="Ingrese su teléfono"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.telefono}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="celular">
            Celular (A este número se le enviará un mensaje de texto)
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="celular"
            type="tel"
            name="celular"
            placeholder="Ingrese su celular"
            onBlur={handleBlur}
            onChange={handleChange}
            value={form.celular}
            required
          />
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
          Correo
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="correo"
          type="email"
          name="correo"
          placeholder="Ingrese su dirección de correo electrónico"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.correo}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correoFactura">
          Correo para factura electrónica
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="correoFactura"
          type="email"
          name="correoFactura"
          placeholder="Ingrese el correo para factura electrónica"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.correoFactura}
          required
        />
      </div>
    </>
  );
};

export default UserInformationForm;
