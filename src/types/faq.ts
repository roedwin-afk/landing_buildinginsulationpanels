// src/types/faq.ts
// Needed because DeepString<T> flattens arrays to `string`,
// so faqPage.items must be cast with `as unknown as FAQItem[]` at usage.

export interface FAQItem {
  question: string;
  answer: string;
}
