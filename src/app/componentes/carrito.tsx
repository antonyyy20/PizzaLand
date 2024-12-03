"use client"

import { CiDeliveryTruck } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";



export default function Cart() {
  return (
    <div className="w-[428px] h-[926px] flex p-5 flex-col">

        <div className="flex justify-center">
            <div className="w-34 h-34 bg-stone-500 m-4 p-3 flex items-center justify-center">Delevery <CiDeliveryTruck className="mx-2 text-2xl" /></div>
            <div className="w-34 h-34 bg-stone-500 m-4 p-3 flex items-center justify-center">Retiro <FaWalking className="mx-2 text-2xl" /></div>
        </div>

        <div className="flex">
            <div className="flex w-full">
                <div className="w-20 h-20 bg-stone-500 mx-2" ></div>
                <h4>Pizza de peperoni</h4>
            </div>
            <div className="flex justify-end flex-col ">
                <p className="">$0.00</p>
                <div className="bg-stone-500 w-20 h-10 flex items-center justify-center"><FaTrash  className="mx-2"/><p className="mx-2">1</p><FaPlusCircle className="mx-2" /></div>
            </div>
        </div>

        <div className="w-full h-1 bg-red-900 my-5"></div>

        <div className="flex justify-between my-5">
            <div className="w-[30%]">
                <div className="w-full h-20 bg-stone-500 flex justify-end"><FaPlusCircle className="m-2" /></div>
                <p className="text-center">$0.00</p>
            </div>
            <div className="w-[30%]">
                <div className="w-full h-20 bg-stone-500 flex justify-end"><FaPlusCircle className="m-2" /></div>
                <p className="text-center">$0.00</p>
            </div>
            <div className="w-[30%]">
                <div className="w-full h-20 bg-stone-500 flex justify-end"><FaPlusCircle className="m-2" /></div>
                <p className="text-center">$0.00</p>
            </div>
        </div>

        <div className="w-full h-1 bg-red-900 my-5"></div>

        <div className="flex flex-col">
            <p>RESUMEN</p>
            <div className="w-full h-full">
                <div className="flex justify-between my-2">
                    <p className="">Productos</p>
                    <p>$0.00</p>
                </div>
                <div className="flex justify-between my-2">
                    <p className="" >Envio</p>
                    <p>$0.00</p>
                </div>
                <div className="flex justify-between my-2">
                    <p className="">Resumen de descuentos</p>
                    <p>$0.00</p>
                </div>
            </div>
        </div>

        <div className="w-full h-1 bg-red-900 my-5"></div>

        <div className="flex justify-between w-full">
            <p>Total</p>
            <p>$0.00</p>
        </div>
        <div className="w-full h-1 bg-red-900 my-5"></div>
        <div className="flex justify-center">
            <button className="btn btn-active rounded-none bg-stone-500 p-3 w-2/5 ">Ir a pagar</button>
        </div>
    </div>
  );
}