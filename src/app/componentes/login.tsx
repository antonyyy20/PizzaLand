import Link from 'next/link';
import Image from 'next/image';

export default function Login() {
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
              <label className="block">Correo electrónico</label>
              <input
                type="email"
                placeholder="Ingresa tu correo"
                className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
              />
            </div>

            <div className="space-y-2">
              <label className="block">Contraseña</label>
              <input
                type="password"
                placeholder="Ingresa tu contraseña"
                className="w-full px-4 py-4 text-white placeholder-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-customGreen"
              />
            </div>

            <div className="flex justify-center">
                <button
                    type="submit"
                    className="auth-button border w-1/2 p-4 rounded-full bg-customRed text-white border-1 border-black shadow-lg shadow-black">
                    Ingresar
                </button>
            </div>
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="auth-link text-customRed">
                ¿Olvidaste tu contraseña?
            </Link>

            <p className='mt-5'>¿No tienes una cuenta?</p>
            <Link href="/" className="auth-link text-customRed">
              Crear una cuenta
            </Link>

            <hr className='bg-black mb-8 mt-8'/>
          </div>
        </div>
      </div>

  );
}