"use client";

import { CiClock2 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

export default function Support() {
  return (
    <section className="px-4 py-6 space-y-4 mb-52">
      <h2 className="section-title">Soporte</h2>
      
      {/* Delivery Time */}
      <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
        <CiClock2 className="w-6 h-6 text-[rgb(123,21,5)]" />
        <div>
          <p className="text-sm font-medium">30 min</p>
          <p className="text-xs text-gray-600">tiempo estimado de entrega</p>
        </div>
      </div>
      
      {/* Customer Service */}
      <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
        <FiPhone className="w-6 h-6 text-[rgb(123,21,5)]" />
        <div>
          <p className="text-sm font-medium">270-6767</p>
          <p className="text-xs text-gray-600">linea deatención al cliente</p>
        </div>
      </div>
      
      {/* Cancel Order Button */}
      <button 
        className="w-full border-2 border-[rgb(123,21,5)] text-[rgb(123,21,5)] hover:bg-[rgb(123,21,5)] hover:text-white">
        Cancelar Pedido
      </button>

      <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow border-b-2 border-solid border-black rounded-none">
    <input type="radio" name="my-accordion-4" defaultChecked />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content border-2 border-b-0 border-black">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow border-b-2 border-solid border-black rounded-none">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content border-2 border-b-0 border-black">
      <p>hello</p>
    </div>
  </div>
  <div className="collapse collapse-arrow   border-b-2 border-solid border-black rounded-none">
    <input type="radio" name="my-accordion-4" />
    <div className="collapse-title text-xl font-medium">Click to open this one and close others</div>
    <div className="collapse-content border-2 border-b-0 border-black">
      <p>hello</p>
    </div>
  </div>
</div>
  
    
    </section>
  );
}