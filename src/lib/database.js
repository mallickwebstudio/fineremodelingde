
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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
          cost: 100,
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








export const services = [
  {
    title: "Kitchens",
    description: [
      <p>The kitchen is a crucial part of any home. From being a space for cooking meals to entertaining guests, a kitchen is heavily utilized.</p>,
      <p>At Fine Remodeling, we specialize in design-build kitchen remodels. We are diligent in ensuring that not only is our work to industry standards, but also to our client's standards.</p>,
      <p>From coming on-site to inspect the space before construction begins to traveling with clients for picking cabinets, appliances, and so on, we are dedicated to delivering quality projects.</p>
    ],
    image: "kitchen-remodel.jpg"
  },
  {
    title: "Bathrooms",
    description: [
      <p>The bathroom is a place to get ready for the day as well as a space to unwind.</p>,
      <p>Keeping the bathroom up to date and aligned with the homeowner’s wants and needs is crucial to getting quality time out of it.</p>,
      <p>We specialize in design-build bathroom remodels and have the experience and knowledge to breathe new life into a bathroom.</p>
    ],
    image: "bathroom-remodel.jpg"
  },
  {
    title: "Additions",
    description: [
      <p>Sometimes, the layout of a home simply isn't spacious enough.</p>,
      <p>If it's time for more space, whether to fit a kitchen, bath, etc., we're here to help.</p>
    ],
    image: "home-additions.jpg"
  },
  {
    title: "Renderings",
    description: [
      <p>The finished product can be hard to visualize.</p>,
      <p>Ask to have some renderings done!</p>
    ],
    image: "renderings.jpg"
  },
  {
    title: "Basements",
    description: [
      <p>The basement is an undervalued part of the home.</p>,
      <p>Finishing the basement offers the great benefit of an already enclosed space.</p>,
      <p>We'll build it to fit and you can enjoy more of the house you love.</p>
    ],
    image: "basement-remodel.jpg"
  },
  {
    title: "Panoramic Doors",
    description: [
      <p>Do you want to have a fresh-air space?</p>,
      <p>The folding and sliding option by Panoramic Doors can't be beat.</p>,
      <p>With the screen option you can transform your indoor space to an outdoor space.</p>
    ],
    image: "panoramic-doors.jpg"
  },
  {
    title: "Onyx Shower Systems",
    description: [
      <p>Do you want to stay away from tile and grout lines?</p>,
      <p>The stone dust and resin options by Onyx Collection provide versatility with finish options.</p>,
      <p>Replacing an existing shower with a new base, solid walls (no grout), and a frameless glass door will typically cost around $10k-12k.</p>
    ],
    image: "onyx-shower-systems.jpg"
  },
  {
    title: "Custom Closet Spaces",
    description: [
      <p>Need custom storage options?</p>,
      <p>We can build what you need.</p>
    ],
    image: "custom-closets.jpg"
  },
  {
    title: "Tempered Glass",
    description: [
      <p>We source and install our own shower enclosure glass which you'll find is unique to general contractors.</p>,
      <p>Have your old dirty shower glass replaced, install frameless glass on an already completed shower area.</p>
    ],
    image: "tempered-glass.jpg"
  },
  {
    title: "Porcelain Panels",
    description: [
      <p>This west coast trend is making its way to the east coast.</p>,
      <p>Luckily, we have the equipment and training for the proper fabrication & installation methods needed to deal with such an exquisite product.</p>
    ],
    image: "porcelain-panels.jpg"
  },
  {
    title: "Heated Floors",
    description: [
      <p>In our area winters are mild. Although they aren't necessary, heated floors sure are comfy.</p>,
      <p>We use Schluter's heat cable system with touch screen thermostats.</p>
    ],
    image: "heated-floors.jpg"
  },
  {
    title: "Other Projects",
    description: [
      <p>Is there somewhere else in the home that needs work?</p>,
      <p>We are a licensed general contractor that can take on other projects within the home.</p>,
      <ul className="list-disc list-inside">
        <li>Front door replacement</li>
        <li>Front porch build/renovation</li>
        <li>Laundry room renovation</li>
      </ul>
    ],
    image: "other-projects.jpg"
  },
];
