"use client"

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { useState } from "react"
import { ChevronDown, ChevronLeft, Heart, Star } from 'lucide-react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

interface Product {
  id: number
  name: string
  price: number
  image: string
  isFavorite: boolean
  rating: number
  description: string
  ingredients: string[]
}

export default function FavoritesPage() {
  const [openItem, setOpenItem] = useState<number | null>(null)
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Pizza Familiar",
      price: 229.50,
      image: "/placeholder.svg?height=200&width=200",
      isFavorite: true,
      rating: 5,
      description: "Nuestra pizza familiar perfecta para compartir",
      ingredients: ["Queso", "Salsa de tomate", "Pepperoni", "Champiñones", "Pimiento"]
    },
    {
      id: 2,
      name: "Pizza Pollo BBQ",
      price: 189.50,
      image: "/placeholder.svg?height=200&width=200",
      isFavorite: true,
      rating: 4,
      description: "Deliciosa pizza con pollo y salsa BBQ",
      ingredients: ["Pollo", "Salsa BBQ", "Queso", "Cebolla", "Pimiento"]
    },
    {
      id: 3,
      name: "Super Combo",
      price: 299.50,
      image: "/placeholder.svg?height=200&width=200",
      isFavorite: true,
      rating: 5,
      description: "El mejor combo para toda la familia",
      ingredients: ["Pizza grande", "Bebidas", "Complementos", "Postre"]
    }
  ])

  const toggleFavorite = (productId: number) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    ))
  }

  const handleItemClick = (productId: number) => {
    setOpenItem(openItem === productId ? null : productId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-[#8B0000] text-white p-4 flex items-center gap-3">
        <button className="p-1">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-medium">Favoritos</h1>
      </header>

      {/* Content */}
      <div className="p-4">
        {products.length > 0 ? (
          <>
            <p className="text-sm text-gray-600 mb-4">
              En esta sección encontrarás todas las pizzas y productos que agregaste a favoritos
            </p>
            <div className="space-y-4">
              {products.map((product) => (
                <Collapsible 
                  key={product.id} 
                  open={openItem === product.id}
                  onOpenChange={() => handleItemClick(product.id)}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <CollapsibleTrigger className="w-full">
                    <div className="flex items-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-32 h-32 object-cover"
                      />
                      <div className="flex-1 p-4 flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-green-700 font-bold">
                            ${product.price.toFixed(2)}
                          </p>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "w-4 h-4",
                                  i < product.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                )}
                              />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleFavorite(product.id)
                            }}
                            className={cn(
                              "p-2 rounded-full",
                              product.isFavorite ? "text-green-600" : "text-gray-400"
                            )}
                          >
                            <Heart className="w-6 h-6" fill={product.isFavorite ? "currentColor" : "none"} />
                          </div>
                          <ChevronDown className={cn(
                            "w-5 h-5 text-gray-400 transition-transform",
                            openItem === product.id && "transform rotate-180"
                          )} />
                        </div>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="p-4 pt-0 border-t">
                      <p className="text-gray-600 mb-2">{product.description}</p>
                      <h4 className="font-medium mb-1">Ingredientes:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {product.ingredients.map((ingredient, index) => (
                          <li key={index}>{ingredient}</li>
                        ))}
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center pt-12 text-center">
            <div className="w-20 h-20 mb-6">
              <Heart className="w-full h-full text-red-500" fill="currentColor" />
            </div>
            <p className="text-gray-600 max-w-[250px]">
              Aún no tienes productos en favoritos.
              Agrega los productos que más te gusten presionando este icono
            </p>
          </div>
        )}
      </div>
    </div>
  )
}