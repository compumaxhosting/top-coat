import type { BenefitItem, FAQItem, StepItem } from "./types";

export const faqs: FAQItem[] = [
  {
    question: "How long does terrazzo flooring last?",
    answer: "Terrazzo flooring can last 50 to 100 years with proper maintenance, making it one of the most durable flooring options available.",
  },
  {
    question: "Is terrazzo flooring expensive?",
    answer: "The upfront cost is higher than some flooring types, but terrazzo becomes cost-effective over time due to its long lifespan and low maintenance.",
  },
  {
    question: "Can terrazzo floors be repaired?",
    answer: "Yes. Cracks, chips, and stains can be repaired and polished without replacing the entire floor.",
  },
  {
    question: "Is terrazzo slippery?",
    answer: "Terrazzo can be polished to a high sheen but can also be treated with anti-slip finishes or textured polishing to improve traction.",
  },
  {
    question: "Is terrazzo eco-friendly?",
    answer: "Yes. Terrazzo often uses recycled glass and local stone aggregates, making it a sustainable flooring choice.",
  },
];

export const benefits: BenefitItem[] = [
  { icon: "◈", title: "Extreme Durability", body: "Highly resistant to cracks and wear" },
  { icon: "◇", title: "Low Maintenance", body: "No frequent replacements needed" },
  { icon: "◉", title: "Moisture Resistance", body: "Performs well in the NJ climate when sealed" },
  { icon: "◎", title: "Design Flexibility", body: "Endless color and pattern options" },
  { icon: "◐", title: "Sustainability", body: "Often made from recycled materials" },
  { icon: "◑", title: "Long Lifespan", body: "A properly installed terrazzo floor can last for decades" },
];

export const steps: StepItem[] = [
  { num: "01", title: "Design & Layout", desc: "Choose aggregates, colors, and joint layout." },
  { num: "02", title: "Surface Preparation", desc: "Repair substrate and prepare for bonding." },
  { num: "03", title: "Pouring & Embedding", desc: "Set aggregates in binder and compact." },
  { num: "04", title: "Grinding & Polishing", desc: "Diamond-grind and polish to the desired sheen." },
  { num: "05", title: "Sealing", desc: "Apply sealant to protect and enhance appearance." },
];
