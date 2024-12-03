"use client"
import { useState } from "react";
import Image from "next/image";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";



export default function Cart() {
  
  return (
    <div className="flex justify-center items-center flex-col">

        <div className="flex justify-center items-center">
            <div className="w-34 h-34 bg-slate-400 m-5 p-4 flex items-center justify-center">Delevery <CiDeliveryTruck className="mx-2 text-2xl" /></div>
            <div className="w-34 h-34 bg-slate-400 m-5 p-4 flex items-center justify-center">Retiro <FaWalking className="mx-2 text-2xl" /></div>
        </div>

        <div className="flex items-end justify-center w-40">
            <div className="flex ">
                <div className="w-32 h-40 bg-slate-400 mx-2" ></div>
                <h4>Pizza de peperoni</h4>
            </div>
            <div className="flex flex-col ">
                <p className="">$0.00</p>
                <div className="bg-slate-300 w-20 h-10 flex items-center justify-center"><FaTrash  className="mx-2"/><p className="mx-2">1</p><FaPlusCircle className="mx-2" /></div>
            </div>
        </div>

        <div className="w-full h-1 bg-red-900 my-5"></div>

        <div className="flex justify-center items-center my-10">
            <div className="w-20 h-60 bg-slate-400 m-2 flex justify-end"><FaPlusCircle className="m-2" /></div>
            <div className="w-20 h-60 bg-slate-400 m-2 flex justify-end"><FaPlusCircle className="m-2" /></div>
            <div className="w-20 h-60 bg-slate-400 m-2 flex justify-end"><FaPlusCircle className="m-2" /></div>
        </div>

        <div className="w-full h-1 bg-red-900 my-5"></div>

        <div className="flex items-center mx-10 w-fit h-60 flex-col bg-slate-400">
            <p>RESUMEN</p>
            <div className="items-start w-full h-full m-5">
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

        <div className="flex justify-between bg-slate-300 w-64">
            <p>Total</p>
            <p>$0.00</p>
        </div>
        <div className="w-full h-1 bg-red-900 my-5"></div>
        <button className="btn btn-active rounded-none mb-20">Ir a pagar</button>
    </div>
  );
}