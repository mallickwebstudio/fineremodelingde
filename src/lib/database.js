
export const pricingData = {
  kitchen: {
    include: "Visuals, Project development, Cost of work, Material budgets",
    exclude: "Relocating mechanics within walls/ceiling, uncovered damage, specialty tasks or materials",
    sizes: {
      small: {
        sqft: 150,
        range: [40000, 80000],
        description: "<150 sq. ft (12x12)"
      },
      medium: {
        sqft: 250,
        range: [60000, 120000],
        description: "250 sq. ft (14x18), May include: small island, coffee bar, pantry, or eating area"
      },
      large: {
        sqft: 360,
        range: [80000, 150000],
        description: "360 sq. ft (18x20), Multiple & larger: island, coffee bar, pantry, eating area"
      },
    },
    options: {
      layout: {
        basic: {
          cost: 0,
          perk: "Use Existing Layout"
        },
        mid: {
          cost: 2500,
          perk: "Move cabinets/appliances"
        },
        high: {
          cost: 5000,
          perk: "Move walls, windows cabinets, and/or appliances"
        },
      },
      flooring: {
        basic: {
          cost: 0,
          perk: "Existing Flooring to Remain"
        },
        mid: {
          cost: 1500,
          perk: "overlay/replace w/ LVP or LVT, refinish wood"
        },
        high: {
          cost: 3500,
          perk: "Tile or real wood"
        },
      },
      cabinets: {
        basic: {
          cost: 0,
          perk: "30\" uppers"
        },
        mid: {
          cost: 2500,
          perk: "36\" uppers and accessories"
        },
        high: {
          cost: 7500,
          perk: "to the ceiling, accessories, decorative panels, appliance panels"
        },
      },
      trim: {
        basic: {
          cost: 0,
          perk: "baseboard, window & door casing"
        },
        mid: {
          cost: 1000,
          perk: "add features (crown, chair rail)"
        },
        high: {
          cost: 2500,
          perk: "multi feature (Wainscot, multi-profile details)"
        },
      },
      lighting: {
        basic: {
          cost: 0,
          perk: "no changes"
        },
        mid: {
          cost: 1500,
          perk: "flush LED in strategic places"
        },
        high: {
          cost: 3500,
          perk: "Ceiling lighting, under cabinet lighting, task lighting"
        },
      },
      backsplash: {
        basic: {
          cost: 0,
          perk: "countertop material 4\" backsplash"
        },
        mid: {
          cost: 1000,
          perk: "18\" tile ceramic backsplash"
        },
        high: {
          cost: 2500,
          perk: "more decorative tiles and designs, around a window, up a wall, real stone"
        },
      },
      paint: {

        basic: {
          cost: 0,
          perk: "repair and paint where needed"
        },
        mid: {
          cost: 500,
          perk: "replace/skim coat walls for fresh texture"
        },
        high: {
          cost: 1500,
          perk: "Finish with accents, wall paper, glossy sheen finishes"
        },
      },
      materials: {

        basic: {
          cost: 0,
          perk: "stainless steel, standard size, gooseneck faucet, pendants, granite"
        },
        mid: {
          cost: 2500,
          perk: "chimney hood, higher budgets, pretty light fixtures, quartz"
        },
        high: {
          cost: 7500,
          perk: "panel ready appliances, more features, higher budgets, pretty lights, exotic stone tops"
        },
      },
    },
  },

  bathroom: {
    include: "Visuals, Project development, Cost of work, Material budgets",
    exclude: "Relocating mechanics within walls/ceiling, uncovered damage, specialty tasks or materials",
    sizes: {
      small: {
        name: "Typical Hall Bath",
        range: [25000, 50000],
        description: "5′ X 8′, 3 piece bathroom"
      },
      medium: {
        name: "Master Bath",
        range: [45000, 120000],
        description: "3-4 piece bathroom"
      },
      large: {
        name: "Large Master Bath",
        range: [80000, 150000],
        description: "4 piece bathroom w/ closet"
      },
    },
    options: {
      layout: {
        basic: {
          cost: 0,
          perk: "Use Existing Layout"
        },
        mid: {
          cost: 2500,
          perk: "Move plumbing fixtures"
        },
        high: {
          cost: 5000,
          perk: "Move walls, windows, fixtures"
        },
      },
      flooring: {

        basic: {
          cost: 0,
          perk: "LVT"
        },
        mid: {
          cost: 1500,
          perk: "Tile"
        },
        high: {
          cost: 3500,
          perk: "Tile w/ designs, curbless shower, tiled drain, tiled vents, natural stone tiles, handmade tiles"
        },
      },
      cabinet: {

        basic: {
          cost: 0,
          perk: "cabinet"
        },
        mid: {
          cost: 2500,
          perk: "decorative cabinet w/ uppers"
        },
        high: {
          cost: 7500,
          perk: "to the ceiling, accessories, decorative panels, full height cabinetry, customization, closet organization"
        },
      },
      showerBath: {

        basic: {
          cost: 0,
          perk: "Thermostatic single handle control w/ shower head & tub diverter"
        },
        mid: {
          cost: 2500,
          perk: "multi function valve + 1-2 features"
        },
        high: {
          cost: 7500,
          perk: "multi function valve for 2+ features, steam equipment, drying equipment, freestanding tub, floor/wall-mount tub fillers"
        },
      },
      electric: {

        basic: {
          cost: 0,
          perk: "replace existing fixtures"
        },
        mid: {
          cost: 1500,
          perk: "add lights, in-drawer outlets, multi function exhaust fixtures, move vanity lights, fixtures above tubs"
        },
        high: {
          cost: 3500,
          perk: "heated floor, ceiling lights, bathing area light, multi function exhaust, dimmer control, electric at toilet, heated towel rack"
        },
      },
      walls: {

        basic: {
          cost: 0,
          perk: "Solid surface surround w/ solid pan, existing tub, replace w/ acrylic/steel tub"
        },
        mid: {
          cost: 1500,
          perk: "tiled walls w/ shelves & niches, some design"
        },
        high: {
          cost: 3500,
          perk: "more decorative tiles and designs, real stone, shelves/niches, to the ceiling, tiled shower floor"
        },
      },
      paint: {

        basic: {
          cost: 0,
          perk: "repair and paint where needed"
        },
        mid: {
          cost: 500,
          perk: "replace/skim coat walls for fresh texture"
        },
        high: {
          cost: 1500,
          perk: "Finish with accents, wall paper, glossy sheen finishes"
        },
      },
      materials: {

        basic: {
          cost: 0,
          perk: "gooseneck faucet, pendants, granite"
        },
        mid: {
          cost: 2500,
          perk: "higher budgets, pretty light fixtures, quartz"
        },
        high: {
          cost: 7500,
          perk: "more features, higher budgets, pretty lights, exotic stone tops"
        },
      },
    },
  },

  addition: {
    include: "Visuals, Project development, Cost of work, Material budgets",
    exclude: "Extra site prep work, detailed designing, other finished spaces within, specialty tasks or materials",
    sizes: {
      small: {
        name: "Small Addition",
        range: [50000, 100000]
      },
      medium: {
        name: "Mid-sized Addition",
        range: [100000, 200000]
      },
      large: {
        name: "Large & Multi-story Addition",
        range: [200000, 400000]
      },
    },
    options: {
      layout: {
        basic: {
          cost: 0,
          perk: "square, minimal windows"
        },
        mid: {
          cost: 5000,
          perk: "join two rooms w/ beam"
        },
        high: {
          cost: 12500,
          perk: "different shaped building and roof"
        },
      },
      flooring: {

        basic: {
          cost: 0,
          perk: "LVT"
        },
        mid: {
          cost: 2500,
          perk: "Tile"
        },
        high: {
          cost: 7500,
          perk: "Tile w/ designs, curbless shower, tiled drain, tiled vents, natural stone tiles, handmade tiles"
        },
      },
      basement: {

        basic: {
          cost: 0,
          perk: "slab/crawlspace"
        },
        mid: {
          cost: 10000,
          perk: "crawl space, on a hill"
        },
        high: {
          cost: 25000,
          perk: "full height basement, solid pour"
        },
      },
      trim: {

        basic: {
          cost: 0,
          perk: "baseboard, door, and window casing"
        },
        mid: {
          cost: 2500,
          perk: "panelling, wainscot, ceiling details, stained trim"
        },
        high: {
          cost: 7500,
          perk: "multiple features and/or built-ins"
        },
      },
      electric: {

        basic: {
          cost: 0,
          perk: "to code outlets/switches, center fixture, standard duplex plugs and rocker switches"
        },
        mid: {
          cost: 3500,
          perk: "add lights & fixtures, outdoor outlets, dimmers, add outlets, add phone/cable wiring"
        },
        high: {
          cost: 10000,
          perk: "heated floor, more ceiling lights, speakers"
        },
      },
      siding: {

        basic: {
          cost: 0,
          perk: "vinyl"
        },
        mid: {
          cost: 5000,
          perk: "cement based siding"
        },
        high: {
          cost: 15000,
          perk: "brick, stone, other"
        },
      },
      roof: {

        basic: {
          cost: 0,
          perk: "asphalt 30 year shingles"
        },
        mid: {
          cost: 3500,
          perk: "architectural shingles/ steep pitch, flat roof"
        },
        high: {
          cost: 10000,
          perk: "metal roofing, many hips/valleys, height"
        },
      },
      paint: {

        basic: {
          cost: 0,
          perk: "Level 3 drywall finish"
        },
        mid: {
          cost: 1500,
          perk: "Level 5 drywall finish"
        },
        high: {
          cost: 3500,
          perk: "Finish with accents, wall paper, glossy sheen finishes"
        },
      },
      materials: {
        basic: {
          cost: 0,
          perk: "Standard materials"
        },
        mid: {
          cost: 5000,
          perk: "Higher quality materials"
        },
        high: {
          cost: 15000,
          perk: "Premium materials, more features, higher budgets, pretty lights"
        },
      },
    },
  },
};

