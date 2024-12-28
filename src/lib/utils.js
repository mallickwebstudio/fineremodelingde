import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import { Home, Bath, PlusSquare, Ruler, Paintbrush, Lightbulb, Grid, Scissors, Package } from 'lucide-react'

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
