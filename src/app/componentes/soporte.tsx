import { PhoneCall } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function SupportPage() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="relative">
        <div className="h-2 bg-[#800000] shadow-md" />
        <h1 className="text-center text-2xl font-normal py-2">Soporte</h1>
        <div className="h-2 bg-[#800000] shadow-md" />
      </div>
      
      <CardContent className="p-4 space-y-4">
        <div className="bg-gray-100 p-3 rounded-md flex items-center gap-2">
          <PhoneCall className="h-4 w-4" />
          <div className="text-sm">
            <div>970-6767</div>
            <div className="text-gray-600">línea de atención al cliente</div>
          </div>
        </div>

        <Button variant="outline" className="w-full border-gray-300">
          Cancelar Pedido
        </Button>

        <Accordion type="single" collapsible className="w-full space-y-2">
          <AccordionItem value="item-1" className="border-b">
            <AccordionTrigger>Confirmacion de compra</AccordionTrigger>
            <AccordionContent>
              Información sobre la confirmación de su compra.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b">
            <AccordionTrigger>Seguimiento de mi pedido</AccordionTrigger>
            <AccordionContent>
              Detalles sobre el seguimiento de su pedido.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b">
            <AccordionTrigger>Ingrese una dirección incorrecta</AccordionTrigger>
            <AccordionContent>
              Ayuda para corregir una dirección incorrecta.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b">
            <AccordionTrigger>El local se encuentra cerrado</AccordionTrigger>
            <AccordionContent>
              Información sobre locales cerrados.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b">
            <AccordionTrigger>Mi pedido no llego bien</AccordionTrigger>
            <AccordionContent>
              Asistencia para problemas con su pedido.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-b">
            <AccordionTrigger>Cancelación de pedido</AccordionTrigger>
            <AccordionContent>
              Proceso para cancelar su pedido.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-b">
            <AccordionTrigger>Problemas con pagos</AccordionTrigger>
            <AccordionContent>
              Ayuda con problemas de pago.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
