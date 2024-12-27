'use client'

import React, { useState, useEffect } from 'react'
import { pricingData } from '@/lib/database'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Home, Bath, PlusSquare, Ruler, Paintbrush, Lightbulb, Grid, Scissors, Package, DollarSign } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

const iconMap = {
  kitchen: Home,
  bathroom: Bath,
  addition: PlusSquare,
  layout: Grid,
  flooring: Ruler,
  cabinets: Package,
  trim: Scissors,
  lighting: Lightbulb,
  backsplash: Paintbrush,
  paint: Paintbrush,
  materials: Package,
  showerBath: Bath,
  electric: Lightbulb,
  walls: Grid,
  basement: Home,
  siding: Home,
  roof: Home,
}

const RenovationCalculator = () => {
  const [projectType, setProjectType] = useState('kitchen')
  const [size, setSize] = useState('small')
  const [options, setOptions] = useState({})
  const [estimatedCost, setEstimatedCost] = useState([0, 0])

  useEffect(() => {
    calculateCost()
  }, [projectType, size, options])

  const calculateCost = () => {
    const baseRange = pricingData[projectType].sizes[size].range
    const optionsCost = Object.entries(pricingData[projectType].options).reduce((total, [category, value]) => {
      return total + (options[category] ? value[options[category]] : 0)
    }, 0)

    setEstimatedCost([
      baseRange[0] + optionsCost,
      baseRange[1] + optionsCost
    ])
  }

  const handleOptionChange = (category, option) => {
    setOptions(prev => ({
      ...prev,
      [category]: option
    }))
  }

  const handleSubmit = () => {
    toast({
      title: "Renovation Estimate Submitted",
      description: `Your estimated cost range: $${estimatedCost[0].toLocaleString()} - $${estimatedCost[1].toLocaleString()}`,
    })
  }

  const IconComponent = ({ category }) => {
    const Icon = iconMap[category] || Package
    return <Icon className="w-5 h-5 mr-2" />
  }

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto p-4">
      <Card className="flex-grow">
        <CardHeader>
          <CardTitle>Renovation Cost Calculator</CardTitle>
          <CardDescription>Estimate the cost of your renovation project</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <IconComponent category={projectType} />
                Project Type
              </label>
              <Select onValueChange={(value) => setProjectType(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kitchen">Kitchen</SelectItem>
                  <SelectItem value="bathroom">Bathroom</SelectItem>
                  <SelectItem value="addition">Addition</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 mb-1">
                <Ruler className="w-5 h-5 mr-2" />
                Size
              </label>
              <Select onValueChange={(value) => setSize(value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(pricingData[projectType].sizes).map(([key, value]) => (
                    <SelectItem key={key} value={key}>
                      {('name' in value ? value.name : key) + (('sqft' in value) ? ` (${value.sqft} sq ft)` : '')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(pricingData[projectType].options).map(([category, _]) => (
                <div key={category} className="space-y-2">
                  <h3 className="flex items-center text-sm font-medium text-gray-700 capitalize">
                    <IconComponent category={category} />
                    {category}
                  </h3>
                  <RadioGroup
                    onValueChange={(value) => handleOptionChange(category, value)}
                    defaultValue="basic"
                  >
                    {['basic', 'mid', 'high'].map((option) => (
                      <div key={option} className="flex items-center space-x-2">
                        <RadioGroupItem value={option} id={`${category}-${option}`} />
                        <Label htmlFor={`${category}-${option}`}>
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:w-64 md:sticky md:top-4 h-fit self-start">
        <CardHeader>
          <CardTitle className="flex items-center">
            <DollarSign className="w-5 h-5 mr-2" />
            Estimated Cost
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-2xl font-semibold text-gray-900">
            ${estimatedCost[0].toLocaleString()} - ${estimatedCost[1].toLocaleString()}
          </p>
          <Button onClick={handleSubmit} className="w-full">Submit</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default RenovationCalculator

