'use client'

import React, { useState, useEffect } from 'react'
import { pricingData } from './utils/pricingData'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Home, Bath, PlusSquare, Ruler, Paintbrush, Lightbulb, Grid, Scissors, Package, DollarSign, Boxes, Check, CheckCheck, Grid2X2 } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { cn, formatData } from '@/lib/utils'

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
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [missingFields, setMissingFields] = useState([])

    useEffect(() => {
        calculateCost()
    }, [projectType, size, options])

    const calculateCost = () => {
        const baseRange = pricingData[projectType].sizes[size].range
        const optionsCost = Object.entries(pricingData[projectType].options).reduce((total, [category, value]) => {
            return total + (options[category] ? value[options[category]].cost : 0)
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

    const handleSubmit = async () => {
        try {
            const missingField = Object.keys(pricingData[projectType].options).filter(
                category => !options[category]
            )
            if (missingField.length > 0) {
                setMissingFields(missingField)
                setIsDialogOpen(true)
            } else {
                const data = {
                    "1519457583": projectType,
                    "746580922": size,
                    "960018383": options.layout || "",
                    "1898619684": options.flooring || "",
                    "329540966": options.cabinets || "",
                    "1227528326": options.trim || "",
                    "253005119": options.lighting || "",
                    "1938143290": options.backsplash || "",
                    "633690128": options.paint || "",
                    "1107018877": options.materials || "",
                };

                await fetch(process.env.NEXT_PUBLIC_RENOVATION_CALCULATOR_FORM_API, {
                    method: "POST",
                    body: await formatData(data),
                    mode: "no-cors",
                });

                toast({
                    title: "Renovation Estimate Submitted",
                    description: `Your estimated cost range: $${estimatedCost[0].toLocaleString()} - $${estimatedCost[1].toLocaleString()}`,
                })
            }
        } catch (error) {
            console.error("Error:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "We couldn't process your request. Please try again later.",
            });
        }
    }

    const IconComponent = ({ category }) => {
        const Icon = iconMap[category] || Package
        return <Icon className="w-5 h-5 mr-2 shrink-0" />
    }

    const RadioCard = ({ value, label, icon: Icon, onChange, checked }) => (
        <div className="flex-1">
            <RadioGroupItem
                value={value}
                id={value}
                className="peer sr-only"
                checked={checked}
                onChange={onChange}
            />
            <Label
                htmlFor={value}
                className={`flex items-center justify-start p-4 border-2 rounded-lg cursor-pointer transition-all select-none ${checked ? 'border-primary' : 'border-gray-200 hover:border-gray-300'
                    }`}
            >
                <Icon className="w-6 h-6 mr-3 shrink-0" />
                <span className="font-medium">{label}</span>
            </Label>
        </div>
    )

    return (
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl mx-auto p-4">
            <Card className="flex-grow">
                <CardHeader>
                    <CardTitle className="h2 mb-sm">Renovation Cost Calculator</CardTitle>
                    <CardDescription className="md:text-center">Estimate the cost of your renovation project</CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="space-y-6">
                        {/* Project Type */}
                        <div>
                            <h3 className="h6 font-medium mb-xs flex items-center">
                                <span><Boxes className='shrink-0 mr-2 size-lg inline' /></span>
                                <span>Project Type</span>
                            </h3>
                            <RadioGroup
                                value={projectType}
                                onValueChange={setProjectType}
                                className="flex flex-col gap-2 sm:flex-row"
                            >
                                <RadioCard className="shrink-0" value="kitchen" label="Kitchen" icon={Home} checked={projectType === 'kitchen'} />
                                <RadioCard className="shrink-0" value="bathroom" label="Bathroom" icon={Bath} checked={projectType === 'bathroom'} />
                                <RadioCard className="shrink-0" value="addition" label="Addition" icon={PlusSquare} checked={projectType === 'addition'} />
                            </RadioGroup>
                        </div>

                        {/* Size */}
                        <div>
                            <h3 className="h6 font-medium mb-xs flex items-center">
                                <span><Ruler className='shrink-0 mr-2 size-lg inline' /></span>
                                <span>Size</span>
                            </h3>
                            <RadioGroup
                                value={size}
                                onValueChange={setSize}
                                className="flex flex-col gap-2 sm:flex-row"
                            >
                                {Object.entries(pricingData[projectType].sizes).map(([key, value]) => (
                                    <RadioCard
                                        key={key}
                                        value={key}
                                        label={('name' in value ? value.name : key) + (('description' in value) ? ` - ${value.description}` : '')}
                                        icon={Grid2X2}
                                        checked={size === key}
                                    />
                                ))}
                            </RadioGroup>
                        </div>

                        {/* Other List Grid */}
                        <div className="grid grid-cols-2 gap-2xl">
                            {Object.entries(pricingData[projectType].options).map(([category, optionValues]) => (
                                <div key={category}>
                                    <h3 className="h6 font-medium mb-xs flex items-center capitalize">
                                        <IconComponent category={category} />
                                        {category}
                                    </h3>
                                    <RadioGroup
                                        value={options[category] || ''}
                                        onValueChange={(value) => handleOptionChange(category, value)}
                                    >
                                        {Object.entries(optionValues).map(([option, { perk }]) => (
                                            <div key={option} className="flex items-center space-x-2">
                                                <RadioGroupItem value={option} id={`${category}-${option}`} />
                                                <Label
                                                    htmlFor={`${category}-${option}`}
                                                    className={cn("capitalize cursor-pointer", options[category] && options[category] !== option ? 'text-muted-foreground' : '')}
                                                >
                                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                                </Label>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    {options[category] && (
                                        <div className="mt-1 text-xs text-muted-foreground">
                                            <CheckCheck className='mr-1 inline shrink-0 size-base text-green-600' /> {optionValues[options[category]].perk}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="md:w-64 md:sticky md:top-4 h-fit self-start">
                <CardHeader>
                    <CardTitle className="flex items-center whitespace-nowrap">
                        <DollarSign className="w-5 h-5 mr-2 shrink-0" strokeWidth={3} />
                        Estimated Cost
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 whitespace-nowrap">
                    <p className="text-xl font-semibold text-muted-foreground">
                        ${estimatedCost[0].toLocaleString()} - ${estimatedCost[1].toLocaleString()}
                    </p>
                    <Button onClick={handleSubmit} className="w-full">Submit</Button>
                </CardContent>
            </Card>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Missing Selections</DialogTitle>
                        <DialogDescription>
                            Please select options for the following categories:
                        </DialogDescription>
                    </DialogHeader>
                    <ul className="list-disc pl-6">
                        {missingFields.map((field) => (
                            <li key={field} className="capitalize">{field}</li>
                        ))}
                    </ul>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default RenovationCalculator

