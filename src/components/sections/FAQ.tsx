import { FAQS } from "@/lib/content";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function FAQ() {
  return (
    <section id="faq" className="scroll-mt-20 bg-sage/40 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions people ask"
          description="Still have a question? We'd be happy to help."
        />
        <Reveal className="mt-12">
          <Accordion items={FAQS} />
        </Reveal>
      </div>
    </section>
  );
}
