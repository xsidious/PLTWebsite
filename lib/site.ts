export const siteConfig = {
  name: "PDT Unlimited",
  tagline: "Commercial Finishing Contractor",
  description:
    "Professional painting, drywall, trim, and tile installation for commercial construction throughout Broward County and Palm Beach County.",
  url: "https://pdtunlimited.com",
  contact: {
    phone: "312-483-6046",
    phoneHref: "tel:+13124836046",
    email: "[EMAIL]",
    address: "Wellington, Florida",
  },
  counties: ["Broward County", "Palm Beach County"],
  services: [
    "Commercial Painting",
    "Drywall",
    "Finish Carpentry",
    "Commercial Tile",
  ],
} as const;

const UNSPLASH = "https://images.unsplash.com/photo-";

export function unsplash(id: string, w = 1600, q = 80) {
  return `${UNSPLASH}${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const images = {
  hero: unsplash("1541888946425-d81bb19240f5", 2000),
  commitment: unsplash("1503387762-592deb58ef4e", 1600),
  whyUs: unsplash("1504307651254-35680f356dfd", 1600),
  serviceArea: unsplash("1516156008625-3a9d6067fab5", 1400),
} as const;

export const gallery = [
  { src: unsplash("1600607687939-ce8a6c25118c", 900), alt: "Modern multifamily living space", tag: "Multifamily" },
  { src: unsplash("1600585152915-d208bec867a1", 900), alt: "Finished interior with feature wall", tag: "Tenant Improvement" },
  { src: unsplash("1497366216548-37526070297c", 900), alt: "Commercial office build-out", tag: "Office Build-Out" },
  { src: unsplash("1615873968403-89e068629265", 900), alt: "Interior with painted feature wall", tag: "Painting" },
  { src: unsplash("1620626011761-996317b8d101", 900), alt: "Commercial bathroom tile", tag: "Tile" },
  { src: unsplash("1503174971373-b1f69850bded", 900), alt: "Hospitality lounge finishes", tag: "Hospitality" },
] as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Service Area", href: "#service-area" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
] as const;

export const serviceAreaMap = {
  center: { lat: 26.45, lng: -80.2 },
  zoom: 9,
  locations: [
    {
      name: "Wellington, FL",
      label: "Home Base",
      lat: 26.6618,
      lng: -80.2684,
      radius: 9000,
      primary: true,
    },
    {
      name: "Palm Beach County",
      label: "Service Area",
      lat: 26.7056,
      lng: -80.0364,
      radius: 24000,
      primary: false,
    },
    {
      name: "Broward County",
      label: "Service Area",
      lat: 26.1901,
      lng: -80.3659,
      radius: 24000,
      primary: false,
    },
  ],
} as const;

export const careersContent = {
  eyebrow: "Careers",
  title: "Build your career with PDT Unlimited.",
  intro:
    "Interested in working for PDT Unlimited? We're always looking for dependable, skilled professionals who take pride in their craft. Contact us below to apply.",
} as const;

export const openPositions = [
  {
    title: "Drywall Finisher",
    type: "Full-Time",
    description:
      "Tape, mud, and finish drywall to commercial Level 4 and Level 5 standards on active job sites.",
    icon: "layers",
  },
  {
    title: "Painting Lead",
    type: "Full-Time",
    description:
      "Lead painting crews, manage prep and application, and ensure quality finishes across commercial projects.",
    icon: "paintbrush",
  },
  {
    title: "Project Manager",
    type: "Full-Time",
    description:
      "Coordinate schedules, crews, and communication with general contractors from mobilization through punch.",
    icon: "clipboard",
  },
  {
    title: "Receptionist",
    type: "Full-Time",
    description:
      "Support the office with scheduling, communication, and day-to-day administrative operations.",
    icon: "phone",
  },
] as const;

export const heroContent = {
  eyebrow: "Commercial Finishing Contractor",
  headline: "Professional Finishes. Scalable Workforce. Reliable Execution.",
  subheadline:
    "PDT Unlimited provides professional painting, drywall, trim, and tile installation services for commercial construction projects throughout Broward County and Palm Beach County.",
  body: "From tenant improvements and office build-outs to multifamily developments, hospitality, healthcare, retail, and ground-up construction, our team delivers consistent craftsmanship while meeting demanding schedules and project specifications.",
  partner:
    "We partner directly with general contractors, developers, and construction managers who require dependable subcontractors capable of performing at scale.",
} as const;

export const stats = [
  { value: 4, suffix: "", label: "Core Trades" },
  { value: 2, suffix: "", label: "Counties Served" },
  { value: 11, suffix: "+", label: "Industries" },
  { value: 100, suffix: "%", label: "Commercial Focus" },
] as const;

export const builtForContent = {
  eyebrow: "Built for Commercial Construction",
  title: "Dependable execution from mobilization through final punch.",
  body: "Successful projects depend on subcontractors who show up, stay on schedule, communicate effectively, and deliver quality work the first time. PDT Unlimited is committed to providing professional project execution from mobilization through final punch. Our focus is simple—meet schedules, maintain quality, and help our clients successfully complete every project.",
} as const;

export const services = [
  {
    id: "painting",
    title: "Commercial Painting",
    description:
      "Professional painting services for new construction, tenant improvements, occupied renovations, and large-scale commercial projects.",
    items: [
      "Interior Painting",
      "Exterior Painting",
      "Commercial Airless Spraying",
      "Tenant Improvements",
      "Office Build-Outs",
      "Retail Spaces",
      "Medical Facilities",
      "Hospitality Projects",
      "Multifamily Developments",
    ],
    icon: "paintbrush",
    image: unsplash("1562259949-e8e7689d7828", 1000),
  },
  {
    id: "drywall",
    title: "Drywall",
    description: "Complete drywall systems installed to commercial standards.",
    items: [
      "Drywall Installation",
      "Tape & Mud",
      "Texture Application",
      "Level 4 Finishes",
      "Level 5 Finishes",
    ],
    icon: "layers",
    image: unsplash("1497366216548-37526070297c", 1000),
  },
  {
    id: "carpentry",
    title: "Finish Carpentry",
    description:
      "Professional finish carpentry installed with precision for commercial interiors.",
    items: [
      "Baseboards",
      "Door & Window Casing",
      "Crown Molding",
      "Feature Trim",
      "Finish Carpentry Installation",
    ],
    icon: "ruler",
    image: unsplash("1601058268499-e52658b8bb88", 1000),
  },
  {
    id: "tile",
    title: "Commercial Tile",
    description:
      "High-quality tile installation for commercial and multifamily projects.",
    items: [
      "Floor Tile",
      "Bathroom Tile",
      "Large Format Tile",
      "Commercial Tile Installation",
    ],
    icon: "grid",
    image: unsplash("1584622650111-993a426fbf0a", 1000),
  },
] as const;

export const whyUs = [
  {
    title: "Reliable Scheduling",
    description:
      "We understand critical path scheduling and coordinate our work to keep projects moving.",
    icon: "calendar",
  },
  {
    title: "Professional Communication",
    description:
      "Clear communication with project managers, superintendents, and field personnel throughout every phase.",
    icon: "message",
  },
  {
    title: "Quality Workmanship",
    description:
      "Attention to detail and consistent quality from rough completion through final punch.",
    icon: "award",
  },
  {
    title: "Safety Focused",
    description:
      "Professional crews that maintain clean, organized, and safe job sites.",
    icon: "shield",
  },
  {
    title: "Commercial Experience",
    description:
      "Our team understands the expectations of commercial construction and delivers work that meets project specifications.",
    icon: "building",
  },
] as const;

export const industries = [
  "Multifamily",
  "Office Buildings",
  "Retail",
  "Medical",
  "Hospitality",
  "Restaurants",
  "Industrial Facilities",
  "Warehouses",
  "Educational Facilities",
  "Tenant Improvements",
  "Commercial Renovations",
] as const;

export const audiences = [
  "General Contractors",
  "Construction Managers",
  "Developers",
  "Commercial Property Owners",
  "Property Management Companies",
  "Facility Managers",
] as const;

export const commitmentContent = {
  eyebrow: "Our Commitment",
  title: "Work that reflects directly on our clients.",
  body: "At PDT Unlimited, we understand that our work reflects directly on our clients. That's why we approach every project with professionalism, accountability, and a commitment to delivering exceptional results. Whether we're completing a tenant improvement or finishing a large commercial development, our goal is to become a subcontractor our clients can rely on project after project.",
} as const;

export const ctaContent = {
  title: "Ready to Bid Your Next Project?",
  body: "If you're looking for a commercial finishing contractor capable of delivering quality workmanship, dependable scheduling, and professional project execution, we'd welcome the opportunity to earn your business.",
  button: "Request a Bid Today",
} as const;

export const projectTypes = [
  "Tenant Improvement",
  "Office Build-Out",
  "Multifamily",
  "Retail",
  "Medical / Healthcare",
  "Hospitality",
  "Ground-Up Construction",
  "Renovation",
  "Other",
] as const;
