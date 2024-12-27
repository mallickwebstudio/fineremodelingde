export const pricingData = {
    kitchen: {
      sizes: {
        small: { sqft: 150, range: [40000, 80000] },
        medium: { sqft: 250, range: [60000, 120000] },
        large: { sqft: 360, range: [80000, 150000] },
      },
      options: {
        layout: { basic: 0, mid: 2500, high: 5000 },
        flooring: { basic: 0, mid: 1500, high: 3500 },
        cabinets: { basic: 0, mid: 2500, high: 7500 },
        trim: { basic: 0, mid: 1000, high: 2500 },
        lighting: { basic: 0, mid: 1500, high: 3500 },
        backsplash: { basic: 0, mid: 1000, high: 2500 },
        paint: { basic: 0, mid: 500, high: 1500 },
        materials: { basic: 0, mid: 2500, high: 7500 },
      },
    },
    bathroom: {
      sizes: {
        small: { name: "Hall Bath", range: [25000, 50000] },
        medium: { name: "Master Bath", range: [45000, 120000] },
        large: { name: "Large Master Bath", range: [80000, 150000] },
      },
      options: {
        layout: { basic: 0, mid: 2500, high: 5000 },
        flooring: { basic: 0, mid: 1500, high: 3500 },
        cabinet: { basic: 0, mid: 2500, high: 7500 },
        showerBath: { basic: 0, mid: 2500, high: 7500 },
        electric: { basic: 0, mid: 1500, high: 3500 },
        walls: { basic: 0, mid: 1500, high: 3500 },
        paint: { basic: 0, mid: 500, high: 1500 },
        materials: { basic: 0, mid: 2500, high: 7500 },
      },
    },
    addition: {
      sizes: {
        small: { name: "Small Addition", range: [50000, 100000] },
        medium: { name: "Mid-sized Addition", range: [100000, 200000] },
        large: { name: "Large & Multi-story Addition", range: [200000, 400000] },
      },
      options: {
        layout: { basic: 0, mid: 5000, high: 12500 },
        flooring: { basic: 0, mid: 2500, high: 7500 },
        basement: { basic: 0, mid: 10000, high: 25000 },
        trim: { basic: 0, mid: 2500, high: 7500 },
        electric: { basic: 0, mid: 3500, high: 10000 },
        siding: { basic: 0, mid: 5000, high: 15000 },
        roof: { basic: 0, mid: 3500, high: 10000 },
        paint: { basic: 0, mid: 1500, high: 3500 },
        materials: { basic: 0, mid: 5000, high: 15000 },
      },
    },
  };
  
  