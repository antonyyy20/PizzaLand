'use client';
import { FaTrash } from "react-icons/fa";

export default function SelectTarjeta(){
    return(
        <div className="p-4 w-[428px] h-[926px] ">
        <h1 className="text-2xl font-semibold text-center mb-6">
          Seleccionar Tarjeta
        </h1>

        {/* Card List */}
        <div className="space-y-4">
            <div className="bg-customGreen text-white p-6 rounded-3xl relative">
                <div className="flex justify-between items-center">
                {/* Contenedor del texto */}
                    <div className="space-y-2">
                        <p className="text-sm">Nombre de la Tarjeta</p>
                        <p className="text-lg font-medium">... ... ... XXXX</p>
                        <p className="text-sm">XX/XX</p>
                        <p className="text-sm mt-2">% de Descuento</p>
                    </div>
                
                {/* Icono de basura */}
                    <FaTrash className="w-5 h-5 text-white/80 hover:text-white cursor-pointer self-center" />
                </div>
            </div>
        </div>


        {/* Add Card Button */}
        <button className="w-full bg-[#0B3B2D] text-white py-3 rounded-lg mt-6 hover:bg-[#0d4836] transition-colors">
          Agregar Tarjeta
        </button>
      </div>
    )
}