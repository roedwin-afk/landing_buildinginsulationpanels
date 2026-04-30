export const en = {
  nav: {
    solutions: "Solutions",
    performance: "Performance",
    techSpecs: "Tech Specs",
    getQuote: "Get Quote",
  },
  hero: {
    badge: "Industrial Grade Protection",
    titleSpeed: "Built for",
    titleSpeedHighlight: "Speed.",
    titleStrength: "Engineered for",
    titleStrengthHighlight: "Strength.",
    description:
      "High-performance thermal and acoustic insulation panels for warehouses, industrial plants, and commercial buildings. Reduce installation time by 40%.",
    ctaPrimary: "Request a Quote",
    ctaSecondary: "View Solutions",
  },
  trust: {
    label: "Trusted by Civil Engineers & Industrial Developers Worldwide",
  },
  benefits: {
    title: "Why Choose Us",
    fast: {
      title: "Fast-Track Install",
      description:
        "Our interlocking tongue-and-groove system allows for rapid deployment, drastically cutting labor costs and project timelines.",
    },
    durable: {
      title: "Extreme Durability",
      description:
        "Built to withstand harsh environments, heavy load bearing, and extreme weather conditions with zero degradation.",
    },
    thermal: {
      title: "Thermal Efficiency",
      description:
        "Highest R-Value in the market. Significant reduction in HVAC energy consumption for large-scale industrial spaces.",
    },
  },
  solutions: {
    title: "Construction",
    titleHighlight: "Solutions",
    subtitle: "Specialized panels for every structural requirement.",
    downloadCatalog: "Download Product Catalog (PDF)",
    learnMore: "Learn More",
    wall: {
      title: "Wall Insulation Panels",
      description:
        "Perfect for industrial facades. Fire-rated materials with aesthetic finishes for a modern industrial look.",
      spec1: "Fire Rating: Class A",
      spec2: "Thickness: 50mm - 200mm",
    },
    roofing: {
      title: "Roofing Systems",
      description:
        "High-load resistance panels with superior weatherproofing. Designed for large-span industrial roofs.",
      spec1: "UV Resistance Coating",
      spec2: "Acoustic Dampening",
    },
    coldStorage: {
      title: "Cold Storage Panels",
      description:
        "High-density core panels specifically engineered for temperature-controlled environments and food processing plants.",
      spec1: "USDA Approved Coatings",
      spec2: "Zero Thermal Bridging",
    },
  },
  cta: {
    title: "Ready for your",
    titleHighlight: "Next Big Project?",
    statFaster: "Faster Installation",
    statEfficiency: "Energy Efficiency",
    description:
      "Our engineers provide full BIM support and technical documentation for architects and planners.",
    button: "Get Technical Data Sheet",
  },
  contact: {
    title: "Contact an",
    titleHighlight: "Expert",
    description:
      "Send us your project blueprints or requirements. Our technical team will provide a comprehensive quote and installation plan within 24 hours.",
    phone: {
      label: "Direct Line",
      value: "+1 (800) 555-PANEL",
    },
    email: {
      label: "Email Enquiries",
      value: "sales@buildinginsulationpanels.com",
    },
    address: {
      label: "Headquarters",
      value: "Industrial District, Building 7, Houston, TX",
    },
    form: {
      name: "Full Name",
      namePlaceholder: "John Doe",
      company: "Company",
      companyPlaceholder: "Architecture Firm LLC",
      projectType: "Project Type",
      options: {
        warehouse: "Warehouse / Logistic Center",
        coldStorage: "Cold Storage Facility",
        office: "Office Building",
        industrial: "Industrial Plant",
      },
      message: "Message / Project Details",
      messagePlaceholder: "Describe your project requirements...",
      submit: "Submit Quote Request",
      success: "Request sent successfully! We'll contact you shortly.",
    },
  },
  footer: {
    rights: "© 2026 Building Insulation Panels Corp. All rights reserved.",
  },
  meta: {
    title: "Building Insulation Panels | High-Performance Industrial Solutions",
    description:
      "High-performance thermal and acoustic insulation panels for warehouses, industrial plants, and commercial buildings. Reduce installation time by 40%.",
  },
  notFound: {
    badge: "Page Not Found",
    title: "Wrong",
    titleHighlight: "Blueprint.",
    description: "This page doesn't exist or has been moved. Let's get you back on track.",
    cta: "← Back to Home",
  },
  
} as const;

export type DeepString<T> = {
  [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};

export type TranslationKeys = DeepString<typeof en>;