"use client"
import Image from "next/image"
import { SlArrowLeft } from "react-icons/sl";
import { Check } from 'lucide-react';



import { useState, useEffect, useRef } from "react"




export default function OrderTracker() {
    const [currentStep, setCurrentStep] = useState(0)
  const progressRef = useRef<HTMLDivElement>(null)
  
  const steps = [
    { label: "Preparación", id: 0 },
    { label: "En camino", id: 1 },
    { label: "En destino", id: 2 }
  ]

  const handleStepClick = (stepId: number) => {
    if (stepId <= currentStep + 1) {
      setCurrentStep(stepId)
    }
  }

  useEffect(() => {
    if (progressRef.current) {
      const width = `${(currentStep / (steps.length - 1)) * 100}%`
      progressRef.current.style.width = width
    }
  }, [currentStep, steps.length])

  return (
    <div className=" min-h-screen bg-gray-50 w-full max-w-[428px] mx-auto">
   
        
        <div className="p-6 space-y-6">
          <div className="space-y-4">
          <div className="flex justify-between items-center w-full">
            <button><SlArrowLeft /></button>
            <div className="w-12 h-12 relative mx-auto">
                <Image
                src="/logo.png"
                alt="Restaurant Logo"
                fill
                className="object-contain"
                priority
                />
            </div>
            </div>

          <div className="flex justify-center">
            
      <div className="w-4/5 h-[5px] bg-red-900 rounded"></div>
        </div>
            <h2 className="font-semibold text-lg text-center">Estado del Pedido</h2>
            <div className="relative flex justify-between">
        {/* Dotted Progress Line */}
        <div className="absolute top-6 left-0 right-0 h-1">
          <div className="relative h-full w-full bg-gray-300 rounded" 
               style={{backgroundImage: 'linear-gradient(to right, transparent 50%, #D1D5DB 50%)', backgroundSize: '20px 1px'}} />
          <div 
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-orange-500 rounded transition-all duration-300 ease-in-out"
            style={{backgroundImage: 'linear-gradient(to right, transparent 50%, #F97316 50%)', backgroundSize: '20px 1px'}}
          />
        </div>

        {/* Steps */}
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <button
              onClick={() => handleStepClick(step.id)}
              className={`w-12 h-12 rounded-full flex items-center justify-center border-3 transition-colors duration-300 ${
                step.id <= currentStep
                  ? "bg-orange-500 border-orange-500"
                  : "bg-white border-gray-300"
              }`}
              aria-current={step.id === currentStep ? "step" : undefined}
            >
              {step.id <= currentStep ? (
                <Check className="w-6 h-6 text-white" />
              ) : (
                <span className="text-lg text-gray-500">{step.id + 1}</span>
              )}
            </button>
            <span
              className={`mt-2 text-base transition-colors duration-300 ${
                step.id <= currentStep ? "text-orange-500 font-medium" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
            <p className="text-sm text-center text-gray-600">
              Entrega estimada a las 12:30
            </p>
          </div>
          <div className="flex justify-center">
      <div className="w-4/5 h-[5px] bg-red-900 rounded"></div>
        </div>
          <div className="space-y-4 flex justify-center items-center flex-col w-full">
            <h2 className="font-semibold text-lg">Resumen del Pedido</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-full h-100 bg-gray-100 flex items-center justify-between">
                    <Image 
                src="/pizza.jpg"
                alt="Restaurant Logo"
                width={100}
                height={100}>
                </Image>
                <div className="ml-10">
                <p className="text-sm">1 Margarita</p>
                <p className="text-sm font-semibold">$14.00</p>
                </div>
                  </div> 
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-full h-100 bg-gray-100 flex items-center justify-between">
                    <Image 
                src="/pizza.jpg"
                alt="Restaurant Logo"
                width={100}
                height={100}>
                </Image>
                <div className="ml-10">
                <p className="text-sm">1 Margarita</p>
                <p className="text-sm font-semibold">$14.00</p>
                </div>
                  </div> 
                </div>
              </div>
              <div className="pt-3 border-t">
                <div className="flex justify-end items-center">
                  <span className="font-semibold">Total:</span>
                  <span className="font-semibold">$26.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}

