import React from "react";

const PackageInformationForm = ({
  paquetes,
  handleChange,
  handleBlur,
  agregarCampos,
  handleChangePaquete,
  handleFragileChange,
}) => {
  return (
    <>
      <label className="block text-gray-700 text-md font-bold mb-4 mt-10">
        Información de paquetes
      </label>
      {paquetes.map((paquete, index) => (
        <div key={index} className="mb-4 border-b border-gray-200 pb-4">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`cantidad-${index}`}
              >
                Cantidad
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`cantidad-${index}`}
                type="text"
                name={`cantidad-${index}`}
                placeholder="#"
                onBlur={handleBlur}
                onChange={(e) => handleChangePaquete(e, index, 'cantidad')}
                value={paquete.cantidad}
                required
              />
            </div>
            <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`peso-${index}`}
              >
                Peso (kg)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`peso-${index}`}
                type="text"
                name={`peso-${index}`}
                placeholder="Kg"
                onBlur={handleBlur}
                onChange={(e) => handleChangePaquete(e, index, 'peso')}
                value={paquete.peso}
                required
              />
            </div>
            <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`alto-${index}`}
              >
                Alto (cm)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`alto-${index}`}
                type="text"
                name={`alto-${index}`}
                placeholder="Cm"
                onBlur={handleBlur}
                onChange={(e) => handleChangePaquete(e, index, 'alto')}
                value={paquete.alto}
                required
              />
            </div>
            <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`ancho-${index}`}
              >
                Ancho (cm)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`ancho-${index}`}
                type="text"
                name={`ancho-${index}`}
                placeholder="Cm"
                onBlur={handleBlur}
                onChange={(e) => handleChangePaquete(e, index, 'ancho')}
                value={paquete.ancho}
                required
              />
            </div>
            <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`largo-${index}`}
              >
                Largo (cm)
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`largo-${index}`}
                type="text"
                name={`largo-${index}`}
                placeholder="Cm"
                onBlur={handleBlur}
                onChange={(e) => handleChangePaquete(e, index, 'largo')}
                value={paquete.largo}
                required
              />
            </div>
            <div className="w-full md:w-1/1 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`tipoPaquete-${index}`}
              >
                Tipo de paquete
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`tipoPaquete-${index}`}
                type="text"
                name={`tipoPaquete-${index}`}
                placeholder="Especifique contenido del paquete"
                onBlur={handleBlur}
                onChange={(e) => handleChangePaquete(e, index, 'tipoPaquete')}
                value={paquete.tipoPaquete}
                required
              />
            </div>
            <div className="w-full md:w-1/5 px-2 mb-4 md:mb-0">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`fragil-${index}`}
              >
               Contenido frágil
              </label>
              <input
                className="mr-2 leading-tight"
                id={`fragil-${index}`}
                type="checkbox"
                name={`fragil-${index}`}
                checked={paquete.fragil}
                onChange={(e) => handleFragileChange(e, index)}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-start mt-4">
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none focus:shadow-outline"
          onClick={agregarCampos}
        >
          Añadir otro tipo de paquete
        </button>
      </div>
    </>
  );
};

export default PackageInformationForm;
