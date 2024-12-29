import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { Home, Bath, PlusSquare, Ruler, Paintbrush, Lightbulb, Grid, Scissors, Package } from 'lucide-react'
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export async function formatData(data) {
  const formattedData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    const transformedKey = `entry.${key}`;
    formattedData.append(transformedKey, value);
  });

  return formattedData;
}


export const IconComponent = ({ category, className }) => {
  const Icon = iconMap[category] || Package
  return <Icon className={cn("mr-2 size-5 shrink-0", className)} />
}


export const RadioCard = ({ value, label, icon: Icon, onChange, checked }) => (
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