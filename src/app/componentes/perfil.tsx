import { GoBellFill } from "react-icons/go";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import { FaUserPen } from "react-icons/fa6";
import { PiCalendarStarFill } from "react-icons/pi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { BiSolidDiscount } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
export default function Perfil() {
  return (
    <main className="min-h-screen bg-gray-50 w-full max-w-[428px] mx-auto">
      {/* Profile Header */}
      <div className="bg-white p-6 border-b">
        <div className="flex items-center">
          <div className="relative w-24 h-24 mb-3 mr-3">
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
              <FaUser className="w-12 h-12 text-gray-400"/>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-2">Nombre</h1>
            <div className="flex gap-6 justify-center w-full">
                <button className="p-2">
                <FaUserPen className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-2">
                <BiSolidDiscount className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-2">
                <MdOutlineSupportAgent className="w-6 h-6 text-gray-600" />
                </button>
                <button className="p-2">
                <CiCircleInfo className="w-6 h-6 text-gray-600" />
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="mt-4">
        <div className="bg-white">
          <h2 className="px-6 py-3 text-sm font-semibold text-gray-600">Perfil</h2>
          <Link href="/historial"><MenuLink icon={<PiCalendarStarFill className="w-5 h-5" />} text="Historial de Pedidos" /></Link>
          <Link href="/favoritos"><MenuLink icon={<FaHeart className="w-5 h-5" />} text="Favoritos" /></Link>
          <Link href="/"><MenuLink icon={<IoLocationOutline className="w-5 h-5" />} text="Direcciones" /></Link>
          <Link href="/detalleCompra"><MenuLink icon={<BiMoneyWithdraw className="w-5 h-5" />} text="Métodos de Pago" /></Link>
        </div>

        <div className="bg-white mt-4">
          <h2 className="px-6 py-3 text-sm font-semibold text-gray-600">Configuración</h2>
          <Link href="/notificaciones"><MenuLink icon={<GoBellFill className="w-5 h-5" />} text="Notificaciones" /></Link>
        </div>

        <div className="relative ">
            <button className="flex items-center gap-2 text-red-600 font-medium">
            <IoExitOutline className="w-5 h-5" />
            <span>Cerrar Sesión</span>
            </button>
        </div>
      </div>
    </main>
  );
}

function MenuLink({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <button className="flex items-center gap-3 w-full px-6 py-4 hover:bg-gray-50 transition-colors border-t first:border-t-0">
      <span className="text-gray-600">{icon}</span>
      <span className="text-gray-800">{text}</span>
    </button>
  );
}