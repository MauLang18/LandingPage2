import React, {useState} from "react";

const DeliveryInformationForm = ({
  form,
  handleChange,
  handleBlur,
  provinciasEntrega,
  cantonesEntrega,
  distritosEntrega,
  handleProvinciaEntregaChange,
  handleCantonEntregaChange,
  userInfo,
}) => {
  const [useUserInfo, setUseUserInfo] = useState(false);

  const handleCheckboxChange = () => {
    setUseUserInfo(!useUserInfo);
  };

  return (
    <>
      <label className="block text-gray-700 text-md font-bold mb-4 mt-10">
        Información de entrega
        <br/>
        *La opción de entrega en menos de 24 horas solo está disponible si la recolección y entrega son dentro de GAM. {" "}
              <a
                className="text-amber-500 font-bold underline cursor-pointer"
                href="#"
              >
                Más información.
              </a>
      </label>
      <div className="form-group mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="fechaEntrega"
        >
          Fecha de Entrega
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="fechaEntrega"
          type="date"
          name="fechaEntrega"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.fechaEntrega}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="horarioEntrega">
          Horario
        </label>
        <select
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="horarioEntrega"
          name="horarioEntrega"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.horarioEntrega}
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="provinciaEntrega">
            Provincia
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="provinciaEntrega"
            name="provinciaEntrega"
            value={form.provinciaEntrega}
            onBlur={handleBlur}
            onChange={(e) => handleProvinciaEntregaChange(e.target.value)}
            required
          >
            <option value="">Seleccionar provincia</option>
            {provinciasEntrega.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cantonEntrega">
            Cantón
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="cantonEntrega"
            name="cantonEntrega"
            value={form.cantonEntrega}
            onBlur={handleBlur}
            onChange={(e) => handleCantonEntregaChange(e.target.value)}
            required
          >
            <option value="">Seleccionar cantón</option>
            {cantonesEntrega.map((canton) => (
              <option key={canton} value={canton}>
                {canton}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="distritoEntrega">
            Distrito
          </label>
          <select
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="distritoEntrega"
            name="distritoEntrega"
            value={form.distritoEntrega}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar distrito</option>
            {distritosEntrega.map((distrito) => (
              <option key={distrito} value={distrito}>
                {distrito}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="barrioEntrega">
          Barrio
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="barrioEntrega"
          type="text"
          name="barrioEntrega"
          placeholder="Ingrese el nombre del barrio"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.barrioEntrega}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="direccionEntrega">
          Dirección Exacta
        </label>
        <textarea
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="direccionEntrega"
          name="direccionEntrega"
          placeholder="Ingrese su dirección exacta"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.direccionEntrega}
          required
        />
      </div>
      <div className="form-group mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="enlaceEntrega">
          Enlace de ubicación
        </label>
        <input
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="enlaceEntrega"
          type="text"
          name="enlaceEntrega"
          placeholder="Pegue el enlace de la ubicación (google maps o waze)"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.enlaceEntrega}
        />
      </div>
      <label className="block text-gray-700 text-md font-bold mb-4 mt-10">
        Información contacto para entrega
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombreEntrega">
            Nombre
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombreEntrega"
            type="text"
            name="nombreEntrega"
            placeholder="Ingrese el nombre de la persona para entrega"
            onBlur={handleBlur}
            onChange={handleChange}
            value={useUserInfo ? userInfo.nombre : form.nombreEntrega}
            disabled={useUserInfo}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="apellidoEntrega">
            Apellido
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="apellidoEntrega"
            type="text"
            name="apellidoEntrega"
            placeholder="Ingrese el apellido de la persona para entrega"
            onBlur={handleBlur}
            onChange={handleChange}
            value={useUserInfo ? userInfo
              .apellido : form.apellidoEntrega}
            disabled={useUserInfo}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefonoEntrega">
            Número Telefóno / Celular
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="telefonoEntrega"
            type="tel"
            name="telefonoEntrega"
            placeholder="Ingrese el número de contacto para la entrega"
            onBlur={handleBlur}
            onChange={handleChange}
            value={useUserInfo ? userInfo.celular : form.telefonoEntrega}
            disabled={useUserInfo}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correoEntrega">
            Correo
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="correoEntrega"
            type="email"
            name="correoEntrega"
            placeholder="Ingrese el correo de la persona para entrega"
            onBlur={handleBlur}
            onChange={handleChange}
            value={useUserInfo ? userInfo.correo : form.correoEntrega}
            disabled={useUserInfo}
            required
          />
        </div>
      </div>
    </>
  );
};

export default DeliveryInformationForm;
