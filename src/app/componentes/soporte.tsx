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
    <Card className="pt-5 w-full max-w-md mx-auto">
      <div className="relative">
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
              Recibirás una confirmación de compra por correo y en la app. Si no la ves, contacta al Call Center (270-6768) para asistencia.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-b">
            <AccordionTrigger>Seguimiento de mi pedido</AccordionTrigger>
            <AccordionContent>
            Desde el Menú, Mis Pedidos, seleccionando la opción Pedidos en Curso, puedes seguir en tiempo real el estado del mismo, o también hacer clic en el link que figura en el email de confirmación de pedido recibido.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-b">
            <AccordionTrigger>Ingrese una dirección incorrecta</AccordionTrigger>
            <AccordionContent>
            Cancela tu pedido rápidamente desde el botón Cancelar pedido en la pantalla de confirmación.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-b">
            <AccordionTrigger>El local se encuentra cerrado</AccordionTrigger>
            <AccordionContent>
            Si el restaurante elegido estaba cerrado, llama al Call Center (270-6768) para recibir una solución personalizada.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="border-b">
            <AccordionTrigger>Mi pedido no llego bien</AccordionTrigger>
            <AccordionContent>
            Llama al Call Center (270-6768) si tu pedido llegó frío, incompleto o tuviste algún inconveniente.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="border-b">
            <AccordionTrigger>Cancelación de pedido</AccordionTrigger>
            <AccordionContent>
            Si el pedido no fue preparado, cancélalo desde el botón Cancelar pedido. Si ya está en proceso, llama al Call Center (270-6768).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="border-b">
            <AccordionTrigger>Problemas con pagos</AccordionTrigger>
            <AccordionContent>
              Si tienes problemas con el pago:
              Revisa que tu tarjeta tenga fondos y los datos sean correctos.
              Prueba otro método de pago si el problema continúa.
              Si persiste, llama al Call Center (270-6768) para ayuda personalizada.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
