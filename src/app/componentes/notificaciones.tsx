import Link from 'next/link';
import React from 'react';
export default function NotificationsSettings() {
  return (
    <div className="w-[428px] h-[926px] mx-auto bg-white shadow-md overflow-hidden">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-2 text-white">
        <button className="text-2xl">
          <i className="fas fa-bars"></i> {/* Ícono de menú */}
        </button>
        <div className="text-center">
          <img src="/logo.png" alt="Logo" className="h-10" /> {/* Agrega tu logo */}
        </div>
        <button className="text-2xl">
          <i className="fas fa-shopping-cart"></i> {/* Ícono de carrito */}
        </button>
      </header>

      {/* Contenido */}
      <main className="px-6 py-4">
        <h1 className="text-xl font-semibold text-center">Sistema de notificaciones</h1>
        <p className="text-sm text-center text-gray-600 mb-6">
          Aquí puedes elegir qué deseas que te notifiquemos
        </p>

        {/* Tipo de notificación */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Tipo de notificación</h2>
          <div className="flex flex-col gap-2">
            <label className="flex items-center">
              <input type="radio" name="notification" className="mr-2" defaultChecked />
              Tiras emergentes y sonido
            </label>
            <label className="flex items-center">
              <input type="radio" name="notification" className="mr-2" />
              Solo tiras
            </label>
            <label className="flex items-center">
              <input type="radio" name="notification" className="mr-2" />
              Desactivado
            </label>
          </div>
        </section>

        {/* Emergentes */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Emergentes</h2>
          <div className="flex flex-col gap-2">
            {['Estado del pedido', 'Promociones', 'Cupones', 'Novedades'].map((label) => (
              <label key={label} className="flex justify-between items-center">
                <span>{label}</span>
                <input type="checkbox" className="form-toggle bg-red-800" />
              </label>
            ))}
          </div>
        </section>

        {/* Correo */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Correo</h2>
          <div className="flex flex-col gap-2">
            {['Estado del pedido', 'Promociones'].map((label) => (
              <label key={label} className="flex justify-between items-center">
                <span>{label}</span>
                <input type="checkbox" className="form-toggle bg-gray-300" />
              </label>
            ))}
          </div>
        </section>

        {/* Caché */}
        <section className="mb-6">
          <h2 className="font-semibold mb-2">Caché</h2>
          <label className="flex items-center">
            <span className="mr-2">Eliminar caché cada:</span>
            <select className="border border-gray-300 rounded px-2 py-1">
              <option>Semana</option>
              <option>Mes</option>
              <option>Nunca</option>
            </select>
          </label>
        </section>

        {/* Botón Guardar */}
        <div className="text-center">
          <button className="bg-red-800 text-white px-6 py-2 rounded font-semibold">
           <Link href="/">Guardar</Link>
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 w-full  text-white flex justify-around items-center h-12">
        <button>
          <i className="fas fa-home text-2xl"></i>
        </button>
        <button>
          <i className="fas fa-shopping-bag text-2xl"></i>
        </button>
        <button>
          <i className="fas fa-utensils text-2xl"></i>
        </button>
        <button>
          <i className="fas fa-user text-2xl"></i>
        </button>
      </footer>
    </div>
  );
}