import { FaHeart } from "react-icons/fa";
import Image from 'next/image'

export default function Component() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg">
      <h1 className="text-2xl font-bold text-center py-4">Menú</h1>
      
      <div className="bg-gray-200 p-2 text-center">
        <span className="text-sm">Personalizar su pedido</span>
      </div>

      <div className="space-y-4 p-4">
        <section>
          <div className="bg-[#8B0000] text-white p-2 text-center mb-2">
            <h2 className="text-lg font-semibold">Tradicionales</h2>
          </div>
          <div className="grid gap-4">
            <div className="flex gap-4">
              <div className="w-1/3">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Pepperoni"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="w-2/3 flex justify-between">
                <div>
                  <h3 className="font-semibold">Pepperoni</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Una de las favoritas de todos, con una base de salsa de...
                  </p>
                </div>
                <FaHeart className="h-6 w-6 text-gray-400 flex-shrink-0" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/3">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Hawaiana"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="w-2/3 flex justify-between">
                <div>
                  <h3 className="font-semibold">Hawaiana</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Una combinación dulce y salada que incluye salsa de...
                  </p>
                </div>
                <FaHeart className="h-6 w-6 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-[#8B0000] text-white p-2 text-center mb-2">
            <h2 className="text-lg font-semibold">Especialidades</h2>
          </div>
          <div className="grid gap-4">
            <div className="flex gap-4">
              <div className="w-1/3">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Cuatro Quesos"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="w-2/3 flex justify-between">
                <div>
                  <h3 className="font-semibold">Cuatro Quesos</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Una delicia para los amantes del queso, con una mezcla...
                  </p>
                </div>
                <FaHeart  className="h-6 w-6 text-gray-400 flex-shrink-0" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1/3">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="BBQ Pollo"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover bg-gray-200"
                />
              </div>
              <div className="w-2/3 flex justify-between">
                <div>
                  <h3 className="font-semibold">BBQ Pollo</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Una deliciosa pizza con base de salsa BBQ, queso...
                  </p>
                </div>
                <FaHeart className="h-6 w-6 text-gray-400 flex-shrink-0" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}