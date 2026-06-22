export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  specializations: string[];
  photo: string;
  linkedin: string;
}

export const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Advocate Amara Temu",
    title: "Managing Partner",
    bio: "Fifteen years in corporate law and M&A advisory. Previously served as in-house counsel for a regional financial institution, where she led the legal function through three acquisitions. She founded Temu Advocates on the conviction that clients deserve direct access to the lawyer handling their matter.",
    specializations: ["Corporate Law", "M&A", "Governance"],
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80&fit=crop&face=1",
    linkedin: "#",
  },
  {
    id: "2",
    name: "Advocate James Ochieng",
    title: "Senior Associate",
    bio: "A commercial litigator with experience across the High Court and Court of Appeal. His work spans debt recovery, injunctive applications, and high-value contract disputes. He prepares every case as if it will go to trial — which is why most don't.",
    specializations: ["Commercial Litigation", "Arbitration", "Dispute Resolution"],
    photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&q=80&fit=crop&face=1",
    linkedin: "#",
  },
  {
    id: "3",
    name: "Advocate Wanjiru Mwangi",
    title: "Associate",
    bio: "Specializes in property transactions and banking law. Known for closing conveyancing matters on time and without surprises. She built her practice on the view that legal process should not slow down legitimate business.",
    specializations: ["Real Estate", "Conveyancing", "Banking & Finance"],
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80&fit=crop&face=1",
    linkedin: "#",
  },
  {
    id: "4",
    name: "Advocate Darius Mutua",
    title: "Associate",
    bio: "Employment law and regulatory advisory. His background in labour relations gives him a practical understanding of what workplace disputes cost organizations beyond legal fees. He advises on structuring employment matters to avoid unnecessary escalation.",
    specializations: ["Employment Law", "Regulatory", "Public Procurement"],
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&face=1",
    linkedin: "#",
  },
];
