'use client'
import { SlArrowLeft } from "react-icons/sl";
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

interface OrderDetails {
  id: string
  type: string
  name: string
  rating: number
  date: string
  customer: string
  pizzaType: string
  additionalIngredients: string[]
  quantity: number
  status: string
  paymentMethod: string
  total: number
  address: string
  image: string
}

const orders: OrderDetails[] = [
  {
    id: "1",
    type: "individual",
    name: "Pizza Individual",
    rating: 4.5,
    date: "15 de octubre de 2024, 7:45 PM",
    customer: "Juan Pérez",
    pizzaType: "Pizza Grande de Pepperoni",
    additionalIngredients: ["Extra queso", "champiñones"],
    quantity: 3,
    status: "Entregado",
    paymentMethod: "Tarjeta de crédito",
    total: 14.99,
    address: "Calle 123, Ciudad Panamá",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    id: "2",
    type: "familiar",
    name: "Pizza Familiar",
    rating: 3,
    date: "1 de octubre de 2024, 8:15 PM",
    customer: "Juan Pérez",
    pizzaType: "Pizza Familiar de Cuatro Quesos",
    additionalIngredients: ["Pepperoni", "espinacas"],
    quantity: 2,
    status: "Entregado",
    paymentMethod: "Tarjeta de crédito",
    total: 22.50,
    address: "Calle 456, Ciudad Panamá",
    image: "/placeholder.svg?height=80&width=80"
  },
  {
    id: "3",
    type: "familiar",
    name: "Pizza Familiar",
    rating: 2,
    date: "20 de septiembre de 2024, 6:30 PM",
    customer: "Juan Pérez",
    pizzaType: "Pizza Familiar de Jamón y Piña",
    additionalIngredients: ["Tocino", "extra piña"],
    quantity: 1,
    status: "Entregado",
    paymentMethod: "Efectivo",
    total: 19.99,
    address: "Calle 02, Ciudad Panamá",
    image: "/placeholder.svg?height=80&width=80"
  }
]

export default function OrderHistory() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
           index < Math.floor(rating) 
             ? "text-yellow-400 fill-yellow-400" 
             : index < rating 
               ? "text-yellow-400 fill-yellow-400 opacity-50" 
               : "text-gray-300"
         }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#990000] text-white p-4 mb-8">
          <div className="flex  justify-center items-center gap-2">
          <div className="flex justify-between items-center w-full">
            <button><SlArrowLeft /></button>
            <div className=" relative mx-auto">
            <h1 className="text-2xl font-bold text-center">Historial de Pedidos</h1> 
            </div>
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm text-[#000066] text-left">
          En esta sección podrás ver un resumen de todas las pizzas que has pedido anteriormente. Podrás consultar la fecha y hora en que hiciste cada pedido, los tipos de pizza que seleccionaste, y el estado actual de tu pedido. Además, podrás reordenar fácilmente alguna de tus pizzas favoritas desde aquí.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {orders.map((order) => (
            <AccordionItem
              key={order.id}
              value={order.id}
              className="border-0 rounded-lg overflow-hidden mb-6"
            >
              <AccordionTrigger className="p-4 hover:no-underline [&[data-state=open]>div>div>.chevron]:rotate-180 bg-[#990000] text-white">
                <div className="flex items-center gap-4 w-full">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-24 h-24 rounded object-cover"
                  />
                  <div className="flex-1 text-left">
                    <h3 className="font-bold">{order.name}</h3>
                    <div className="flex gap-1 mt-1">
                      {renderStars(order.rating)}
                    </div>
                  </div>
                  <ChevronDown className="chevron w-5 h-5 transition-transform duration-200" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-3 bg-[#990000] text-white">
                <div className="space-y-2">
                  <p><strong>Fecha del pedido:</strong> {order.date}</p>
                  <p><strong>Cliente:</strong> {order.customer}</p>
                  <p><strong>Tipo de pizza:</strong> {order.pizzaType}</p>
                  <p><strong>Ingredientes adicionales:</strong> {order.additionalIngredients.join(", ")}</p>
                  <p><strong>Cantidad:</strong> {order.quantity} pizza{order.quantity > 1 ? "s" : ""}</p>
                  <p><strong>Estado del pedido:</strong> {order.status}</p>
                  <p><strong>Método de pago:</strong> {order.paymentMethod}</p>
                  <p><strong>Total pagado:</strong> ${order.total}</p>
                  <p><strong>Dirección de entrega:</strong> {order.address}</p>
                  <Button className="mt-4 bg-yellow-300 text-black hover:bg-yellow-400 font-bold text-sm px-2 py-1">
                    Reordenar Pedido
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}