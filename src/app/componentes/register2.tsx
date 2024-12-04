import Link from 'next/link';
import Image from 'next/image';

export default function Register() {
  return (
      <div className="w-[428px] h-[926px] bg-white shadow-xl overflow-y-auto">
        <div className='w-full h-20 bg-customRed shadow-lg shadow-black'>
        </div>

        <div className="p-8">
          <div className="flex items-center justify-center gap-2 mb-8">
      
            <div className="w-24 h-24 relative">
                <Image
                    src="/logo.png"
                    alt="Restaurant Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <span className="text-2xl font-bold">PizzaLand</span>
          </div>

            <hr className='bg-black mb-8'/>

          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block">Ciudad</label>
              <input
                type="text"
                placeholder="Ingresa tu Ciudad"
                className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
              />
            </div>

            <div className="space-y-2">
              <label className="block">Calle</label>
              <input
                type="text"
                placeholder="Ingresa tu Calle"
                className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
              />
            </div>

            <div className="space-y-2">
              <label className="block">Codigo Postal</label>
              <input
                type="text"
                placeholder="Ingresa tu teléfono"
                className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
              />
            </div>

            <div className="space-y-2">
              <label className="block">Numero telefonico</label>
              <div className='flex items-center'>
                <p className='text-center mr-2'>+507</p>
                <input
                    type="tel"
                    placeholder="Ingresa tu Numero telefonico"
                    className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
                />
              </div>
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="auth-button border w-1/2 p-4 rounded-full bg-customRed text-white border-1 border-black shadow-lg shadow-black">
                   <Link href="/login"> Continuar</Link>
                </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <p>¿Ya tienes una cuenta?</p>
            <Link href="/" className="auth-link text-customRed">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>

  );
}