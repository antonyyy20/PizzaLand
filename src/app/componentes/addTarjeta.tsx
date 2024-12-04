import Link from "next/link";




export default function AddTarjeta() {
    return (
        <div className="w-[428px] h-[926px] bg-white shadow-xl overflow-y-auto">
          <div className="p-8">
              <h2 className="section-title text-2xl flex justify-center">Agregar Tarjeta</h2>
              <hr className='bg-customRed mt-4 mb-8 '/>
  
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block flex justify-center">Numero de Tarjeta</label>
                <input
                  type="text"
                  placeholder="Ingresa el Numero de Tarjeta"
                  className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
                />
              </div>
  
              <div className="space-y-2">
                <label className="block flex justify-center">Nombre de Tarjeta</label>
                <input
                  type="text"
                  placeholder="Ingresa la Nombre de Tarjeta"
                  className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
                />
              </div>
  
              <div className="space-y-2">
                <label className="block flex justify-center">Expiracion</label>
                <input
                  type="text"
                  placeholder="Ingresa tu Expiracion"
                  className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
                />
              </div>
  
              <div className="space-y-2">
                <label className="block flex justify-center">Codigo de Seguridad</label>
                <input
                  type="text"
                  placeholder="Ingresa el Codigo de Seguridad"
                  className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
                />
              </div>
  
              <div className="flex justify-center">
                  <button
                      type="submit"
                      className="auth-button border w-1/2 p-4 bg-customRed text-white">
                      <Link href="/detalleCompra">Guardar</Link>
                  </button>
              </div>
            </form>
          </div>
        </div>
  
    );
  }