export interface Article {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  body: string;
}

export const articles: Article[] = [
  {
    id: "1",
    slug: "shareholder-agreements-founders",
    category: "CORPORATE LAW",
    title: "What founders get wrong about shareholder agreements",
    excerpt: "Most early-stage shareholder agreements are written to close a funding round, not to survive a dispute. By the time the dispute arrives, the gaps are obvious.",
    author: "Advocate Amara Temu",
    date: "12 May 2025",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&fit=crop",
    body: `Shareholder agreements are among the most consequential documents a business will sign, and among the most commonly underinvested. Founders rush them at incorporation or under pressure from an investor's timeline. The result is a document that records who owns what but provides little guidance on what happens when things go sideways — which, in any business of substance, they eventually do.

The most common gap is not in the equity table. It is in the decision-making provisions. Who can authorize a major contract? What constitutes a reserved matter requiring board or shareholder approval? At what threshold does a shareholder gain the right to appoint a director? These questions seem abstract until they become the precise point of dispute — and when they do, vague drafting tends to favor whoever has more appetite for litigation.

Exit provisions are the second major failure point. Many agreements contemplate only clean scenarios: a trade sale, a buyout at agreed price, a willing exit on both sides. Real exits are messier. A founder who becomes inactive but will not sell. An investor who blocks a sale because the price does not meet their return expectations. A deadlock with no mechanism to resolve it. Without specific drag-along and tag-along provisions, pre-emption rights that actually function, and a workable deadlock mechanism, shareholder disputes have a way of becoming existential threats.

Vesting is widely misunderstood. Founders frequently agree to vesting schedules in principle without examining the detail. Does unvested equity accelerate on a sale? On termination without cause? What constitutes cause? The standard answer — "we'll figure it out when it happens" — is the answer that produces expensive litigation.

A shareholder agreement should be reviewed properly at each significant milestone: a new investment round, the addition of a key employee on equity, a change in the nature of the business, or the departure of a founding shareholder. The document that worked at ten employees is often dangerously inadequate at fifty.

The fix is not complicated. It requires treating the shareholder agreement as a governance document rather than a formality, and taking the time — usually three to five hours of proper legal work — to draft provisions that address the actual business rather than a generic startup template.

We have seen what happens when this work is skipped. The cost of sorting out a shareholder dispute that a well-drafted agreement would have resolved — or better, prevented — is routinely ten to fifty times the cost of getting it right at the start.`,
  },
  {
    id: "2",
    slug: "employment-contract-unenforceable",
    category: "EMPLOYMENT",
    title: "Why your employment contract is probably unenforceable",
    excerpt: "The standard employment contract in use across most Kenyan businesses contains clauses that courts will not enforce — and the business does not know until it needs to.",
    author: "Advocate Darius Mutua",
    date: "28 April 2025",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&fit=crop",
    body: `Most employment contracts in circulation are templates downloaded, adapted once, and then applied to every hire for years. This is understandable. Employment documentation feels administrative until it becomes litigious — which is also when the problems surface.

There are several recurring issues that render employment contracts, or significant clauses within them, unenforceable before Kenyan courts.

The first is the restraint of trade clause. Employers routinely include broad non-compete provisions — sometimes spanning two years and entire industries — without any consideration of whether they are reasonable in scope, duration, and geography. Courts apply a reasonableness test. A clause that prohibits an operations manager from working in any logistic business across East Africa for two years is not reasonable. An employer who tries to enforce it will spend more on litigation than the clause was worth, and likely lose.

Confidentiality provisions are a related problem. They are often drafted so broadly that they capture information that is either publicly available, that the employee acquired before joining, or that no court would recognize as a legitimate trade secret. A confidentiality clause needs to be specific about what it protects and why. Vague catch-alls are both over-inclusive and under-effective.

Termination provisions are where the stakes are highest. The Employment Act imposes minimum notice periods and limits the grounds for summary dismissal. Contracts that purport to override these provisions, or that define misconduct so broadly as to justify termination without due process, tend not to survive scrutiny. Employment courts take procedural fairness seriously. A dismissal that was substantively justified but procedurally flawed can still attract a remedy.

Probationary terms are frequently misunderstood. A probationary employee is not without employment protections. Contracts that treat the probation period as a zone in which the employer can dismiss without any process are wrong, and courts have said so clearly.

Fixing these issues is not an exercise in employer-versus-employee. A well-drafted employment contract protects both parties. It gives the employee certainty about their terms, and the employer a framework they can actually use when performance or conduct issues arise. The problem is not the law. The problem is documentation that was never intended to be read carefully.`,
  },
  {
    id: "3",
    slug: "conveyancing-process-kenya",
    category: "REAL ESTATE",
    title: "The conveyancing process in Kenya: what to expect",
    excerpt: "Property purchases in Kenya involve a sequence of steps that take longer than most buyers expect. Understanding the process prevents avoidable delays.",
    author: "Advocate Wanjiru Mwangi",
    date: "15 April 2025",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop",
    body: `Buying property in Kenya is a multi-stage process. Most buyers approach it with a general awareness that lawyers are involved and searches are required. Fewer understand the actual sequence, why each step exists, and where delays typically occur. That gap in understanding produces frustration and sometimes preventable mistakes.

The starting point is always a title search at the relevant Land Registry. A search confirms that the seller is the registered owner, that the title is free of encumbrances (caveats, charges, cautions), and that the land reference number corresponds to the property being sold. This is not optional. Purchasing property without a current search is the most common way buyers end up in land disputes years later.

Once the search is satisfactory, the lawyers prepare a sale agreement. This document governs the transaction — the purchase price, the deposit, the completion period, and what happens if either party defaults. It is not a standard document. The terms of a residential sale between individuals differ from a commercial purchase, and the agreement should reflect the actual transaction rather than a template.

The deposit — typically ten percent — is paid on signing the agreement. This is held in the advocates' client account pending completion, not released to the seller. The balance is paid at completion, which is when the transfer documents are executed and the seller delivers vacant possession.

Between signing and completion, several things happen in parallel: the buyer arranges financing if needed, the seller discharges any existing charges on the property, the advocates conduct additional searches, and the transfer documentation is prepared. This period typically runs between thirty and ninety days depending on the complexity of the transaction and whether financing is involved.

After completion, the transfer documents are lodged with the Land Registry for registration. This is where timelines vary most significantly. Registration can take a few weeks or several months depending on the registry and the current backlog. The property does not legally transfer to the buyer until registration is complete, though the buyer is entitled to possession from the date of completion.

Land rates and rent clearance certificates are required to confirm the seller is not in arrears on statutory obligations. These must be obtained before the transfer can be registered.

Understanding this sequence helps buyers plan. It also helps them identify delays — whether from the seller's side, the financing institution, or the registry — and address them before they become material.`,
  },
  {
    id: "4",
    slug: "arbitration-vs-litigation",
    category: "DISPUTE RESOLUTION",
    title: "Arbitration vs. litigation: choosing the right forum",
    excerpt: "The choice between arbitration and court proceedings shapes everything that follows — cost, timeline, confidentiality, and the range of available outcomes.",
    author: "Advocate James Ochieng",
    date: "2 April 2025",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80&fit=crop",
    body: `Most commercial contracts now include dispute resolution clauses, but the choice between arbitration and litigation is often made without a clear analysis of what each forum actually involves. That choice, made at contract stage, determines the shape of any future dispute.

Litigation through the Kenyan courts has several features worth naming clearly. It is public. Judgments are matters of record, proceedings can be observed, and pleadings filed in court are accessible. For some clients, this is acceptable or even useful — a public judgment can have deterrent value. For others, particularly those involved in disputes where the underlying facts are commercially sensitive, court proceedings create real exposure.

Court proceedings also operate on timelines that are difficult to predict or control. A High Court matter can move through to judgment in eighteen months or extend considerably longer depending on the complexity, the conduct of the parties, and the court's capacity. Interlocutory applications, appeals, and procedural skirmishes add time and cost. Litigation is appropriate when the legal question is genuinely uncertain and needs authoritative resolution, when there is a need for interim orders that only a court can grant, or when enforcement through court process is specifically required.

Arbitration is private. The proceedings, the evidence, and the award are confidential unless the parties agree otherwise. For commercial disputes where confidentiality matters — a partnership gone wrong, a technology dispute, a sensitive termination — this is a significant advantage. Arbitration also allows parties to select a decision-maker with relevant expertise rather than being assigned a judge whose background may be general.

The disadvantages of arbitration are cost and finality. Arbitrators charge fees that the courts do not. In complex matters, the cost of a three-arbitrator panel hearing adds up. And arbitral awards, while enforceable, are substantially harder to challenge than court judgments. The grounds for setting aside an award under the Kenyan Arbitration Act are narrow. If the arbitrator gets the law wrong, there is often no effective appeal.

Mediation occupies a different space — it is not a final determination but a structured negotiation with a neutral facilitator. It is appropriate for disputes where preserving the relationship matters, where the legal position is clear but a negotiated outcome is preferable, or as a step before proceeding to arbitration or litigation. Many commercial disputes settle in mediation. The investment in a well-run mediation process is almost always less than contested proceedings.

The right forum depends on the nature of the dispute, the relationship between the parties, the value at stake, and what the client actually needs from the process. That analysis should happen early — ideally before any demand letter is sent.`,
  },
  {
    id: "5",
    slug: "protecting-your-brand",
    category: "IP",
    title: "Protecting your brand before it grows",
    excerpt: "Most brands are worth protecting well before they feel established. Waiting until a business is profitable to address IP is a common — and costly — mistake.",
    author: "Advocate Amara Temu",
    date: "18 March 2025",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=1920&q=80&fit=crop",
    body: `Brand protection is typically treated as something to address once a business has proven itself. The reasoning is understandable: resources are limited, the business is not yet large, and intellectual property feels like an advanced problem. By the time it becomes urgent, the cost of protection has usually been supplemented by the cost of conflict.

Trademark registration in Kenya proceeds through the Kenya Industrial Property Institute. The process is not instantaneous — from filing to registration, a mark can take anywhere from twelve to twenty-four months, assuming no oppositions are filed. That timeline matters because a registered trademark gives the owner exclusive rights to use the mark in connection with their goods or services in the relevant class. Without registration, those rights are considerably harder to enforce.

The first risk of delayed registration is that someone else registers your mark first. This is not a hypothetical. There is an established practice — particularly in certain goods classes — of registering marks that belong to active businesses before those businesses get around to filing. Reclaiming a mark that has been registered by a third party is expensive, time-consuming, and not always successful.

The second risk is the opposite: discovering, after building the brand, that you are infringing someone else's mark. A proper trademark clearance search before adopting a name costs a fraction of what it costs to rebrand once the business is established. It also protects against the embarrassing situation of receiving a cease and desist letter after the business has grown.

Trade names, logos, and taglines can each be registered separately and in multiple classes. The relevant classes depend on what the business actually sells or provides. A technology company that also runs events and sells merchandise needs registrations across multiple classes. An advisory firm needs registration in the class covering its services, and possibly in others if the brand extends to publications or training.

Beyond registration, brand protection is a matter of contracting. Licenses need to specify what the licensee can and cannot do with the mark. Employee and contractor agreements should address IP ownership clearly — particularly where employees are producing creative work or code that forms part of the product. A business that cannot demonstrate it owns its own IP has a real problem in a sale or investment process.

None of this is complicated. Most of it is paperwork that can be initiated at any stage of the business. The companies that have their IP in order are simply the ones that addressed it early.`,
  },
  {
    id: "6",
    slug: "public-procurement-disputes-kenya",
    category: "REGULATORY",
    title: "How public procurement disputes are handled in Kenya",
    excerpt: "The public procurement framework provides specific review mechanisms for bidders. Understanding them is essential before taking any other step.",
    author: "Advocate Darius Mutua",
    date: "5 March 2025",
    image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=1920&q=80&fit=crop",
    body: `Public procurement in Kenya is governed by the Public Procurement and Asset Disposal Act, which establishes both the rules for how government entities must conduct procurements and the mechanisms through which those rules are enforced. Many businesses that participate in public tenders are unfamiliar with the review process — and as a result, either fail to use it when they should, or use it incorrectly.

The first review mechanism is the internal review request, which is a complaint filed directly with the procuring entity. This step is mandatory before proceeding to external review. A supplier who believes a procurement decision was improper — whether because the evaluation was conducted inconsistently, the technical requirements were discriminatory, or the award was made to a non-compliant bidder — must first exhaust this internal process. The procuring entity is required to respond within a defined period.

If the internal review does not resolve the matter, the next step is the Public Procurement Administrative Review Board. The Board is a statutory body with the authority to review procurement decisions, set them aside, and order corrective action. It operates on its own procedural rules and timelines. Applications must be made promptly — the time limits for filing are strict and non-extendable. Missing the window means losing the right to challenge the decision at Board level.

The grounds for review are specific. They are not simply that a bidder believes they should have won. The grounds must be rooted in an actual irregularity in the process: a breach of the Act, the applicable regulations, or the specific tender documents. Evaluating whether a viable ground exists requires a proper review of the procurement record — the tender documents, evaluation reports, and award decision.

Where the Board process is exhausted or where other reliefs are sought, the High Court retains jurisdiction under judicial review. This is a different proceeding with different procedural requirements. Judicial review does not re-examine the merits of the procurement decision — it examines whether the decision was made lawfully, fairly, and rationally. The distinction matters. A supplier who simply disagrees with the outcome but cannot point to a procedural irregularity will not succeed in judicial review.

The practical lesson is that procurement challenges require quick action and a proper assessment of the grounds before any challenge is filed. Acting too slowly, filing on weak grounds, or going directly to court without exhausting the administrative process are the most common errors. All of them can be avoided with early, competent advice.`,
  },
];
