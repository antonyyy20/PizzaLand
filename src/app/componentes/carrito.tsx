"use client"
import Image from "next/image";

import { CiDeliveryTruck } from "react-icons/ci";
import { FaWalking } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";



export default function Cart() {
  return (
    <div className="w-[428px] h-[926px] flex p-5 flex-col">
        <div className="flex justify-center">
            <p className="text-xl font-bold">Tu carrito</p>
        </div>

        <div className="flex justify-center">
            <div className="w-34 h-34 bg-stone-500 m-4 p-3 flex items-center justify-center">Delevery <CiDeliveryTruck className="mx-2 text-2xl" /></div>
            <div className="w-34 h-34 bg-stone-500 m-4 p-3 flex items-center justify-center">Retiro <FaWalking className="mx-2 text-2xl" /></div>
        </div>

        <div className="flex">
            <div className="flex w-full">
                <div className="w-20 h-20">
                    <Image
                        src="https://atsloanestable.com/wp-content/uploads/2023/06/new-york-style-pizza2-500x500.jpg"
                        alt="Pepperoni"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover bg-gray-200"
                    />
                </div>
                <h4>Pizza de peperoni</h4>
            </div>
            <div className="flex justify-end flex-col ">
                <p className="">$6.94</p>
                <div className="bg-stone-500 w-20 h-10 flex items-center justify-center"><FaTrash  className="mx-2"/><p className="mx-2">1</p><FaPlusCircle className="mx-2" /></div>
            </div>
        </div>

        <div className="w-full h-1 bg-red-900 my-5"></div>

        <div className="flex justify-between my-5">
            <div className="w-[30%] relative">
                <div className="relative h-32 w-full">
                    <Image
                    src="https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2023/04/mini-pizza-sin-levadura.jpg"
                    alt="Pepperoni"
                    width={100}
                    height={100}
                    className="w-full h-full object-cover bg-gray-200"
                    />
                    <FaPlusCircle className="absolute top-2 right-2 text-black text-2xl cursor-pointer" />
                </div>
                <p className="text-center">$5.87</p>
            </div>
            <div className="w-[30%]">
                <div className="relative h-32 w-full">
                    <Image
                        src="https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
                        alt="Pepperoni"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover bg-gray-200"
                        />
                    <FaPlusCircle className="absolute top-2 right-2 text-black text-2xl cursor-pointer" />
                </div>
                <p className="text-center">$5.27</p>
            </div>
            <div className="w-[30%]">
            <div className="relative h-32 w-full">
                    <Image
                        src="https://media.traveler.es/photos/65c20015883b22299000d684/16:9/w_1952,h_1098,c_limit/Fratelli%20Figurato_Andavo%20a%2010%20all'ora_5.jpg"
                        alt="Pepperoni"
                        width={100}
                        height={100}
                        className="w-full h-full object-cover bg-gray-200"
                        />
                    <FaPlusCircle className="absolute top-2 right-2 text-black text-2xl cursor-pointer" />
                </div>
                <p className="text-center">$8.37</p>
            </div>
        </div>

        <div className="w-full h-1 bg-red-900 my-5"></div>

        <div className="flex flex-col">
            <p>RESUMEN</p>
            <div className="w-full h-full">
                <div className="flex justify-between my-2">
                    <p className="">Productos</p>
                    <p>$6.94</p>
                </div>
                <div className="flex justify-between my-2">
                    <p className="" >Envio</p>
                    <p>$1.25</p>
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
            <p>$8.19</p>
        </div>
        <div className="w-full h-1 bg-red-900 my-5"></div>
        <div className="flex justify-center">
            <button className="btn btn-active rounded-none bg-customRed p-3 w-2/5 text-white ">Ir a pagar</button>
        </div>
    </div>
  );
}