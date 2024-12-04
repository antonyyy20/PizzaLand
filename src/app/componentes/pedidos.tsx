'use client'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import Link from "next/link"


interface Ingredient {
  id: string
  name: string
  checked: boolean
}


export default function Pedido() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: "pepperoni", name: "Pepperoni", checked: false },
    { id: "pimenton", name: "Pimentón", checked: false },
    { id: "pina", name: "Piña", checked: false },
    { id: "salchicha", name: "Salchicha", checked: false },
    { id: "champinones", name: "Champiñones", checked: false },
    { id: "oregano", name: "Orégano", checked: false },
    { id: "jamon", name: "Jamón", checked: false },
    { id: "cebolla", name: "Cebolla", checked: false },
    { id: "albahaca", name: "Albahaca", checked: false },
    { id: "pollo", name: "Pollo", checked: false },
    { id: "aceitunas", name: "Aceitunas", checked: false },
    { id: "jalapenos", name: "Jalapeños", checked: false },
    { id: "carne-molida", name: "Carne Molida", checked: false },
    { id: "tomate", name: "Tomate", checked: false },
    { id: "anchoas", name: "Anchoas", checked: false },
    { id: "tocino", name: "Tocino", checked: false },
    { id: "ajo", name: "Ajo", checked: false },
    { id: "espinaca", name: "Espinaca", checked: false },
  ])

  const toggleIngredient = (id: string) => {
    setIngredients(ingredients.map(ing => 
      ing.id === id ? { ...ing, checked: !ing.checked } : ing
    ))
  }
  return (
    <Card className="w-[428px] h-[700] mb-5">
      <CardHeader>
        <CardTitle className="text-xl">Personalización del Pedido</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Base Selection */}
        <div className="space-y-4">
          <h3 className="font-semibold">Selección de Base</h3>
          <div className="w-full h-1 bg-red-900 my-5"></div>
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
                  <RadioGroupItem value="grande" id="grande" />
                  <Label htmlFor="mediana">Grande 14 pulgadas</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="familiar" id="familiar" />
                  <Label htmlFor="familiar">Familiar 18 pulgadas</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>

        

        {/* Sauce Selection */}
        <div className="space-y-4">
          <h3 className="font-semibold">Selección de Salsa</h3>
          <div className="w-full h-1 bg-red-900 my-5"></div>
          <div className="grid grid-cols-2 gap-6">
              
            <div className="space-y-4">
              <Label className="font-medium">Salsa</Label>
              <RadioGroup defaultValue="clasica">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="clasica" id="clasica" />
                  <Label htmlFor="clasica">Salsa de Tomate</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="integral" id="integral" />
                  <Label htmlFor="integral">Salsa Blanca</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sin-gluten" id="sin-gluten" />
                  <Label htmlFor="sin-gluten">Pesto</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="sin-gluten" id="sin-gluten" />
                  <Label htmlFor="sin-gluten">Salsa BBQ</Label>
                </div>
              </RadioGroup>
            </div>
  
            <div className="space-y-4">
              <Label className="font-medium">Salsas Extra</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="ranch" />
                  <Label htmlFor="ranch">Pesto</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ajo-parmesano" />
                  <Label htmlFor="ajo-parmesano">Salsa Blanca</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="barbacoa" />
                  <Label htmlFor="barbacoa">Ajo Parmesano</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chili-honey" />
                  <Label htmlFor="chili-honey">Salsa de la casa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chili-honey" />
                  <Label htmlFor="chili-honey">Ranch</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chili-honey" />
                  <Label htmlFor="chili-honey">Picante</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chili-honey" />
                  <Label htmlFor="chili-honey">Barbacoa</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="chili-honey" />
                  <Label htmlFor="chili-honey">Chili Honey</Label>
                </div>
              </div>
            </div>

            </div>

          </div>

        {/* Cheese Selection */}
        <div className="space-y-4">
          <h3 className="font-semibold">Selección de Queso</h3>
          <div className="w-full h-1 bg-red-900 my-5"></div>
          <p>Queso</p>
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
        <div className="max-w-md mx-auto p-6 space-y-8 ">
      <div className="space-y-4">
        <h2 className="text-xl font-bold border-b pb-2">Selección de Ingredientes</h2>
        <div className="grid grid-cols-3 gap-4">
          {ingredients.map((ingredient) => (
            <div key={ingredient.id} className="flex items-center space-x-2">
              <Checkbox 
                id={ingredient.id}
                checked={ingredient.checked}
                onCheckedChange={() => toggleIngredient(ingredient.id)}
              />
              <label
                htmlFor={ingredient.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {ingredient.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold border-b pb-2">Visualización del Pedido</h2>
        <div className="aspect-square bg-gray-100 rounded-lg"></div>
      </div>
     
      <Button 
        className="w-full bg-[#8B0000] hover:bg-[#660000]"
        onClick={() => console.log('Selected ingredients:', ingredients.filter(ing => ing.checked))}
      >  <Link href="/carrito">Ir al carrito</Link>
       
      </Button>
     
    </div>
      </CardContent>
    </Card>
  )
}