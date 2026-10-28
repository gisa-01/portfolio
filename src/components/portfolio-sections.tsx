import { Icon } from "@/components/icon";
import { SectionHeading } from "@/components/section-heading";
import bob from "../../public/bob.png";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: "user" | "code" | "heart";
};
type Project = {
  title: string;
  type: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Software Development",
    description:
      "Fast, responsive websites built with modern tools and a careful eye for the details.",
    icon: "code",
  },
  {
    number: "02",
    title: "Mobile Application",
    description:
      "Designing and developing mobile applications that are user-friendly, responsive, and provide seamless digital experiences.",
    icon: "code",
  },
  {
    number: "03",
    title: "Design systems",
    description:
      "Flexible component libraries that help teams create consistent experiences with confidence.",
    icon: "code",
  },
];

const projects: Project[] = [
  {
    title: "Bob-Tronics",
    type: "Web Application",
    description:
      "An e-commerce website for browsing and purchasing electronic devices, featuring a user-friendly interface and a seamless online shopping experience.",
    image: bob.src,
    imageAlt: "Charts and analytics on a dashboard",
    tags: ["Next", "TypeScript", "Tailwind"],
  },
  {
    title: "Minimal E-commerce",
    type: "Branding · Development",
    description:
      "A calm, considered shopping experience for an independent home and lifestyle brand.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Laptop showing a modern commerce dashboard",
    tags: ["Next.js", "Shopify", "UX"],
  },
  {
    title: "Cloud Workspace",
    type: "Product design · Mobile",
    description:
      "A collaborative workspace that gives remote teams a simpler place to do their best work.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Web product displayed on a laptop",
    tags: ["Figma", "React", "Firebase"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-stone-900/5 dark:border-white/10 dark:bg-white/[0.04]">
      <div
        role="img"
        aria-label={project.imageAlt}
        className="h-52 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
        style={{ backgroundImage: `url("${project.image}")` }}
      />
      <div className="space-y-4 p-6">
        <p className="text-xs font-semibold tracking-wide text-brand-sand-dark dark:text-brand-sand">
          {project.type}
        </p>
        <h3 className="text-xl font-bold text-ink dark:text-white">
          {project.title}
        </h3>
        <p className="text-sm leading-6 text-stone-600 dark:text-stone-400">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-stone-100 px-3 py-1 text-[11px] font-medium text-stone-600 dark:bg-white/10 dark:text-stone-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 border-t border-stone-100 pt-4 dark:border-white/10">
          <a
            href={
              project.title === "Bob-Tronics"
                ? "https://bob-tronics.vercel.app/"
                : "#contact"
            }
            target={project.title === "Bob-Tronics" ? "_blank" : undefined}
            rel={project.title === "Bob-Tronics" ? "noopener noreferrer" : undefined}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 transition hover:text-brand-sand-dark dark:text-stone-200 dark:hover:text-brand-sand">
            Live preview <Icon name="external" className="size-3.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-700 transition hover:text-brand-sand-dark dark:text-stone-200 dark:hover:text-brand-sand">
            <Icon name="github" className="size-3.5" /> Source code
          </a>
        </div>
      </div>
    </article>
  );
}

export function HeroSection() {
  return (
    <section
      id="home"
      className="mx-auto grid max-w-7xl scroll-mt-24 grid-cols-1 items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24"
    >
      <div className="relative z-10 space-y-6">
        <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-sand-dark dark:text-brand-sand">
          <span className="size-2 rounded-full bg-brand-sand" />
          Software Developer and Designer.
        </p>
        <h1 className="max-w-2xl text-[2.65rem] font-extrabold leading-[1.08] tracking-[-0.045em] text-ink dark:text-white sm:text-6xl lg:text-[4.25rem]">
          Bridging Design and Technology{" "}
          <span className="relative inline-block">
            to{" "}
            <span className="absolute inset-x-0 bottom-1 -z-10 h-4 rounded bg-brand-sand/40 sm:h-5" />
          </span>{" "}
          Build Better Digital Experience.
        </h1>
        <p className="max-w-lg text-base leading-7 text-stone-600 dark:text-stone-400 sm:text-lg sm:leading-8">
          I bring ideas to life through thoughtful user experiences, purposeful
          design, and the technology to make it real.
        </p>
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-sand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-sand/20 transition hover:-translate-y-0.5 hover:bg-brand-sand-dark">
            Contact me <Icon name="arrow" className="size-4" />
          </a>
          <a
            href="#resume"
            className="rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-ink transition hover:border-brand-sand dark:border-white/20 dark:text-white dark:hover:border-brand-sand">
            View profile
          </a>
        </div>
        <div className="flex items-center gap-3 pt-4 text-xs font-medium text-stone-500 dark:text-stone-400">
          <span className="flex -space-x-2">
            <span className="grid size-8 place-items-center rounded-full border-2 border-paper bg-brand-sand/30 text-brand-sand-dark dark:border-night">
              <Icon name="code" className="size-4" />
            </span>
            <span className="grid size-8 place-items-center rounded-full border-2 border-paper bg-stone-200 text-stone-600 dark:border-night dark:bg-white/10 dark:text-stone-200">
              <Icon name="heart" className="size-4" />
            </span>
          </span>{" "}
          Design-led. Detail-focused. Always curious.
        </div>
      </div>
      <div className="relative mx-auto flex w-full max-w-[30rem] items-center justify-center py-6 sm:py-8">
        <div className="absolute inset-[8%] rounded-full bg-brand-sand/35 blur-3xl" />
        <div
          role="img"
          aria-label="Portrait of Natia"
          className="relative aspect-square w-[78%] overflow-hidden rounded-full border-[10px] border-white bg-stone-200 bg-cover bg-center shadow-2xl dark:border-[#28231e]"
          style={{
            backgroundImage: "url(/Passport_photo.png)",
          }}
        />
        <div className="absolute bottom-[7%] left-0 rounded-2xl border border-stone-100 bg-white/95 p-4 shadow-xl backdrop-blur dark:border-white/10 dark:bg-[#211f1d]/95">
          <p className="text-2xl font-extrabold text-ink dark:text-white">
            2
            <span className="text-brand-sand-dark dark:text-brand-sand">+</span>
          </p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-stone-500">
            Years creating
          </p>
        </div>
        <div className="absolute right-[2%] top-[15%] grid size-16 place-items-center rounded-2xl bg-brand-sand text-white shadow-xl shadow-brand-sand/30">
          <Icon name="code" className="size-7" />
        </div>
        <div className="absolute right-[4%] bottom-[14%] h-12 w-12 rotate-12 rounded-xl border-2 border-brand-sand/70" />
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="What I do"
          description="From the figma to the final line of code, I help turn complex ideas into simple, useful digital experiences."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="rounded-2xl border border-stone-200/80 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-sand/20 text-brand-sand-dark dark:text-brand-sand">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <span className="text-sm font-bold text-stone-300 dark:text-stone-600">
                  {service.number}
                </span>
              </div>
              <h3 className="mt-6 text-lg font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="scroll-mt-24 border-y border-stone-200/80 bg-stone-100/70 px-5 py-20 dark:border-white/10 dark:bg-white/[0.025] sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Featured projects"
          description="A few recent collaborations that brought thoughtful design and technology together."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200/80 bg-white py-8 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-center sm:flex-row sm:px-8 sm:text-left">
        <a
          href="#home"
          className="inline-flex items-center gap-2 font-bold text-ink dark:text-white">
          <span className="grid size-7 place-items-center rounded-lg bg-brand-sand text-xs text-white">
            G
          </span>
          Gisa
        </a>
        <p className="text-xs text-stone-500">© 2026 Gisa. Made with care.</p>
        <div className="flex gap-3">
          <a
            href="http://github.com/gisa-01" target="_blank" rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid size-9 place-items-center rounded-full bg-stone-100 text-stone-600 transition hover:text-brand-sand-dark dark:bg-white/10 dark:text-stone-300">
            <Icon name="github" className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/gisa-aime-savio-11b60b344?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid size-9 place-items-center rounded-full bg-stone-100 text-xs font-bold text-stone-600 transition hover:text-brand-sand-dark dark:bg-white/10 dark:text-stone-300">
            in
          </a>
        </div>
      </div>
    </footer>
  );
}
