import { FaHeart } from "react-icons/fa";
import Image from 'next/image'

export default function Menu() {
  return (
    <div className="w-[428px] h-[926px] p-5">
      <h1 className="text-2xl font-bold text-center py-4">Menú</h1>
      
      <div className="bg-gray-200 mb-5 p-2 text-center">
        <span className="text-sm">Personalizar su pedido</span>
      </div>

      <div className="space-y-4">
        <section>
            <div className="flex justify-center">
                <div className="bg-customRed w-1/2 text-white p-2 text-center mb-2 shadow-lg shadow-slate-400 border-black border-2">
                    <h2 className="text-lg font-semibold">Tradicionales</h2>
                </div>
            </div>
          <div className="flex gap-4 justify-between">
            <div className="w-3/5">
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Pepperoni"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="font-semibold">Pepperoni</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Una de las favoritas de todos, con una base de salsa de...
                  </p>
                </div>
                <FaHeart className="h-6 w-6 text-black flex-shrink-0" />
              </div>
            </div>
            <div className="w-3/5">
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Hawaiana"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="font-semibold">Hawaiana</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Una combinación dulce y salada que incluye salsa de...
                  </p>
                </div>
                <FaHeart className="h-6 w-6 text-black flex-shrink-0" />
              </div>
            </div>
          </div>
        </section>

        <section>
            <div className="flex justify-center mt-5">
                <div className="bg-customRed w-1/2 text-white p-2 text-center mb-2 shadow-lg shadow-slate-400 border-black border-2">
                    <h2 className="text-lg font-semibold">Especialidades</h2>
                </div>
            </div>

          <div className="flex gap-4 justify-between">
            <div className="w-3/5">
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Cuatro Quesos"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="font-semibold">Cuatro Quesos</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Una delicia para los amantes del queso, con una
                  </p>
                </div>
                <FaHeart className="h-6 w-6 text-black flex-shrink-0" />
              </div>
            </div>
            <div className="w-3/5">
              <div className="w-full">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="BBQ Pollo"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="font-semibold">BBQ Pollo</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Una deliciosa pizza con base de salsa BBQ, queso...
                  </p>
                </div>
                <FaHeart className="h-6 w-6 text-black flex-shrink-0" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}