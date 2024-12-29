'use client'

import React, { useState, useEffect } from 'react'
import { pricingData } from '@/lib/database'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Home, Bath, PlusSquare, Ruler, Package, DollarSign, Boxes, Grid2X2, UserCheck2Icon, AtSign, Phone, MapPin, Pen } from 'lucide-react'
import { toast } from '@/hooks/use-toast'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { cn, formatData, IconComponent, RadioCard } from '@/lib/utils'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'


const RenovationCalculator = () => {
    const [projectType, setProjectType] = useState('kitchen')
    const [size, setSize] = useState('small')
    const [options, setOptions] = useState({})
    const [estimatedCost, setEstimatedCost] = useState([0, 0])
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [missingFields, setMissingFields] = useState([])
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        mobileNumber: '',
        email: '',
        address: ''
    });

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

    const handleUserInfoChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleOptionChange = (category, option) => {
        setOptions(prev => ({
            ...prev,
            [category]: option
        }))
    }

    const handleSubmit = async () => {
        try {
            // Check for missing user info fields
            const userInfoFields = ['fullName', 'mobileNumber', 'email', 'address'];
            const missingUserInfoFields = userInfoFields.filter(
                (field) => !userInfo[field]
            );

            // Check for missing project options
            const missingOptionFields = Object.keys(pricingData[projectType].options).filter(
                (category) => !options[category]
            );

            if (missingUserInfoFields.length > 0 || missingOptionFields.length > 0) {
                setMissingFields([...missingUserInfoFields, ...missingOptionFields]);
                setIsDialogOpen(true);
            } else {
                const data = {
                    "118261346": userInfo.fullName,
                    "375628807": userInfo.mobileNumber,
                    "1189258044": userInfo.email,
                    "1858428100": userInfo.address,
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

                const response = await fetch(process.env.NEXT_PUBLIC_RENOVATION_CALCULATOR_FORM_API, {
                    method: "POST",
                    body: await formatData(data),
                    mode: "no-cors",
                });

                toast({
                    title: "Renovation Estimate Submitted",
                    description: `Your estimated cost range: $${estimatedCost[0].toLocaleString()} - $${estimatedCost[1].toLocaleString()}`,
                });
            }
        } catch (error) {
            console.error("Error:", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "We couldn't process your request. Please try again later.",
            });
        }
    };




    return (
        <section className='bg-section-secondary' id='renovation-cost-calculator'>
            <div className="section-wrapper">
                <div className="grid gap-xl lg:grid-cols-7">
                    <Card className="lg:col-span-5">
                        <CardHeader>
                            <CardTitle className="h2 mb-sm">Renovation Cost Calculator</CardTitle>
                            <CardDescription className="md:text-center">Estimate the cost of your renovation project</CardDescription>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-6">
                                {/* User Info */}
                                <div>
                                    <h3 className="h6 font-medium mb-xs flex items-center text-primary">
                                        <span><UserCheck2Icon className='shrink-0 mr-2 size-lg inline' /></span>
                                        <span>User Info</span>
                                    </h3>
                                    <div className="mt-sm space-y-sm">
                                        <div className="flex flex-col md:flex-row gap-base">
                                            <div className="w-full flex-1">
                                                <Label>
                                                    <span className='mb-2 flex items-center gap-2'>
                                                        <Pen className='size-base shrink-0' />
                                                        Full Name
                                                    </span>
                                                    <Input
                                                        type="text"
                                                        name="fullName"
                                                        placeholder="John Doe"
                                                        value={userInfo.fullName}
                                                        onChange={handleUserInfoChange}
                                                        required
                                                    />
                                                </Label>
                                            </div>
                                            <div className="w-full flex-1">
                                                <Label>
                                                    <span className='mb-2 flex items-center gap-2'>
                                                        <Phone className='size-base shrink-0' />
                                                        Mobile Number
                                                    </span>
                                                    <Input
                                                        type="number"
                                                        name="mobileNumber"
                                                        placeholder="+1 123456789"
                                                        value={userInfo.mobileNumber}
                                                        onChange={handleUserInfoChange}
                                                        required
                                                    />
                                                </Label>
                                            </div>
                                        </div>

                                        <div className="flex flex-col md:flex-row gap-base">
                                            <div className="w-full flex-1">
                                                <Label>
                                                    <span className='mb-2 flex items-center gap-2'>
                                                        <AtSign className='size-base shrink-0' />
                                                        Email
                                                    </span>
                                                    <Input
                                                        type="mail"
                                                        name="email"
                                                        placeholder="john@mail.com"
                                                        value={userInfo.email}
                                                        onChange={handleUserInfoChange}
                                                        required
                                                    />
                                                </Label>
                                            </div>
                                            <div className="w-full flex-1">
                                                <Label>
                                                    <span className='mb-2 flex items-center gap-2'>
                                                        <MapPin className='size-base shrink-0' />
                                                        Address
                                                    </span>
                                                    <Textarea
                                                        name="address"
                                                        placeholder="Northern Delaware..."
                                                        value={userInfo.address}
                                                        onChange={handleUserInfoChange}
                                                        required
                                                    />
                                                </Label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Project Type */}
                                <div>
                                    <h3 className="h6 font-medium mb-xs flex items-center text-primary">
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
                                    <h3 className="h6 font-medium mb-xs flex items-center text-primary">
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
                                            <h3 className="h6 font-medium mb-xs flex items-center capitalize text-primary">
                                                <IconComponent category={category} />
                                                {category}
                                            </h3>
                                            <RadioGroup
                                                value={options[category] || ''}
                                                onValueChange={(value) => handleOptionChange(category, value)}
                                            >
                                                {Object.entries(optionValues).map(([option, { perk }]) => (
                                                    <div key={option} className="first:pt-0 py-1 flex items-start gap-xs">
                                                        <RadioGroupItem value={option} id={`${category}-${option}`} />
                                                        <Label
                                                            htmlFor={`${category}-${option}`}
                                                            className={cn("capitalize cursor-pointer", options[category] && options[category] !== option ? 'text-muted-foreground' : '')}
                                                        >
                                                            <span className='block'>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
                                                            <span className='block font-normal text-muted-foreground'>{perk}</span>

                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                            {/* {options[category] && (
                                                <div className="mt-1 text-xs text-muted-foreground">
                                                    <CheckCheck className='mr-1 inline shrink-0 size-base text-green-600' /> {optionValues[options[category]].perk}
                                                </div>
                                            )} */}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="md:sticky md:top-4 h-fit self-start lg:col-span-2">
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
                                    <li key={field} className="capitalize">
                                        {field.replace(/([A-Z])/g, ' $1').toLowerCase()}
                                    </li>
                                ))}
                            </ul>

                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    )
}

export default RenovationCalculator

