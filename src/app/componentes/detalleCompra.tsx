import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CreditCard, User, Clock, MapPin, Terminal, Banknote, Tag } from 'lucide-react'
import Link from "next/link"

export default function DeliveryDetails() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6 mb-14">
      {/* Delivery Details Section */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Detalles De La Entrega</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <User className="w-5 h-5" />
            <span className="text-sm">Drivercool Carol Meza, An Ricardo J. Alvarez</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Delivery: 0 minutes</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">En la puerta, door: Serv 500-A</span>
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg">Métodos De Pagos</h2>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start gap-2">
            <CreditCard className="w-5 h-5" />
           <Link href="/seleccionarTargeta">Tarjeta De Crédito o Débito</Link> 
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <Terminal className="w-5 h-5" />
            POS
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <Banknote className="w-5 h-5" />
            Efectivo
          </Button>
          <div className="flex gap-2">
            <Input placeholder="Ingresar Código de Descuento" className="flex-1" />
            <Button variant="outline" className="shrink-0">
              <Tag className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <Card className="p-4 space-y-3">
        <h2 className="font-semibold text-lg">Resumen</h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Productos:</span>
            <span>$15.00</span>
          </div>
          <div className="flex justify-between">
            <span>Servicio:</span>
            <span>$0.50</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery:</span>
            <span>$1.00</span>
          </div>
          <div className="flex justify-between font-semibold pt-2 border-t">
            <span>Total:</span>
            <span>$16.50</span>
          </div>
        </div>
      </Card>

      {/* Pay Button */}
      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
        Pagar
      </Button>
    </div>
  )
}

