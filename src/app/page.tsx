import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { HeroSection, ProjectsSection, ServicesSection, SiteFooter } from "@/components/portfolio-sections";
import { ResumeSection } from "@/components/resume-section";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return <><SiteHeader /><main><HeroSection /><ResumeSection /><ServicesSection /><ProjectsSection /><section id="contact" className="scroll-mt-24 border-t border-stone-200/80 bg-stone-100/70 px-5 py-20 dark:border-white/10 dark:bg-white/[0.025] sm:px-8 sm:py-24"><div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"><div><SectionHeading eyebrow="Contact" title="Let’s work together" description="Have a project in mind or want to say hello? I’d love to hear from you." /><div className="space-y-4 rounded-2xl border border-stone-200/80 bg-white p-5 dark:border-white/10 dark:bg-white/[0.04]"><p className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300"><span className="grid size-9 place-items-center rounded-xl bg-brand-sand/15 text-brand-sand-dark dark:text-brand-sand"><Icon name="mail" className="size-4" /></span>gisaaimesavio@gmail.com</p><p className="flex items-center gap-3 text-sm text-stone-600 dark:text-stone-300"><span className="grid size-9 place-items-center rounded-xl bg-brand-sand/15 text-brand-sand-dark dark:text-brand-sand"><Icon name="pin" className="size-4" /></span>Kigali, Rwanda</p></div></div><ContactForm /></div></section></main><SiteFooter /></>;
}


