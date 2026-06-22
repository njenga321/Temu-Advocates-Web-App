export interface PracticeArea {
  id: string;
  slug: string;
  name: string;
  icon: string;
  short: string;
  long: string;
  details: string[];
}

export const practiceAreas: PracticeArea[] = [
  {
    id: "1",
    slug: "corporate-law",
    name: "Corporate Law & Advisory",
    icon: "Briefcase",
    short: "Structuring, governance, and M&A support for growing businesses.",
    long: "We advise companies at every stage — from incorporation through complex transactions and ongoing governance matters. Our work here is practical: we help leadership make decisions with full legal clarity.",
    details: [
      "Board advisory and corporate governance",
      "Shareholder agreements and equity structures",
      "Entity structuring and incorporation",
      "M&A due diligence and transaction support",
      "Regulatory compliance and filings",
    ],
  },
  {
    id: "2",
    slug: "dispute-resolution",
    name: "Dispute Resolution & Litigation",
    icon: "Scale",
    short: "Representation in commercial disputes, arbitration, and court proceedings.",
    long: "Commercial disputes are expensive in time and resources. We assess each matter honestly — advising on the realistic prospects before committing to litigation, and representing clients with precision when proceedings are warranted.",
    details: [
      "High-value commercial litigation",
      "Domestic and international arbitration",
      "Mediation and alternative dispute resolution",
      "Debt recovery and enforcement",
      "Injunctive relief applications",
    ],
  },
  {
    id: "3",
    slug: "real-estate",
    name: "Real Estate & Conveyancing",
    icon: "Building",
    short: "End-to-end legal support for property transactions.",
    long: "Property transactions carry significant risk when documentation is loose or title is unclear. We handle every stage of the conveyancing process with the care that large transactions require.",
    details: [
      "Title searches and due diligence",
      "Sale and purchase agreements",
      "Lease drafting and negotiation",
      "Land dispute resolution",
      "Development and project advisory",
    ],
  },
  {
    id: "4",
    slug: "employment-labour",
    name: "Employment & Labour",
    icon: "Users",
    short: "Employer and employee representation on workplace matters.",
    long: "Workplace disputes and employment matters require both legal precision and good judgment about people. We represent both employers and employees, and we approach each matter with an understanding of what is at stake beyond the legal question.",
    details: [
      "Employment contracts and policies",
      "Redundancy and restructuring",
      "Disciplinary and grievance processes",
      "Employment and Industrial Court representation",
      "Workplace investigations",
    ],
  },
  {
    id: "5",
    slug: "banking-finance",
    name: "Banking & Finance",
    icon: "Landmark",
    short: "Legal support for lending, security, and financial transactions.",
    long: "Financial transactions move on tight timelines and require documentation that holds up. We provide precise, transaction-ready legal support for lenders, borrowers, and financial institutions.",
    details: [
      "Loan and facility agreement documentation",
      "Security registration and perfection",
      "Facility agreements and amendments",
      "Regulatory matters and licensing",
      "Structured finance transactions",
    ],
  },
  {
    id: "6",
    slug: "intellectual-property",
    name: "Intellectual Property",
    icon: "Shield",
    short: "Protection and enforcement of creative and commercial assets.",
    long: "Brands and creative work are often the most valuable assets a business holds. We protect them — through proper registration, sound agreements, and enforcement when necessary.",
    details: [
      "Trademark registration and prosecution",
      "IP assignment and licensing agreements",
      "Enforcement and cease and desist",
      "Copyright advisory",
      "IP due diligence in M&A",
    ],
  },
  {
    id: "7",
    slug: "family-law",
    name: "Family Law & Estates",
    icon: "Heart",
    short: "Private matters handled with full discretion.",
    long: "Family and succession matters are personal. We handle them with the discretion they require — working efficiently to reach outcomes that protect our clients without unnecessary conflict.",
    details: [
      "Succession planning and wills",
      "Probate and estate administration",
      "Matrimonial matters and ancillary relief",
      "Guardianship and custody",
      "Trust structuring",
    ],
  },
  {
    id: "8",
    slug: "public-procurement",
    name: "Public Procurement & Regulatory",
    icon: "FileText",
    short: "Navigating government contracting and regulatory frameworks.",
    long: "Government contracts and regulatory processes have their own logic. We advise on the rules, help clients position themselves correctly, and represent them when disputes arise within public procurement frameworks.",
    details: [
      "Tender and bid advisory",
      "Procurement dispute resolution",
      "Regulatory licensing and compliance",
      "Public law advisory",
      "Appeals and review proceedings",
    ],
  },
];
