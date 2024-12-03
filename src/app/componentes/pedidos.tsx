import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">Personalización del Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Base Selection */}
        <div className="space-y-4">
          <h3 className="font-semibold">Selección de Base</h3>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-4">
              <Label className="font-medium">Masa</Label>
              <RadioGroup defaultValue="tradicional">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tradicional" id="tradicional" />
                  <Label htmlFor="tradicional">Tradicional</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="delgada" id="delgada" />
                  <Label htmlFor="delgada">Delgada</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="borde-queso" id="borde-queso" />
                  <Label htmlFor="borde-queso">Borde de Queso</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="font-medium">Tipo de Masa</Label>
              <RadioGroup defaultValue="clasica">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="clasica" id="clasica" />
                  <Label htmlFor="clasica">Clásica</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="integral" id="integral" />
                  <Label htmlFor="integral">Integral</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sin-gluten" id="sin-gluten" />
                  <Label htmlFor="sin-gluten">Sin gluten</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <Label className="font-medium">Tamaños</Label>
              <RadioGroup defaultValue="personal">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="personal" id="personal" />
                  <Label htmlFor="personal">Personal 10 pulgadas</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mediana" id="mediana" />
                  <Label htmlFor="mediana">Mediana 12 pulgadas</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="familiar" id="familiar" />
                  <Label htmlFor="familiar">Familiar 18 pulgadas</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        <Separator />

        {/* Sauce Selection */}
        <div className="space-y-4">
          <h3 className="font-semibold">Selección de Salsa</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label className="font-medium">Salsa</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="salsa-tomate" />
                  <Label htmlFor="salsa-tomate">Salsa de Tomate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="salsa-blanca" />
                  <Label htmlFor="salsa-blanca">Salsa Blanca</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pesto" />
                  <Label htmlFor="pesto">Pesto</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="salsa-bbq" />
                  <Label htmlFor="salsa-bbq">Salsa BBQ</Label>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Label className="font-medium">Salsas Extra</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ranch" />
                  <Label htmlFor="ranch">Ranch</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ajo-parmesano" />
                  <Label htmlFor="ajo-parmesano">Ajo Parmesano</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="barbacoa" />
                  <Label htmlFor="barbacoa">Barbacoa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chili-honey" />
                  <Label htmlFor="chili-honey">Chili Honey</Label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Cheese Selection */}
        <div className="space-y-4">
          <h3 className="font-semibold">Selección de Queso</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="mozzarella" />
              <Label htmlFor="mozzarella">Mozzarella</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ricotta" />
              <Label htmlFor="ricotta">Ricotta</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="provolone" />
              <Label htmlFor="provolone">Provolone</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="queso-parmesano" />
              <Label htmlFor="queso-parmesano">Queso Parmesano</Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}