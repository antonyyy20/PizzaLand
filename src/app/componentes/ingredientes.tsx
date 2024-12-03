'use client'

import { useState } from 'react'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

interface Ingredient {
  id: string
  name: string
  checked: boolean
}

export default function Component() {
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
    <div className="max-w-md mx-auto p-6 space-y-8">
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
      >
        Ir al carrito
      </Button>
    </div>
  )
}